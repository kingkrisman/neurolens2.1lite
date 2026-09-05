import type { ReadingPatternId } from "./reading-patterns.ts";

export type ReadingMode =
  | "default"
  | "adhd"
  | "dyslexia"
  | "focus"
  | "academic"
  | "speed"
  | "adaptive";

export type TabId = "explore" | "read" | "library" | "insights" | "settings";

export type AlignId = "left" | "justify";
export type ThemeId = "paper" | "night" | "contrast" | "sage" | "ink" | "sepia" | "mist" | "dusk" | "cream" | "forest" | "peach" | "butter";
export type TintId = "none" | "adhd" | "dyslexia" | "focus" | "academic";
export type RhythmCurve = "steady" | "sentence" | "breath";
export type ReadingFeel = "slow" | "right" | "fast";
export type LockableSetting = "targetWpm" | "lineHeight" | "focusHighlight" | "fontSize" | "theme";
export type ContentKind = "text" | "pdf" | "bible" | "poem";
export type AttentionMode = "line" | "pointer";
export type FontGroup = "readable" | "dyslexia" | "literary";
export type FontId =
  | "sans"
  | "serif"
  | "lexend"
  | "atkinson"
  | "inclusive"
  | "andika"
  | "opendyslexic"
  | "literata"
  | "comicneue"
  | "sourcesans";

export interface ReadingProfile {
  id: ReadingMode;
  name: string;
  fontFamily: FontId;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  bionicStrength: number;
  focusHighlight: boolean;
  rhythmOptimization: boolean;
  rhythmCurve: RhythmCurve;
  tint: TintId;
  align: AlignId;
  theme: ThemeId;
  syllables?: boolean;
  letterGuide?: boolean;
  wordGuide?: boolean;
  readingMask?: boolean;
  dimChrome?: boolean;
  lookup?: boolean;
  attentionFollow?: AttentionMode;
  focusBand?: 1 | 2 | 3;
  plainLanguage?: boolean;
}

export interface SavedProfile {
  id: string;
  name: string;
  profile: ReadingProfile;
  targetWpm: number;
}

export interface Bookmark {
  id: string;
  title: string;
  content: string;
  progress: number;
  savedAt: number;
  kind?: ContentKind;
  sourceId?: string;
  pdfPage?: number;
  chapter?: number;
  excerpt?: string;
}

export interface Session {
  title: string;
  content: string;
  openedAt: number;
  progress?: number;
  currentWpm?: number | null;
  pauseCount?: number;
  rereadCount?: number;
  elapsedMs?: number;
  kind?: ContentKind;
  sourceId?: string;
  comprehension?: number | null;
  pattern?: ReadingPatternId;
}

export const READING_PROFILES: Record<ReadingMode, ReadingProfile> = {
  default: {
    id: "default",
    name: "Standard",
    fontFamily: "sans",
    fontSize: 18,
    lineHeight: 1.6,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0,
    focusHighlight: false,
    rhythmOptimization: false,
    rhythmCurve: "steady",
    tint: "none",
    align: "left",
    theme: "paper",
    lookup: true,
  },
  adhd: {
    id: "adhd",
    name: "ADHD",
    fontFamily: "sans",
    fontSize: 20,
    lineHeight: 1.8,
    letterSpacing: 0.02,
    wordSpacing: 0.05,
    bionicStrength: 0.6,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "sentence",
    tint: "adhd",
    align: "left",
    theme: "paper",
    readingMask: false,
    wordGuide: true,
    dimChrome: true,
    lookup: true,
    attentionFollow: "line",
  },
  dyslexia: {
    id: "dyslexia",
    name: "Dyslexia",
    fontFamily: "opendyslexic",
    fontSize: 20,
    lineHeight: 2,
    letterSpacing: 0.05,
    wordSpacing: 0.1,
    bionicStrength: 0.4,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "breath",
    tint: "dyslexia",
    align: "left",
    theme: "cream",
    syllables: true,
    letterGuide: true,
    lookup: true,
    plainLanguage: true,
  },
  focus: {
    id: "focus",
    name: "Deep Focus",
    fontFamily: "sans",
    fontSize: 22,
    lineHeight: 1.7,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "sentence",
    tint: "focus",
    align: "left",
    theme: "paper",
    readingMask: false,
    dimChrome: true,
    wordGuide: true,
    lookup: true,
    attentionFollow: "line",
  },
  academic: {
    id: "academic",
    name: "Academic",
    fontFamily: "serif",
    fontSize: 18,
    lineHeight: 1.7,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0.3,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "breath",
    tint: "academic",
    align: "left",
    theme: "sepia",
  },
  speed: {
    id: "speed",
    name: "Speed",
    fontFamily: "sans",
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0.8,
    focusHighlight: false,
    rhythmOptimization: false,
    rhythmCurve: "steady",
    tint: "none",
    align: "left",
    theme: "paper",
  },
  adaptive: {
    id: "adaptive",
    name: "Adaptive",
    fontFamily: "sans",
    fontSize: 18,
    lineHeight: 1.7,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0.35,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "sentence",
    tint: "none",
    align: "left",
    theme: "paper",
  },
};

export const NAMED_PRESETS: SavedProfile[] = [
  {
    id: "deep-study",
    name: "Deep Study",
    targetWpm: 180,
    profile: { ...READING_PROFILES.academic, name: "Deep Study", fontSize: 20, lineHeight: 1.9 },
  },
  {
    id: "quick",
    name: "Quick Reading",
    targetWpm: 340,
    profile: { ...READING_PROFILES.speed, name: "Quick Reading" },
  },
  {
    id: "night",
    name: "Night Reading",
    targetWpm: 200,
    profile: { ...READING_PROFILES.default, name: "Night Reading", theme: "night", fontSize: 20, lineHeight: 1.8 },
  },
  {
    id: "bible-study",
    name: "Bible Study",
    targetWpm: 160,
    profile: { ...READING_PROFILES.academic, name: "Bible Study", lineHeight: 1.9, fontSize: 20 },
  },
];

