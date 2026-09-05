import { create } from "zustand";
import {
  recommendAdaptations,
  calcCurrentWpm,
  type AdaptiveRecommendation,
  type AdaptiveRule,
  type PauseEvent,
  type RereadEvent,
} from "./adaptive/engine";
import type { SkipEvent } from "./reconnect";
import { classifyReading } from "./reading-patterns.ts";
import type { NeuralEvent } from "./neural.ts";
import { applyColorScheme, isThemeId } from "./scheme";
import { resolveRhythmCurve } from "./rhythm";
import { isCvdKind, type CvdKind } from "./color-vision";
import { splitPdfPages } from "./pdf-pages";
import { chapterAtPage, detectChapters, splitTextChapters } from "./chapters";
import { forgetPdfDocument } from "./pdf-session";
import {
  READING_PROFILES,
  type Bookmark,
  type ContentKind,
  type FontId,
  type LockableSetting,
  type ReadingFeel,
  type ReadingMode,
  type ReadingProfile,
  type SavedProfile,
  type Session,
  type TabId,
} from "./types";

const SESSIONS_KEY = "neurolens-sessions";
const PROFILE_KEY = "neurolens-profile";
const MODE_KEY = "neurolens-mode";
const TARGET_WPM_KEY = "neurolens-target-wpm";
const LOCKS_KEY = "neurolens-locks";
const SAVED_KEY = "neurolens-saved-profiles";
const BOOKMARKS_KEY = "neurolens-bookmarks";
const HIGHLIGHTS_KEY = "neurolens-highlights";
const CVD_KEY = "neurolens-cvd";
const LOOKUP_MIGRATION = "neurolens-lookup-v2";

export interface ReadingSnapshot {
  progress: number;
  wordCount: number;
  wordsRead: number;
  elapsedActiveMs: number;
  currentWpm: number | null;
  pauses: PauseEvent[];
  rereads: RereadEvent[];
  skips: SkipEvent[];
  pausedAt: number | null;
  startedAt: number | null;
  dwellCount: number;
  dwellMs: number;
  longDwellCount: number;
  forwardSteps: number;
  neuralEvents?: NeuralEvent[];
}

export interface AppliedAdaptiveChange {
  setting: AdaptiveRecommendation["setting"];
  previousValue: number | boolean | string;
  nextValue: number | boolean | string;
}

export interface StartReadingMeta {
  title?: string;
  kind?: ContentKind;
  sourceId?: string;
  pdfPage?: number;
  chapter?: number;
  progress?: number;
}

const EMPTY_READING: ReadingSnapshot = {
  progress: 0,
  wordCount: 0,
  wordsRead: 0,
  elapsedActiveMs: 0,
  currentWpm: null,
  pauses: [],
  rereads: [],
  skips: [],
  pausedAt: null,
  startedAt: null,
  dwellCount: 0,
  dwellMs: 0,
  longDwellCount: 0,
  forwardSteps: 0,
  neuralEvents: [],
};

interface AppState {
  hydrated: boolean;
  tab: TabId;
  direction: number;
  text: string;
  sourceKind: ContentKind;
  sourceId: string | null;
  mode: ReadingMode;
  profile: ReadingProfile;
  sessions: Session[];
  controlsOpen: boolean;
  autoScrolling: boolean;
  targetWpm: number;
  commandOpen: boolean;
  reading: ReadingSnapshot;
  recommendation: AdaptiveRecommendation | null;
  dismissedRules: AdaptiveRule[];
  lastAdaptiveChange: AppliedAdaptiveChange | null;
  lockedSettings: LockableSetting[];
  savedProfiles: SavedProfile[];
  bookmarks: Bookmark[];
  highlights: Record<string, number[]>;
  readingFeel: ReadingFeel | null;
  cvdPreview: CvdKind;
  pdfPage: number;
  pdfPageCount: number;
  chapterIndex: number;
  chapterCount: number;
  hydrate: () => void;
  setTab: (tab: TabId) => void;
  startReading: (text: string, meta?: StartReadingMeta) => void;
  setPdfPage: (page: number) => void;
  setChapter: (chapter: number) => void;
  setMode: (mode: ReadingMode) => void;
  setProfile: (profile: ReadingProfile) => void;
  setControlsOpen: (open: boolean) => void;
  setAutoScrolling: (value: boolean) => void;
  setTargetWpm: (value: number) => void;
  setCommandOpen: (open: boolean) => void;
  reportReading: (patch: Partial<ReadingSnapshot>) => void;
  applyRecommendation: () => void;
  dismissRecommendation: () => void;
  undoAdaptiveChange: () => void;
  toggleLock: (setting: LockableSetting) => void;
  applySavedProfile: (saved: SavedProfile) => void;
  saveCurrentProfile: (name: string) => void;
  deleteSavedProfile: (id: string) => void;
  toggleHighlight: (lineIdx: number) => void;
  toggleBookmark: () => void;
  removeBookmark: (id: string) => void;
  submitReadingFeel: (feel: ReadingFeel) => void;
  setCvdPreview: (kind: CvdKind) => void;
  clearData: () => void;
}

