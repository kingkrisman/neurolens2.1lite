import { classifyReading } from "./reading-patterns.ts";
import { bestContrastTheme, evaluateScheme } from "./contrast.ts";
import { SAMPLE_TEXTS } from "./samples.ts";
import type { ReadingFeel, ReadingMode, ReadingProfile, Session } from "./types.ts";
import type { ReadingSnapshot } from "./store.ts";

export type InsightKind = "plain" | "wpm-down" | "wpm-up" | "contrast" | "lexend" | "adaptive" | "sample" | "scan";

export interface InsightSuggestion {
  id: InsightKind;
  title: string;
  body: string;
  cta: string;
}

export function formatDuration(ms: number): string {
  const seconds = Math.max(0, Math.round(ms / 1000));
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
}

export function average(values: number[]): number | null {
  const clean = values.filter((value) => Number.isFinite(value));
  if (!clean.length) return null;
  return Math.round(clean.reduce((sum, value) => sum + value, 0) / clean.length);
}

export function buildSuggestions({
  sessions,
  reading,
  profile,
  mode,
  targetWpm,
  feel,
}: {
  sessions: Session[];
  reading: ReadingSnapshot;
  profile: ReadingProfile;
  mode: ReadingMode;
  targetWpm: number;
  feel: ReadingFeel | null;
}): InsightSuggestion[] {
  const out: InsightSuggestion[] = [];
  const last = sessions[0];
  const wpm = last?.currentWpm ?? reading.currentWpm;
  const rereads = last?.rereadCount ?? reading.rereads.length;
  const pauses = last?.pauseCount ?? reading.pauses.length;
  const contrast = evaluateScheme(profile.theme, profile.fontSize);
  const pattern = classifyReading({
    progress: reading.progress,
    elapsedActiveMs: reading.elapsedActiveMs,
    currentWpm: reading.currentWpm ?? last?.currentWpm ?? null,
    targetWpm,
    pauses: reading.pauses,
    rereads: reading.rereads,
    skips: reading.skips ?? [],
    dwellCount: reading.dwellCount ?? 0,
    dwellMs: reading.dwellMs ?? 0,
    longDwellCount: reading.longDwellCount ?? 0,
    forwardSteps: reading.forwardSteps ?? 0,
    idleMs: reading.pausedAt ? Math.max(0, Date.now() - reading.pausedAt) : 0,
    neuralEvents: reading.neuralEvents ?? [],
  });

  if (!sessions.length && !reading.startedAt) {
    out.push({
      id: "sample",
      title: "Start a first sitting",
      body: `Open “${SAMPLE_TEXTS[0].title}” and read a page. Insights fill from pace, pauses, and how the page felt.`,
      cta: "Open a sample",
    });
  }

  if (feel === "slow" || (wpm != null && wpm < targetWpm * 0.72)) {
    out.push({
      id: "wpm-down",
      title: "Lower the target pace",
      body: `This sitting ran behind ${targetWpm} WPM. A slower target gives the line more room.`,
      cta: `Set ${Math.max(120, targetWpm - 20)} WPM`,
    });
  } else if (feel === "fast" || (wpm != null && wpm > targetWpm * 1.15 && rereads < 1)) {
    out.push({
      id: "wpm-up",
      title: "You can raise the target",
      body: "Pace held without rereads. A slightly higher target keeps auto-scroll honest.",
      cta: `Set ${Math.min(420, targetWpm + 15)} WPM`,
    });
  }

  if (rereads >= 2 && !profile.plainLanguage) {
    out.push({
      id: "plain",
      title: "Turn on plain words",
      body: "You moved back through the page more than once. Swapping dense words for simpler ones makes the next pass cheaper.",
      cta: "Enable plain words",
    });
  }

  if ((pattern.id === "scan" || pattern.id === "wander") && pattern.confidence >= 0.35 && !profile.wordGuide) {
    out.push({
      id: "scan",
      title: pattern.id === "wander" ? "Catch the last stretch" : "Stay with the line",
      body:
        pattern.id === "wander"
          ? "This sitting mixed long holds with jumps — a common signature of mindless reading. Word highlight keeps the next pass on the line."
          : "This sitting jumped ahead more than it landed. Word highlight keeps the next pass from skipping.",
      cta: "Turn on word highlight",
    });
  }

  if (pattern.id === "decode" && !profile.plainLanguage && rereads < 2) {
    out.push({
      id: "plain",
      title: "Turn on plain words",
      body: "Lines are being held longer than a fluent pass. Simpler wording can shorten the next fixation.",
      cta: "Enable plain words",
    });
  }

  if (pauses >= 2 && profile.fontFamily === "sans") {
    out.push({
      id: "lexend",
      title: "Try a quieter typeface",
      body: "Long pauses often mean the letters are working too hard. Lexend lowers crowding without rewriting the prose.",
      cta: "Use Lexend",
    });
  }

  if (contrast.bodyLevel === "fail" || (rereads >= 2 && profile.theme === "paper")) {
    const next = bestContrastTheme(profile.theme);
    if (next !== profile.theme) {
      out.push({
        id: "contrast",
        title: "Raise the ink",
        body: `Body contrast is ${contrast.body.toFixed(1)}:1 at ${profile.fontSize}px. ${next === "ink" ? "Ink" : "Contrast"} keeps your room and darkens the type.`,
        cta: `Switch to ${next === "ink" ? "Ink" : "Contrast"}`,
      });
    }
  }

  if (mode !== "adaptive" && sessions.length > 0) {
    out.push({
      id: "adaptive",
      title: "Let Adaptive watch a sitting",
      body: "It recommends pace, spacing, and contrast. It will not silently rewrite a locked setting.",
      cta: "Turn on Adaptive",
    });
  }

  return out.slice(0, 3);
}