export const COLOR_SCHEMES: {
  id: ThemeId;
  label: string;
  swatch: string;
  ink: string;
  room: "light" | "dark";
  line: string;
}[] = [
  { id: "paper", label: "Paper", swatch: "#f0e8dc", ink: "#3d2a1f", room: "light", line: "Warm page" },
  { id: "cream", label: "Cream", swatch: "#f7f1e3", ink: "#2c2418", room: "light", line: "BDA cream · less glare" },
  { id: "peach", label: "Peach", swatch: "#f4ddd2", ink: "#2a1c16", room: "light", line: "Warm peach · less glare" },
  { id: "butter", label: "Butter", swatch: "#f2ebc4", ink: "#2a2412", room: "light", line: "Pale yellow · less glare" },
  { id: "sage", label: "Sage", swatch: "#e7eee6", ink: "#2c3f30", room: "light", line: "Calm green" },
  { id: "mist", label: "Mist", swatch: "#e8eef2", ink: "#1a232b", room: "light", line: "Cool daylight" },
  { id: "sepia", label: "Sepia", swatch: "#e9dcc8", ink: "#3a2818", room: "light", line: "Study lamp" },
  { id: "contrast", label: "Contrast", swatch: "#fffdf6", ink: "#100c08", room: "light", line: "Highest ink · more glare" },
  { id: "night", label: "Night", swatch: "#1a1612", ink: "#f3eadf", room: "dark", line: "Low glare" },
  { id: "dusk", label: "Dusk", swatch: "#1c1418", ink: "#f3e6dc", room: "dark", line: "Warm dark" },
  { id: "ink", label: "Ink", swatch: "#14161a", ink: "#f2f4f8", room: "dark", line: "Cool slate" },
  { id: "forest", label: "Forest", swatch: "#152019", ink: "#e6f0e8", room: "dark", line: "Deep green" },
];

export const DARK_SCHEMES: ThemeId[] = ["night", "ink", "dusk", "forest"];

/** Cream/peach/butter: BDA + Rello. Sage: green paper. Pure white is the one to avoid. */
export const DYSLEXIA_THEMES: ThemeId[] = ["cream", "peach", "butter", "sage", "paper"];

export const FONT_CHOICES: { id: FontId; label: string; hint: string; group: FontGroup; sample: string }[] = [
  { id: "sans", label: "Sans", hint: "System UI", group: "readable", sample: "Read with less effort." },
  { id: "sourcesans", label: "Source Sans", hint: "Humanist sans", group: "readable", sample: "Read with less effort." },
  { id: "inclusive", label: "Inclusive", hint: "Accessible sans", group: "readable", sample: "Read with less effort." },
  { id: "atkinson", label: "Atkinson", hint: "Distinct I, l, 1", group: "readable", sample: "I, l, 1 stay distinct." },
  { id: "opendyslexic", label: "OpenDyslexic", hint: "Preference · distinct b/d", group: "dyslexia", sample: "b d p q stay distinct." },
  { id: "lexend", label: "Lexend", hint: "Low crowding", group: "dyslexia", sample: "Letters keep their space." },
  { id: "andika", label: "Andika", hint: "Literacy sans", group: "dyslexia", sample: "Built for new readers." },
  { id: "serif", label: "Newsreader", hint: "Literary serif", group: "literary", sample: "A quieter long page." },
  { id: "literata", label: "Literata", hint: "Reading serif", group: "literary", sample: "Made for long form." },
  { id: "comicneue", label: "Comic Neue", hint: "Informal, distinct", group: "literary", sample: "Friendly, unmirrored." },
];

export const FONT_GROUPS: { id: FontGroup; label: string; hint: string }[] = [
  { id: "readable", label: "Clear sans", hint: "Everyday reading" },
  { id: "dyslexia", label: "Dyslexia-friendly", hint: "Spacing and distinct shapes do the work. Weighted-base fonts are a preference, not a proven boost." },
  { id: "literary", label: "Literary", hint: "Long-form serifs and informal faces" },
];

export const RHYTHM_CHOICES: { id: RhythmCurve; label: string; hint: string }[] = [
  { id: "steady", label: "Steady", hint: "Even pace" },
  { id: "sentence", label: "Sentence", hint: "Rest at true sentence ends" },
  { id: "breath", label: "Breath", hint: "Rest at clauses" },
];

export const TABS: { id: TabId; label: string }[] = [
  { id: "explore", label: "Explore" },
  { id: "read", label: "Read" },
  { id: "library", label: "Library" },
  { id: "insights", label: "Insights" },
  { id: "settings", label: "Settings" },
];

export const FONT_CLASS: Record<FontId, string> = {
  sans: "font-sans",
  serif: "font-serif",
  lexend: "font-lexend",
  atkinson: "font-atkinson",
  inclusive: "font-inclusive",
  andika: "font-andika",
  opendyslexic: "font-opendyslexic",
  literata: "font-literata",
  comicneue: "font-comicneue",
  sourcesans: "font-sourcesans",
};

export const TINT_CLASS: Record<TintId, string> = {
  none: "bg-bg",
  adhd: "bg-tint-adhd",
  dyslexia: "bg-tint-dyslexia",
  focus: "bg-tint-focus",
  academic: "bg-tint-academic",
};