const TAB_ORDER: TabId[] = ["explore", "read", "library", "insights", "settings"];

function persistProfile(profile: ReadingProfile, mode: ReadingMode) {
  writeLocal(PROFILE_KEY, JSON.stringify(profile));
  writeLocal(MODE_KEY, mode);
}

const FONT_IDS: FontId[] = [
  "sans",
  "serif",
  "lexend",
  "atkinson",
  "inclusive",
  "andika",
  "opendyslexic",
  "literata",
  "comicneue",
  "sourcesans",
];

function normalizeProfile(profile: ReadingProfile): ReadingProfile {
  const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
  return {
    ...profile,
    fontFamily: FONT_IDS.includes(profile.fontFamily) ? profile.fontFamily : "sans",
    theme: isThemeId(profile.theme) ? profile.theme : "paper",
    rhythmCurve,
    rhythmOptimization: rhythmCurve !== "steady",
    syllables: Boolean(profile.syllables),
    letterGuide: Boolean(profile.letterGuide),
    wordGuide: Boolean(profile.wordGuide),
    readingMask: false,
    focusHighlight: false,
    dimChrome: Boolean(profile.dimChrome),
    lookup: profile.lookup !== false,
    attentionFollow: profile.attentionFollow === "pointer" ? "pointer" : "line",
    focusBand: profile.focusBand === 2 || profile.focusBand === 3 ? profile.focusBand : 1,
    plainLanguage: Boolean(profile.plainLanguage),
  };
}

function persistAndApply(profile: ReadingProfile, mode: ReadingMode) {
  const next = normalizeProfile(profile);
  persistProfile(next, mode);
  applyColorScheme(next.theme);
  return next;
}

function writeLocal(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode or quota */
  }
}

function forgetLocal(keys: string[]) {
  try {
    for (const key of keys) localStorage.removeItem(key);
  } catch {
    /* private mode */
  }
}

function persistSessions(sessions: Session[]) {
  writeLocal(SESSIONS_KEY, JSON.stringify(sessions));
}

function persistTargetWpm(value: number) {
  writeLocal(TARGET_WPM_KEY, String(value));
}

function textKey(text: string) {
  return text.trim().slice(0, 48) || "default";
}

function refreshRecommendation(
  reading: ReadingSnapshot,
  targetWpm: number,
  profile: ReadingProfile,
  mode: ReadingMode,
  dismissedRules: AdaptiveRule[],
  existing: AdaptiveRecommendation | null,
  feel: ReadingFeel | null,
  lockedSettings: LockableSetting[],
): AdaptiveRecommendation | null {
  if (mode !== "adaptive") return null;
  if (existing) return existing;
  return recommendAdaptations(
    {
      wordCount: reading.wordCount,
      wordsRead: reading.wordsRead,
      progress: reading.progress,
      elapsedActiveMs: reading.elapsedActiveMs,
      currentWpm: reading.currentWpm,
      targetWpm,
      pauseCount: reading.pauses.length,
      pauses: reading.pauses,
      rereadCount: reading.rereads.length,
      rereads: reading.rereads,
      feel,
    },
    {
      targetWpm,
      lineHeight: profile.lineHeight,
      focusHighlight: profile.focusHighlight,
      theme: profile.theme,
      fontSize: profile.fontSize,
    },
    dismissedRules,
    lockedSettings,
  );
}

function withSessionMetrics(sessions: Session[], text: string, reading: ReadingSnapshot, targetWpm: number): Session[] {
  if (!text) return sessions;
  const idleMs = reading.pausedAt ? Math.max(0, Date.now() - reading.pausedAt) : 0;
  const pattern = classifyReading({
    progress: reading.progress,
    elapsedActiveMs: reading.elapsedActiveMs,
    currentWpm: reading.currentWpm,
    targetWpm,
    pauses: reading.pauses,
    rereads: reading.rereads,
    skips: reading.skips ?? [],
    dwellCount: reading.dwellCount ?? 0,
    dwellMs: reading.dwellMs ?? 0,
    longDwellCount: reading.longDwellCount ?? 0,
    forwardSteps: reading.forwardSteps ?? 0,
    idleMs,
    neuralEvents: reading.neuralEvents ?? [],
  });
  return sessions.map((session) =>
    session.content === text
      ? {
          ...session,
          progress: reading.progress,
          currentWpm: reading.currentWpm,
          pauseCount: reading.pauses.length,
          rereadCount: reading.rereads.length,
          elapsedMs: reading.elapsedActiveMs,
          pattern: pattern.gathering ? session.pattern : pattern.id,
        }
      : session,
  );
}

function previousFor(setting: AdaptiveRecommendation["setting"], profile: ReadingProfile, targetWpm: number) {
  if (setting === "targetWpm") return targetWpm;
  if (setting === "lineHeight") return profile.lineHeight;
  if (setting === "theme") return profile.theme;
  if (setting === "fontSize") return profile.fontSize;
  return profile.focusHighlight;
}

export const useAppStore = create<AppState>((set, get) => ({
  hydrated: false,
  tab: "explore",
  direction: 0,
  text: "",
  sourceKind: "text",
  sourceId: null,
  mode: "default",
  profile: READING_PROFILES.default,
  sessions: [],
  controlsOpen: false,
  autoScrolling: false,
  targetWpm: 220,
  commandOpen: false,
  reading: EMPTY_READING,
  recommendation: null,
  dismissedRules: [],
  lastAdaptiveChange: null,
  lockedSettings: [],
  savedProfiles: [],
  bookmarks: [],
  highlights: {},
  readingFeel: null,
  cvdPreview: "none",
  pdfPage: 0,
  pdfPageCount: 0,
  chapterIndex: 0,
  chapterCount: 0,

  hydrate: () => {
    if (get().hydrated || typeof window === "undefined") return;
    try {
      const sessions = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]") as Session[];
      const savedProfile = localStorage.getItem(PROFILE_KEY);
      const savedMode = (localStorage.getItem(MODE_KEY) as ReadingMode | null) ?? "default";
      const mode = READING_PROFILES[savedMode] ? savedMode : "default";
      const profile = normalizeProfile(
        savedProfile
          ? ({ ...READING_PROFILES[mode], ...JSON.parse(savedProfile) } as ReadingProfile)
          : READING_PROFILES[mode],
      );
      const savedWpm = Number(localStorage.getItem(TARGET_WPM_KEY));
      const savedCvd = localStorage.getItem(CVD_KEY);
      const cvdPreview = isCvdKind(savedCvd) ? savedCvd : "none";
      applyColorScheme(profile.theme, cvdPreview);
      const lockedSettings = JSON.parse(localStorage.getItem(LOCKS_KEY) || "[]") as LockableSetting[];
      const savedProfiles = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]") as SavedProfile[];
      const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]") as Bookmark[];
      const highlights = JSON.parse(localStorage.getItem(HIGHLIGHTS_KEY) || "{}") as Record<string, number[]>;
      if (!localStorage.getItem(LOOKUP_MIGRATION)) {
        profile.lookup = true;
        localStorage.setItem(LOOKUP_MIGRATION, "1");
        persistProfile(profile, mode);
      }
      set({
        sessions: Array.isArray(sessions) ? sessions : [],
        profile,
        mode,
        targetWpm: Number.isFinite(savedWpm) && savedWpm >= 120 ? savedWpm : 220,
        lockedSettings: Array.isArray(lockedSettings) ? lockedSettings : [],
        savedProfiles: Array.isArray(savedProfiles) ? savedProfiles : [],
        bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
        highlights: highlights && typeof highlights === "object" ? highlights : {},
        cvdPreview,
        hydrated: true,
      });
    } catch {
      set({ hydrated: true });
    }
  },

  setTab: (tab) => {
    const current = get().tab;
    if (tab === "read" && !get().text) return;
    const direction = TAB_ORDER.indexOf(tab) >= TAB_ORDER.indexOf(current) ? 1 : -1;
    set({ tab, direction, autoScrolling: false, controlsOpen: tab === "read" ? get().controlsOpen : false });
  },

  startReading: (raw, meta) => {
    const kind = meta?.kind ?? "text";
    const pages = kind === "pdf" ? splitPdfPages(raw) : [];
    const text = kind === "pdf" ? raw : raw.trim();
    if (kind !== "pdf" && !text) return;
    try {
      localStorage.setItem("neurolens-started", "1");
    } catch {
      /* private mode */
    }
    if (kind === "pdf") {
      if (!pages.length) return;
    } else {
      forgetPdfDocument();
    }
    const title = meta?.title || text.split(/\n/).find((line) => line.trim())?.slice(0, 60) || "Untitled reading";
    const sessions = [
      { title, content: text, openedAt: Date.now(), progress: 0, kind, sourceId: meta?.sourceId },
      ...get().sessions.filter((session) => session.content !== text),
    ].slice(0, 12);
    persistSessions(sessions);
    const pdfChapters = kind === "pdf" ? detectChapters(pages) : [];
    const textChapters = kind === "text" ? splitTextChapters(text) : [];
    const chapterCount = kind === "pdf" ? pdfChapters.length : textChapters.length > 1 ? textChapters.length : 0;
    const initialPage =
      kind === "pdf" ? Math.min(pages.length, Math.max(1, meta?.pdfPage ?? 1)) : 0;
    const chapterIndex =
      chapterCount > 1
        ? kind === "pdf"
          ? chapterAtPage(pdfChapters, initialPage)
          : Math.min(chapterCount, Math.max(1, meta?.chapter ?? 1))
        : 0;
    const current = get().tab;
    set({
      text,
      sourceKind: kind,
      sourceId: meta?.sourceId ?? null,
      sessions,
      tab: "read",
      direction: TAB_ORDER.indexOf("read") >= TAB_ORDER.indexOf(current) ? 1 : -1,
      autoScrolling: false,
      pdfPage: initialPage,
      pdfPageCount: kind === "pdf" ? pages.length : 0,
      chapterIndex,
      chapterCount,
      reading: {
        ...EMPTY_READING,
        startedAt: Date.now(),
        progress:
          typeof meta?.progress === "number" && Number.isFinite(meta.progress)
            ? Math.min(1, Math.max(0, meta.progress))
            : kind === "pdf" && pages.length
              ? initialPage / pages.length
              : chapterCount
                ? chapterIndex / chapterCount
                : 0,
      },
      recommendation: null,
      dismissedRules: [],
      lastAdaptiveChange: null,
      readingFeel: null,
    });
  },

  setPdfPage: (page) => {
    const count = get().pdfPageCount;
    if (count < 1) return;
    const next = Math.min(count, Math.max(1, Math.round(page)));
    const reading = get().reading;
    const chapters = detectChapters(splitPdfPages(get().text));
    set({
      pdfPage: next,
      autoScrolling: false,
      chapterIndex: chapters.length > 1 ? chapterAtPage(chapters, next) : get().chapterIndex,
      chapterCount: chapters.length > 1 ? chapters.length : 0,
      reading: { ...reading, progress: next / count },
    });
  },

  setChapter: (chapter) => {
    const state = get();
    if (state.chapterCount < 1) return;
    const next = Math.min(state.chapterCount, Math.max(1, Math.round(chapter)));
    if (state.sourceKind === "pdf") {
      const chapters = detectChapters(splitPdfPages(state.text));
      const start = chapters[next - 1]?.startPage ?? state.pdfPage;
      const reading = state.reading;
      set({
        chapterIndex: next,
        pdfPage: start,
        autoScrolling: false,
        reading: { ...reading, progress: state.pdfPageCount ? start / state.pdfPageCount : next / state.chapterCount },
      });
      return;
    }
    const reading = state.reading;
    set({
      chapterIndex: next,
      autoScrolling: false,
      reading: { ...reading, progress: next / state.chapterCount },
    });
  },

  setMode: (mode) => {
    try {
      const base = READING_PROFILES[mode];
      if (!base) return;
      const current = get().profile;
      const next = persistAndApply(
        { ...base, theme: current.theme, align: current.align },
        mode,
      );
      const state = get();
      set({
        mode,
        profile: next,
        recommendation:
          mode === "adaptive"
            ? refreshRecommendation(
                state.reading,
                state.targetWpm,
                next,
                mode,
                state.dismissedRules,
                null,
                state.readingFeel,
                state.lockedSettings,
              )
            : null,
      });
    } catch (error) {
      console.error(error);
    }
  },

  setProfile: (profile) => {
    try {
      const next = persistAndApply(profile, get().mode);
      set({ profile: next });
    } catch (error) {
      console.error(error);
    }
  },

  setControlsOpen: (controlsOpen) => set({ controlsOpen }),
  setAutoScrolling: (autoScrolling) => set({ autoScrolling }),
  setTargetWpm: (targetWpm) => {
    persistTargetWpm(targetWpm);
    set({ targetWpm });
  },
  setCommandOpen: (commandOpen) => set({ commandOpen }),

  reportReading: (patch) => {
    const state = get();
    const reading: ReadingSnapshot = {
      ...state.reading,
      ...patch,
      pauses: patch.pauses ?? state.reading.pauses,
      rereads: patch.rereads ?? state.reading.rereads,
      skips: patch.skips ?? state.reading.skips ?? [],
      pausedAt: patch.pausedAt !== undefined ? patch.pausedAt : state.reading.pausedAt,
      startedAt: state.reading.startedAt ?? Date.now(),
      dwellCount: patch.dwellCount ?? state.reading.dwellCount ?? 0,
      dwellMs: patch.dwellMs ?? state.reading.dwellMs ?? 0,
      longDwellCount: patch.longDwellCount ?? state.reading.longDwellCount ?? 0,
      forwardSteps: patch.forwardSteps ?? state.reading.forwardSteps ?? 0,
      neuralEvents: patch.neuralEvents ?? state.reading.neuralEvents ?? [],
    };
    reading.currentWpm = calcCurrentWpm(reading.wordsRead, reading.elapsedActiveMs);
    const prev = state.reading;
    const sameProgress = Math.abs(reading.progress - prev.progress) < 0.0025;
    const sameWpm = reading.currentWpm === prev.currentWpm;
    const samePauses = reading.pauses.length === prev.pauses.length;
    const sameRereads = reading.rereads.length === prev.rereads.length;
    const sameSkips = reading.skips.length === (prev.skips?.length ?? 0);
    const samePaused = reading.pausedAt === prev.pausedAt;
    const sameWords = reading.wordsRead === prev.wordsRead;
    const sameDwell =
      reading.dwellCount === (prev.dwellCount ?? 0) &&
      reading.longDwellCount === (prev.longDwellCount ?? 0) &&
      reading.forwardSteps === (prev.forwardSteps ?? 0);
    const sameNeural = (reading.neuralEvents?.length ?? 0) === (prev.neuralEvents?.length ?? 0);
    if (sameProgress && sameWpm && samePauses && sameRereads && sameSkips && samePaused && sameWords && sameDwell && sameNeural) return;
    const sessions = withSessionMetrics(state.sessions, state.text, reading, state.targetWpm);
    const recommendation = refreshRecommendation(
      reading,
      state.targetWpm,
      state.profile,
      state.mode,
      state.dismissedRules,
      state.recommendation,
      state.readingFeel,
      state.lockedSettings,
    );
    set({ reading, sessions, recommendation });
    const existing = state.sessions.find((session) => session.content === state.text);
    const shouldPersist =
      !existing ||
      Math.abs((existing.progress ?? 0) - reading.progress) >= 0.05 ||
      (existing.pauseCount ?? 0) !== reading.pauses.length ||
      (existing.rereadCount ?? 0) !== reading.rereads.length;
    if (shouldPersist) persistSessions(sessions);
  },

  applyRecommendation: () => {
    const { recommendation, profile, targetWpm, lockedSettings } = get();
    if (!recommendation) return;
    if (lockedSettings.includes(recommendation.setting as LockableSetting)) {
      set({
        recommendation: null,
        dismissedRules: [...get().dismissedRules, recommendation.rule],
      });
      return;
    }
    const previousValue = previousFor(recommendation.setting, profile, targetWpm);
    if (recommendation.setting === "targetWpm" && typeof recommendation.recommendedValue === "number") {
      persistTargetWpm(recommendation.recommendedValue);
      set({ targetWpm: recommendation.recommendedValue });
    } else if (recommendation.setting === "lineHeight" && typeof recommendation.recommendedValue === "number") {
      const next = persistAndApply({ ...profile, lineHeight: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    } else if (recommendation.setting === "fontSize" && typeof recommendation.recommendedValue === "number") {
      const next = persistAndApply({ ...profile, fontSize: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    } else if (recommendation.setting === "focusHighlight" && typeof recommendation.recommendedValue === "boolean") {
      const next = persistAndApply({ ...profile, focusHighlight: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    } else if (recommendation.setting === "theme" && typeof recommendation.recommendedValue === "string" && isThemeId(recommendation.recommendedValue)) {
      const next = persistAndApply({ ...profile, theme: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    }
    set({
      recommendation: null,
      dismissedRules: [...get().dismissedRules, recommendation.rule],
      lastAdaptiveChange: {
        setting: recommendation.setting,
        previousValue,
        nextValue: recommendation.recommendedValue,
      },
    });
  },

  dismissRecommendation: () => {
    const { recommendation, dismissedRules } = get();
    if (!recommendation) return;
    set({
      recommendation: null,
      dismissedRules: [...dismissedRules, recommendation.rule],
    });
  },

  undoAdaptiveChange: () => {
    const change = get().lastAdaptiveChange;
    if (!change) return;
    const profile = get().profile;
    if (change.setting === "targetWpm" && typeof change.previousValue === "number") {
      persistTargetWpm(change.previousValue);
      set({ targetWpm: change.previousValue, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "lineHeight" && typeof change.previousValue === "number") {
      const next = persistAndApply({ ...profile, lineHeight: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "fontSize" && typeof change.previousValue === "number") {
      const next = persistAndApply({ ...profile, fontSize: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "focusHighlight" && typeof change.previousValue === "boolean") {
      const next = persistAndApply({ ...profile, focusHighlight: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "theme" && typeof change.previousValue === "string" && isThemeId(change.previousValue)) {
      const next = persistAndApply({ ...profile, theme: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
    }
  },

  toggleLock: (setting) => {
    const locked = get().lockedSettings;
    const next = locked.includes(setting) ? locked.filter((item) => item !== setting) : [...locked, setting];
    writeLocal(LOCKS_KEY, JSON.stringify(next));
    set({ lockedSettings: next });
  },

  applySavedProfile: (saved) => {
    try {
      const profile = persistAndApply(saved.profile, get().mode);
      persistTargetWpm(saved.targetWpm);
      set({ profile, targetWpm: saved.targetWpm });
    } catch (error) {
      console.error(error);
    }
  },

  saveCurrentProfile: (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const saved: SavedProfile = {
      id: `user-${Date.now()}`,
      name: trimmed,
      profile: get().profile,
      targetWpm: get().targetWpm,
    };
    const savedProfiles = [saved, ...get().savedProfiles].slice(0, 8);
    writeLocal(SAVED_KEY, JSON.stringify(savedProfiles));
    set({ savedProfiles });
  },

  deleteSavedProfile: (id) => {
    const savedProfiles = get().savedProfiles.filter((item) => item.id !== id);
    writeLocal(SAVED_KEY, JSON.stringify(savedProfiles));
    set({ savedProfiles });
  },

  toggleHighlight: (lineIdx) => {
    const key = textKey(get().text);
    const current = get().highlights[key] ?? [];
    const nextForKey = current.includes(lineIdx) ? current.filter((item) => item !== lineIdx) : [...current, lineIdx];
    const highlights = { ...get().highlights, [key]: nextForKey };
    writeLocal(HIGHLIGHTS_KEY, JSON.stringify(highlights));
    set({ highlights });
  },

  toggleBookmark: () => {
    const { text, reading, bookmarks, sourceKind, sourceId, pdfPage, chapterIndex, sessions } = get();
    if (!text) return;
    const match = (item: Bookmark) =>
      sourceId ? item.sourceId === sourceId : item.content === text;
    const existing = bookmarks.find(match);
    const title =
      sessions[0]?.title ||
      text.split(/\n/).find((line) => line.trim())?.slice(0, 60) ||
      "Bookmark";
    const start = Math.max(0, Math.floor(reading.progress * Math.max(0, text.length - 90)));
    const excerpt = text.replace(/\s+/g, " ").slice(start, start + 90).trim();
    const next = existing
      ? bookmarks.filter((item) => item.id !== existing.id)
      : [
          {
            id: `bm-${Date.now()}`,
            title,
            content: text,
            progress: reading.progress,
            savedAt: Date.now(),
            kind: sourceKind,
            sourceId: sourceId ?? undefined,
            pdfPage: sourceKind === "pdf" ? pdfPage : undefined,
            chapter: chapterIndex > 0 ? chapterIndex : undefined,
            excerpt,
          },
          ...bookmarks,
        ].slice(0, 24);
    writeLocal(BOOKMARKS_KEY, JSON.stringify(next));
    set({ bookmarks: next });
  },

  removeBookmark: (id) => {
    const next = get().bookmarks.filter((item) => item.id !== id);
    writeLocal(BOOKMARKS_KEY, JSON.stringify(next));
    set({ bookmarks: next });
  },

  submitReadingFeel: (feel) => {
    const state = get();
    const recommendation = refreshRecommendation(
      state.reading,
      state.targetWpm,
      state.profile,
      state.mode,
      state.dismissedRules,
      null,
      feel,
      state.lockedSettings,
    );
    set({ readingFeel: feel, recommendation });
  },

  setCvdPreview: (kind) => {
    writeLocal(CVD_KEY, kind);
    applyColorScheme(get().profile.theme, kind);
    set({ cvdPreview: kind });
  },

  clearData: () => {
    forgetLocal([
      SESSIONS_KEY,
      PROFILE_KEY,
      MODE_KEY,
      TARGET_WPM_KEY,
      LOCKS_KEY,
      SAVED_KEY,
      BOOKMARKS_KEY,
      HIGHLIGHTS_KEY,
      CVD_KEY,
      "neurolens-coach",
      "neurolens-started",
      "neurolens-pointer-hint",
    ]);
    if (typeof document !== "undefined") delete document.documentElement.dataset.started;
    forgetPdfDocument();
    set({
      sessions: [],
      profile: READING_PROFILES.default,
      mode: "default",
      text: "",
      tab: "explore",
      autoScrolling: false,
      targetWpm: 220,
      reading: EMPTY_READING,
      recommendation: null,
      dismissedRules: [],
      lastAdaptiveChange: null,
      lockedSettings: [],
      savedProfiles: [],
      bookmarks: [],
      highlights: {},
      pdfPage: 0,
      pdfPageCount: 0,
      chapterIndex: 0,
      chapterCount: 0,
      readingFeel: null,
      cvdPreview: "none",
      sourceKind: "text",
      sourceId: null,
    });
    applyColorScheme("paper", "none");
  },
}));
