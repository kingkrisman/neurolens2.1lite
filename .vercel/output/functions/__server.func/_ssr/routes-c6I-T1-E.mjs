import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, b as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS, t as useGSAP } from "../_libs/gsap+gsap__react.mjs";
import { a as isSkipJump, c as splitSentenceSpans, i as isSentenceBoundary, l as splitSentences$1, n as detectDisengagement, o as recapCacheKey, r as dismissReconnect, s as reconnectDismissed, t as buildLocalRecap, u as windowForModel } from "./reconnect-DdBhzL0O.mjs";
import { _ as Link, v as useNavigate, y as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleHelp, D as ChevronLeft, E as ChevronRight, O as ChevronDown, S as Compass, T as ChevronsDown, _ as Languages, b as Download, d as Play, f as Pause, h as LockOpen, i as Upload, j as BookOpenText, k as Check, m as Lock, n as VolumeX, o as StickyNote, p as Maximize2, r as Volume2, s as SpellCheck, t as X, v as Highlighter, x as Copy } from "../_libs/lucide-react.mjs";
import { $ as useReducedMotion, A as ScrollScene, B as Card, C as TINT_CLASS, E as GsapCount, G as PanelWell, H as Media, K as Progress, M as useInView, O as Magnetic, Q as scrollToId, S as TABS, T as Mark, U as Panel, V as Kbd, X as easeOut, Y as cn, Z as registerGsap, _ as FONT_CLASS, a as isStaleChunkError, b as READING_PROFILES, et as wordCount, g as FONT_CHOICES, h as DARK_SCHEMES, i as friendlyViewError, j as StaggerBlock, m as COLOR_SCHEMES, o as reloadView, p as Button, q as Separator, r as TabErrorBoundary, v as FONT_GROUPS, w as __exportAll, x as RHYTHM_CHOICES, y as NAMED_PRESETS, z as Badge } from "./router-Bg1qn7IF.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { a as Trigger, i as Root2$1, n as Item2, r as Portal2, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Icon } from "../_libs/iconify__react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-Dzx4dZsK.js
/**
* WCAG 2.2 contrast (relative luminance, SC 1.4.3 / 1.4.6 / 1.4.11).
*
* Math:
*   1. sRGB 8-bit channel C → cs = C / 255
*   2. Linearize: cs <= 0.04045 ? cs/12.92 : ((cs+0.055)/1.055)^2.4
*   3. L = 0.2126 R + 0.7152 G + 0.0722 B
*   4. Contrast = (Llighter + 0.05) / (Ldarker + 0.05)
*
* Thresholds (normal text / large text ≥18pt or ≥14pt bold):
*   AA  4.5:1 / 3:1
*   AAA 7:1   / 4.5:1
*   UI components and graphics (SC 1.4.11): 3:1
*
* Tokens must stay in sync with [data-scheme] in styles.css.
*/
var SCHEME_TOKENS = {
	paper: {
		bg: "#f0e8dc",
		fg: "#1c1611",
		muted: "#5c5046",
		subtle: "#7a6d60"
	},
	night: {
		bg: "#1a1612",
		fg: "#f3eadf",
		muted: "#c4b5a4",
		subtle: "#9a8c7c"
	},
	contrast: {
		bg: "#fffdf6",
		fg: "#100c08",
		muted: "#3d342c",
		subtle: "#5c5146"
	},
	sage: {
		bg: "#e7eee6",
		fg: "#1b2319",
		muted: "#4d5a4b",
		subtle: "#6b7868"
	},
	ink: {
		bg: "#14161a",
		fg: "#f2f4f8",
		muted: "#a8b1be",
		subtle: "#88919e"
	},
	sepia: {
		bg: "#e9dcc8",
		fg: "#2a1f14",
		muted: "#5c4a38",
		subtle: "#7a6550"
	},
	mist: {
		bg: "#e8eef2",
		fg: "#1a232b",
		muted: "#4a5964",
		subtle: "#6a7882"
	},
	dusk: {
		bg: "#1c1418",
		fg: "#f3e6dc",
		muted: "#c4b0a4",
		subtle: "#9a877c"
	},
	cream: {
		bg: "#f7f1e3",
		fg: "#2c2418",
		muted: "#5c5346",
		subtle: "#7a7160"
	},
	forest: {
		bg: "#152019",
		fg: "#e6f0e8",
		muted: "#a8c0b0",
		subtle: "#87a090"
	},
	peach: {
		bg: "#f4ddd2",
		fg: "#2a1c16",
		muted: "#5c463c",
		subtle: "#7a6258"
	},
	butter: {
		bg: "#f2ebc4",
		fg: "#2a2412",
		muted: "#5c5438",
		subtle: "#7a7250"
	}
};
function channel(value) {
	const srgb = value / 255;
	return srgb <= .04045 ? srgb / 12.92 : ((srgb + .055) / 1.055) ** 2.4;
}
/** sRGB 8-bit channel → linearized 0–1, WCAG 2.2. */
function linearizeChannel(value) {
	return channel(value);
}
function parseHex(hex) {
	const raw = hex.replace("#", "").trim();
	const full = raw.length === 3 ? raw.split("").map((ch) => ch + ch).join("") : raw;
	if (!/^[0-9a-fA-F]{6}$/.test(full)) throw new Error(`Invalid hex color: ${hex}`);
	return [
		Number.parseInt(full.slice(0, 2), 16),
		Number.parseInt(full.slice(2, 4), 16),
		Number.parseInt(full.slice(4, 6), 16)
	];
}
function isHexColor(value) {
	const raw = value.replace("#", "").trim();
	return /^[0-9a-fA-F]{3}$/.test(raw) || /^[0-9a-fA-F]{6}$/.test(raw);
}
function normalizeHex(value) {
	const raw = value.replace("#", "").trim();
	return `#${(raw.length === 3 ? raw.split("").map((ch) => ch + ch).join("") : raw).toLowerCase()}`;
}
/** Relative luminance L, 0–1, WCAG 2.2. */
function relativeLuminance(hex) {
	const [r, g, b] = parseHex(hex);
	return .2126 * channel(r) + .7152 * channel(g) + .0722 * channel(b);
}
function contrastRatio(foreground, background) {
	const l1 = relativeLuminance(foreground);
	const l2 = relativeLuminance(background);
	const lighter = Math.max(l1, l2);
	const darker = Math.min(l1, l2);
	return (lighter + .05) / (darker + .05);
}
/** Large text: 18pt (24px) or 14pt (18.67px) bold. */
function isLargeText(fontSizePx, bold = false) {
	if (fontSizePx >= 24) return true;
	return bold && fontSizePx >= 18.67;
}
function textContrastLevel(ratio, fontSizePx, bold = false) {
	const large = isLargeText(fontSizePx, bold);
	const aaa = large ? 4.5 : 7;
	const aa = large ? 3 : 4.5;
	if (ratio >= aaa) return "AAA";
	if (ratio >= aa) return "AA";
	return "fail";
}
/** Non-text UI components and graphics, SC 1.4.11. */
function uiContrastPass(ratio) {
	return ratio >= 3;
}
function describePair(foreground, background) {
	const fg = normalizeHex(foreground);
	const bg = normalizeHex(background);
	const ratio = contrastRatio(fg, bg);
	return {
		fg,
		bg,
		fgRgb: parseHex(fg),
		bgRgb: parseHex(bg),
		fgLum: relativeLuminance(fg),
		bgLum: relativeLuminance(bg),
		ratio,
		normal: textContrastLevel(ratio, 16, false),
		large: textContrastLevel(ratio, 24, false),
		ui: uiContrastPass(ratio)
	};
}
function evaluateScheme(theme, fontSizePx, bold = false) {
	const tokens = SCHEME_TOKENS[theme];
	const body = contrastRatio(tokens.fg, tokens.bg);
	const muted = contrastRatio(tokens.muted, tokens.bg);
	return {
		id: theme,
		body,
		muted,
		subtle: contrastRatio(tokens.subtle, tokens.bg),
		bodyLevel: textContrastLevel(body, fontSizePx, bold),
		mutedLevel: textContrastLevel(muted, fontSizePx, false)
	};
}
function bestContrastTheme(current) {
	return DARK_SCHEMES.includes(current) ? "ink" : "contrast";
}
function formatContrastRatio(ratio) {
	return `${ratio.toFixed(1)}:1`;
}
var TRUST = {
	min: .25,
	max: 1.5,
	/** Multiplier when a lever visibly helped. */
	reward: 1.25,
	/** Multiplier when strain got worse after it. */
	penalty: .6,
	/** Multiplier when it changed nothing measurable. */
	inert: .85,
	/** Strain change smaller than this is treated as noise, not signal. */
	margin: .08,
	/** Words that must be read after a change before judging it. */
	settleWords: 250
};
function newLever() {
	return {
		trust: 1,
		strainAtApply: null,
		wordsAtApply: 0,
		uses: 0
	};
}
function clampTrust(value) {
	return Math.min(TRUST.max, Math.max(TRUST.min, value));
}
function leverOf(memory, rule) {
	return memory?.[rule] ?? newLever();
}
/** Record that a lever was just applied, so its effect can be judged later. */
function noteApplied(memory, rule, strain, wordsRead) {
	const lever = leverOf(memory, rule);
	return {
		...memory,
		[rule]: {
			...lever,
			strainAtApply: strain,
			wordsAtApply: wordsRead,
			uses: lever.uses + 1
		}
	};
}
/**
* Judge every pending lever against how reading has gone since it was applied.
*
* Only levers that have had `settleWords` of reading to take effect are scored;
* judging a change immediately would mostly measure the disruption of making
* it. Once judged, `strainAtApply` is cleared so the same outcome is not
* counted twice.
*/
function learnFromOutcome(memory, strainNow, wordsRead) {
	let next = null;
	for (const key of Object.keys(memory)) {
		const lever = memory[key];
		if (!lever || lever.strainAtApply == null) continue;
		if (wordsRead - lever.wordsAtApply < TRUST.settleWords) continue;
		const delta = lever.strainAtApply - strainNow;
		const factor = delta > TRUST.margin ? TRUST.reward : delta < -TRUST.margin ? TRUST.penalty : TRUST.inert;
		next ??= { ...memory };
		next[key] = {
			...lever,
			trust: clampTrust(lever.trust * factor),
			strainAtApply: null
		};
	}
	return next ?? memory;
}
/**
* Record that the reader reached for a lever themselves.
*
* Separate from `learnFromOutcome`, and weaker, because it is a different kind
* of evidence: an outcome says the change *worked*, a preference says this is
* the control they trust. Both belong in the same weight, and conflating their
* strength would let someone nudging a slider outweigh a measured result.
*
* `strainAtApply` is deliberately left alone. A manual change is not the engine
* making a move, so there is no pending verdict for it to resolve — and
* overwriting one would discard a suggestion that was still being judged.
*/
function learnFromPreference(memory, rule, factor) {
	const lever = leverOf(memory, rule);
	return {
		...memory,
		[rule]: {
			...lever,
			trust: clampTrust(lever.trust * factor)
		}
	};
}
/**
* Posterior mean of a Poisson rate under a Gamma(0, k) prior.
*
* The naive rate is `count / exposure`, which explodes early in a session: one
* reread in the first fifty words reads as twenty per thousand. Adding `k` to
* the denominator is the standard shrinkage form — it behaves like `k` units of
* prior exposure that saw no events, so a thin sample is pulled toward "no
* problem" and only sustained evidence moves it. As exposure grows past `k` the
* prior's influence fades and the estimate converges on the observed rate.
*
* @param count     events observed (rereads, long pauses)
* @param exposure  how much reading they were observed over, in the rate's own
*                  units (thousands of words, or minutes)
* @param k         prior strength, in the same units as `exposure`
*/
function shrunkRate(count, exposure, k) {
	if (count <= 0) return 0;
	return count / (Math.max(0, exposure) + Math.max(1e-9, k));
}
/**
* Map an unbounded rate onto [0, 1) with a Hill curve, `r / (r + r50)`.
*
* Strain has to be comparable across channels that are measured in different
* units — rereads per thousand words against long pauses per minute — so each
* needs a common scale. This curve is monotonic, smooth, saturating, and has a
* single parameter that means something concrete: at `r50` the strain reads
* exactly 0.5. Doubling an already-extreme rate barely moves the score, which
* is the behaviour wanted — past a point, worse is just worse.
*/
function saturate(rate, half) {
	if (rate <= 0) return 0;
	return rate / (rate + Math.max(1e-9, half));
}
/**
* How hard to act, given a strain score and the point where acting begins.
*
* Returns 0 at or below `floor` and rises linearly to 1 at full strain, so the
* response is proportional to the evidence instead of the old all-or-nothing
* step. A reader who rereads twice gets the smallest useful nudge; one who is
* rereading constantly gets the full correction in a single move.
*/
function intensity(strain, floor) {
	if (strain <= floor) return 0;
	const span = Math.max(1e-9, 1 - floor);
	return Math.min(1, (strain - floor) / span);
}
/**
* Scale a step by intensity and snap it to what the setting can actually hold.
*
* Line height moves in tenths and font size in whole pixels, so a raw
* proportional step has to be quantised or it produces values the UI cannot
* represent. Rounding up off zero matters: any real strain should move the
* setting by at least one notch, otherwise mild-but-genuine strain would
* silently produce no recommendation at all.
*/
function quantizeStep(maxStep, level, granularity) {
	if (level <= 0) return 0;
	const raw = maxStep * level;
	return Math.max(1, Math.round(raw / granularity)) * granularity;
}
/** Half-saturation points, in each channel's own units. */
var STRAIN_SCALE = {
	/** Rereads per 1000 words at which reread strain reads 0.5. */
	rereadHalf: 2,
	/** Prior exposure for rereads, in thousands of words. */
	rereadPrior: .5,
	/** Long pauses per active minute at which pause strain reads 0.5. */
	pauseHalf: .8,
	/** Prior exposure for pauses, in minutes. */
	pausePrior: .5,
	/** Fraction below target pace at which pace strain reads 0.5. */
	paceHalf: .35,
	/** Strain below which nothing is worth changing. */
	actionFloor: .35
};
/**
* Score the three channels the reader actually emits evidence for.
*
* Kept separate rather than averaged into one number: the engine has to know
* *which* channel is straining to choose a lever, and averaging would let a
* calm channel mask a struggling one.
*/
function measureStrain(input) {
	const kWords = Math.max(0, input.wordsRead) / 1e3;
	const minutes = Math.max(0, input.activeMs) / 6e4;
	const reread = saturate(shrunkRate(input.rereadCount, kWords, STRAIN_SCALE.rereadPrior), STRAIN_SCALE.rereadHalf);
	const pause = saturate(shrunkRate(input.longPauseCount, minutes, STRAIN_SCALE.pausePrior), STRAIN_SCALE.pauseHalf);
	const pace = saturate(input.currentWpm != null && input.targetWpm > 0 ? Math.max(0, (input.targetWpm - input.currentWpm) / input.targetWpm) : 0, STRAIN_SCALE.paceHalf);
	return {
		reread,
		pause,
		pace,
		peak: Math.max(reread, pause, pace)
	};
}
var ADAPTIVE_THRESHOLDS = {
	pauseIdleMs: 8e3,
	pauseMinMs: 4e3,
	progressNoise: .008,
	rereadDrop: .12,
	rereadMinHighWater: .25,
	wpmMinElapsedMs: 8e3,
	wpmMinWords: 8,
	frequentRereadCount: 2,
	frequentPauseCount: 2,
	frequentPauseMinMs: 8e3,
	slowVsTargetRatio: .72,
	lineHeightStep: .1,
	/** Most spacing a single recommendation may add, at full strain. */
	lineHeightMaxStep: .3,
	lineHeightMax: 2.2,
	fontSizeStep: 1,
	/** Most type growth a single recommendation may add, at full strain. */
	fontSizeMaxStep: 3,
	fontSizeMax: 28,
	wpmStepDown: 20,
	wpmStepUp: 15,
	targetWpmMin: 120,
	targetWpmMax: 480
};
function calcCurrentWpm(wordsRead, elapsedActiveMs) {
	if (wordsRead < ADAPTIVE_THRESHOLDS.wpmMinWords) return null;
	if (elapsedActiveMs < ADAPTIVE_THRESHOLDS.wpmMinElapsedMs) return null;
	const minutes = elapsedActiveMs / 6e4;
	if (minutes <= 0) return null;
	const wpm = Math.max(1, Math.round(wordsRead / minutes));
	if (wpm > ADAPTIVE_THRESHOLDS.targetWpmMax) return null;
	return wpm;
}
function isMeaningfulProgressChange(from, to) {
	return Math.abs(to - from) >= ADAPTIVE_THRESHOLDS.progressNoise;
}
function isReread(highWater, next) {
	if (highWater < ADAPTIVE_THRESHOLDS.rereadMinHighWater) return false;
	return highWater - next >= ADAPTIVE_THRESHOLDS.rereadDrop;
}
function clampTargetWpm(value) {
	return Math.min(ADAPTIVE_THRESHOLDS.targetWpmMax, Math.max(ADAPTIVE_THRESHOLDS.targetWpmMin, Math.round(value / 10) * 10));
}
function clampLineHeight(value) {
	return Math.min(ADAPTIVE_THRESHOLDS.lineHeightMax, Math.max(1.4, Math.round(value * 10) / 10));
}
function clampFontSize(value) {
	return Math.min(ADAPTIVE_THRESHOLDS.fontSizeMax, Math.max(14, Math.round(value)));
}
function prolongedPauses(metrics) {
	return metrics.pauses.filter((pause) => pause.durationMs >= ADAPTIVE_THRESHOLDS.frequentPauseMinMs).length;
}
/**
* Relative standing of the levers when several could fire at once.
*
* Contrast leads because it is the cheapest change to undo and the one most
* likely to be the actual cause — a page that fails to separate ink from paper
* makes every other setting look inadequate. Type size trails spacing because
* it reflows more of the page for the same benefit.
*/
var LEVER_PRIORITY = {
	"contrast-low": 1.3,
	rereading: 1,
	pauses: 1,
	"type-size": .9,
	"pace-strain": 1,
	"strong-performance": 1
};
/** Build a scored candidate, or nothing if the lever cannot move. */
function candidate(rule, strain, memory, recommendation) {
	if (!recommendation) return null;
	return {
		score: strain * leverOf(memory, rule).trust * LEVER_PRIORITY[rule],
		recommendation
	};
}
function measureReadingStrain(metrics) {
	return measureStrain({
		rereadCount: metrics.rereadCount,
		longPauseCount: prolongedPauses(metrics),
		wordsRead: metrics.wordsRead,
		activeMs: metrics.elapsedActiveMs,
		currentWpm: metrics.currentWpm,
		targetWpm: metrics.targetWpm
	});
}
/**
* Pure adaptive engine. Never mutates settings.
*
* Two kinds of signal drive it, and they are treated differently on purpose.
* An explicit "this felt too fast" is an instruction, so it is honoured
* directly and at full step. Everything else is inference from behaviour, so it
* is scored: strain (how strong the evidence is, normalised by how much reading
* produced it) times trust (whether this lever has helped *this* reader before)
* times a fixed priority. The strongest candidate wins rather than whichever
* rule happened to sit earliest in the function.
*/
function recommendAdaptations(metrics, settings, dismissedRules = [], lockedSettings = [], memory) {
	const dismissed = new Set(dismissedRules);
	const locked = new Set(lockedSettings);
	const strain = measureReadingStrain(metrics);
	if (metrics.feel === "slow" && !dismissed.has("pace-strain") && !locked.has("targetWpm")) {
		const next = clampTargetWpm(settings.targetWpm - ADAPTIVE_THRESHOLDS.wpmStepDown);
		if (next < settings.targetWpm) return {
			id: "pace-strain:targetWpm",
			rule: "pace-strain",
			setting: "targetWpm",
			recommendedValue: next,
			reason: "NeuroLens recommends slowing your target pace so this passage is easier to follow.",
			why: "You marked this stretch as too fast. A slightly slower target gives the words more room to land."
		};
	}
	const candidates = [];
	const rereadLevel = intensity(strain.reread, STRAIN_SCALE.actionFloor);
	const pauseLevel = intensity(strain.pause, STRAIN_SCALE.actionFloor);
	if (!dismissed.has("contrast-low") && !locked.has("theme")) {
		const report = evaluateScheme(settings.theme, settings.fontSize);
		const better = bestContrastTheme(settings.theme);
		const failsAa = report.bodyLevel === "fail";
		const canStepUp = better !== settings.theme;
		const weight = failsAa ? 1 : Math.max(strain.reread, strain.pause, strain.pace);
		if (canStepUp && (failsAa || weight > STRAIN_SCALE.actionFloor)) {
			const label = better === "ink" ? "Ink" : "Contrast";
			candidates.push(candidate("contrast-low", weight, memory, {
				id: `contrast-low:${better}`,
				rule: "contrast-low",
				setting: "theme",
				recommendedValue: better,
				reason: `NeuroLens recommends the ${label} scheme so the line is easier to hold.`,
				why: failsAa ? `This page is under the WCAG AA contrast bar at ${settings.fontSize}px. ${label} keeps your light or dark room and raises the ink-to-paper ratio.` : `Rereads, pauses, or a rushed feel often mean the page is working too hard. ${label} raises contrast without leaving the palette you already chose.`
			}));
		}
	}
	if (rereadLevel > 0 && !dismissed.has("rereading") && !locked.has("lineHeight")) {
		const step = quantizeStep(ADAPTIVE_THRESHOLDS.lineHeightMaxStep, rereadLevel, ADAPTIVE_THRESHOLDS.lineHeightStep);
		const next = clampLineHeight(settings.lineHeight + step);
		if (next > settings.lineHeight) {
			const found = candidate("rereading", strain.reread, memory, {
				id: "rereading:lineHeight",
				rule: "rereading",
				setting: "lineHeight",
				recommendedValue: next,
				reason: "Your reading pattern suggests slightly more spacing may improve visual clarity.",
				why: "You moved back through the page several times. Extra line spacing can make it easier to keep your place."
			});
			if (found) candidates.push(found);
		}
	}
	if (rereadLevel > 0 && !dismissed.has("type-size") && !locked.has("fontSize")) {
		const step = quantizeStep(ADAPTIVE_THRESHOLDS.fontSizeMaxStep, rereadLevel, ADAPTIVE_THRESHOLDS.fontSizeStep);
		const next = clampFontSize(settings.fontSize + step);
		const spacingExhausted = settings.lineHeight >= ADAPTIVE_THRESHOLDS.lineHeightMax - .05 || locked.has("lineHeight");
		if (next > settings.fontSize && spacingExhausted) {
			const found = candidate("type-size", strain.reread, memory, {
				id: "type-size:fontSize",
				rule: "type-size",
				setting: "fontSize",
				recommendedValue: next,
				reason: "NeuroLens recommends a slightly larger type size after repeated rereads.",
				why: "Line spacing is already open. A little more size can reduce crowding on the next pass."
			});
			if (found) candidates.push(found);
		}
	}
	if (pauseLevel > 0 && !dismissed.has("pauses") && !locked.has("fontSize")) {
		const step = quantizeStep(ADAPTIVE_THRESHOLDS.fontSizeMaxStep, pauseLevel, ADAPTIVE_THRESHOLDS.fontSizeStep);
		const next = clampFontSize(settings.fontSize + step);
		if (next > settings.fontSize) {
			const found = candidate("pauses", strain.pause, memory, {
				id: "pauses:fontSize",
				rule: "pauses",
				setting: "fontSize",
				recommendedValue: next,
				reason: "NeuroLens recommends a slightly larger type after long pauses.",
				why: "Reading stopped for longer stretches. A little more size makes the next word easier to pick up."
			});
			if (found) candidates.push(found);
		}
	}
	if (candidates.length) return candidates.reduce((best, item) => item.score > best.score ? item : best).recommendation;
	if ((metrics.feel === "fast" || metrics.feel === "right" && metrics.currentWpm != null && metrics.currentWpm < settings.targetWpm * ADAPTIVE_THRESHOLDS.slowVsTargetRatio) && metrics.rereadCount < ADAPTIVE_THRESHOLDS.frequentRereadCount && !dismissed.has("strong-performance") && !locked.has("targetWpm")) {
		const next = clampTargetWpm(settings.targetWpm + ADAPTIVE_THRESHOLDS.wpmStepUp);
		if (next > settings.targetWpm) return {
			id: "strong-performance:targetWpm",
			rule: "strong-performance",
			setting: "targetWpm",
			recommendedValue: next,
			reason: "You’re reading comfortably, so NeuroLens recommends a small speed increase.",
			why: metrics.feel === "fast" ? "You marked this page as too slow. A slightly higher target matches the pace you already hold." : "Your actual pace is well below the target you set, and the page still felt right."
		};
	}
	return null;
}
/** Which lever each setting belongs to, where one exists. */
var LEVER = {
	lineHeight: "rereading",
	fontSize: "type-size",
	theme: "contrast-low",
	bionicStrength: "rereading"
};
/**
* Compare two profiles and report what the reader changed.
*
* Returns nothing for changes that map to no lever — a font family, an
* alignment — because the engine has no advice to give about those and
* pretending otherwise would put noise into the trust weights.
*/
function readPreference(before, after) {
	for (const key of Object.keys(LEVER)) {
		const rule = LEVER[key];
		if (!rule) continue;
		const a = before[key];
		const b = after[key];
		if (a === b) continue;
		if (typeof a === "number" && typeof b === "number") return {
			rule,
			direction: b > a ? "up" : "down"
		};
		if (key === "theme") return {
			rule,
			direction: "up"
		};
	}
	return null;
}
/**
* Trust adjustments for a hand-made change.
*
* Deliberately gentler than the reward for a suggestion that measurably
* reduced strain. A manual change says "this lever is the one I reach for",
* which is real evidence; it does not say the change worked, because nothing
* has been measured yet. Overweighting it would let a reader fiddling with a
* slider drown out the outcomes the engine actually observed.
*/
var PREFERENCE_WEIGHT = {
	/** Applied when the reader moves a lever the same way the engine would. */
	agrees: 1.12,
	/** Applied when they move it the opposite way. */
	disagrees: .9
};
var NEURAL_THRESHOLDS = {
	minFixationMs: 400,
	longFixationMs: 1500,
	parkedMs: 1e4,
	windowMs: 24e3,
	skipLines: 3,
	fastFixationMs: 280
};
var PASSIVE_META = {
	gathering: {
		label: "Watching",
		live: "Watching how you read.",
		body: "A few more lines in the reading band and the sitting will have a shape."
	},
	engaged: {
		label: "Reading",
		live: "Holding the line.",
		body: "Successive lines are being held, then a small forward move. That is the usual reading rhythm."
	},
	parked: {
		label: "Waiting",
		live: "The page is waiting.",
		body: "The page is open, but the line is not being taken. That is not a score."
	},
	skimming: {
		label: "Skimming",
		live: "Jumping ahead.",
		body: "The eyes are moving in jumps. Little time is landing on the line."
	},
	wandering: {
		label: "Drifting",
		live: "The rhythm broke.",
		body: "The eyes still moved, but the holds and jumps no longer match a fluent pass."
	}
};
function classifyMove(fromLine, toLine, fromDwellMs) {
	const delta = toLine - fromLine;
	if (delta === 0) return "saccade";
	if (delta < 0) return "regression";
	if (delta >= NEURAL_THRESHOLDS.skipLines) return "skip";
	if (fromDwellMs > 0 && fromDwellMs < NEURAL_THRESHOLDS.fastFixationMs) return "skip";
	return "saccade";
}
function summarizeNeural(events) {
	const summary = {
		fixations: 0,
		saccades: 0,
		regressions: 0,
		skips: 0,
		disengages: 0,
		fixationMs: 0,
		longFixations: 0,
		meanFixationMs: 0
	};
	for (const event of events) if (event.kind === "fixation") {
		summary.fixations += 1;
		summary.fixationMs += Math.max(0, event.ms);
		if (event.ms >= NEURAL_THRESHOLDS.longFixationMs) summary.longFixations += 1;
	} else if (event.kind === "saccade") summary.saccades += 1;
	else if (event.kind === "regression") summary.regressions += 1;
	else if (event.kind === "skip") summary.skips += 1;
	else if (event.kind === "disengage") summary.disengages += 1;
	summary.meanFixationMs = summary.fixations > 0 ? summary.fixationMs / summary.fixations : 0;
	return summary;
}
function detectPassiveState(events, now) {
	const summary = summarizeNeural(events.filter((event) => now - event.at <= NEURAL_THRESHOLDS.windowMs));
	const last = events[events.length - 1];
	const since = last ? Math.max(0, now - last.at) : Number.POSITIVE_INFINITY;
	const signal = summary.fixations + summary.saccades + summary.skips + summary.regressions;
	if (events.length < 2 || signal < 2) {
		const state = since >= NEURAL_THRESHOLDS.parkedMs && events.length > 0 ? "parked" : "gathering";
		return readingFor(state, state === "parked" ? .55 : 0);
	}
	if (since >= NEURAL_THRESHOLDS.parkedMs && summary.saccades === 0 && summary.skips === 0 || last?.kind === "disengage" && since >= 4e3) return readingFor("parked", Math.min(1, since / 16e3));
	if (summary.skips >= 2 && summary.skips >= summary.saccades && summary.meanFixationMs < 900) return readingFor("skimming", Math.min(1, .4 + summary.skips * .12));
	if (summary.longFixations >= 2 && (summary.skips >= 1 || summary.regressions >= 2) && summary.saccades <= summary.longFixations) return readingFor("wandering", Math.min(1, .45 + summary.longFixations * .1));
	if (summary.saccades >= 2 || summary.fixations >= 3) return readingFor("engaged", Math.min(1, .4 + summary.saccades * .12));
	if (since >= 8e3) return readingFor("parked", .4);
	return readingFor("gathering", .15);
}
function readingFor(state, confidence) {
	return {
		state,
		confidence,
		...PASSIVE_META[state]
	};
}
function radiusFromMs(ms) {
	return 3.4 + Math.min(1, Math.max(0, (ms - 250) / 2200)) * 7.2;
}
function scanpathFromEvents(events, lineCount = 6) {
	const points = [];
	let y = 0;
	let x = .2;
	for (const event of events.slice(-18)) {
		if (event.kind === "fixation") {
			x = Math.min(.86, Math.max(.12, x + .16));
			points.push({
				x,
				y,
				r: radiusFromMs(event.ms),
				kind: "fixation"
			});
			continue;
		}
		if (event.kind === "saccade") {
			y = Math.min(lineCount - 1, y + 1);
			x = .16 + y * 13 % 5 * .07;
			points.push({
				x,
				y,
				r: 4.2,
				kind: "saccade"
			});
			continue;
		}
		if (event.kind === "skip") {
			y = Math.min(lineCount - 1, y + 2);
			x = .28 + y % 3 * .16;
			points.push({
				x,
				y,
				r: 3.6,
				kind: "skip"
			});
			continue;
		}
		if (event.kind === "regression") {
			y = Math.max(0, y - 1);
			x = Math.min(.84, x + .14);
			points.push({
				x,
				y,
				r: 5,
				kind: "regression"
			});
			continue;
		}
		points.push({
			x,
			y,
			r: 6,
			kind: "disengage"
		});
	}
	return points;
}
function demoScanpath(id) {
	if (id === "decode") return [
		{
			x: .2,
			y: 0,
			r: 8.5,
			kind: "fixation"
		},
		{
			x: .52,
			y: 0,
			r: 9.4,
			kind: "fixation"
		},
		{
			x: .28,
			y: 1,
			r: 8.8,
			kind: "saccade"
		},
		{
			x: .7,
			y: 1,
			r: 10,
			kind: "fixation"
		},
		{
			x: .34,
			y: 2,
			r: 9.2,
			kind: "saccade"
		}
	];
	if (id === "scan") return [
		{
			x: .16,
			y: 0,
			r: 3.6,
			kind: "fixation"
		},
		{
			x: .62,
			y: 1,
			r: 3.4,
			kind: "skip"
		},
		{
			x: .28,
			y: 3,
			r: 3.5,
			kind: "skip"
		},
		{
			x: .74,
			y: 4,
			r: 3.3,
			kind: "skip"
		}
	];
	if (id === "regress") return [
		{
			x: .18,
			y: 0,
			r: 5,
			kind: "fixation"
		},
		{
			x: .48,
			y: 1,
			r: 5.2,
			kind: "saccade"
		},
		{
			x: .72,
			y: 2,
			r: 5.4,
			kind: "saccade"
		},
		{
			x: .4,
			y: 1,
			r: 6.4,
			kind: "regression"
		},
		{
			x: .22,
			y: 0,
			r: 7,
			kind: "regression"
		},
		{
			x: .58,
			y: 2,
			r: 5.2,
			kind: "saccade"
		}
	];
	if (id === "wander") return [
		{
			x: .22,
			y: 0,
			r: 9,
			kind: "fixation"
		},
		{
			x: .7,
			y: 2,
			r: 3.5,
			kind: "skip"
		},
		{
			x: .3,
			y: 1,
			r: 8.6,
			kind: "regression"
		},
		{
			x: .78,
			y: 4,
			r: 3.4,
			kind: "skip"
		},
		{
			x: .42,
			y: 3,
			r: 9.5,
			kind: "fixation"
		}
	];
	if (id === "drift") return [{
		x: .36,
		y: 1,
		r: 9,
		kind: "fixation"
	}, {
		x: .5,
		y: 1,
		r: 6.5,
		kind: "disengage"
	}];
	return [
		{
			x: .16,
			y: 0,
			r: 4.8,
			kind: "fixation"
		},
		{
			x: .4,
			y: 0,
			r: 4.4,
			kind: "fixation"
		},
		{
			x: .68,
			y: 0,
			r: 5,
			kind: "fixation"
		},
		{
			x: .2,
			y: 1,
			r: 4.6,
			kind: "saccade"
		},
		{
			x: .46,
			y: 1,
			r: 4.8,
			kind: "fixation"
		},
		{
			x: .74,
			y: 1,
			r: 4.5,
			kind: "fixation"
		},
		{
			x: .22,
			y: 2,
			r: 5,
			kind: "saccade"
		},
		{
			x: .5,
			y: 2,
			r: 4.6,
			kind: "fixation"
		},
		{
			x: .78,
			y: 2,
			r: 4.8,
			kind: "fixation"
		},
		{
			x: .24,
			y: 3,
			r: 4.7,
			kind: "saccade"
		},
		{
			x: .52,
			y: 3,
			r: 4.5,
			kind: "fixation"
		}
	];
}
var PATTERN_META = {
	flow: {
		label: "On the line",
		science: "Fixation + forward saccade",
		body: "Time on successive lines, then a small forward move. That is the usual reading rhythm.",
		live: "Holding the line.",
		bar: .88,
		detector: "A line held in the reading band, then the next line. No click required.",
		help: "This is the sitting to keep. Leave the page as it is."
	},
	decode: {
		label: "Slow decoding",
		science: "Longer fixations",
		body: "Each line is held longer than a fluent pass. Extra space or plain words can cheapen the next one.",
		live: "Taking more time on each line.",
		bar: .62,
		detector: "Holds over about a second and a half, with few jumps.",
		help: "Plain words, more spacing, or a quieter typeface make the next fixation cheaper."
	},
	scan: {
		label: "Skimming",
		science: "Long saccades, short fixations",
		body: "The page moved in jumps. Little time landed on the line.",
		live: "Jumping ahead.",
		bar: .42,
		detector: "Three or more lines skipped, or a jump with almost no time to land.",
		help: "Word highlight keeps the next pass from skipping."
	},
	regress: {
		label: "Rereading",
		science: "Regressive saccades",
		body: "You moved back through a stretch you had already passed. That is how a miss gets repaired.",
		live: "Going back over a stretch.",
		bar: .28,
		detector: "The foveal line stepped backward, or the page dropped past a stretch already read.",
		help: "A little more line spacing can make it easier to keep your place."
	},
	wander: {
		label: "Mind wandering",
		science: "Decoupled eye movements",
		body: "The eyes still moved, but the rhythm was uneven — long holds mixed with jumps. That is a common signature of mindless reading.",
		live: "The rhythm broke.",
		bar: .2,
		detector: "Long holds and skips in the same window, without a clean forward run.",
		help: "A recap, or word highlight, can catch the last stretch you drifted through."
	},
	drift: {
		label: "Away",
		science: "Disengagement",
		body: "The page stayed open, but the line was not held. That is not a score.",
		live: "The page is waiting.",
		bar: .12,
		detector: "No new fixation or saccade for about ten seconds. The page is parked.",
		help: "When you come back, Insights will still have the last pattern. Nothing is lost."
	}
};
var PATTERN_ORDER = [
	"flow",
	"decode",
	"scan",
	"regress",
	"wander",
	"drift"
];
var GATHER_MS = 8e3;
function isForwardStep(from, to, durationMs) {
	const delta = to - from;
	if (delta < .008 || delta >= .14) return false;
	if (durationMs < 350 || durationMs > 1e4) return false;
	return true;
}
function clampShare(value) {
	if (!Number.isFinite(value) || value <= 0) return 0;
	return Math.round(value);
}
function classifyReading(sample) {
	const elapsed = Math.max(0, sample.elapsedActiveMs);
	const events = sample.neuralEvents ?? [];
	const neural = summarizeNeural(events);
	const passive = detectPassiveState(events, Date.now());
	const gathering = elapsed < GATHER_MS && sample.dwellCount < 2 && sample.skips.length < 1 && sample.rereads.length < 1 && events.length < 2;
	const slow = sample.currentWpm != null && sample.currentWpm < sample.targetWpm * .72 && sample.currentWpm > 40;
	const skipN = Math.max(sample.skips.length, neural.skips);
	const rereadN = Math.max(sample.rereads.length, neural.regressions);
	const dwellN = Math.max(sample.dwellCount, neural.fixations);
	const longN = Math.max(sample.longDwellCount, neural.longFixations);
	const forwardN = Math.max(sample.forwardSteps, neural.saccades);
	const idleRatio = elapsed > 0 ? Math.min(1, sample.idleMs / elapsed) : sample.idleMs > 8e3 ? 1 : 0;
	const meanDwell = dwellN > 0 ? Math.max(sample.dwellMs, neural.fixationMs) / dwellN : neural.meanFixationMs;
	const raw = {
		flow: forwardN * 2 + Math.max(0, dwellN - longN) * 2 + (sample.speaking ? 1 : 0) + (passive.state === "engaged" ? 4 : 0),
		decode: longN * 3 + (slow ? 4 : 0) + (meanDwell >= 1600 ? 2 : 0),
		scan: skipN * 5 + (dwellN === 0 && sample.progress >= .2 ? 3 : 0) + (passive.state === "skimming" ? 4 : 0),
		regress: rereadN * 5 + (rereadN >= 2 && skipN === 0 ? 2 : 0),
		wander: (passive.state === "wandering" ? 8 : 0) + (longN >= 2 && skipN >= 1 ? 5 : 0) + (longN >= 2 && rereadN >= 2 && forwardN <= longN ? 3 : 0),
		drift: (idleRatio >= .35 ? 6 : 0) + (sample.idleMs >= 1e4 ? 4 : 0) + (passive.state === "parked" ? 5 : 0) + (dwellN === 0 && skipN === 0 && forwardN === 0 && sample.progress < .12 && elapsed >= GATHER_MS ? 3 : 0)
	};
	const total = PATTERN_ORDER.reduce((sum, id) => sum + raw[id], 0);
	const fallback = sample.progress >= .08 || dwellN > 0 || forwardN > 0 ? "flow" : "drift";
	const id = (PATTERN_ORDER.reduce((best, next) => {
		if (!best || raw[next] > raw[best]) return next;
		return best;
	}, null) ?? fallback) || fallback;
	const chosen = total > 0 && raw[id] > 0 ? id : fallback;
	const mix = PATTERN_ORDER.map((key) => {
		const share = total > 0 ? clampShare(raw[key] / total * 100) : key === chosen ? 100 : 0;
		return {
			id: key,
			label: PATTERN_META[key].label,
			share,
			weight: PATTERN_META[key].bar
		};
	}).filter((item) => item.share > 0);
	const mixTotal = mix.reduce((sum, item) => sum + item.share, 0);
	if (mix.length && mixTotal !== 100) {
		const head = mix[0];
		if (head) head.share += 100 - mixTotal;
	}
	const meta = PATTERN_META[chosen];
	const peak = total > 0 ? raw[chosen] / total : 0;
	const passiveState = gathering ? "gathering" : passive.state;
	return {
		id: chosen,
		label: gathering ? "Gathering" : meta.label,
		science: meta.science,
		body: gathering ? "Still watching how this sitting moves through the page." : meta.body,
		live: gathering ? "Watching how you read." : meta.live,
		confidence: gathering ? 0 : Math.max(.2, Math.min(1, peak)),
		gathering,
		mix: gathering ? [] : mix,
		passive: passiveState
	};
}
var MACHADO_2009 = {
	protanopia: [
		[
			.152286,
			1.052583,
			-.204868
		],
		[
			.114503,
			.786281,
			.099216
		],
		[
			-.003882,
			-.048116,
			1.051998
		]
	],
	deuteranopia: [
		[
			.367322,
			.860646,
			-.227968
		],
		[
			.280085,
			.672501,
			.047413
		],
		[
			-.01182,
			.04294,
			.968881
		]
	],
	tritanopia: [
		[
			1.255528,
			-.076749,
			-.178779
		],
		[
			-.078411,
			.930809,
			.147602
		],
		[
			.004733,
			.691367,
			.3039
		]
	]
};
var CVD_LABELS = {
	none: "Typical",
	protanopia: "Protanopia",
	deuteranopia: "Deuteranopia",
	tritanopia: "Tritanopia"
};
var CVD_HINTS = {
	none: "No simulation. Pair as measured.",
	protanopia: "Reds lean olive. The whole app preview updates.",
	deuteranopia: "Reds and greens meet. The whole app preview updates.",
	tritanopia: "Blues and yellows meet. The whole app preview updates."
};
function isCvdKind(value) {
	return value === "none" || value === "protanopia" || value === "deuteranopia" || value === "tritanopia";
}
/** Inverse of WCAG linearize: linear 0–1 → sRGB 8-bit. */
function delinearizeChannel(linear) {
	const c = Math.min(1, Math.max(0, linear));
	const srgb = c <= .0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - .055;
	return Math.round(Math.min(1, Math.max(0, srgb)) * 255);
}
function multiply(matrix, rgb) {
	return [
		matrix[0][0] * rgb[0] + matrix[0][1] * rgb[1] + matrix[0][2] * rgb[2],
		matrix[1][0] * rgb[0] + matrix[1][1] * rgb[1] + matrix[1][2] * rgb[2],
		matrix[2][0] * rgb[0] + matrix[2][1] * rgb[1] + matrix[2][2] * rgb[2]
	];
}
function simulateLinearRgb(linear, kind) {
	if (kind === "none") return linear;
	const [r, g, b] = multiply(MACHADO_2009[kind], linear);
	return [
		Math.min(1, Math.max(0, r)),
		Math.min(1, Math.max(0, g)),
		Math.min(1, Math.max(0, b))
	];
}
function simulateRgb(rgb, kind) {
	const simulated = simulateLinearRgb([
		linearizeChannel(rgb[0]),
		linearizeChannel(rgb[1]),
		linearizeChannel(rgb[2])
	], kind);
	return [
		delinearizeChannel(simulated[0]),
		delinearizeChannel(simulated[1]),
		delinearizeChannel(simulated[2])
	];
}
function toHex(channel) {
	return channel.toString(16).padStart(2, "0");
}
function rgbToHex(rgb) {
	return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
}
function simulateHex(hex, kind) {
	const rgb = parseHex(hex);
	if (kind === "none") return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
	return rgbToHex(simulateRgb(rgb, kind));
}
function simulatedContrast(foreground, background, kind) {
	return contrastRatio(simulateHex(foreground, kind), simulateHex(background, kind));
}
/** True when two colors were far apart in sRGB and the CVD transform pulls them together. */
function hueDistinctionLost(foreground, background, kind) {
	if (kind === "none") return false;
	const original = rgbDistance(parseHex(foreground), parseHex(background));
	const seen = rgbDistance(parseHex(simulateHex(foreground, kind)), parseHex(simulateHex(background, kind)));
	return original >= 80 && seen < original * .45;
}
/** Euclidean distance in sRGB 8-bit. Used to show hue collapse, not perception. */
function rgbDistance(a, b) {
	const dr = a[0] - b[0];
	const dg = a[1] - b[1];
	const db = a[2] - b[2];
	return Math.sqrt(dr * dr + dg * dg + db * db);
}
/** Hex paints that match [data-scheme] in styles.css. */
var SCHEME_PAINT = {
	paper: {
		"--color-bg": "#f0e8dc",
		"--color-surface": "#faf4ea",
		"--color-fg": "#1c1611",
		"--color-muted": "#5c5046",
		"--color-subtle": "#7a6d60",
		"--color-primary": "#3d2a1f",
		"--color-primary-fg": "#f4ece1",
		"--color-accent": "#7a4332"
	},
	night: {
		"--color-bg": "#1a1612",
		"--color-surface": "#241e18",
		"--color-fg": "#f3eadf",
		"--color-muted": "#c4b5a4",
		"--color-subtle": "#9a8c7c",
		"--color-primary": "#f3eadf",
		"--color-primary-fg": "#1a1612",
		"--color-accent": "#d4a090"
	},
	contrast: {
		"--color-bg": "#fffdf6",
		"--color-surface": "#ffffff",
		"--color-fg": "#100c08",
		"--color-muted": "#3d342c",
		"--color-subtle": "#5c5146",
		"--color-primary": "#100c08",
		"--color-primary-fg": "#fffdf6",
		"--color-accent": "#6b2e1f"
	},
	sage: {
		"--color-bg": "#e7eee6",
		"--color-surface": "#f3f7f2",
		"--color-fg": "#1b2319",
		"--color-muted": "#4d5a4b",
		"--color-subtle": "#6b7868",
		"--color-primary": "#2c3f30",
		"--color-primary-fg": "#f3f7f2",
		"--color-accent": "#3f5c45"
	},
	ink: {
		"--color-bg": "#14161a",
		"--color-surface": "#1c1f26",
		"--color-fg": "#f2f4f8",
		"--color-muted": "#a8b1be",
		"--color-subtle": "#88919e",
		"--color-primary": "#f2f4f8",
		"--color-primary-fg": "#14161a",
		"--color-accent": "#a8b2c0"
	},
	sepia: {
		"--color-bg": "#e9dcc8",
		"--color-surface": "#f4ead9",
		"--color-fg": "#2a1f14",
		"--color-muted": "#5c4a38",
		"--color-subtle": "#7a6550",
		"--color-primary": "#3a2818",
		"--color-primary-fg": "#f4ead9",
		"--color-accent": "#8a4b32"
	},
	mist: {
		"--color-bg": "#e8eef2",
		"--color-surface": "#f4f8fb",
		"--color-fg": "#1a232b",
		"--color-muted": "#4a5964",
		"--color-subtle": "#6a7882",
		"--color-primary": "#1a232b",
		"--color-primary-fg": "#f4f8fb",
		"--color-accent": "#3d5c6e"
	},
	dusk: {
		"--color-bg": "#1c1418",
		"--color-surface": "#261c22",
		"--color-fg": "#f3e6dc",
		"--color-muted": "#c4b0a4",
		"--color-subtle": "#9a877c",
		"--color-primary": "#f3e6dc",
		"--color-primary-fg": "#1c1418",
		"--color-accent": "#d4a090"
	},
	cream: {
		"--color-bg": "#f7f1e3",
		"--color-surface": "#fffaf0",
		"--color-fg": "#2c2418",
		"--color-muted": "#5c5346",
		"--color-subtle": "#7a7160",
		"--color-primary": "#2c2418",
		"--color-primary-fg": "#fffaf0",
		"--color-accent": "#8a4b32"
	},
	forest: {
		"--color-bg": "#152019",
		"--color-surface": "#1c2a22",
		"--color-fg": "#e6f0e8",
		"--color-muted": "#a8c0b0",
		"--color-subtle": "#87a090",
		"--color-primary": "#e6f0e8",
		"--color-primary-fg": "#152019",
		"--color-accent": "#8fbf9a"
	},
	peach: {
		"--color-bg": "#f4ddd2",
		"--color-surface": "#faebe3",
		"--color-fg": "#2a1c16",
		"--color-muted": "#5c463c",
		"--color-subtle": "#7a6258",
		"--color-primary": "#2a1c16",
		"--color-primary-fg": "#faebe3",
		"--color-accent": "#8a4b32"
	},
	butter: {
		"--color-bg": "#f2ebc4",
		"--color-surface": "#f7f3d8",
		"--color-fg": "#2a2412",
		"--color-muted": "#5c5438",
		"--color-subtle": "#7a7250",
		"--color-primary": "#2a2412",
		"--color-primary-fg": "#f7f3d8",
		"--color-accent": "#7a5c28"
	}
};
var PAINT_KEYS = Object.keys(SCHEME_PAINT.paper);
/** Remap the live theme tokens through Machado, or clear the override. */
function applyCvdPaint(theme, kind) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	if (kind === "none") {
		for (const key of PAINT_KEYS) root.style.removeProperty(key);
		delete root.dataset.cvd;
		return;
	}
	const paint = SCHEME_PAINT[theme];
	for (const key of PAINT_KEYS) root.style.setProperty(key, simulateHex(paint[key] ?? "#000000", kind));
	root.dataset.cvd = kind;
}
var SCHEMES = [
	"paper",
	"night",
	"contrast",
	"sage",
	"ink",
	"sepia",
	"mist",
	"dusk",
	"cream",
	"forest",
	"peach",
	"butter"
];
function isThemeId(value) {
	return typeof value === "string" && SCHEMES.includes(value);
}
function isDarkScheme(theme) {
	return DARK_SCHEMES.includes(theme);
}
function applyColorScheme(theme, cvd) {
	if (typeof document === "undefined") return;
	document.documentElement.dataset.scheme = theme;
	const stored = document.documentElement.dataset.cvd;
	applyCvdPaint(theme, cvd ?? (isCvdKind(stored) ? stored : "none"));
}
/** Extra dwell at sentence ends vs. a steady tick. */
var SENTENCE_REST = 1.85;
/** Extra dwell at commas / dashes when breathing. */
var CLAUSE_REST = 1.38;
/** Floor so a rest never stalls auto-scroll. */
var MIN_PACE = .42;
function resolveRhythmCurve(curve, optimization) {
	if (curve === "steady" || curve === "sentence" || curve === "breath") return curve;
	return optimization ? "sentence" : "steady";
}
function isSentenceRest(token, next = "") {
	return isSentenceBoundary(token, next);
}
function isClauseRest(token) {
	return /[,;:—–]["'”’)]*$/.test(token.trim());
}
/** How much slower than target this token should be (1 = target). */
function paceMultiplier(token, curve, next = "") {
	if (curve === "steady") return 1;
	if (isSentenceRest(token, next)) return 1 / SENTENCE_REST;
	if (curve === "breath" && isClauseRest(token)) return 1 / CLAUSE_REST;
	return 1;
}
function rsvpDelayMs(token, wpm, curve, next = "") {
	const base = 60 / Math.max(80, wpm) * 1e3;
	const pace = paceMultiplier(token, curve, next);
	return Math.round(base / Math.max(MIN_PACE, pace));
}
/** Spritz-style optimal recognition point inside a token. */
function orpIndex(word) {
	const n = word.length;
	if (n <= 1) return 0;
	if (n <= 3) return 0;
	if (n <= 5) return 1;
	if (n <= 9) return 2;
	if (n <= 13) return 3;
	return 4;
}
function splitOrp(word) {
	if (!word) return {
		before: "",
		orp: "",
		after: ""
	};
	const index = Math.min(word.length - 1, orpIndex(word));
	return {
		before: word.slice(0, index),
		orp: word[index] ?? "",
		after: word.slice(index + 1)
	};
}
/** Pixels to advance this frame so remaining distance maps onto remaining words at target WPM. */
function autoScrollDeltaPx(opts) {
	const { remainingPx, remainingWords, targetWpm, dtSec, focusToken, nextToken = "", curve } = opts;
	if (remainingPx <= 0 || remainingWords <= 0) return 0;
	return remainingPx / remainingWords * (targetWpm / 60) * paceMultiplier(focusToken, curve, nextToken) * dtSec;
}
function tokenContextAtProgress(words, progress) {
	if (words.length === 0) return {
		token: "",
		next: "",
		index: 0
	};
	const index = Math.min(words.length - 1, Math.max(0, Math.floor(progress * words.length)));
	return {
		token: words[index] ?? "",
		next: words[index + 1] ?? "",
		index
	};
}
/** Sentinel that survives String.trim() (form-feed does not). */
var PDF_PAGE_BREAK = "\n\n<!--page-->\n\n";
function joinPdfPages(pages) {
	if (pages.length <= 1) return pages[0] ?? "";
	return pages.join(PDF_PAGE_BREAK);
}
function splitPdfPages(content) {
	if (!content) return [];
	if (!content.includes("<!--page-->")) return [content];
	return content.split("<!--page-->").map((page) => page.replace(/^\s+|\s+$/g, ""));
}
var KIND = "chapter|chapters|chap\\.?|book|part|canto|act|scene|letter|stave";
var ORDINAL = "first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth";
var WORDS$1 = "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty";
var ROMAN = "[ivxlcdm]{1,8}";
var NUM = `(?:\\d{1,3}|${ROMAN}|${WORDS$1}|${ORDINAL})`;
var SMALL = "a|an|the|of|in|on|and|or|to|for|from|at|by|with";
var HEADING = new RegExp(`^(${KIND})\\s+(${NUM})\\b(?:[.:)\\]—–-]+\\s*(.*))?$`, "i");
var HEADING_PREFIX = new RegExp(`^(${KIND})\\s+(${NUM})\\b[.:)\\]—–-]*\\s*`, "i");
var ROMAN_TITLE = new RegExp(`^(${ROMAN})\\.\\s+((?:[A-Z][-\\w'’]*|${SMALL})(?:\\s+(?:(?:${SMALL})|[A-Z][-\\w'’]+)){0,12})\\.?$`, "i");
var SKIP = /^(contents|table of contents|illustrations|index|cover|title page)\.?$/i;
function titleCase(value) {
	return value.toLowerCase().replace(/\b[a-z]/g, (ch) => ch.toUpperCase()).replace(/\b(Of|The|And|Or|To|In|On|A|An|For|From|At|By|With)\b/g, (word, offset) => offset === 0 ? word : word.toLowerCase());
}
function tidyRest(rest) {
	const clipped = rest.replace(/^[.:)\-—–\s]+/, "").trim();
	if (!clipped) return "";
	if (clipped.length > 52) return "";
	if (/^[a-z]/.test(clipped)) return "";
	const cut = clipped.replace(/\s+[a-z][\s\S]*$/, "").trim();
	if (cut.length < 2) return "";
	return cut.replace(/[.:]+$/, "");
}
/** Pull a chapter heading from a short line or the start of extracted PDF text. */
function headingTitle(raw) {
	const line = raw.replace(/\s+/g, " ").trim();
	if (!line || line.length > 160) return null;
	if (SKIP.test(line)) return null;
	const candidate = line.length > 90 ? line.slice(0, 90) : line;
	const exact = candidate.match(HEADING);
	if (exact) {
		const kind = titleCase(exact[1].replace(/\.$/, ""));
		const num = /[ivxlcdm]+/i.test(exact[2]) ? exact[2].toUpperCase() : titleCase(exact[2]);
		const rest = tidyRest(exact[3] ?? "");
		return rest ? `${kind} ${num} · ${rest}` : `${kind} ${num}`;
	}
	const prefix = candidate.match(HEADING_PREFIX);
	if (prefix && prefix.index === 0) {
		const kind = titleCase(prefix[1].replace(/\.$/, ""));
		const num = /[ivxlcdm]+/i.test(prefix[2]) ? prefix[2].toUpperCase() : titleCase(prefix[2]);
		const rest = tidyRest(candidate.slice(prefix[0].length));
		return rest ? `${kind} ${num} · ${rest}` : `${kind} ${num}`;
	}
	const roman = candidate.match(ROMAN_TITLE);
	if (roman) return `${roman[1].toUpperCase()}. ${roman[2].trim()}`;
	return null;
}
function headingCount(text) {
	const lines = text.split(/\n+/);
	let count = 0;
	for (const line of lines) {
		if (headingTitle(line.trim())) count += 1;
		if (count >= 4) return count;
	}
	const blob = text.replace(/\s+/g, " ");
	const re = new RegExp(`(?:${KIND})\\s+(${NUM})\\b`, "gi");
	const extra = blob.match(re);
	return Math.max(count, extra?.length ?? 0);
}
function firstHeading(page) {
	const trimmed = page.trim();
	if (!trimmed) return null;
	if (headingCount(trimmed) >= 3 && trimmed.length < 2200) return null;
	const lines = trimmed.split(/\n+/).map((line) => line.trim()).filter(Boolean);
	for (const line of lines.slice(0, 8)) {
		const title = headingTitle(line);
		if (title) return title;
	}
	return headingTitle(trimmed.slice(0, 120));
}
function detectChapters(pages) {
	if (pages.length < 2) return [];
	const hits = [];
	pages.forEach((page, index) => {
		const title = firstHeading(page);
		if (title) hits.push({
			page: index + 1,
			title
		});
	});
	const kept = hits.filter((hit, index) => {
		const next = hits[index + 1];
		const span = (next ? next.page : pages.length + 1) - hit.page;
		const body = pages[hit.page - 1] ?? "";
		if (span <= 1 && body.length < 220) return false;
		return true;
	});
	if (kept.length < 2) return [];
	return kept.map((hit, index) => ({
		title: hit.title,
		startPage: hit.page,
		endPage: index + 1 < kept.length ? kept[index + 1].page - 1 : pages.length
	}));
}
function isAllCapsTitle(line) {
	const t = line.trim();
	return t.length >= 3 && t.length <= 48 && /^[A-Z][A-Z\s,'’:-]+$/.test(t) && /[A-Z]{3}/.test(t);
}
function splitTextChapters(text) {
	const source = text.replace(/\r\n/g, "\n").trim();
	if (!source) return [];
	const lines = source.split("\n");
	const hits = [];
	for (let i = 0; i < lines.length; i += 1) {
		const title = headingTitle(lines[i]);
		if (!title) continue;
		let label = title;
		const next = lines[i + 1]?.trim() ?? "";
		if (next && isAllCapsTitle(next) && !headingTitle(next)) label = `${title} · ${titleCase(next)}`;
		hits.push({
			index: i,
			title: label
		});
	}
	const kept = [];
	for (let i = 0; i < hits.length; i += 1) {
		const start = hits[i].index;
		const end = i + 1 < hits.length ? hits[i + 1].index : lines.length;
		const skipSubtitle = isAllCapsTitle(lines[start + 1] ?? "") && !headingTitle(lines[start + 1] ?? "");
		const bodyStart = start + 1 + (skipSubtitle ? 1 : 0);
		const body = lines.slice(bodyStart, end).join("\n").trim();
		if (body.length < 160) continue;
		kept.push({
			title: hits[i].title,
			body
		});
	}
	if (kept.length < 2) return [];
	const preamble = lines.slice(0, hits[0]?.index ?? 0).join("\n").trim();
	if (preamble.length >= 480) return [{
		title: "Front matter",
		body: preamble
	}, ...kept];
	return kept;
}
function joinTextChapters(chapters) {
	return chapters.map((chapter) => `${chapter.title.replace(" · ", "\n")}\n\n${chapter.body}`.trim()).join("\n\n");
}
function chapterAtPage(chapters, page) {
	if (!chapters.length || page < 1) return 0;
	if (page < chapters[0].startPage) return 0;
	for (let i = chapters.length - 1; i >= 0; i -= 1) if (page >= chapters[i].startPage) return i + 1;
	return 0;
}
/** Above this, an unbroken text is long enough that paging it beats scrolling it. */
var LONG_TEXT_WORDS = 12e3;
/** Words per synthetic section — roughly ten minutes at an average pace. */
var SECTION_WORDS = 2500;
/**
* Fallback pagination for a long text that declares no chapters.
*
* Plenty of Gutenberg plain-text files format their headings in a way
* `splitTextChapters` cannot recognise, and those books then arrive as one
* continuous document: every paragraph laid out, measured, and painted at once.
*
* This splits on paragraph boundaries only, and rejoins with the blank line it
* split on, so the text is paged without being rewritten — unlike
* `chunkByMinutes`, which collapses paragraphs into a single run and is a
* reading mode rather than a way to divide a book.
*
* Returns `[]` for anything short enough to read in one go, so the reader keeps
* its plain scrolling view when paging would only add navigation nobody needs.
*/
function paginateLongText(text) {
	const source = text.replace(/\r\n/g, "\n").trim();
	if (!source) return [];
	if (source.split(/\s+/).length < LONG_TEXT_WORDS) return [];
	const paragraphs = source.split(/\n{2,}/);
	const sections = [];
	let bucket = [];
	let words = 0;
	const flush = () => {
		if (!bucket.length) return;
		sections.push({
			title: `Part ${sections.length + 1}`,
			body: bucket.join("\n\n")
		});
		bucket = [];
		words = 0;
	};
	for (const paragraph of paragraphs) {
		const trimmed = paragraph.trim();
		if (!trimmed) continue;
		if (words && words + trimmed.split(/\s+/).length > SECTION_WORDS) flush();
		bucket.push(trimmed);
		words += trimmed.split(/\s+/).length;
	}
	flush();
	return sections.length > 1 ? sections : [];
}
var documentProxy = null;
var renderTask = null;
function hasPdfDocument() {
	return Boolean(documentProxy);
}
function rememberPdfDocument(next) {
	if (documentProxy && documentProxy !== next) {
		renderTask?.cancel();
		documentProxy.cleanup();
	}
	documentProxy = next;
}
function forgetPdfDocument() {
	renderTask?.cancel();
	renderTask = null;
	if (documentProxy) {
		documentProxy.cleanup();
		documentProxy = null;
	}
}
async function renderPdfPage(pageNumber, canvas, maxCssWidth) {
	if (!documentProxy) return false;
	const page = await documentProxy.getPage(pageNumber);
	const base = page.getViewport({ scale: 1 });
	const scale = Math.max(280, Math.min(maxCssWidth, base.width)) / base.width;
	const viewport = page.getViewport({ scale });
	const outputScale = typeof window !== "undefined" ? Math.min(2, window.devicePixelRatio || 1) : 1;
	canvas.width = Math.floor(viewport.width * outputScale);
	canvas.height = Math.floor(viewport.height * outputScale);
	canvas.style.width = `${Math.floor(viewport.width)}px`;
	canvas.style.height = `${Math.floor(viewport.height)}px`;
	const context = canvas.getContext("2d");
	if (!context) return false;
	context.setTransform(outputScale, 0, 0, outputScale, 0, 0);
	renderTask?.cancel();
	const task = page.render({
		canvas,
		canvasContext: context,
		viewport
	});
	renderTask = task;
	try {
		await task.promise;
		return true;
	} catch (error) {
		if ((error instanceof Error ? error.name : "") === "RenderingCancelledException") return false;
		throw error;
	} finally {
		if (renderTask === task) renderTask = null;
	}
}
var SESSIONS_KEY = "neurolens-sessions";
var ADAPTIVE_MEMORY_KEY = "neurolens-adaptive-memory";
var PROFILE_KEY = "neurolens-profile";
var MODE_KEY = "neurolens-mode";
var TARGET_WPM_KEY = "neurolens-target-wpm";
var LOCKS_KEY = "neurolens-locks";
var SAVED_KEY = "neurolens-saved-profiles";
var BOOKMARKS_KEY = "neurolens-bookmarks";
var HIGHLIGHTS_KEY = "neurolens-highlights";
var CVD_KEY = "neurolens-cvd";
var LOOKUP_MIGRATION = "neurolens-lookup-v2";
var EMPTY_READING = {
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
	neuralEvents: []
};
var TAB_ORDER = [
	"explore",
	"read",
	"library",
	"insights",
	"settings"
];
function persistProfile(profile, mode) {
	writeLocal(PROFILE_KEY, JSON.stringify(profile));
	writeLocal(MODE_KEY, mode);
}
var FONT_IDS = [
	"sans",
	"serif",
	"lexend",
	"atkinson",
	"inclusive",
	"andika",
	"opendyslexic",
	"literata",
	"comicneue",
	"sourcesans"
];
function normalizeProfile(profile) {
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
		motionCues: Boolean(profile.motionCues),
		companion: profile.companion !== false
	};
}
function persistAndApply(profile, mode) {
	const next = normalizeProfile(profile);
	persistProfile(next, mode);
	applyColorScheme(next.theme);
	return next;
}
function writeLocal(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch {}
}
function forgetLocal(keys) {
	try {
		for (const key of keys) localStorage.removeItem(key);
	} catch {}
}
/** Roughly the ceiling browsers put on one localStorage origin, minus headroom
*  for the other keys this app writes. */
var SESSIONS_BUDGET = 35e5;
/**
* Persist history, shedding the oldest entries until it fits.
*
* Sessions carry their full text so reading can resume, so a shelf of novels
* runs into the storage quota. `writeLocal` swallows that failure, which meant
* the real behaviour was worse than it looked: one oversized history and
* *nothing* saved after it, newest included. Dropping whole old sessions keeps
* recent books resumable, and keeps the invariant that a session either
* restores completely or is not offered at all.
*/
function persistSessions(sessions) {
	let kept = sessions;
	let payload = JSON.stringify(kept);
	while (payload.length > SESSIONS_BUDGET && kept.length > 1) {
		kept = kept.slice(0, -1);
		payload = JSON.stringify(kept);
	}
	writeLocal(SESSIONS_KEY, payload);
}
function persistAdaptiveMemory(memory) {
	writeLocal(ADAPTIVE_MEMORY_KEY, JSON.stringify(memory));
}
function persistTargetWpm(value) {
	writeLocal(TARGET_WPM_KEY, String(value));
}
/**
* Read stored highlights, upgrading the old shape on the way in.
*
* Highlights used to be a bare `number[]` of line indices. Those indices are no
* longer meaningful on their own — they were ambiguous across sections, which
* is the bug this shape replaces — and the text they referred to was never
* recorded, so there is nothing to recover them from. They are dropped rather
* than guessed at: a highlight pointing at the wrong sentence is worse than one
* that is gone, and silently relocating someone's marks would be its own bug.
*/
function readHighlights(raw) {
	if (!raw || typeof raw !== "object") return {};
	const out = {};
	for (const [key, value] of Object.entries(raw)) {
		if (!Array.isArray(value)) continue;
		const kept = value.filter((item) => Boolean(item) && typeof item === "object" && typeof item.lineIdx === "number").map((item) => typeof item.start === "number" && typeof item.end === "number" ? item : {
			...item,
			start: 0,
			end: (item.text ?? "").length
		});
		if (kept.length) out[key] = kept;
	}
	return out;
}
function textKey(text) {
	return text.trim().slice(0, 48) || "default";
}
function refreshRecommendation(reading, targetWpm, profile, mode, dismissedRules, existing, feel, lockedSettings, memory = {}) {
	if (mode !== "adaptive") return null;
	if (existing) return existing;
	return recommendAdaptations({
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
		feel
	}, {
		targetWpm,
		lineHeight: profile.lineHeight,
		focusHighlight: profile.focusHighlight,
		theme: profile.theme,
		fontSize: profile.fontSize
	}, dismissedRules, lockedSettings, memory);
}
function withSessionMetrics(sessions, text, reading, targetWpm, section) {
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
		neuralEvents: reading.neuralEvents ?? []
	});
	return sessions.map((session) => session.content === text ? {
		...session,
		progress: reading.progress,
		section: section > 0 ? section : void 0,
		currentWpm: reading.currentWpm,
		pauseCount: reading.pauses.length,
		rereadCount: reading.rereads.length,
		elapsedMs: reading.elapsedActiveMs,
		pattern: pattern.gathering ? session.pattern : pattern.id
	} : session);
}
function previousFor(setting, profile, targetWpm) {
	if (setting === "targetWpm") return targetWpm;
	if (setting === "lineHeight") return profile.lineHeight;
	if (setting === "theme") return profile.theme;
	if (setting === "fontSize") return profile.fontSize;
	return profile.focusHighlight;
}
var useAppStore = create((set, get) => ({
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
	adaptiveMemory: {},
	pendingJump: null,
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
	restoreTo: 0,
	hydrate: () => {
		if (get().hydrated || typeof window === "undefined") return;
		try {
			const sessions = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
			const adaptiveMemory = JSON.parse(localStorage.getItem(ADAPTIVE_MEMORY_KEY) || "{}");
			const savedProfile = localStorage.getItem(PROFILE_KEY);
			const savedMode = localStorage.getItem(MODE_KEY) ?? "default";
			const mode = READING_PROFILES[savedMode] ? savedMode : "default";
			const profile = normalizeProfile(savedProfile ? {
				...READING_PROFILES[mode],
				...JSON.parse(savedProfile)
			} : READING_PROFILES[mode]);
			const savedWpm = Number(localStorage.getItem(TARGET_WPM_KEY));
			const savedCvd = localStorage.getItem(CVD_KEY);
			const cvdPreview = isCvdKind(savedCvd) ? savedCvd : "none";
			applyColorScheme(profile.theme, cvdPreview);
			const lockedSettings = JSON.parse(localStorage.getItem(LOCKS_KEY) || "[]");
			const savedProfiles = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
			const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
			const highlights = JSON.parse(localStorage.getItem(HIGHLIGHTS_KEY) || "{}");
			if (!localStorage.getItem(LOOKUP_MIGRATION)) {
				profile.lookup = true;
				localStorage.setItem(LOOKUP_MIGRATION, "1");
				persistProfile(profile, mode);
			}
			set({
				sessions: Array.isArray(sessions) ? sessions : [],
				adaptiveMemory: adaptiveMemory && typeof adaptiveMemory === "object" ? adaptiveMemory : {},
				profile,
				mode,
				targetWpm: Number.isFinite(savedWpm) && savedWpm >= 120 ? savedWpm : 220,
				lockedSettings: Array.isArray(lockedSettings) ? lockedSettings : [],
				savedProfiles: Array.isArray(savedProfiles) ? savedProfiles : [],
				bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
				highlights: readHighlights(highlights),
				cvdPreview,
				hydrated: true
			});
		} catch {
			set({ hydrated: true });
		}
	},
	requestJump: (section, lineIdx) => set({ pendingJump: {
		section,
		lineIdx
	} }),
	clearJump: () => set({ pendingJump: null }),
	setTab: (tab) => {
		const current = get().tab;
		if (tab === "read" && !get().text) return;
		set({
			tab,
			direction: TAB_ORDER.indexOf(tab) >= TAB_ORDER.indexOf(current) ? 1 : -1,
			autoScrolling: false,
			controlsOpen: tab === "read" ? get().controlsOpen : false
		});
	},
	startReading: (raw, meta) => {
		const kind = meta?.kind ?? "text";
		const pages = kind === "pdf" ? splitPdfPages(raw) : [];
		const text = kind === "pdf" ? raw : raw.trim();
		if (kind !== "pdf" && !text) return;
		try {
			localStorage.setItem("neurolens-started", "1");
		} catch {}
		if (kind === "pdf") {
			if (!pages.length) return;
		} else forgetPdfDocument();
		const sessions = [{
			title: meta?.title || text.split(/\n/).find((line) => line.trim())?.slice(0, 60) || "Untitled reading",
			content: text,
			openedAt: Date.now(),
			progress: 0,
			kind,
			sourceId: meta?.sourceId
		}, ...get().sessions.filter((session) => session.content.length !== text.length || session.content !== text)].slice(0, 12);
		persistSessions(sessions);
		const pdfChapters = kind === "pdf" ? detectChapters(pages) : [];
		const declaredChapters = kind === "text" ? splitTextChapters(text) : [];
		const textChapters = kind === "text" && declaredChapters.length === 0 ? paginateLongText(text) : declaredChapters;
		const chapterCount = kind === "pdf" ? pdfChapters.length : textChapters.length > 1 ? textChapters.length : 0;
		const initialPage = kind === "pdf" ? Math.min(pages.length, Math.max(1, meta?.pdfPage ?? 1)) : 0;
		const chapterIndex = chapterCount > 1 ? kind === "pdf" ? chapterAtPage(pdfChapters, initialPage) : Math.min(chapterCount, Math.max(1, meta?.chapter ?? 1)) : 0;
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
			restoreTo: typeof meta?.progress === "number" && Number.isFinite(meta.progress) ? Math.min(1, Math.max(0, meta.progress)) : 0,
			reading: {
				...EMPTY_READING,
				startedAt: Date.now(),
				progress: typeof meta?.progress === "number" && Number.isFinite(meta.progress) ? Math.min(1, Math.max(0, meta.progress)) : kind === "pdf" && pages.length ? initialPage / pages.length : chapterCount ? chapterIndex / chapterCount : 0
			},
			recommendation: null,
			dismissedRules: [],
			lastAdaptiveChange: null,
			readingFeel: null
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
			reading: {
				...reading,
				progress: next / count
			}
		});
	},
	setChapter: (chapter) => {
		const state = get();
		if (state.chapterCount < 1) return;
		const next = Math.min(state.chapterCount, Math.max(1, Math.round(chapter)));
		if (state.sourceKind === "pdf") {
			const start = detectChapters(splitPdfPages(state.text))[next - 1]?.startPage ?? state.pdfPage;
			const reading = state.reading;
			set({
				chapterIndex: next,
				pdfPage: start,
				autoScrolling: false,
				reading: {
					...reading,
					progress: state.pdfPageCount ? start / state.pdfPageCount : next / state.chapterCount
				}
			});
			return;
		}
		const reading = state.reading;
		set({
			chapterIndex: next,
			autoScrolling: false,
			reading: {
				...reading,
				progress: next / state.chapterCount
			}
		});
	},
	setMode: (mode) => {
		try {
			const base = READING_PROFILES[mode];
			if (!base) return;
			const current = get().profile;
			const next = persistAndApply({
				...base,
				theme: current.theme,
				align: current.align
			}, mode);
			const state = get();
			set({
				mode,
				profile: next,
				recommendation: mode === "adaptive" ? refreshRecommendation(state.reading, state.targetWpm, next, mode, state.dismissedRules, null, state.readingFeel, state.lockedSettings) : null
			});
		} catch (error) {
			console.error(error);
		}
	},
	setProfile: (profile) => {
		try {
			const before = get().profile;
			const next = persistAndApply(profile, get().mode);
			/**
			* A hand-made change is evidence, so the engine hears about it.
			*
			* This is the strongest signal the app has and it used to be discarded:
			* the engine learned only from the outcomes of its own suggestions, while
			* a reader reaching over and softening the fixation themselves — a direct
			* statement of preference — told it nothing at all.
			*
			* Direction decides the sign. Someone repeatedly *lowering* a setting is
			* saying the engine's instinct to raise it is wrong for them, and reading
			* only "they touched this lever" would take that as encouragement.
			*/
			const stated = readPreference(before, next);
			let adaptiveMemory = get().adaptiveMemory;
			if (stated) {
				const agrees = stated.direction === "up";
				adaptiveMemory = learnFromPreference(adaptiveMemory, stated.rule, agrees ? PREFERENCE_WEIGHT.agrees : PREFERENCE_WEIGHT.disagrees);
				persistAdaptiveMemory(adaptiveMemory);
			}
			set({
				profile: next,
				adaptiveMemory
			});
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
		const reading = {
			...state.reading,
			...patch,
			pauses: patch.pauses ?? state.reading.pauses,
			rereads: patch.rereads ?? state.reading.rereads,
			skips: patch.skips ?? state.reading.skips ?? [],
			pausedAt: patch.pausedAt !== void 0 ? patch.pausedAt : state.reading.pausedAt,
			startedAt: state.reading.startedAt ?? Date.now(),
			dwellCount: patch.dwellCount ?? state.reading.dwellCount ?? 0,
			dwellMs: patch.dwellMs ?? state.reading.dwellMs ?? 0,
			longDwellCount: patch.longDwellCount ?? state.reading.longDwellCount ?? 0,
			forwardSteps: patch.forwardSteps ?? state.reading.forwardSteps ?? 0,
			neuralEvents: patch.neuralEvents ?? state.reading.neuralEvents ?? []
		};
		reading.currentWpm = calcCurrentWpm(reading.wordsRead, reading.elapsedActiveMs);
		const prev = state.reading;
		const sameProgress = Math.abs(reading.progress - prev.progress) < .0025;
		const sameWpm = reading.currentWpm === prev.currentWpm;
		const samePauses = reading.pauses.length === prev.pauses.length;
		const sameRereads = reading.rereads.length === prev.rereads.length;
		const sameSkips = reading.skips.length === (prev.skips?.length ?? 0);
		const samePaused = reading.pausedAt === prev.pausedAt;
		const sameWords = reading.wordsRead === prev.wordsRead;
		const sameDwell = reading.dwellCount === (prev.dwellCount ?? 0) && reading.longDwellCount === (prev.longDwellCount ?? 0) && reading.forwardSteps === (prev.forwardSteps ?? 0);
		const sameNeural = (reading.neuralEvents?.length ?? 0) === (prev.neuralEvents?.length ?? 0);
		if (sameProgress && sameWpm && samePauses && sameRereads && sameSkips && samePaused && sameWords && sameDwell && sameNeural) return;
		const section = state.pdfPageCount > 1 ? state.pdfPage : state.chapterCount > 1 ? state.chapterIndex : 0;
		const sessions = withSessionMetrics(state.sessions, state.text, reading, state.targetWpm, section);
		const strain = measureReadingStrain({
			wordCount: reading.wordCount,
			wordsRead: reading.wordsRead,
			progress: reading.progress,
			elapsedActiveMs: reading.elapsedActiveMs,
			currentWpm: reading.currentWpm,
			targetWpm: state.targetWpm,
			pauseCount: reading.pauses.length,
			pauses: reading.pauses,
			rereadCount: reading.rereads.length,
			rereads: reading.rereads,
			feel: state.readingFeel
		});
		const adaptiveMemory = learnFromOutcome(state.adaptiveMemory, strain.peak, reading.wordsRead);
		set({
			reading,
			sessions,
			recommendation: refreshRecommendation(reading, state.targetWpm, state.profile, state.mode, state.dismissedRules, state.recommendation, state.readingFeel, state.lockedSettings, adaptiveMemory),
			adaptiveMemory
		});
		if (adaptiveMemory !== state.adaptiveMemory) persistAdaptiveMemory(adaptiveMemory);
		const existing = state.sessions.find((session) => session.content.length === state.text.length && session.content === state.text);
		if (!existing || Math.abs((existing.progress ?? 0) - reading.progress) >= .05 || (existing.pauseCount ?? 0) !== reading.pauses.length || (existing.rereadCount ?? 0) !== reading.rereads.length) persistSessions(sessions);
	},
	applyRecommendation: () => {
		const { recommendation, profile, targetWpm, lockedSettings } = get();
		if (!recommendation) return;
		if (lockedSettings.includes(recommendation.setting)) {
			set({
				recommendation: null,
				dismissedRules: [...get().dismissedRules, recommendation.rule]
			});
			return;
		}
		const previousValue = previousFor(recommendation.setting, profile, targetWpm);
		if (recommendation.setting === "targetWpm" && typeof recommendation.recommendedValue === "number") {
			persistTargetWpm(recommendation.recommendedValue);
			set({ targetWpm: recommendation.recommendedValue });
		} else if (recommendation.setting === "lineHeight" && typeof recommendation.recommendedValue === "number") set({ profile: persistAndApply({
			...profile,
			lineHeight: recommendation.recommendedValue
		}, get().mode) });
		else if (recommendation.setting === "fontSize" && typeof recommendation.recommendedValue === "number") set({ profile: persistAndApply({
			...profile,
			fontSize: recommendation.recommendedValue
		}, get().mode) });
		else if (recommendation.setting === "focusHighlight" && typeof recommendation.recommendedValue === "boolean") set({ profile: persistAndApply({
			...profile,
			focusHighlight: recommendation.recommendedValue
		}, get().mode) });
		else if (recommendation.setting === "theme" && typeof recommendation.recommendedValue === "string" && isThemeId(recommendation.recommendedValue)) set({ profile: persistAndApply({
			...profile,
			theme: recommendation.recommendedValue
		}, get().mode) });
		const reading = get().reading;
		const strain = measureReadingStrain({
			wordCount: reading.wordCount,
			wordsRead: reading.wordsRead,
			progress: reading.progress,
			elapsedActiveMs: reading.elapsedActiveMs,
			currentWpm: reading.currentWpm,
			targetWpm: get().targetWpm,
			pauseCount: reading.pauses.length,
			pauses: reading.pauses,
			rereadCount: reading.rereads.length,
			rereads: reading.rereads,
			feel: get().readingFeel
		});
		const adaptiveMemory = noteApplied(get().adaptiveMemory, recommendation.rule, strain.peak, reading.wordsRead);
		persistAdaptiveMemory(adaptiveMemory);
		set({
			recommendation: null,
			adaptiveMemory,
			dismissedRules: [...get().dismissedRules, recommendation.rule],
			lastAdaptiveChange: {
				setting: recommendation.setting,
				previousValue,
				nextValue: recommendation.recommendedValue
			}
		});
	},
	dismissRecommendation: () => {
		const { recommendation, dismissedRules } = get();
		if (!recommendation) return;
		set({
			recommendation: null,
			dismissedRules: [...dismissedRules, recommendation.rule]
		});
	},
	undoAdaptiveChange: () => {
		const change = get().lastAdaptiveChange;
		if (!change) return;
		const profile = get().profile;
		if (change.setting === "targetWpm" && typeof change.previousValue === "number") {
			persistTargetWpm(change.previousValue);
			set({
				targetWpm: change.previousValue,
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "lineHeight" && typeof change.previousValue === "number") {
			set({
				profile: persistAndApply({
					...profile,
					lineHeight: change.previousValue
				}, get().mode),
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "fontSize" && typeof change.previousValue === "number") {
			set({
				profile: persistAndApply({
					...profile,
					fontSize: change.previousValue
				}, get().mode),
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "focusHighlight" && typeof change.previousValue === "boolean") {
			set({
				profile: persistAndApply({
					...profile,
					focusHighlight: change.previousValue
				}, get().mode),
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "theme" && typeof change.previousValue === "string" && isThemeId(change.previousValue)) set({
			profile: persistAndApply({
				...profile,
				theme: change.previousValue
			}, get().mode),
			lastAdaptiveChange: null
		});
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
			set({
				profile,
				targetWpm: saved.targetWpm
			});
		} catch (error) {
			console.error(error);
		}
	},
	saveCurrentProfile: (name) => {
		const trimmed = name.trim();
		if (!trimmed) return;
		const savedProfiles = [{
			id: `user-${Date.now()}`,
			name: trimmed,
			profile: get().profile,
			targetWpm: get().targetWpm
		}, ...get().savedProfiles].slice(0, 8);
		writeLocal(SAVED_KEY, JSON.stringify(savedProfiles));
		set({ savedProfiles });
	},
	deleteSavedProfile: (id) => {
		const savedProfiles = get().savedProfiles.filter((item) => item.id !== id);
		writeLocal(SAVED_KEY, JSON.stringify(savedProfiles));
		set({ savedProfiles });
	},
	/**
	* Mark a run of text.
	*
	* Overlapping marks are merged rather than stacked. Two highlights covering
	* the same words would draw the stroke twice — visibly darker where they meet
	* — and leave the reader with two entries in the list for one passage they
	* marked once, sometimes by dragging over the edge of an earlier one.
	*/
	addHighlight: (mark) => {
		const key = textKey(get().text);
		const current = get().highlights[key] ?? [];
		const sameLine = (item) => item.lineIdx === mark.lineIdx && item.section === mark.section;
		const overlaps = (item) => sameLine(item) && item.start < mark.end && mark.start < item.end;
		const touching = current.filter(overlaps);
		const start = Math.min(mark.start, ...touching.map((item) => item.start));
		const end = Math.max(mark.end, ...touching.map((item) => item.end));
		const note = touching.find((item) => item.note)?.note;
		const merged = {
			lineIdx: mark.lineIdx,
			section: mark.section,
			start,
			end,
			text: mark.text.slice(0, 400),
			note,
			at: Date.now()
		};
		const nextForKey = [...current.filter((item) => !overlaps(item)), merged];
		const highlights = {
			...get().highlights,
			[key]: nextForKey
		};
		writeLocal(HIGHLIGHTS_KEY, JSON.stringify(highlights));
		set({ highlights });
	},
	removeHighlight: (lineIdx, section, start) => {
		const key = textKey(get().text);
		const current = get().highlights[key] ?? [];
		const nextForKey = current.filter((item) => !(item.lineIdx === lineIdx && item.section === section && item.start === start));
		if (nextForKey.length === current.length) return;
		const highlights = {
			...get().highlights,
			[key]: nextForKey
		};
		writeLocal(HIGHLIGHTS_KEY, JSON.stringify(highlights));
		set({ highlights });
	},
	annotateHighlight: (lineIdx, section, start, note) => {
		const key = textKey(get().text);
		const current = get().highlights[key];
		if (!current) return;
		const highlights = {
			...get().highlights,
			[key]: current.map((item) => item.lineIdx === lineIdx && item.section === section && item.start === start ? {
				...item,
				note: note.trim() ? note.trim().slice(0, 600) : void 0
			} : item)
		};
		writeLocal(HIGHLIGHTS_KEY, JSON.stringify(highlights));
		set({ highlights });
	},
	toggleBookmark: () => {
		const { text, reading, bookmarks, sourceKind, sourceId, pdfPage, chapterIndex, sessions } = get();
		if (!text) return;
		const match = (item) => sourceId ? item.sourceId === sourceId : item.content === text;
		const existing = bookmarks.find(match);
		const title = sessions[0]?.title || text.split(/\n/).find((line) => line.trim())?.slice(0, 60) || "Bookmark";
		const start = Math.max(0, Math.floor(reading.progress * Math.max(0, text.length - 90)));
		const excerpt = text.replace(/\s+/g, " ").slice(start, start + 90).trim();
		const next = existing ? bookmarks.filter((item) => item.id !== existing.id) : [{
			id: `bm-${Date.now()}`,
			title,
			content: text,
			progress: reading.progress,
			savedAt: Date.now(),
			kind: sourceKind,
			sourceId: sourceId ?? void 0,
			pdfPage: sourceKind === "pdf" ? pdfPage : void 0,
			chapter: chapterIndex > 0 ? chapterIndex : void 0,
			excerpt
		}, ...bookmarks].slice(0, 24);
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
		set({
			readingFeel: feel,
			recommendation: refreshRecommendation(state.reading, state.targetWpm, state.profile, state.mode, state.dismissedRules, null, feel, state.lockedSettings)
		});
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
			ADAPTIVE_MEMORY_KEY,
			"neurolens-coach",
			"neurolens-started",
			"neurolens-pointer-hint"
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
			adaptiveMemory: {},
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
			sourceId: null
		});
		applyColorScheme("paper", "none");
	}
}));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/bionic-D258GRvB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Durations and gaps, in milliseconds.
*
* Tuned against how the corresponding iOS generators feel rather than by
* picking round numbers. Weight reads mostly as duration; *sharpness* has no
* direct analogue, so a rigid tap is short and isolated while a soft one is
* slightly longer and blunter. The notification patterns keep Apple's rhythm:
* success rises, warning is two even beats, error is a stumble.
*/
var PATTERNS = {
	selection: 6,
	impact: {
		light: 10,
		medium: 18,
		heavy: 32,
		soft: 24,
		rigid: 8
	},
	notification: {
		success: [
			12,
			70,
			20
		],
		warning: [
			22,
			90,
			22
		],
		error: [
			28,
			60,
			28,
			60,
			40
		]
	}
};
function reducedMotion() {
	if (typeof window === "undefined" || !window.matchMedia) return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function vibrationSupported() {
	return typeof navigator !== "undefined" && typeof navigator.vibrate === "function";
}
/**
* Does this look like an iPhone or iPad running a Safari that has the switch
* haptic? Feature detection cannot answer it — the behaviour is invisible to
* script — so this is the one place a platform check is the only option.
*/
function iosHapticSwitchAvailable() {
	if (typeof navigator === "undefined" || typeof document === "undefined") return false;
	const ua = navigator.userAgent;
	if (!(/iPhone|iPad|iPod/.test(ua) || /Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return false;
	const probe = document.createElement("input");
	probe.type = "checkbox";
	return "switch" in probe;
}
var switchEl = null;
/**
* Toggle an off-screen switch to make iOS play its selection haptic.
*
* The element is created once and kept: building one per tap would have the
* browser laying out and discarding a control on every interaction, and the
* haptic sometimes does not fire on an element that has only just been
* inserted.
*/
function pulseIosSwitch() {
	if (typeof document === "undefined") return;
	if (!switchEl) {
		switchEl = document.createElement("input");
		switchEl.type = "checkbox";
		switchEl.setAttribute("switch", "");
		switchEl.setAttribute("aria-hidden", "true");
		switchEl.tabIndex = -1;
		switchEl.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;";
		document.body.appendChild(switchEl);
	}
	try {
		switchEl.checked = !switchEl.checked;
		switchEl.dispatchEvent(new Event("change", { bubbles: false }));
	} catch {}
}
function play$1(pattern) {
	if (reducedMotion()) return;
	if (vibrationSupported()) try {
		navigator.vibrate(pattern);
		return;
	} catch {}
	if (iosHapticSwitchAvailable()) pulseIosSwitch();
}
/** Moving through options: a segmented control, a slider notch, a picker row. */
function selection() {
	play$1(PATTERNS.selection);
}
/** Something landing: a toggle committing, a sheet settling, a drag snapping. */
function impact(weight = "medium") {
	play$1(PATTERNS.impact[weight]);
}
/** Something concluding: saved, refused, failed. */
function notification(kind) {
	play$1(PATTERNS.notification[kind]);
}
var Label = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = "Label";
var Input = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none placeholder:text-subtle transition-[box-shadow] duration-[150ms] ease-[var(--ease-out)] focus:shadow-[0_0_0_1px_var(--color-fg),0_0_0_4px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]", className),
	...props
}));
Input.displayName = "Input";
var Textarea = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	suppressHydrationWarning: true,
	className: cn("min-h-40 w-full resize-none rounded-lg bg-transparent text-base leading-relaxed text-fg outline-none placeholder:text-subtle", className),
	...props
}));
Textarea.displayName = "Textarea";
/**
* A slider that ticks as it passes each value.
*
* The tick fires on a *changed* value rather than on every pointer frame, which
* is what makes a drag feel like it has detents instead of like a device
* buzzing continuously. Same reason a picker on iOS ticks per row and not per
* pixel of travel.
*/
function Slider({ className, onValueChange, ...props }) {
	const last = (0, import_react.useRef)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		onValueChange: (value) => {
			const key = value.join(",");
			if (key !== last.current) {
				last.current = key;
				selection();
			}
			onValueChange?.(value);
		},
		className: cn("relative flex h-11 w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-fg/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-fg" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
			"aria-label": typeof props["aria-label"] === "string" ? props["aria-label"] : void 0,
			className: "block size-4 rounded-full bg-surface shadow-border-hover outline-none transition-transform duration-[140ms] ease-[var(--ease-out)] focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] active:scale-[0.97]"
		})]
	});
}
/**
* A toggle, with the haptic that belongs to it.
*
* Feedback lives on the primitive rather than at each call site. That is the
* whole reason a system feels coherent: on iOS a switch feels the same in every
* app because the generator is attached to the control, not remembered by each
* developer. Sixty-odd toggles in this app were silent because somebody would
* have had to remember sixty-odd times.
*
* A commit is an impact, not a selection — the state landed somewhere, it did
* not merely move past.
*/
function Switch({ className, onCheckedChange, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		onCheckedChange: (checked) => {
			impact("light");
			onCheckedChange?.(checked);
		},
		className: cn("peer relative inline-flex h-6 w-10 shrink-0 items-center rounded-full bg-fg/15 shadow-border transition-[background-color] duration-[150ms] ease-[var(--ease-standard)] after:absolute after:top-1/2 after:left-1/2 after:size-10 after:-translate-1/2 data-[state=checked]:bg-fg", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-surface shadow-border transition-transform duration-[200ms] ease-[var(--ease-in-out)] data-[state=checked]:translate-x-[18px]" })
	});
}
function Segmented({ value, onChange, options, className, label, tone = "choice" }) {
	const reduceMotion = useReducedMotion();
	const rootRef = (0, import_react.useRef)(null);
	const [pill, setPill] = (0, import_react.useState)({
		left: 4,
		width: 0
	});
	const [canAnimate, setCanAnimate] = (0, import_react.useState)(false);
	const isChoice = tone === "choice";
	const measure = (0, import_react.useCallback)(() => {
		const root = rootRef.current;
		if (!root) return;
		const button = root.querySelector(`[data-seg="${CSS.escape(String(value))}"]`);
		if (!button) return;
		setPill({
			left: button.offsetLeft,
			width: button.offsetWidth
		});
	}, [value]);
	(0, import_react.useLayoutEffect)(() => {
		measure();
		const frame = requestAnimationFrame(measure);
		return () => cancelAnimationFrame(frame);
	}, [measure, options]);
	(0, import_react.useEffect)(() => {
		if (!document.fonts?.ready) return;
		let cancelled = false;
		document.fonts.ready.then(() => {
			if (!cancelled) measure();
		});
		return () => {
			cancelled = true;
		};
	}, [measure]);
	(0, import_react.useEffect)(() => {
		const frame = requestAnimationFrame(() => setCanAnimate(true));
		return () => cancelAnimationFrame(frame);
	}, []);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root || typeof ResizeObserver === "undefined") return;
		let first = true;
		const observer = new ResizeObserver(() => {
			if (first) {
				first = false;
				measure();
				return;
			}
			setCanAnimate(false);
			measure();
			requestAnimationFrame(() => setCanAnimate(true));
		});
		observer.observe(root);
		return () => observer.disconnect();
	}, [measure]);
	function move(delta) {
		const enabled = options.filter((option) => !option.disabled);
		if (enabled.length === 0) return;
		const next = enabled[(enabled.findIndex((option) => option.id === value) + delta + enabled.length) % enabled.length];
		if (!next) return;
		selection();
		onChange(next.id);
		requestAnimationFrame(() => {
			rootRef.current?.querySelector(`[data-seg="${CSS.escape(String(next.id))}"]`)?.focus();
		});
	}
	function onKeyDown(event) {
		if (!isChoice) return;
		if (event.key === "ArrowRight" || event.key === "ArrowDown") {
			event.preventDefault();
			move(1);
		} else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
			event.preventDefault();
			move(-1);
		} else if (event.key === "Home") {
			event.preventDefault();
			const first = options.find((option) => !option.disabled);
			if (first) {
				selection();
				onChange(first.id);
				requestAnimationFrame(() => {
					rootRef.current?.querySelector(`[data-seg="${CSS.escape(String(first.id))}"]`)?.focus();
				});
			}
		} else if (event.key === "End") {
			event.preventDefault();
			const last = [...options].reverse().find((option) => !option.disabled);
			if (last) {
				selection();
				onChange(last.id);
				requestAnimationFrame(() => {
					rootRef.current?.querySelector(`[data-seg="${CSS.escape(String(last.id))}"]`)?.focus();
				});
			}
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		role: isChoice ? "radiogroup" : "group",
		"aria-label": label,
		onKeyDown,
		className: cn("relative isolate inline-flex h-10 items-center rounded-md bg-fg/5 p-1", className),
		children: [options.map((option) => {
			const selected = value === option.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"data-seg": option.id,
				disabled: option.disabled,
				title: option.disabled ? option.disabledReason : void 0,
				"aria-description": option.disabled ? option.disabledReason : void 0,
				role: isChoice ? "radio" : void 0,
				"aria-checked": isChoice ? selected : void 0,
				"aria-current": !isChoice && selected ? "page" : void 0,
				tabIndex: isChoice ? selected ? 0 : -1 : void 0,
				onClick: () => {
					if (option.id !== value) selection();
					onChange(option.id);
				},
				className: cn("relative z-10 h-8 shrink-0 rounded-sm px-2 text-xs font-medium whitespace-nowrap text-muted transition-colors duration-[150ms] ease-[var(--ease-standard)] sm:px-3 sm:text-sm", "hover:text-fg", selected && "text-fg", option.disabled && "opacity-30"),
				children: option.label
			}, option.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute top-1 bottom-1 z-[1] rounded-sm bg-surface shadow-border",
			style: {
				left: pill.left,
				width: pill.width,
				transition: canAnimate && !reduceMotion ? "left 220ms var(--ease-in-out), width 220ms var(--ease-in-out)" : "none"
			}
		})]
	});
}
var FILLER = /* @__PURE__ */ new Set([
	"the",
	"and",
	"of",
	"in",
	"is",
	"to",
	"a",
	"it",
	"for",
	"with",
	"on",
	"as",
	"at",
	"by",
	"an",
	"be",
	"this",
	"that",
	"or",
	"are",
	"was",
	"were",
	"been",
	"have",
	"has",
	"had",
	"do",
	"does",
	"did",
	"will",
	"would",
	"could",
	"should",
	"may",
	"might",
	"must",
	"can",
	"from",
	"into",
	"about",
	"during",
	"before",
	"after",
	"above",
	"below",
	"up",
	"down",
	"out",
	"off",
	"over",
	"under",
	"again",
	"further",
	"then",
	"than",
	"which",
	"who",
	"what",
	"when",
	"where",
	"why",
	"how",
	"all",
	"each",
	"every",
	"both",
	"few",
	"more",
	"most",
	"no",
	"nor",
	"not",
	"only",
	"same",
	"so",
	"some",
	"such",
	"too",
	"very",
	"just",
	"am",
	"my",
	"me"
]);
var ACTION = /* @__PURE__ */ new Set([
	"said",
	"says",
	"told",
	"tell",
	"ask",
	"asked",
	"show",
	"showed",
	"give",
	"gave",
	"make",
	"made",
	"take",
	"took",
	"come",
	"came",
	"go",
	"went",
	"get",
	"got",
	"think",
	"thought",
	"know",
	"knew",
	"see",
	"saw",
	"want",
	"wanted",
	"use",
	"used",
	"find",
	"found",
	"work",
	"worked",
	"try",
	"tried",
	"help",
	"helped",
	"call",
	"called",
	"need",
	"needed",
	"feel",
	"felt",
	"become",
	"leave",
	"left",
	"put",
	"start",
	"started",
	"seem",
	"seemed",
	"turn",
	"turned",
	"move",
	"live",
	"lived",
	"believe",
	"believed",
	"hold",
	"held",
	"bring",
	"brought",
	"begin",
	"began"
]);
var FIXATION_PRESETS = [
	{
		id: "off",
		value: 0,
		label: "Off",
		hint: "Plain type"
	},
	{
		id: "light",
		value: .25,
		label: "Light",
		hint: "Landing letters"
	},
	{
		id: "medium",
		value: .45,
		label: "Medium",
		hint: "First syllable"
	},
	{
		id: "strong",
		value: .65,
		label: "Strong",
		hint: "Half the word"
	},
	{
		id: "max",
		value: .8,
		label: "Max",
		hint: "Most of the stem"
	}
];
/**
* How many leading letters to mark. Classic bionic reading bolds the saccade
* landing zone — roughly the first 30–50% of a word — so the eye can skip
* the rest. Function words get a lighter mark; verbs and long stems get more.
*/
function fixationLength(word, strength, importance = .6) {
	const len = word.replace(/[^A-Za-z]/g, "").length;
	if (strength <= 0 || len < 2) return 0;
	const weighted = (.28 + strength * .34) * (.7 + .3 * Math.min(1, Math.max(.15, importance)));
	let count = Math.round(len * weighted);
	if (len <= 3) count = strength >= .18 ? 1 : 0;
	else if (count < 1) count = 1;
	return Math.min(count, len - 1);
}
function nearestFixationPreset(value) {
	return FIXATION_PRESETS.reduce((best, preset) => Math.abs(preset.value - value) < Math.abs(best.value - value) ? preset : best);
}
function processBionicText(text, strength = .5, rhythmOverride = false) {
	if (!text || strength <= 0) return text;
	return splitSentenceSpans(text).map((sentence) => {
		const parts = sentence.split(/(\s+)/);
		let wordInSentence = 0;
		return parts.map((part) => {
			if (/^\s+$/.test(part)) return part;
			const match = part.match(/^([^a-zA-Z0-9]*)([a-zA-Z0-9']+)([^a-zA-Z0-9]*)$/);
			if (!match) return part;
			const [, prefix, word, suffix] = match;
			const lowerWord = word.toLowerCase();
			const len = word.length;
			wordInSentence += 1;
			let importance = .55;
			if (FILLER.has(lowerWord)) importance = .28;
			else if (ACTION.has(lowerWord)) importance = 1;
			else if (len >= 8) importance = .9;
			else if (len >= 5) importance = .72;
			const boldLength = fixationLength(word, strength * (rhythmOverride && wordInSentence <= 2 ? 1.12 : 1), importance);
			if (boldLength <= 0) return part;
			return `${prefix}<span class="fixation">${word.slice(0, boldLength)}</span>${word.slice(boldLength)}${suffix}`;
		}).join("");
	}).join("");
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/routes-c6I-T1-E.js
var SAMPLE_TEXTS = [
	{
		title: "Academic abstract",
		image: "/images/reading-room.jpg",
		alt: "A sunlit university reading room",
		text: `The phenomenon of cognitive friction in digital reading environments has significant implications for neurodivergent learners. This study investigates how adaptive formatting reduces visual entropy and enhances focus retention in ADHD populations.

When a page presents too many competing cues at once, the reader spends energy on orientation rather than meaning. Dense blocks of even type, low contrast, and a missing sense of place on the line all raise the cost of entry. That cost is not evenly distributed. Readers who already work harder to hold attention, decode letterforms, or recover after a pause pay it more often, and they pay it in shorter sessions.

Adaptive formatting does not rewrite the argument. It changes the conditions under which the argument can be seen. Emphasis on the first letters of a word, slightly more space between lines, and a calmer background are small interventions. In combination they reduce the number of times the eye has to relocate before a sentence becomes available. The hypothesis is straightforward: if visual entropy falls, fixation lasts longer, and the first pass through a difficult paragraph becomes less exhausting.

The present paper reports on a within-subjects design. Participants read matched passages in a conventional layout and in an adapted layout, then answered comprehension items that were written to probe gist rather than trivia. Time on task, backward navigation, and self-reported fatigue were recorded alongside accuracy. We did not assume that faster was better. A reader who finishes quickly but cannot recall the claim has not been helped.

Results are discussed in terms of first-pass fluency rather than speed records. For many participants, the adapted view did not make the prose simpler. It made the prose easier to stay with. That distinction matters for any tool that claims to support attention. A calmer page is not a shorter one. It is a page that asks less of the systems already under load.

Limitations are stated plainly. The sample was small, the passages were academic rather than literary, and the study cannot speak to long-form reading over days. What it can speak to is the first thirty seconds of a hard paragraph — the window in which many readers decide whether to continue. If that window is kinder, more of the argument gets a chance.`
	},
	{
		title: "Complex documentation",
		image: "/images/hands.jpg",
		alt: "Hands turning a paperback on a walnut table",
		text: `NeuroLens utilizes a recursive word-weighting algorithm to transform static strings into fixation-aware content. By dynamically adjusting the contrast ratio of initial graphemes, we optimize the saccadic rhythm of the human eye.

The pipeline is intentionally local. Text is split into paragraphs, then into sentences, then into tokens. Dr. Chen measured 3.14 ms of lag in the U.S. lab. The next trial confirmed it. Each token receives a weight based on length and a profile-selected strength. The first portion of the token is marked for emphasis; the remainder is left to ordinary weight. Nothing is sent to a remote model. The transformation is a deterministic function of the current profile.

Rhythm optimization is a second pass. After weights are assigned, the renderer can insert a slightly stronger break after commas and clause boundaries so the line has a pulse. This is not decoration. It is a way of giving the eye a place to land when a sentence runs long. Profiles that prefer a quieter page can disable it.

Auto-scroll is paced by a target words-per-minute value. That value is a setting, not a measurement. The application also records how far the reader has actually moved through the document and how much active time has elapsed. Actual pace is computed from those two numbers. The two figures are never mixed. A reader may set a target of 220 and currently be reading at 160; both numbers are shown, both are labeled.

When a reader stops progressing for several seconds, the session records a pause. Tiny pointer noise is ignored. When a reader moves a meaningful distance backward — for example from seventy percent of the page to fifty-five — the session records a reread. These events are the inputs to Adaptive Mode. Adaptive Mode does not silently rewrite the profile. It proposes a change, explains why, and waits.

The recommendation engine is a separate module. It receives metrics and current settings and returns a structured suggestion: which setting, which value, and a reason written in ordinary language. Apply, dismiss, and undo remain in the reader’s hands. Adaptive watches pace, pauses, rereads, and how the page felt. It recommends. It does not quiz.

This documentation is meant to be read in the product it describes. Paste it into the source field, open the reader, and switch to Adaptive. Scroll, pause, and move back through a section. The interface should stay out of the way until it has something useful to say.

Before you start, gather:

- A quieter room
- A calmer page
- Time to pause without apology

1. Paste the passage.
2. Open the reader.
3. Let Adaptive watch one sitting.`
	},
	{
		title: "Neurological focus",
		image: "/images/nook.jpg",
		alt: "A reader in a sunlit armchair",
		text: `Saccadic movements represent rapid eye relocations between fixations. By anchoring initial phonemes with weighted typography, readers process vocabulary prior to full visual scanning, reducing cognitive fatigue by up to 40%.

A fixation is not a still camera. It is a brief window in which the visual system gathers enough of a word to proceed. Between those windows the eye jumps. If the landing zone is poorly marked, the jump undershoots or overshoots, and the reader pays for a correction. Those corrections are cheap one at a time and expensive in aggregate. Over a chapter they become the difference between finishing and stopping.

Bionic emphasis is one way of marking the landing zone. It does not claim to change how language is understood. It claims to make the next word easier to acquire. Some readers find it immediately helpful. Some find it noisy. The strength is therefore a slider, not a mandate, and it can be turned to zero.

Line height and word spacing work on a different problem: crowding. When letters sit too close, the periphery of one word interferes with the next. Extra space is not an aesthetic preference for every reader, but it is a practical one for many. Adaptive Mode may recommend a modest increase when rereading becomes frequent, because moving backward often is a sign that the line was hard to hold.

A bookmark on the current sentence is one way back in after a pause. Tap a line to mark it. Adaptive Mode may suggest more spacing after several long pauses. It will not rewrite the page on its own.

None of these techniques replace rest, medication, or a quieter room. They are environmental. They sit in the same family as a better lamp. The aim is not to optimize a person. The aim is to stop the page from adding work that was never part of the text.

If you are reading this in NeuroLens, you can feel the difference between profiles in a few lines. Switch to ADHD or Dyslexia, then back to Adaptive. Notice what your eyes do at the start of each sentence. That noticing is the whole product.`
	},
	{
		title: "Three short chapters",
		image: "/images/feature-books.jpg",
		alt: "Clothbound books on a linen table",
		text: `CHAPTER I.

It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

CHAPTER II.

Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. It was then disclosed in the following manner.

CHAPTER III.

Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject, was sufficient to draw from her husband any satisfactory description of Mr. Bingley. They attacked him in various ways—with barefaced questions, ingenious suppositions, and distant surmises—but he eluded the skill of them all.`
	}
];
var DEMO_SENTENCE = "NeuroLens transforms dense paragraphs into effortless visual rhythms tailored for your brain.";
var BULLET = /^(?:[•●◦▪▫]|[-–—*])\s+/;
var NUMBERED = /^(\d{1,3}|[ivxlcdm]{1,5})[.)]\s+/i;
var QUOTE = /^(?:>\s+|["“«]).+/;
var KICKER = /^(preface|introduction|foreword|prologue|epilogue|contents|acknowledgments?|dedication|afterword|note|opening)\.?$/i;
function stripBullet(line) {
	const bullet = line.match(BULLET);
	if (bullet) return {
		marker: bullet[0].trim(),
		text: line.slice(bullet[0].length).trim()
	};
	const numbered = line.match(NUMBERED);
	if (numbered) return {
		marker: numbered[0].trim(),
		text: line.slice(numbered[0].length).trim()
	};
	return {
		marker: "",
		text: line
	};
}
function isHeadingLike(line) {
	const t = line.trim();
	if (t.length < 2 || t.length > 72) return false;
	if (BULLET.test(t) || NUMBERED.test(t)) return false;
	if ((t.match(/[.!?]/g) ?? []).length > 1) return false;
	if (/[.!?]$/.test(t) && t.length > 42) return false;
	const words = t.split(/\s+/);
	if (words.length > 12) return false;
	return words.filter((word) => /^[A-Z0-9“"]/.test(word)).length >= Math.ceil(words.length * .55) || t === t.toUpperCase();
}
function isQuote(line) {
	const t = line.trim();
	if (t.startsWith("> ")) return true;
	if (!QUOTE.test(t)) return false;
	if (t.length < 40) return false;
	return !/\b(said|asked|replied|cried|whispered)\b/i.test(t);
}
function splitNumberedBlob(text) {
	const re = /(?:^|\s)(\d{1,2})[.)]\s+(?=[A-Z])/g;
	const starts = [];
	let match;
	while (match = re.exec(text)) {
		const at = match[0].startsWith(" ") ? match.index + 1 : match.index;
		starts.push(at);
	}
	if (starts.length < 2) return null;
	const items = [];
	for (let i = 0; i < starts.length; i += 1) {
		const parsed = stripBullet(text.slice(starts[i], starts[i + 1]).trim());
		if (parsed.text.length >= 8) items.push(parsed);
	}
	return items.length >= 2 ? items : null;
}
function chunksOf(text) {
	const normalized = text.replace(/\r\n/g, "\n").replace(/\u00a0/g, " ").trim();
	if (!normalized) return [];
	if (normalized.includes("\n")) return normalized.split(/\n\s*\n/).map((chunk) => chunk.trim()).filter(Boolean);
	return [normalized];
}
function classifyLone(text, seenLead, seenTitle) {
	if (KICKER.test(text)) return {
		kind: "kicker",
		text
	};
	if (!seenTitle && isHeadingLike(text)) return {
		kind: "title",
		text
	};
	if (isQuote(text)) return {
		kind: "quote",
		text: text.replace(/^>\s+/, "")
	};
	if (isHeadingLike(text)) return {
		kind: "heading",
		text
	};
	if (!seenLead && text.split(/\s+/).length >= 12) return {
		kind: "lead",
		text
	};
	return {
		kind: "body",
		text
	};
}
function parseBlocks(text) {
	const chunks = chunksOf(text);
	const blocks = [];
	let list = null;
	const flushList = () => {
		if (!list?.items.length) {
			list = null;
			return;
		}
		if (list.items.length === 1 && list.items[0].text.split(/\s+/).length > 18) blocks.push({
			kind: blocks.some((b) => b.kind === "lead") ? "body" : "lead",
			text: list.items[0].text
		});
		else blocks.push({
			kind: "list",
			ordered: list.ordered,
			items: list.items
		});
		list = null;
	};
	for (const chunk of chunks) {
		const lines = chunk.split("\n").map((line) => line.trim()).filter(Boolean);
		if (lines.length >= 2 && lines.every((line) => BULLET.test(line) || NUMBERED.test(line))) {
			flushList();
			blocks.push({
				kind: "list",
				ordered: NUMBERED.test(lines[0] ?? ""),
				items: lines.map(stripBullet)
			});
			continue;
		}
		if (lines.length === 1 && (BULLET.test(lines[0]) || NUMBERED.test(lines[0]))) {
			const ordered = NUMBERED.test(lines[0]);
			const item = stripBullet(lines[0]);
			if (list && list.ordered === ordered) list.items.push(item);
			else {
				flushList();
				list = {
					ordered,
					items: [item]
				};
			}
			continue;
		}
		flushList();
		if (lines.length === 1) {
			const numbered = splitNumberedBlob(lines[0]);
			if (numbered) {
				const before = lines[0].slice(0, lines[0].indexOf(numbered[0].marker)).trim();
				if (before.split(/\s+/).length >= 8) {
					const seenLead = blocks.some((b) => b.kind === "lead" || b.kind === "body");
					const seenTitle = blocks.some((b) => b.kind === "title");
					blocks.push(classifyLone(before, seenLead, seenTitle));
				}
				blocks.push({
					kind: "list",
					ordered: true,
					items: numbered
				});
				continue;
			}
		}
		const seenLead = blocks.some((b) => b.kind === "lead" || b.kind === "body");
		const seenTitle = blocks.some((b) => b.kind === "title");
		const joined = lines.join("\n");
		blocks.push(classifyLone(joined, seenLead, seenTitle));
	}
	flushList();
	if (blocks.length === 1 && blocks[0].kind === "title") blocks[0] = {
		kind: "body",
		text: blocks[0].text
	};
	return blocks;
}
function isTitlePage(blocks) {
	if (!blocks.length) return false;
	if (blocks.reduce((sum, block) => {
		return sum + (block.items?.map((item) => item.text).join(" ") ?? block.text ?? "").split(/\s+/).filter(Boolean).length;
	}, 0) > 140) return false;
	return blocks.every((block) => block.kind === "title" || block.kind === "kicker" || block.kind === "heading" || (block.text?.split(/\s+/).length ?? 99) < 18 && block.kind !== "list");
}
function chapterRole(title) {
	if (/^(front matter|title page|opening)$/i.test(title)) return "front";
	if (/contents/i.test(title)) return "contents";
	if (/^(preface|introduction|foreword|dedication|acknowledgments?)$/i.test(title)) return "front";
	return "chapter";
}
/**
* Line identity, kept in step with the reader.
*
* The reader derives every line's id the same way when it renders a section,
* and the ids are what search results are steered by — a hit is only reachable
* if the number here is the number the DOM ends up using. The two must not
* drift apart, so this is the one place the formula is written down.
*/
function lineIdOf(blockIndex, itemIndex, spanIndex) {
	return blockIndex * 1e3 + itemIndex * 40 + spanIndex;
}
/** Case- and diacritic-insensitive, so "cafe" finds "café". */
function fold(value) {
	return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}
/**
* Fold a haystack while remembering where each folded character came from.
*
* Folding is not length-preserving — stripping the accent from "é" turns one
* character into one, but decomposing "ﬁ" or a combining sequence does not —
* so an offset found in the folded string does not address the same character
* in the original. Highlighting the match needs original coordinates, so the
* mapping is kept as the fold is built rather than guessed at afterwards.
*/
function foldWithMap(value) {
	let folded = "";
	const map = [];
	for (let i = 0; i < value.length; i += 1) {
		const piece = fold(value[i]);
		for (let j = 0; j < piece.length; j += 1) {
			folded += piece[j];
			map.push(i);
		}
	}
	map.push(value.length);
	return {
		folded,
		map
	};
}
/**
* Find a phrase across a whole book.
*
* Searches sentence by sentence rather than over the raw string, because a
* result is only useful if it can be *gone to*: the reader navigates by section
* and line, so a match has to be reported in those terms. Matching the folded
* text but slicing the original keeps accents and capitalisation intact in what
* the reader is shown.
*
* `sections` is the book already divided the way the reader divides it —
* chapters, auto-paginated Parts, or PDF pages. A single-section book passes one
* entry and gets `section: 0`, which is what the reader uses for unpaged text.
*/
function searchBook(sections, query, options = {}) {
	const needle = fold(query.trim());
	if (needle.length < 2) return [];
	const limit = options.limit ?? 200;
	const offset = options.sectionOffset ?? (sections.length > 1 ? 1 : 0);
	const hits = [];
	for (let s = 0; s < sections.length; s += 1) {
		parseBlocks(sections[s] ?? "").forEach((block, blockIndex) => {
			(block.items?.map((item) => item.text) ?? (block.text ? [block.text] : [])).forEach((source, itemIndex) => {
				splitSentenceSpans(source).forEach((span, spanIndex) => {
					if (hits.length >= limit) return;
					const text = span.trim();
					if (!text) return;
					const { folded, map } = foldWithMap(text);
					const at = folded.indexOf(needle);
					if (at === -1) return;
					hits.push({
						section: s + offset,
						lineIdx: lineIdOf(blockIndex, itemIndex, spanIndex),
						text,
						start: map[at] ?? 0,
						end: map[at + needle.length] ?? text.length
					});
				});
			});
		});
		if (hits.length >= limit) break;
	}
	return hits;
}
var WIDTH = 320;
var HEIGHT = 168;
var LINES = 5;
var LEFT = 22;
var RIGHT = 298;
var TOP = 22;
var GAP = 28;
function coord(point) {
	return {
		x: LEFT + point.x * 276,
		y: TOP + point.y * GAP,
		r: point.r
	};
}
function Scanpath({ points, replayKey, label, className }) {
	const reduce = useReducedMotion();
	const uid = (0, import_react.useId)();
	const mapped = points.map(coord);
	const d = mapped.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
		className: cn("h-auto w-full text-fg", className),
		role: "img",
		"aria-label": label,
		children: [
			Array.from({ length: LINES }, (_, line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: LEFT,
				x2: RIGHT,
				y1: TOP + line * GAP,
				y2: TOP + line * GAP,
				stroke: "currentColor",
				strokeOpacity: .1,
				strokeWidth: 1
			}, line)),
			d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: .55,
				strokeWidth: 1.4,
				strokeLinejoin: "round",
				strokeLinecap: "round",
				pathLength: 1,
				className: reduce ? void 0 : "scanpath-draw"
			}) : null,
			mapped.map((point, index) => {
				const kind = points[index]?.kind;
				const dashed = kind === "regression" || kind === "skip";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: point.x,
					cy: point.y,
					r: point.r,
					fill: "currentColor",
					fillOpacity: kind === "disengage" ? .18 : kind === "skip" ? .28 : .55,
					stroke: "currentColor",
					strokeOpacity: .8,
					strokeWidth: dashed ? 1 : 0,
					strokeDasharray: kind === "regression" ? "2 2" : void 0,
					style: reduce ? void 0 : { animationDelay: `${index * 40}ms` },
					className: reduce ? void 0 : "scanpath-dot"
				}, `${uid}-${index}`);
			})
		]
	}, replayKey ?? d);
}
function useSittingPattern() {
	const reading = useAppStore((s) => s.reading);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const idleMs = reading.pausedAt ? Math.max(0, Date.now() - reading.pausedAt) : 0;
	return classifyReading({
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
		neuralEvents: reading.neuralEvents ?? []
	});
}
function PatternHint() {
	const pattern = useSittingPattern();
	const events = useAppStore((s) => s.reading.neuralEvents ?? []);
	const elapsed = useAppStore((s) => s.reading.elapsedActiveMs);
	const progress = useAppStore((s) => s.reading.progress);
	const passive = detectPassiveState(events, Date.now());
	if (elapsed < 8e3 && events.length < 2 && progress < .06) return null;
	const live = pattern.gathering ? passive.live : pattern.live;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "pointer-events-none text-xs text-muted",
		children: live
	});
}
function PatternExplorer({ eyebrow = "How the eye moves", liveId }) {
	const [picked, setPicked] = (0, import_react.useState)(null);
	const id = picked ?? liveId ?? "flow";
	const meta = PATTERN_META[id];
	const points = demoScanpath(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
		className: "px-5 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-serif text-3xl tracking-tight",
				children: meta.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-lg text-sm leading-relaxed text-pretty text-muted",
				children: meta.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 overflow-hidden rounded-md bg-fg/4 px-2 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scanpath, {
					points,
					replayKey: id,
					label: `${meta.label}: ${meta.science}`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: PATTERN_ORDER.map((key) => {
					const selected = key === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => setPicked(key),
						className: cn("min-h-11 rounded-full px-3 text-xs font-medium whitespace-nowrap transition-[background-color,color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", selected ? "bg-fg text-primary-fg" : "bg-fg/6 hover:bg-fg/10"),
						children: PATTERN_META[key].label
					}) }, key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs leading-relaxed text-pretty text-muted",
				children: [
					meta.science,
					". ",
					meta.detector,
					" ",
					meta.help
				]
			})
		]
	}) });
}
function PatternPanel() {
	const pattern = useSittingPattern();
	const dwellCount = useAppStore((s) => s.reading.dwellCount ?? 0);
	const forwardSteps = useAppStore((s) => s.reading.forwardSteps ?? 0);
	const skips = useAppStore((s) => s.reading.skips?.length ?? 0);
	const rereads = useAppStore((s) => s.reading.rereads.length);
	const events = useAppStore((s) => s.reading.neuralEvents ?? []);
	const livePoints = scanpathFromEvents(events);
	const mixLabel = pattern.mix.map((item) => `${item.share}% ${item.label.toLowerCase()}`).join(", ");
	const passive = detectPassiveState(events, Date.now());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
			className: "px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "This sitting"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-3xl tracking-tight",
					children: pattern.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-lg text-sm leading-relaxed text-pretty text-muted",
					children: pattern.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs leading-relaxed text-pretty text-muted",
					children: [pattern.science, ". Inferred from time on the line and how the page moves — the same rhythm as land, jump, and go back. No camera."]
				}),
				pattern.mix.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex h-1.5 overflow-hidden rounded-full bg-fg/8",
					role: "img",
					"aria-label": mixLabel || pattern.label,
					children: pattern.mix.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-full bg-fg",
						style: {
							width: `${item.share}%`,
							opacity: PATTERN_META[item.id].bar
						},
						title: `${item.label} ${item.share}%`
					}, item.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1.5 rounded-full bg-fg/8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: dwellCount
						}), " lines held"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: forwardSteps
						}), " small advances"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: skips
						}), " jumps"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: rereads
						}), " rereads"] }),
						passive.state !== "gathering" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: passive.label }) : null
					]
				}),
				livePoints.length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 overflow-hidden rounded-md bg-fg/4 px-2 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scanpath, {
						points: livePoints,
						replayKey: events.length,
						label: `This sitting’s scanpath, ${pattern.label}`
					})
				}) : null
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternExplorer, { liveId: pattern.gathering ? "flow" : pattern.id })]
	});
}
/**
* How far the eyes travel, in viewBox units.
*
* The viewBox is 100 units wide and the orb renders at around 44px, so every
* unit is worth well under half a screen pixel. Values tuned by eye in the
* viewBox are therefore roughly half as large as they look in the source — the
* first pass used 7 and 5, which came to about three pixels of travel and read
* as nothing moving at all.
*/
var GAZE_X = 16;
var GAZE_Y = 11;
/**
* Neuro — the companion.
*
* A face is a strong thing to put in an app for people who are easily pulled
* away from what they are reading, so the rule it follows is the one the rest
* of the motion here follows: it is contingent, never a loop. It blinks on an
* irregular schedule, watches the pointer, glances around of its own accord
* when nothing has happened, and leans when it is dragged. A face that moves on
* a timer reads as decoration; one that responds reads as attention.
*
* Everything per-frame is written straight to the DOM through a ref. The first
* version held the gaze in React state and re-rendered on every `pointermove` —
* a render per mouse pixel, for an effect that only changes one transform.
*/
function Companion({ mood = "idle", className, label, follow = false }) {
	const ref = (0, import_react.useRef)(null);
	const eyesRef = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const [blinking, setBlinking] = (0, import_react.useState)(false);
	/**
	* Blink on an irregular schedule.
	*
	* A fixed interval is what gives a mascot away — real blinking clusters and
	* drifts — so the next one is drawn from a range rather than counted off a
	* metronome, with the occasional double blink. That last detail is small and
	* does more than anything else here to stop it reading as a machine.
	*/
	(0, import_react.useEffect)(() => {
		if (reduce || mood === "resting") return;
		let timer = 0;
		const blink = () => {
			setBlinking(true);
			window.setTimeout(() => setBlinking(false), 130);
			if (Math.random() < .22) window.setTimeout(() => {
				setBlinking(true);
				window.setTimeout(() => setBlinking(false), 110);
			}, 260);
		};
		const schedule = () => {
			timer = window.setTimeout(() => {
				blink();
				schedule();
			}, 3e3 + Math.random() * 5e3);
		};
		schedule();
		return () => window.clearTimeout(timer);
	}, [reduce, mood]);
	/**
	* Watch the pointer, and look around when there is nothing to watch.
	*
	* One rAF loop drives both. The eyes ease toward a target rather than snapping
	* to it, which is most of what makes the movement read as *looking* rather
	* than as a value being assigned. After a few seconds with the pointer still,
	* the target wanders on its own — so an idle cursor leaves a curious face
	* instead of a frozen one.
	*/
	(0, import_react.useEffect)(() => {
		if (reduce || mood === "resting") return;
		const node = ref.current;
		const eyes = eyesRef.current;
		if (!node || !eyes) return;
		let raf = 0;
		let targetX = 0;
		let targetY = 0;
		let x = 0;
		let y = 0;
		let idleSince = performance.now();
		let nextGlance = 0;
		const onMove = (event) => {
			const box = node.getBoundingClientRect();
			const dx = event.clientX - (box.left + box.width / 2);
			const dy = event.clientY - (box.top + box.height / 2);
			const distance = Math.hypot(dx, dy) || 1;
			if (follow) {
				const reach = Math.min(1, distance / 260);
				targetX = dx / distance * reach * GAZE_X;
				targetY = dy / distance * reach * GAZE_Y;
			} else {
				const RANGE = 380;
				if (distance > RANGE) {
					targetX = 0;
					targetY = 0;
					return;
				}
				const nearness = 1 - distance / RANGE;
				targetX = dx / distance * nearness * GAZE_X;
				targetY = dy / distance * nearness * GAZE_Y;
			}
			idleSince = performance.now();
		};
		const frame = (now) => {
			if (now - idleSince > 2600 && now > nextGlance) {
				const angle = Math.random() * Math.PI * 2;
				const reach = .35 + Math.random() * .5;
				targetX = Math.cos(angle) * reach * GAZE_X;
				targetY = Math.sin(angle) * reach * GAZE_Y;
				nextGlance = now + 1400 + Math.random() * 2600;
			}
			x += (targetX - x) * .18;
			y += (targetY - y) * .18;
			eyes.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
			raf = requestAnimationFrame(frame);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(frame);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(raf);
			eyes.style.transform = "";
		};
	}, [
		reduce,
		mood,
		follow
	]);
	const shut = blinking || mood === "resting";
	const squint = mood === "pleased";
	const leftH = shut ? 3.5 : squint ? 18 : 31;
	const rightH = shut ? 3.5 : squint ? 15 : 26;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		viewBox: "0 0 100 100",
		className: cn("nl-companion size-16", className),
		role: label ? "img" : void 0,
		"aria-label": label,
		"aria-hidden": label ? void 0 : true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "40",
				className: "nl-companion-face"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				ref: eyesRef,
				className: "nl-companion-eyes",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "37",
					y: 62 - leftH / 2,
					width: "15",
					height: leftH,
					rx: "7.5",
					transform: "rotate(-8 44.5 62)",
					className: "nl-companion-eye"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "61",
					y: 64 - rightH / 2,
					width: "13",
					height: rightH,
					rx: "6.5",
					transform: "rotate(10 67.5 64)",
					className: "nl-companion-eye"
				})]
			}),
			mood === "thinking" && !reduce ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "82",
				cy: "26",
				r: "3.5",
				className: "nl-companion-think"
			}) : null
		]
	});
}
var listeners = /* @__PURE__ */ new Set();
/** Politely announce a status to assistive tech without moving focus (WCAG 4.1.3). */
function announce(message) {
	const text = message.replace(/\s+/g, " ").trim();
	if (!text) return;
	for (const listener of listeners) listener(text);
}
function subscribeAnnounce(listener) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}
function LensLoader({ label = "Loading", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2.5 text-sm text-muted", className),
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "lens-orbit inline-block size-4 shrink-0 rounded-full border-2 border-fg/20 border-t-fg"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
var ACCEPT = ".pdf,.txt,.md,application/pdf,text/plain,text/markdown";
function FileDrop({ onFile, busy = false, compact = false, children }) {
	const inputRef = (0, import_react.useRef)(null);
	const [over, setOver] = (0, import_react.useState)(false);
	function take(file) {
		if (!file || busy) return;
		onFile(file);
	}
	function onDrag(event) {
		if (!event.dataTransfer || ![...event.dataTransfer.types].includes("Files")) return;
		event.preventDefault();
		event.stopPropagation();
		event.dataTransfer.dropEffect = "copy";
		setOver(true);
	}
	function onLeave(event) {
		event.preventDefault();
		setOver(false);
	}
	function onDrop(event) {
		event.preventDefault();
		event.stopPropagation();
		setOver(false);
		take(event.dataTransfer.files?.[0]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref: inputRef,
		type: "file",
		accept: ACCEPT,
		className: "sr-only",
		"aria-hidden": "true",
		tabIndex: -1,
		suppressHydrationWarning: true,
		onChange: (event) => {
			const file = event.target.files?.[0];
			event.currentTarget.value = "";
			take(file);
		}
	}), compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "pl-3 pr-2.5",
		disabled: busy,
		"aria-busy": busy,
		onClick: () => inputRef.current?.click(),
		children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Parsing" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
			size: 14,
			className: "icon-motion icon-rise"
		}), "Upload"] })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled: busy,
		"aria-busy": busy,
		"aria-label": "Upload a PDF or text file",
		onClick: () => inputRef.current?.click(),
		onDragEnter: onDrag,
		onDragOver: onDrag,
		onDragLeave: onLeave,
		onDrop,
		className: cn("flex h-24 w-full cursor-pointer items-center justify-center rounded-xl bg-surface text-sm shadow-border", over && "bg-fg/6"),
		children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Parsing" }) : children ?? "Drop a PDF or text file here"
	})] });
}
var MAX_EXTRACT_CHARS = 4e5;
function summarize(content, title, format, pageCount) {
	const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
	return {
		content: content.trim(),
		title,
		metadata: {
			format,
			pageCount,
			wordCount,
			estimatedReadTime: Math.max(1, Math.ceil(wordCount / 200))
		}
	};
}
function fileMime(file) {
	return typeof file.type === "string" ? file.type.toLowerCase() : "";
}
function fileName(file) {
	return (file.name || "untitled").trim() || "untitled";
}
function extensionOf(name) {
	const parts = name.split(".");
	if (parts.length < 2) return "";
	return (parts.pop() ?? "").toLowerCase();
}
function isPdfFile(name, mime) {
	return extensionOf(name) === "pdf" || mime === "application/pdf" || mime === "application/x-pdf";
}
function isTextFile(name, mime) {
	const ext = extensionOf(name);
	if (ext === "txt" || ext === "md" || ext === "markdown") return true;
	if (mime.startsWith("text/")) return true;
	if (mime === "application/markdown" || mime === "text/markdown") return true;
	return false;
}
function titleFrom(name, pattern) {
	return name.replace(pattern, "") || name;
}
function isPdfNoise(message, filename = "") {
	return /pdf\.worker|pdfjs|Setting up fake worker|Failed to fetch dynamically imported module/i.test(`${message} ${filename}`);
}
async function withPdfErrorsSilenced(work) {
	if (typeof window === "undefined") return work();
	const onError = (event) => {
		if (isPdfNoise(event.message || "", event.filename || "")) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	};
	const onReject = (event) => {
		const reason = event.reason;
		if (isPdfNoise(reason instanceof Error ? reason.message : String(reason ?? ""))) event.preventDefault();
	};
	window.addEventListener("error", onError, true);
	window.addEventListener("unhandledrejection", onReject);
	try {
		return await work();
	} finally {
		window.removeEventListener("error", onError, true);
		window.removeEventListener("unhandledrejection", onReject);
	}
}
async function processPdf(file) {
	if (typeof window === "undefined") throw new Error("PDF parsing is only available in the reader.");
	let pdfjs;
	try {
		pdfjs = await import("../_libs/pdfjs-dist.mjs").then((n) => n.t);
	} catch {
		throw new Error("Could not load the PDF reader. Paste the text instead.");
	}
	pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
	const raw = await file.arrayBuffer();
	const data = new Uint8Array(raw.slice(0));
	return withPdfErrorsSilenced(async () => {
		let pdf;
		try {
			pdf = await pdfjs.getDocument({
				data,
				useWasm: false,
				useWorkerFetch: false,
				isOffscreenCanvasSupported: false,
				verbosity: 0
			}).promise;
		} catch (err) {
			const detail = err instanceof Error ? err.message : "";
			if (/password/i.test(detail)) throw new Error("That PDF is password-protected. Paste the text instead.");
			throw new Error("Could not read that PDF. Try a text file, or paste the contents.");
		}
		const pages = Math.min(pdf.numPages, 200);
		const pageTexts = [];
		let hasImages = false;
		let charBudget = MAX_EXTRACT_CHARS;
		try {
			for (let i = 1; i <= pages; i += 1) {
				const page = await pdf.getPage(i);
				if (!hasImages) try {
					hasImages = operatorListHasImages((await page.getOperatorList()).fnArray, pdfjs.OPS);
				} catch {
					hasImages = true;
				}
				const strings = (await page.getTextContent()).items.map((item) => "str" in item ? item.str : "").join(" ").replace(/\s+/g, " ").trim();
				if (charBudget <= 0) {
					pageTexts.push("");
					continue;
				}
				const clipped = strings.slice(0, charBudget);
				charBudget -= clipped.length;
				pageTexts.push(clipped);
			}
		} catch {
			throw new Error("Could not read that PDF. Try a text file, or paste the contents.");
		}
		rememberPdfDocument(pdf);
		const extracted = pageTexts.join(" ").trim();
		const name = fileName(file);
		const joined = joinPdfPages(pageTexts);
		const words = extracted ? extracted.split(/\s+/).length : 0;
		const summary = summarize(extracted || name, titleFrom(name, /\.pdf$/i), "PDF", pdf.numPages);
		return {
			...summary,
			content: joined,
			metadata: {
				...summary.metadata,
				wordCount: words,
				estimatedReadTime: Math.max(1, Math.ceil((words || pages * 80) / 200)),
				hasImages
			}
		};
	});
}
function operatorListHasImages(fnArray, ops) {
	const codes = new Set([
		ops.paintImageXObject,
		ops.paintImageMaskXObject,
		ops.paintInlineImageXObject,
		ops.paintJpegXObject,
		ops.paintImageXObjectRepeat,
		ops.paintInlineImageXObjectGroup,
		ops.paintImageMaskXObjectRepeat,
		ops.paintImageMaskXObjectGroup,
		ops.paintSolidColorImageMask
	].filter((code) => typeof code === "number"));
	return fnArray.some((fn) => codes.has(fn));
}
async function processDocument(file) {
	if (!file) throw new Error("No file selected.");
	if (typeof file.size === "number" && file.size > 20971520) throw new Error("That file is larger than 20 MB. Try a shorter document, or paste the text.");
	const name = fileName(file);
	const mime = fileMime(file);
	try {
		if (isPdfFile(name, mime)) return await processPdf(file);
		if (isTextFile(name, mime)) {
			let content;
			try {
				content = await file.text();
			} catch {
				throw new Error("Could not read that text file.");
			}
			const trimmed = content.trim();
			if (!trimmed) throw new Error("That file was empty.");
			const ext = extensionOf(name);
			const format = ext === "md" || ext === "markdown" ? "MD" : "TXT";
			return summarize(trimmed.slice(0, MAX_EXTRACT_CHARS), titleFrom(name, /\.(txt|md|markdown)$/i), format);
		}
		throw new Error(`Unsupported file format: ${extensionOf(name) || mime || "unknown"}. Use PDF, .txt, or .md.`);
	} catch (err) {
		if (err instanceof Error) throw err;
		throw new Error("Could not read that file. Paste the text instead.");
	}
}
var FONT_STACK = {
	sans: "\"Segoe UI\", ui-sans-serif, system-ui, sans-serif",
	serif: "Newsreader, \"Iowan Old Style\", Palatino, Georgia, serif",
	lexend: "Lexend, ui-sans-serif, sans-serif",
	atkinson: "\"Atkinson Hyperlegible\", ui-sans-serif, sans-serif",
	inclusive: "\"Inclusive Sans\", ui-sans-serif, sans-serif",
	andika: "Andika, ui-sans-serif, sans-serif",
	opendyslexic: "OpenDyslexic, Lexend, ui-sans-serif, sans-serif",
	literata: "Literata, Georgia, serif",
	comicneue: "\"Comic Neue\", \"Comic Sans MS\", ui-sans-serif, sans-serif",
	sourcesans: "\"Source Sans 3\", ui-sans-serif, sans-serif"
};
function profileSummary(profile, targetWpm) {
	const font = FONT_CHOICES.find((item) => item.id === profile.fontFamily)?.label ?? profile.fontFamily;
	return [
		`Scheme ${COLOR_SCHEMES.find((item) => item.id === profile.theme)?.label ?? profile.theme}`,
		`${font} ${profile.fontSize}px`,
		`line height ${profile.lineHeight.toFixed(1)}`,
		`letter ${profile.letterSpacing.toFixed(2)}`,
		`word ${profile.wordSpacing.toFixed(2)}`,
		`fixation ${Math.round(profile.bionicStrength * 100)}%`,
		profile.plainLanguage ? "plain words on" : "plain words off",
		`rhythm ${profile.rhythmCurve}`,
		`target ${targetWpm} WPM`
	].join(" · ");
}
function exportPlainText(text, profile, targetWpm, title) {
	return `${title}\nNeuroLens export · ${profileSummary(profile, targetWpm)}\n\n${text.trim()}\n`;
}
function escapeHtml$1(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function exportHtmlDocument(text, profile, targetWpm, title) {
	const scheme = COLOR_SCHEMES.find((item) => item.id === profile.theme);
	const bg = scheme?.swatch ?? "#f0e8dc";
	const fg = scheme?.ink ?? "#1c1611";
	const paragraphs = processBionicText(text, profile.bionicStrength, profile.rhythmOptimization).split(/\n\s*\n/).map((chunk) => chunk.trim()).filter(Boolean).map((chunk) => `<p>${chunk.replace(/\n/g, "<br>")}</p>`).join("\n");
	const summary = profileSummary(profile, targetWpm);
	const colorScheme = scheme && DARK_SCHEMES.includes(scheme.id) ? "dark" : "light";
	const safeTitle = escapeHtml$1(title);
	const safeSummary = escapeHtml$1(summary);
	return [
		"<!DOCTYPE html>",
		"<html lang=\"en\">",
		"<head>",
		"  <meta charset=\"utf-8\" />",
		"  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />",
		`  <title>${safeTitle} · NeuroLens</title>`,
		"  <style>",
		`    :root { color-scheme: ${colorScheme}; }`,
		"    body {",
		"      margin: 0 auto;",
		"      max-width: 40rem;",
		"      padding: 2.5rem 1.5rem 4rem;",
		`      background: ${bg};`,
		`      color: ${fg};`,
		`      font-family: ${FONT_STACK[profile.fontFamily]};`,
		`      font-size: ${profile.fontSize}px;`,
		`      line-height: ${profile.lineHeight};`,
		`      letter-spacing: ${profile.letterSpacing}em;`,
		`      word-spacing: ${profile.wordSpacing}em;`,
		"    }",
		"    header { margin-bottom: 2rem; }",
		"    .kicker { font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.62; }",
		"    h1 { font-size: 1.8em; line-height: 1.2; font-weight: 500; margin: 0.4rem 0 0.75rem; }",
		"    .meta { font-size: 0.85rem; opacity: 0.7; }",
		"    .fixation { font-weight: 700; letter-spacing: -0.02em; }",
		"    p { margin: 0 0 1.1em; }",
		"  </style>",
		"</head>",
		"<body>",
		"  <header>",
		"    <p class=\"kicker\">NeuroLens export</p>",
		`    <h1>${safeTitle}</h1>`,
		`    <p class="meta">${safeSummary}</p>`,
		"  </header>",
		"  <article>",
		paragraphs,
		"  </article>",
		"</body>",
		"</html>"
	].join("\n");
}
async function copyReading(text, profile, targetWpm, title) {
	const plain = exportPlainText(text, profile, targetWpm, title);
	const html = exportHtmlDocument(text, profile, targetWpm, title);
	if (typeof ClipboardItem !== "undefined" && navigator.clipboard.write) try {
		await navigator.clipboard.write([new ClipboardItem({
			"text/html": new Blob([html], { type: "text/html" }),
			"text/plain": new Blob([plain], { type: "text/plain" })
		})]);
		return;
	} catch {}
	await navigator.clipboard.writeText(plain);
}
function downloadReading(text, profile, targetWpm, title) {
	const html = exportHtmlDocument(text, profile, targetWpm, title);
	const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "neurolens";
	const blob = new Blob([html], { type: "text/html;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `${slug}.html`;
	link.click();
	URL.revokeObjectURL(url);
}
/**
* Render marked passages as Markdown.
*
* Markdown rather than the styled HTML the reading export produces, because
* these are going somewhere else — a notes app, an essay, a citation — and a
* document carrying this app's type settings would be fighting whatever it
* lands in. Notes are quoted under their passage so the pairing survives the
* trip.
*/
/** Collapse a passage onto one line, so a blockquote stays a blockquote. */
function flatten(value) {
	return value.replace(/\s+/g, " ").trim();
}
function highlightsToMarkdown(groups) {
	const lines = ["# Highlights", ""];
	for (const group of groups) {
		if (!group.marks.length) continue;
		lines.push(`## ${group.title}`, "");
		for (const mark of group.marks) {
			lines.push(`> ${flatten(mark.text)}`);
			if (mark.note) lines.push("", flatten(mark.note));
			lines.push("");
		}
	}
	const total = groups.reduce((sum, group) => sum + group.marks.length, 0);
	lines.push("---", `${total} passage${total === 1 ? "" : "s"} from NeuroLens.`, "");
	return lines.join("\n");
}
/** Save the marked passages as a .md file. */
function downloadHighlights(groups) {
	const markdown = highlightsToMarkdown(groups);
	const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "neurolens-highlights.md";
	link.click();
	URL.revokeObjectURL(url);
}
var LIGHT = COLOR_SCHEMES.filter((scheme) => scheme.room === "light");
var DARK = COLOR_SCHEMES.filter((scheme) => scheme.room === "dark");
function SchemeCard({ id, selected, onChange, compact }) {
	const scheme = COLOR_SCHEMES.find((item) => item.id === id);
	if (!scheme) return null;
	const report = evaluateScheme(id, 18);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "radio",
		"aria-checked": selected,
		"aria-label": `${scheme.label}, ${scheme.line}`,
		"data-scheme": id,
		onClick: () => onChange(id),
		className: cn("scheme-card group flex min-h-11 min-w-0 flex-col overflow-hidden rounded-lg bg-bg text-left text-fg transition-[transform,box-shadow] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.98]", selected ? "shadow-float ring-2 ring-fg" : "shadow-border hover:shadow-border-hover"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("relative min-w-0", compact ? "px-2.5 pt-2.5 pb-1.5" : "px-3 pt-3 pb-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block font-serif text-base leading-snug whitespace-nowrap",
						children: ["Aa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic",
							children: "page"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block truncate text-[11px] leading-relaxed text-muted",
						children: scheme.line
					}),
					selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-2 right-2 flex size-5 items-center justify-center rounded-full bg-fg text-primary-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							size: 12,
							strokeWidth: 2.5,
							className: "icon-motion icon-lift"
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex h-1.5 w-full shrink-0",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 bg-fg" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("mt-auto flex min-w-0 items-center gap-2 border-t border-border bg-surface", compact ? "justify-start px-2.5 py-1.5" : "justify-between px-3 py-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate text-sm font-medium whitespace-nowrap",
					children: scheme.label
				}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0 text-[10px] tracking-wide text-muted uppercase",
					children: [
						report.bodyLevel,
						" ",
						formatContrastRatio(report.body)
					]
				})]
			})
		]
	});
}
function SchemePicker({ value, onChange, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Light rooms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "radiogroup",
				"aria-label": "Light color schemes",
				className: cn("grid gap-2", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"),
				children: LIGHT.map((scheme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, {
					id: scheme.id,
					selected: value === scheme.id,
					onChange,
					compact
				}, scheme.id))
			}),
			compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs leading-relaxed text-pretty text-muted",
				children: "British Dyslexia Association cream, and Rello & Bigham's peach and pale yellow, beat cool white for many dyslexic readers. Preference still wins — try Cream, Peach, or Butter before Contrast."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
			children: "Dark rooms"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "radiogroup",
			"aria-label": "Dark color schemes",
			className: cn("grid gap-2", compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"),
			children: DARK.map((scheme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemeCard, {
				id: scheme.id,
				selected: value === scheme.id,
				onChange,
				compact
			}, scheme.id))
		})] })]
	});
}
function ContrastMeter({ theme, fontSize }) {
	const report = evaluateScheme(theme, fontSize);
	const label = report.bodyLevel === "fail" ? "below AA" : report.bodyLevel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 text-xs leading-relaxed text-muted",
		children: [
			"Body ",
			formatContrastRatio(report.body),
			" at ",
			fontSize,
			"px · WCAG ",
			label,
			". Muted",
			" ",
			formatContrastRatio(report.muted),
			"."
		]
	});
}
function FontPicker({ value, onChange, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [FONT_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: group.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 mb-2 text-xs leading-relaxed text-pretty text-muted",
				children: group.hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-1.5",
				children: FONT_CHOICES.filter((font) => font.group === group.id).map((font) => {
					const selected = value === font.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => onChange(font.id),
						className: cn("flex min-h-11 min-w-0 flex-col items-start justify-center rounded-md px-3 py-2.5 text-left transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", selected ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium whitespace-nowrap",
							children: font.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-0.5 block text-sm leading-snug text-pretty", FONT_CLASS[font.id], selected ? "text-primary-fg/75" : "text-muted", compact ? "hidden" : ""),
							children: font.sample
						})]
					}, font.id);
				})
			})
		] }, group.id)), value === "opendyslexic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenDyslexicNote, {}) : null]
	});
}
function OpenDyslexicNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-fg/4 px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs leading-relaxed text-pretty text-muted",
			children: "OpenDyslexic weights the base of each letter so b, d, p, and q look less alike. Controlled trials have not found faster or more accurate reading than Arial or Times — some readers still prefer the shapes. Size, spacing, and a distinct sans (Lexend, Atkinson) are what the evidence actually supports. Keep this face if it feels easier; switch if it does not."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-opendyslexic mt-3 text-xl leading-relaxed tracking-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-b",
					children: "b"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-2 text-muted",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-d",
					children: "d"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-2 text-muted",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-p",
					children: "p"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-2 text-muted",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-q",
					children: "q"
				})
			]
		})]
	});
}
/**
* Bionic fixation spans are a visual aid. Screen readers that honor inner
* <span> boundaries will spell “T he” instead of “The”. Keep the styled HTML
* for sighted reading and expose the original sentence to AT.
*/
function AccessibleBionic({ text, html }) {
	if (!html.includes("<")) return text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		dangerouslySetInnerHTML: { __html: html }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: text
	})] });
}
function deviceMotionSupported() {
	return typeof window !== "undefined" && "DeviceMotionEvent" in window;
}
/** iOS 13+ gates the sensors behind an explicit, gesture-initiated prompt. */
function motionPermissionNeeded() {
	if (!deviceMotionSupported()) return false;
	return typeof window.DeviceMotionEvent?.requestPermission === "function";
}
async function requestMotionPermission() {
	if (!motionPermissionNeeded()) return deviceMotionSupported();
	try {
		return await window.DeviceMotionEvent.requestPermission?.() === "granted";
	} catch {
		return false;
	}
}
/**
* Subscribe to the device's acceleration, gravity removed and smoothed.
*
* `accelerationIncludingGravity` is used rather than `acceleration`, because
* the latter is null on a great many Android devices — they report only the
* combined figure. Gravity is then removed with a slow low-pass filter, which
* is the standard approach: whatever the accelerometer reads over several
* seconds *is* the gravity vector, so subtracting the running average leaves
* the movement.
*
* The result is smoothed again, harder. Raw accelerometer data is noisy enough
* that cues driven straight from it would jitter, and a jittering motion cue
* makes the problem it exists to solve worse.
*/
function listenToMotion(onSample) {
	if (!deviceMotionSupported()) return () => {};
	let gx = 0;
	let gy = 0;
	let smoothX = 0;
	let smoothY = 0;
	let seeded = false;
	const GRAVITY_ALPHA = .92;
	const SMOOTH_ALPHA = .82;
	const onMotion = (event) => {
		const reading = event.accelerationIncludingGravity;
		if (!reading || reading.x == null || reading.y == null) return;
		if (!seeded) {
			gx = reading.x;
			gy = reading.y;
			seeded = true;
		}
		gx = GRAVITY_ALPHA * gx + .07999999999999996 * reading.x;
		gy = GRAVITY_ALPHA * gy + .07999999999999996 * reading.y;
		const linearX = reading.x - gx;
		const linearY = reading.y - gy;
		smoothX = SMOOTH_ALPHA * smoothX + .18000000000000005 * linearX;
		smoothY = SMOOTH_ALPHA * smoothY + .18000000000000005 * linearY;
		onSample({
			x: smoothX,
			y: smoothY
		});
	};
	window.addEventListener("devicemotion", onMotion);
	return () => window.removeEventListener("devicemotion", onMotion);
}
/** Kick off a download. Blob-and-revoke, so nothing is left holding memory. */
function downloadFile(name, body, type) {
	if (typeof document === "undefined") return;
	const blob = new Blob([body], { type: `${type};charset=utf-8` });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = name;
	document.body.appendChild(link);
	link.click();
	link.remove();
	window.setTimeout(() => URL.revokeObjectURL(url), 1e4);
}
function stamp() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
/**
* Highlights as Markdown, grouped by book.
*
* Markdown rather than JSON, because these are the export someone actually
* reads: they go into notes, an essay, a reading journal. A JSON dump of the
* same passages would be technically complete and useless for the purpose.
* Notes are quoted beneath their passage so the pairing survives the trip.
*/
function highlightsAsMarkdown(highlights, titleFor) {
	const books = Object.entries(highlights).filter(([, marks]) => marks.length > 0);
	if (!books.length) return "# NeuroLens highlights\n\nNothing marked yet.\n";
	const lines = [
		"# NeuroLens highlights",
		"",
		`Exported ${stamp()}.`,
		""
	];
	for (const [key, marks] of books) {
		lines.push(`## ${titleFor(key)}`, "");
		const ordered = [...marks].sort((a, b) => a.section - b.section || a.lineIdx - b.lineIdx || a.start - b.start);
		for (const mark of ordered) {
			lines.push(`> ${mark.text.replace(/\n+/g, " ").trim()}`);
			if (mark.note) lines.push("", `${mark.note.replace(/\n+/g, " ").trim()}`);
			lines.push("");
		}
	}
	return lines.join("\n");
}
function exportHighlights(highlights, titleFor) {
	downloadFile(`neurolens-highlights-${stamp()}.md`, highlightsAsMarkdown(highlights, titleFor), "text/markdown");
}
/**
* Everything, as JSON.
*
* Session text is included. It makes the file large — a shelf of novels is
* megabytes — but a backup that cannot restore what you were reading is not a
* backup, and this is the file someone reaches for after losing a machine.
*/
function buildBundle(state) {
	return {
		app: "NeuroLens",
		version: 1,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		...state
	};
}
function exportEverything(state) {
	downloadFile(`neurolens-backup-${stamp()}.json`, JSON.stringify(buildBundle(state), null, 2), "application/json");
}
/**
* Phosphor icon data, inlined.
*
* `@iconify/react` resolves bare icon names over the network from
* api.iconify.design. This app is built to read offline, so the icons the
* chrome needs are checked in as data and passed to <Icon icon={...} />
* directly — no request, no flash of missing glyph, no third-party origin in
* the critical path.
*
* Generated from the `@iconify-json/ph` devDependency; re-run the generator
* rather than hand-editing the path data below.
*/
var SIZE = {
	width: 256,
	height: 256
};
var binoculars = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M237.2 151.87a47 47 0 0 0-2.35-5.45L193.26 51.8a7.8 7.8 0 0 0-1.66-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a7.8 7.8 0 0 0-1.66 2.44L21.15 146.4a47 47 0 0 0-2.35 5.45A48 48 0 1 0 112 168V96h32v72a48 48 0 1 0 93.2-16.13M76.71 59.75a16 16 0 0 1 19.29-1v73.51a47.9 47.9 0 0 0-46.79-9.92ZM64 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96-141.26a16 16 0 0 1 19.29 1l27.5 62.58a47.9 47.9 0 0 0-46.79 9.93ZM192 200a32 32 0 1 1 32-32a32 32 0 0 1-32 32\"/>"
};
var binocularsFill = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M237.22 151.9v-.1a1.4 1.4 0 0 0-.07-.22a49 49 0 0 0-2.31-5.3L193.27 51.8a8 8 0 0 0-1.67-2.44a32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66a32 32 0 0 0-45.26 0a8 8 0 0 0-1.67 2.44l-41.53 94.5a49 49 0 0 0-2.31 5.3a2 2 0 0 0-.07.21s0 .08 0 .11a48 48 0 0 0 90.32 32.51a47.5 47.5 0 0 0 2.9-16.59V96h32v71.83a47.5 47.5 0 0 0 2.9 16.59a48 48 0 0 0 90.32-32.51Zm-143.15 27a32 32 0 0 1-60.2-21.71l1.81-4.13A32 32 0 0 1 96 167.88v.12a32 32 0 0 1-1.93 10.94ZM203 198.07A32 32 0 0 1 160 168v-.11a32 32 0 0 1 60.32-14.78l1.81 4.13A32 32 0 0 1 203 198.07\"/>"
};
var bookOpen = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M232 48h-72a40 40 0 0 0-32 16a40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z\"/>"
};
var bookOpenFill = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M240 56v144a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94a7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v87.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V80a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8\"/>"
};
var books = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm6.62 31.47l46.82-10.05l3.34 15.9L146 97.53Zm6.64 31.57l46.82-10.06l13.3 63.24l-46.82 10.06ZM216 197.94l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z\"/>"
};
var booksFill = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z\"/>"
};
var eye = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32\"/>"
};
var eyeFill = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40\"/>"
};
var slidersHorizontal = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M40 88h33a32 32 0 0 0 62 0h81a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16m64-24a16 16 0 1 1-16 16a16 16 0 0 1 16-16m112 104h-17a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16h97a32 32 0 0 0 62 0h17a8 8 0 0 0 0-16m-48 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16\"/>"
};
var slidersHorizontalFill = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M32 80a8 8 0 0 1 8-8h37.17a28 28 0 0 1 53.66 0H216a8 8 0 0 1 0 16h-85.17a28 28 0 0 1-53.66 0H40a8 8 0 0 1-8-8m184 88h-21.17a28 28 0 0 0-53.66 0H40a8 8 0 0 0 0 16h101.17a28 28 0 0 0 53.66 0H216a8 8 0 0 0 0-16\"/>"
};
var magnifyingGlass = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72\"/>"
};
var list = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16\"/>"
};
var x = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z\"/>"
};
var translate = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.76 87.76 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z\"/>"
};
var crosshair = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-96 87.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16h7.6a80.15 80.15 0 0 1-71.6 71.6M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24\"/>"
};
var highlighter = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69L107.31 72l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.19-21.18a16 16 0 0 0 18.81-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69L83.31 112L104 91.31L172.69 160Z\"/>"
};
var compass = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m44.42-143.16l-64 32a8.05 8.05 0 0 0-3.58 3.58l-32 64A8 8 0 0 0 80 184a8.1 8.1 0 0 0 3.58-.84l64-32a8.05 8.05 0 0 0 3.58-3.58l32-64a8 8 0 0 0-10.74-10.74M138 138l-40.11 20.11L118 118l40.15-20.07Z\"/>"
};
var bookmarkSimple = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z\"/>"
};
var bookmarkSimpleFill = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16\"/>"
};
var speakerHigh = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.55V91.91l56-43.55Zm54-106.08a40 40 0 0 1 0 52.88a8 8 0 0 1-12-10.58a24 24 0 0 0 0-31.72a8 8 0 0 1 12-10.58M248 128a79.9 79.9 0 0 1-20.37 53.34a8 8 0 0 1-11.92-10.67a64 64 0 0 0 0-85.33a8 8 0 1 1 11.92-10.67A79.83 79.83 0 0 1 248 128\"/>"
};
({ ...SIZE });
var dotsThree = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12\"/>"
};
var play = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M232.4 114.49L88.32 26.35a16 16 0 0 0-16.2-.3A15.86 15.86 0 0 0 64 39.87v176.26A15.94 15.94 0 0 0 80 232a16.07 16.07 0 0 0 8.36-2.35l144.04-88.14a15.81 15.81 0 0 0 0-27ZM80 215.94V40l143.83 88Z\"/>"
};
var pause = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M200 32h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-40V48h40ZM96 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H56V48h40Z\"/>"
};
var microphone = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48M96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V240a8 8 0 0 1-16 0v-32.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6\"/>"
};
var caretRight = {
	...SIZE,
	body: "<path fill=\"currentColor\" d=\"m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32\"/>"
};
function TooltipProvider({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration: 280,
		skipDelayDuration: 420,
		...props,
		children
	});
}
var Tooltip = Root3;
var TooltipTrigger = Trigger$1;
function TooltipContent({ className, sideOffset = 8, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$2, {
		sideOffset,
		className: cn("z-80 rounded-sm bg-fg px-2 py-1 text-xs text-primary-fg shadow-float", "origin-[var(--radix-tooltip-content-transform-origin)]", "data-[state=delayed-open]:animate-[menu-in_125ms_var(--ease-out)]", "data-[state=instant-open]:animate-none", "data-[state=closed]:animate-[menu-out_80ms_var(--ease-out)]", "motion-reduce:data-[state=delayed-open]:animate-[overlay-in_120ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_80ms_ease]", className),
		...props
	}) });
}
/** Pace floor, so a stalled session cannot claim an eight-hour part. */
var MIN_WPM = 80;
function wordsIn(text) {
	return text.trim() ? text.trim().split(/\s+/).length : 0;
}
/**
* Divide a book the way the reader divides it.
*
* Declared chapters first, then automatic Parts for anything long enough to
* need them, and a single undivided section otherwise — the same order the
* reader itself uses, so the Part number shown here is the Part number shown
* there.
*/
function sectionsOf(text, kind) {
	if (kind === "pdf") {
		const pages = splitPdfPages(text);
		if (pages.length) return pages;
	}
	const declared = splitTextChapters(text);
	if (declared.length > 1) return declared.map((chapter) => chapter.body);
	const paginated = paginateLongText(text);
	if (paginated.length > 1) return paginated.map((part) => part.body);
	return [text];
}
function positionOf(session, targetWpm = 220) {
	const sections = sectionsOf(session.content, session.kind);
	const within = Math.min(1, Math.max(0, session.progress ?? 0));
	const wpm = Math.max(MIN_WPM, session.currentWpm || targetWpm || 220);
	if (sections.length <= 1) {
		const total = wordsIn(session.content);
		const left = Math.max(0, Math.round(total * (1 - within)));
		return {
			part: 0,
			totalParts: 1,
			wordsLeft: left,
			minutesLeft: left ? Math.max(1, Math.round(left / wpm)) : 0,
			finished: within >= .995,
			within
		};
	}
	const part = Math.min(sections.length, Math.max(1, Math.round(session.section ?? 1)));
	const sectionWords = wordsIn(sections[part - 1] ?? "");
	const left = Math.max(0, Math.round(sectionWords * (1 - within)));
	return {
		part,
		totalParts: sections.length,
		wordsLeft: left,
		minutesLeft: left ? Math.max(1, Math.round(left / wpm)) : 0,
		finished: part >= sections.length && within >= .995,
		within
	};
}
/** "about 9 min left", or null when there is nothing useful to say. */
function describeTimeLeft(position) {
	if (position.finished) return "finished";
	const minutes = position.minutesLeft;
	if (minutes == null || minutes <= 0) return null;
	if (minutes >= 60) return `about ${Math.round(minutes / 60)} hr left`;
	return `about ${minutes} min left`;
}
/** "Part 4 of 12", or null for a book that is not divided. */
function describePart(position) {
	if (!position.part || position.totalParts <= 1) return null;
	return `Part ${position.part} of ${position.totalParts}`;
}
/**
* Where a tap on Continue should actually land.
*
* Usually where the reader stopped. The exception is a part they finished
* without turning the page: sending them back to the top of it — which is what
* the reader does with a scroll fraction that close to the end — replays
* fifteen minutes they already read. Offering the next part instead is what the
* completion card at the bottom of that part offered them.
*/
function resumeTarget(position) {
	const done = position.within >= .98;
	if (done && position.part > 0 && position.part < position.totalParts) return {
		part: position.part + 1,
		within: 0
	};
	return {
		part: position.part,
		within: done ? 0 : position.within
	};
}
var Accordion = Root2;
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("group flex flex-1 items-center justify-between gap-4 py-5 text-left font-serif text-lg outline-none", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				size: 16,
				className: "shrink-0 text-muted transition-transform duration-[200ms] ease-[var(--ease-in-out)] group-data-[state=open]:rotate-90 icon-motion icon-shift"
			})]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden data-[state=closed]:animate-[accordion-close_250ms_var(--ease-out)] data-[state=open]:animate-[accordion-open_250ms_var(--ease-out)] motion-reduce:data-[state=closed]:animate-[overlay-out_120ms_ease] motion-reduce:data-[state=open]:animate-[overlay-in_160ms_ease]",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("max-w-2xl pb-5 text-sm leading-relaxed text-muted", className),
			children
		})
	});
}
function Reveal({ children, className, delay = 0, variant = "rise" }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const inView = useInView(ref, { rootMargin: "0px 0px -8% 0px" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn(variant === "clip" ? "reveal" : "io-reveal", (inView || reduce) && "is-in", className),
		style: delay && !reduce ? { transitionDelay: `${delay}ms` } : void 0,
		children
	});
}
registerGsap();
function HeroTitle() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	useGSAP(() => {
		const root = ref.current;
		if (!root || reduce) return;
		gsapWithCSS.fromTo(root, {
			y: 18,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1,
			duration: .55,
			ease: easeOut,
			clearProps: "transform,visibility,opacity"
		});
	}, { dependencies: [reduce] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
		ref,
		className: "max-w-[18ch] text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.04] lg:max-w-[15ch]",
		children: [
			"Read with ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "font-medium italic",
				children: "effortless"
			}),
			" clarity."
		]
	});
}
function cssScrollTimeline() {
	return typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");
}
var LERP = .14;
var SETTLE = .05;
function ParallaxHero({ children, className }) {
	const sectionRef = (0, import_react.useRef)(null);
	const reduceMotion = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		const pane = section.closest(".pane-scroll");
		const hasTimeline = cssScrollTimeline();
		const motionOff = reduceMotion === true;
		let targetX = 0;
		let targetY = 0;
		let curX = 0;
		let curY = 0;
		let raf = 0;
		let running = false;
		const writeMouse = () => {
			section.style.setProperty("--mx", `${curX.toFixed(2)}px`);
			section.style.setProperty("--my", `${curY.toFixed(2)}px`);
			section.style.setProperty("--rx", `${(-curY * .045).toFixed(3)}deg`);
			section.style.setProperty("--ry", `${(curX * .038).toFixed(3)}deg`);
		};
		const tick = () => {
			curX += (targetX - curX) * LERP;
			curY += (targetY - curY) * LERP;
			writeMouse();
			if (Math.abs(targetX - curX) < SETTLE && Math.abs(targetY - curY) < SETTLE) {
				curX = targetX;
				curY = targetY;
				writeMouse();
				running = false;
				raf = 0;
				return;
			}
			raf = requestAnimationFrame(tick);
		};
		const kick = () => {
			if (running) return;
			running = true;
			raf = requestAnimationFrame(tick);
		};
		const onPointer = (event) => {
			if (motionOff) return;
			if (event.pointerType === "touch") return;
			const nx = event.clientX / Math.max(1, window.innerWidth) * 2 - 1;
			const ny = event.clientY / Math.max(1, window.innerHeight) * 2 - 1;
			const rect = section.getBoundingClientRect();
			const mag = event.clientY >= rect.top && event.clientY <= rect.bottom ? 30 : 18;
			targetX = nx * mag;
			targetY = ny * mag * .7;
			kick();
		};
		const onLeave = () => {
			targetX = 0;
			targetY = 0;
			kick();
		};
		const onScroll = () => {
			if (!pane || hasTimeline || motionOff) return;
			section.style.setProperty("--parallax", `${pane.scrollTop}px`);
		};
		if (!motionOff) {
			section.classList.add("is-tracking");
			window.addEventListener("pointermove", onPointer, { passive: true });
			document.documentElement.addEventListener("mouseleave", onLeave);
		}
		if (!hasTimeline && pane) {
			onScroll();
			pane.addEventListener("scroll", onScroll, { passive: true });
		}
		return () => {
			running = false;
			if (raf) cancelAnimationFrame(raf);
			section.classList.remove("is-tracking");
			window.removeEventListener("pointermove", onPointer);
			document.documentElement.removeEventListener("mouseleave", onLeave);
			pane?.removeEventListener("scroll", onScroll);
		};
	}, [reduceMotion]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: cn("parallax-hero relative -mt-14 overflow-clip sm:-mt-16", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-mouse-far pointer-events-none absolute inset-x-0 -top-[22%] h-[144%]",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "parallax-far h-full w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
						src: "/images/hero-lens.jpg",
						alt: "",
						width: 1792,
						height: 1008,
						loading: "eager",
						fetchPriority: "high",
						className: "h-full w-full object-cover object-[center_42%]"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-mouse-glow parallax-glow pointer-events-none absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-veil pointer-events-none absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-mouse-near relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "parallax-near",
					children
				})
			})
		]
	});
}
var COACH_KEY = "neurolens-coach";
var STARTED_KEY = "neurolens-started";
var STEPS = [
	"Scroll to read. Options, on the left of the bar, changes type and color.",
	"Guides can split syllables, mark b and d, and swap dense words for simpler ones.",
	"The number on the right is how far you are. More holds the quieter tools."
];
function mark(key, value = "1") {
	try {
		localStorage.setItem(key, value);
	} catch {}
}
function read(key) {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}
function markStarted() {
	mark(STARTED_KEY);
	if (typeof document !== "undefined") document.documentElement.dataset.started = "1";
}
function ReadingCoach() {
	const progress = useAppStore((s) => s.reading.progress);
	const [step, setStep] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const raw = read(COACH_KEY);
		if (raw === "done") {
			setStep(null);
			return;
		}
		const next = Number(raw);
		setStep(Number.isFinite(next) && next >= 0 && next < STEPS.length ? next : 0);
	}, []);
	if (step == null || progress >= .12) return null;
	function finish() {
		mark(COACH_KEY, "done");
		setStep(null);
	}
	function next() {
		if (step == null) return;
		if (step >= STEPS.length - 1) {
			finish();
			return;
		}
		const index = step + 1;
		mark(COACH_KEY, String(index));
		setStep(index);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "material-surface pointer-events-auto flex max-w-md flex-col gap-2 rounded-lg px-3 py-2.5 shadow-float sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "min-w-0 text-xs leading-relaxed text-pretty",
			children: STEPS[step]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: finish,
				children: "Skip"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				onClick: next,
				children: step >= STEPS.length - 1 ? "Got it" : "Next"
			})]
		})]
	});
}
var FEATURES = [
	{
		image: "/images/hands.jpg",
		alt: "Hands turning a paperback beside a terracotta mug",
		index: "01",
		title: "Adaptive formatting",
		text: "Emphasis, spacing, type, and contrast that make dense pages easier to enter."
	},
	{
		image: "/images/feature-focus.jpg",
		alt: "A beam of window light falling across an open book",
		index: "02",
		title: "Focus-friendly rhythm",
		text: "Visual anchors that keep your eyes on the line without losing the thread."
	},
	{
		image: "/images/feature-books.jpg",
		alt: "Clothbound books beside a closed tablet on a linen table",
		index: "03",
		title: "Read your way",
		text: "Paste text, open a PDF, look up a Bible chapter, or read a poem."
	}
];
var START_MODES = [
	{
		id: "default",
		label: "Standard",
		hint: "A calm page, nothing extra."
	},
	{
		id: "adhd",
		label: "ADHD",
		hint: "Stronger fixation, quieter chrome."
	},
	{
		id: "dyslexia",
		label: "Dyslexia",
		hint: "Plain words, more space, distinct letters."
	}
];
function FirstStart() {
	const setMode = useAppStore((s) => s.setMode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "first-start mt-16 p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "How should the first page feel?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-pretty text-muted",
				children: "One choice. You can change it later. Nothing else is required."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-1.5 sm:grid-cols-3",
				children: START_MODES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setMode(item.id);
						markStarted();
					},
					className: "flex min-h-11 min-w-0 flex-col items-start justify-center rounded-md bg-fg/4 px-3 py-3 text-left hover:bg-fg/8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 text-xs leading-snug text-pretty text-muted",
						children: item.hint
					})]
				}, item.id))
			})
		]
	});
}
function Landing() {
	const startReading = useAppStore((s) => s.startReading);
	const sessions = useAppStore((s) => s.sessions);
	const [input, setInput] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [meta, setMeta] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const targetWpm = useAppStore((s) => s.targetWpm);
	/**
	* The book to offer, if there is one worth offering.
	*
	* Deliberately picky. A session opened and abandoned inside a few seconds is
	* not something anyone wants to be shown on their next visit, and a book
	* already finished is worse — being invited to continue something you
	* completed reads as the app not having noticed.
	*/
	const resumable = (0, import_react.useMemo)(() => {
		const latest = sessions.find((item) => ((item.progress ?? 0) > .01 || (item.section ?? 0) > 1) && item.content.trim());
		if (!latest) return null;
		const position = positionOf(latest, targetWpm);
		if (position.finished) return null;
		const target = resumeTarget(position);
		const position2 = positionOf({
			...latest,
			section: target.part,
			progress: target.within
		}, targetWpm);
		return {
			session: latest,
			detail: [describePart(position2), describeTimeLeft(position2)].filter(Boolean).join(" · "),
			target
		};
	}, [sessions, targetWpm]);
	const [demoBionic, setDemoBionic] = (0, import_react.useState)(true);
	const [demoTaken, setDemoTaken] = (0, import_react.useState)(false);
	const demoRef = (0, import_react.useRef)(null);
	const demoInView = useInView(demoRef, {
		once: false,
		rootMargin: "0px"
	});
	const reduceMotion = useReducedMotion();
	/**
	* Let the fixation preview demonstrate itself.
	*
	* This card carries the whole idea of the product and it sat still until
	* somebody clicked it, which meant the one thing worth watching on the page
	* never moved. Cycling it turns the hero from a description of adaptive
	* formatting into a showing of it.
	*
	* Deliberately slow. At four seconds a pass the change registers as the text
	* re-setting itself rather than as a flicker demanding attention — which
	* matters more than usual for the readers this is built for. It runs only
	* while the card is actually on screen, stops for good once the visitor takes
	* the control, and never starts under reduced motion.
	*/
	(0, import_react.useEffect)(() => {
		if (demoTaken || reduceMotion || !demoInView) return;
		const timer = window.setInterval(() => setDemoBionic((on) => !on), 4e3);
		return () => window.clearInterval(timer);
	}, [
		demoTaken,
		reduceMotion,
		demoInView
	]);
	const [heroCtaGone, setHeroCtaGone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const cta = document.getElementById("hero-cta");
		if (!cta || typeof IntersectionObserver === "undefined") return;
		const observer = new IntersectionObserver(([entry]) => setHeroCtaGone(!entry?.isIntersecting), { rootMargin: "-8px 0px 0px 0px" });
		observer.observe(cta);
		return () => observer.disconnect();
	}, []);
	async function onUpload(file) {
		if (!file) return;
		setError(null);
		setUploading(true);
		try {
			const doc = await processDocument(file);
			setInput(doc.content);
			setMeta({
				title: doc.title,
				format: doc.metadata.format,
				wordCount: doc.metadata.wordCount,
				readTime: doc.metadata.estimatedReadTime
			});
			toast.success("Document ready");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not read that file.");
			toast.error(err instanceof Error ? err.message : "Could not read that file");
		} finally {
			setUploading(false);
		}
	}
	function onInPageNav(event) {
		const link = event.target.closest("a[href^='#']");
		if (!(link instanceof HTMLAnchorElement) || !link.hash) return;
		const id = decodeURIComponent(link.hash.slice(1));
		if (!id || !document.getElementById(id)) return;
		event.preventDefault();
		scrollToId(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-full flex-col pb-24 sm:pb-16",
		onClick: onInPageNav,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxHero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[min(78vh,44rem)] w-full flex-col justify-end gap-8 px-5 pt-[5.5rem] pb-10 sm:min-h-[min(84vh,50rem)] sm:gap-10 sm:px-10 sm:pt-28 sm:pb-14 lg:min-h-[min(92vh,56rem)] lg:flex-row lg:items-end lg:gap-16 lg:px-14 xl:px-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 lg:flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 font-serif text-base text-accent italic",
							children: "Adaptive reading"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroTitle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, {
							delay: 160,
							className: "mt-5 max-w-prose text-base leading-relaxed text-pretty text-muted sm:text-lg",
							children: "Formatting that follows your attention. Less visual friction, stronger fixation, a calmer page."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, {
							delay: 220,
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: resumable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "h-auto min-h-11 w-full max-w-full py-2 pl-4 pr-3 text-left sm:w-auto sm:max-w-80",
								onClick: () => {
									startReading(resumable.session.content, {
										title: resumable.session.title,
										kind: resumable.session.kind,
										sourceId: resumable.session.sourceId,
										...resumable.session.kind === "pdf" ? { pdfPage: resumable.target.part } : { chapter: resumable.target.part },
										progress: resumable.target.within
									});
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex min-w-0 flex-1 flex-col items-start gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-full truncate",
										children: ["Continue · ", resumable.session.title]
									}), resumable.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-full truncate text-xs font-normal opacity-75",
										children: resumable.detail
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 16,
									className: "shrink-0 icon-motion icon-shift"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "min-w-44 bg-surface/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									id: "hero-cta",
									href: "#reader-start",
									children: "Start something new"
								})
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "min-w-44 pl-4 pr-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									id: "hero-cta",
									href: "#reader-start",
									children: ["Start reading", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 16,
										className: "icon-motion icon-shift"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "min-w-44 bg-surface/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how-it-works",
									children: "See how it works"
								})
							})] })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: demoRef,
					className: "relative w-full min-w-0 pb-4 lg:w-[38%] lg:max-w-xl lg:shrink-0 lg:pb-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "material-surface overflow-hidden p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-sm text-accent italic",
								children: "Fixation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
								value: demoBionic ? "bionic" : "standard",
								onChange: (id) => {
									setDemoTaken(true);
									setDemoBionic(id === "bionic");
								},
								label: "Fixation preview",
								options: [{
									id: "bionic",
									label: "Bionic"
								}, {
									id: "standard",
									label: "Standard"
								}],
								className: "w-max shrink-0"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "nl-demo-swap text-left text-sm leading-relaxed sm:text-base",
								children: demoBionic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibleBionic, {
									text: DEMO_SENTENCE,
									html: processBionicText(DEMO_SENTENCE, .55, true)
								}) : DEMO_SENTENCE
							}, demoBionic ? "bionic" : "standard")
						})]
					})
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollScene, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "relative mt-10 overflow-hidden p-0 sm:mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
								src: "/images/reading-room.jpg",
								alt: "A sunlit university reading room with walnut shelves",
								width: 1600,
								height: 900,
								"data-scrub": true,
								className: "aspect-[16/9] w-full object-cover parallax-entry sm:aspect-[21/9]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col justify-end gap-6 p-5 text-primary-fg sm:flex-row sm:items-end sm:justify-between sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm font-serif text-2xl leading-snug italic sm:text-3xl",
									children: "Built for the way attention actually works."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-4xl tracking-tight",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GsapCount, {
											value: 92,
											suffix: "%"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-primary-fg/70",
										children: "Focus gain"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-4xl tracking-tight",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GsapCount, {
											value: 40,
											suffix: "%"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-primary-fg/70",
										children: "Less fatigue"
									})] })]
								})]
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirstStart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "reader-start",
						className: "snap-block mt-16 grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "flex min-h-[26rem] flex-col p-5 sm:p-6",
							onDragOver: (event) => {
								if (event.dataTransfer && [...event.dataTransfer.types].includes("Files")) event.preventDefault();
							},
							onDrop: (event) => {
								event.preventDefault();
								onUpload(event.dataTransfer?.files?.[0]);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-sm text-accent italic",
										children: "Source"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
										compact: true,
										busy: uploading,
										onFile: (file) => void onUpload(file)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: input,
									onChange: (event) => setInput(event.target.value),
									placeholder: "Paste an article, essay, or chapter…",
									className: "flex-1",
									"aria-label": "Text to read",
									"aria-invalid": Boolean(error),
									"aria-describedby": error ? "upload-error" : void 0
								}),
								meta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-md bg-fg/4 px-3 py-2 text-xs text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-fg",
											children: meta.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-2 text-subtle",
											children: "·"
										}),
										meta.format,
										" · ",
										meta.wordCount.toLocaleString(),
										" words · ~",
										meta.readTime,
										" min"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "mt-5 w-full pl-4 pr-3.5",
									disabled: !(input.trim() || meta?.format === "PDF"),
									onClick: () => startReading(input, meta ? {
										title: meta.title,
										kind: meta.format === "PDF" ? "pdf" : "text"
									} : void 0),
									children: ["Open in reader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 16,
										className: "icon-motion icon-shift"
									})]
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "upload-error",
									role: "alert",
									className: "mt-3 text-xs text-danger",
									children: error
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 font-serif text-xl italic",
								children: "Try a passage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: SAMPLE_TEXTS.map((sample) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"data-batch": true,
									onClick: () => setInput(sample.text),
									className: "group flex w-full items-start gap-3 rounded-md p-2 text-left transition-[background-color] duration-[150ms] ease-[var(--ease-standard)] hover:bg-fg/4 active:scale-[0.97]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
											src: sample.image,
											alt: "",
											width: 120,
											height: 160,
											className: "h-16 w-12 shrink-0 rounded-sm object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-medium",
												children: sample.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 line-clamp-2 text-xs leading-relaxed text-muted",
												children: sample.text
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
											size: 14,
											className: "mt-1 shrink-0 text-subtle icon-motion icon-shift"
										})
									]
								}, sample.title))
							})]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "how-it-works",
						className: "snap-block mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-serif text-base text-accent italic",
							children: "Designed for attention"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-scrub-fade": true,
							className: "max-w-xl text-4xl sm:text-5xl",
							children: "Clarity without changing who you are."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 space-y-10",
							children: FEATURES.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: index * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("grid items-center gap-6 md:grid-cols-2 md:gap-10", index % 2 === 1 && "md:[&>div:first-child]:order-2"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										className: "group overflow-hidden p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
											strength: 6,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "overflow-hidden rounded-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
													src: feature.image,
													alt: feature.alt,
													width: 1200,
													height: 1600,
													zoom: true,
													"data-scrub": true,
													className: "aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
												})
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-sm text-accent italic",
												children: feature.index
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-serif text-3xl",
												children: feature.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 max-w-md text-base leading-relaxed text-muted",
												children: feature.text
											})
										]
									})]
								})
							}, feature.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "patterns",
						className: "snap-block mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-serif text-base text-accent italic",
								children: "Neural reading patterns"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-scrub-fade": true,
								className: "max-w-xl text-4xl sm:text-5xl",
								children: "The page can tell when you are actually reading."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-base leading-relaxed text-muted",
								children: "A line held in the reading band is a fixation. The next line is a saccade. A jump, a return, or a long pause names the sitting — without a camera, and without asking you to click."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternExplorer, {}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "case-studies",
						className: "snap-block mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-serif text-base text-accent italic",
							children: "How it lands"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-scrub-fade": true,
							className: "max-w-xl text-4xl sm:text-5xl",
							children: "Built for the way reading actually happens."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-4 lg:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "lg:col-span-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "group overflow-hidden p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
											src: "/images/reading-room.jpg",
											alt: "A graduate student working in a sunlit reading room",
											width: 1600,
											height: 900,
											zoom: true,
											"data-scrub": true,
											className: "aspect-[16/10] w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pt-5 pb-4 sm:px-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-sm text-accent italic",
												children: "Graduate student"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-serif text-2xl",
												children: "A clearer first pass"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
												children: "A calmer layout made intimidating research blocks approachable in shorter sessions."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#reader-start",
												className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent",
												children: ["Try it ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
													size: 14,
													className: "icon-motion icon-shift"
												})]
											})
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 lg:col-span-2",
								children: [{
									image: "/images/case-team.jpg",
									alt: "Product documentation spread across a sunlit desk",
									label: "Product team",
									title: "Docs with less friction",
									text: "Shared documents became easier to scan when decisions had to move."
								}, {
									image: "/images/nook.jpg",
									alt: "A reader in an armchair by a window",
									label: "Daily reader",
									title: "Energy for the last page",
									text: "A personalized rhythm made it easier to continue when attention was thin."
								}].map((study, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										className: "group overflow-hidden p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "overflow-hidden rounded-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
													src: study.image,
													alt: study.alt,
													width: 1200,
													height: 1600,
													zoom: true,
													"data-scrub": true,
													className: "h-full min-h-28 w-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-2 pr-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-serif text-sm text-accent italic",
														children: study.label
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-1 font-serif text-lg",
														children: study.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm leading-relaxed text-muted",
														children: study.text
													})
												]
											})]
										})
									})
								}, study.title))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "faq",
						className: "snap-block mt-24 pb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-scrub-fade": true,
							className: "mb-6 max-w-xl text-4xl sm:text-5xl",
							children: "A little more clarity before you start."
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "max-w-3xl border-t border-border",
							children: [
								{
									q: "Does it watch my eyes?",
									a: "No camera. NeuroLens infers fixations and saccades from which line sits in the reading band, how long it is held, and how the page moves. That log stays in this browser."
								},
								{
									q: "Who is NeuroLens for?",
									a: "Anyone who finds dense pages tiring — ADHD, dyslexia, cognitive fatigue, or a preference for calmer text."
								},
								{
									q: "Can I use my own documents?",
									a: "Paste text, or upload a PDF or text file. PDFs open one page at a time, including figures, then you can format the words on that page."
								},
								{
									q: "How quickly will I see a result?",
									a: "Typical passages open in an adapted view in under 30 seconds. Short text is ready immediately."
								},
								{
									q: "Is my text used to train a model?",
									a: "Reading preferences and recent sessions stay in your browser. You can clear them from Settings at any time."
								}
							].map(({ q, a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: q,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: a })]
							}, q))
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "relative mt-16 mb-8 overflow-hidden p-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
								src: "/images/nook.jpg",
								alt: "",
								width: 1200,
								height: 1600,
								"data-scrub": true,
								className: "absolute inset-0 h-full w-full object-cover object-[center_30%]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative px-8 py-12 text-center text-primary-fg sm:px-12 sm:py-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "mb-4 bg-primary-fg/10 text-primary-fg",
										children: "Private by default"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-4xl italic sm:text-5xl",
										children: "Your next page can start here."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-fg/75",
										children: "Bring a passage, choose a profile, and see what changes when reading is shaped around your attention."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "mt-7 bg-surface text-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#reader-start",
											children: "Open the reader"
										})
									})
								]
							})
						]
					}) })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#reader-start",
				"aria-hidden": !heroCtaGone,
				tabIndex: heroCtaGone ? void 0 : -1,
				className: cn("fixed right-4 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 inline-flex h-12 items-center gap-1 rounded-lg bg-primary px-4 pr-3.5 text-sm font-medium text-primary-fg shadow-float sm:hidden", "transition-[opacity,transform] duration-[250ms] ease-[var(--ease-out)] active:scale-[0.97] motion-reduce:transition-none", heroCtaGone ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"),
				children: ["Start reading ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					size: 16,
					className: "icon-motion icon-shift"
				})]
			})
		]
	});
}
/**
* Phosphor ships a regular and a filled cut of the same glyph. Swapping between
* them is the set's own idiom for selection: the shape stays put and only its
* weight changes, which reads as "this one" without moving anything.
*/
var NAV_ICON = {
	explore: {
		rest: binoculars,
		active: binocularsFill
	},
	read: {
		rest: bookOpen,
		active: bookOpenFill
	},
	library: {
		rest: books,
		active: booksFill
	},
	insights: {
		rest: eye,
		active: eyeFill
	},
	settings: {
		rest: slidersHorizontal,
		active: slidersHorizontalFill
	}
};
registerGsap();
/**
* Primary navigation for phones and tablets: a menu button in the header that
* opens a sheet of destinations.
*
* Replaces the bottom tab bar and the tablet rail. Both spent permanent
* vertical space on navigation that is used a few times a session — on a phone
* the bar plus the reader's own dock stacked into two strips of chrome above
* the text. A button costs one corner and gives the page back.
*
* Above `lg` the header shows the full segmented control and this is hidden;
* there is no menu to open when every destination is already on screen.
*/
function NavMenu() {
	const tab = useAppStore((s) => s.tab);
	const setTab = useAppStore((s) => s.setTab);
	const text = useAppStore((s) => s.text);
	const [open, setOpen] = (0, import_react.useState)(false);
	const reduceMotion = useReducedMotion();
	const panelRef = (0, import_react.useRef)(null);
	const triggerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key !== "Escape") return;
			event.preventDefault();
			setOpen(false);
			triggerRef.current?.focus();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open || reduceMotion) return;
		const panel = panelRef.current;
		if (!panel) return;
		const rows = panel.querySelectorAll("[data-nav-item]");
		const tween = gsapWithCSS.fromTo(rows, {
			opacity: 0,
			y: 8
		}, {
			opacity: 1,
			y: 0,
			duration: .25,
			ease: "power3.out",
			stagger: .04,
			overwrite: "auto"
		});
		return () => {
			tween.kill();
		};
	}, [open, reduceMotion]);
	function choose(id) {
		setTab(id);
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			ref: triggerRef,
			type: "button",
			"aria-haspopup": "menu",
			"aria-expanded": open,
			"aria-label": open ? "Close menu" : "Open menu",
			onClick: () => setOpen((value) => !value),
			className: cn("icon-group flex size-9 items-center justify-center rounded-md bg-surface text-fg shadow-border", "transition-[box-shadow,transform] duration-[140ms] ease-[var(--ease-out)]", "hover:shadow-border-hover active:scale-[0.97]", "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-fg)_18%,transparent)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				icon: open ? x : list,
				width: 18,
				height: 18,
				"aria-hidden": true,
				className: "icon-motion icon-turn"
			})
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-hidden": true,
			tabIndex: -1,
			className: "fixed inset-0 z-40 cursor-default",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: panelRef,
			role: "menu",
			"aria-label": "Primary",
			className: cn("nl-menu-in absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 origin-top-right", "rounded-lg bg-surface p-1.5 shadow-float"),
			children: TABS.map((item) => {
				const selected = tab === item.id;
				const disabled = item.id === "read" && !text;
				const icon = NAV_ICON[item.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "menuitem",
					"data-nav-item": true,
					disabled,
					title: disabled ? "Open a book or paste some text first" : void 0,
					"aria-description": disabled ? "Open a book or paste some text first" : void 0,
					"aria-current": selected ? "page" : void 0,
					onClick: () => choose(item.id),
					className: cn("icon-group flex min-h-11 w-full items-center gap-2.5 rounded-md px-3 text-left text-sm font-medium", "transition-[background-color,color,transform] duration-[140ms] ease-[var(--ease-out)]", "active:not-disabled:scale-[0.98] focus-visible:outline-none focus-visible:bg-fg/6", disabled ? "pointer-events-none opacity-30" : selected ? "bg-fg/6 text-fg" : "text-muted hover:bg-fg/4 hover:text-fg"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							icon: selected ? icon.active : icon.rest,
							width: 18,
							height: 18,
							"aria-hidden": true,
							className: "icon-motion icon-lift shrink-0"
						}),
						item.label,
						selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "ml-auto size-1.5 rounded-full bg-fg"
						}) : null
					]
				}, item.id);
			})
		})] }) : null]
	});
}
/**
* Displacement map for the liquid-glass filter.
*
* This is the "standard" map from `liquid-glass-react` (rdev), checked in as
* data so the filter has no network dependency and no flash of unrefracted
* chrome on first paint.
*
* It is read by `feDisplacementMap` with `xChannelSelector="R"` and
* `yChannelSelector="B"`: the red channel drives horizontal offset and the blue
* channel vertical, with mid-grey meaning "leave this pixel alone". The image is
* neutral through the middle and ramps hard at the border, which is why the
* refraction gathers at the edges of the pane the way it does in real glass —
* the middle of a flat sheet barely bends anything.
*/
var GLASS_DISPLACEMENT_MAP = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/2wCEAAQDAwMDAwQDAwQGBAMEBgcFBAQFBwgHBwcHBwgLCAkJCQkICwsMDAwMDAsNDQ4ODQ0SEhISEhQUFBQUFBQUFBQBBQUFCAgIEAsLEBQODg4UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/CABEIAQABAAMBEQACEQEDEQH/xAAxAAEBAQEBAQAAAAAAAAAAAAADAgQIAQYBAQEBAQEBAQAAAAAAAAAAAAMCBAEACAf/2gAMAwEAAhADEAAAAPjPor6kOgOiKhKgKhKgOhKhOhKxKgKhOgKhKhKgKxOhKhOgKhKhKgKwKhKgKgKwG841nns9J/nn2KVCdCdCVAVCVCVAdCVCdiVAVidCVAVCVAdiVCVCdAVCVCVAVCVAVAViVZxsBrPPY6R/NvsY6E6ErEqAqE6ErAqE6E7E7ErA0ErArAqAqEuiVAXRLol0S6J0JUBWBUI0BXnG88djpH81+xjoToSoSoCoTsSoYQTsTsTQSsCsCsCsCsCoC6A0JeAuiXSLwn0SoioCoCoBsBrPFH0j+a/Yx0J0JUJUJ2BUMIR2MIRoBoJIBXnJAK840BUA0BdAegXhLpF4S8R+IuiVgVANAV546fSH5r9jHRHQFQlYxYnZQgnYwhQokgEgEmckzjecazlYD3OPQHoD0S8JcI/EXiPxF0SoSvONBFF0j+a/YxdI7EqA6KLGEKEKEGFI0AlA0AUzimYbzjecazjWce5w6BdEeCXhPhFwz8R+MuiVgVAdF0j+a/Yp0RUJ0MWUIUWUIUKUIJqBoArnJM4pmBMw3nCsw1mCs4+AegPBLxHwi4Z8KPGXSPojYH0ukfzX7FOiKhiyiylDiylDhBNRNQJAJcwpnBMopmC84XlCswdzj3OPQHwlwS8R8M+HHDPxl0ioDoukfzT7GOhOyiimzmzhDlShBNBNBJc4rmFMwJlBMwXlC82esoVmHucOgXgHxH4j4Zyccg/GfiOiKh6R/NPsY6GLOKObOUObOUI0KEAlEkzimYFygmUEyheXPeULzZ6yhWce5x8BeEuGfCj0HyI5EdM/EdD0h+a/Yx0U0cUflxNnNnCHCCdgSiSZgTMK5c6ZQvLnTLnvJnvKFZgrMHc5dAeiXijhn445E8g/RHTPpdI/mn2KdlFR5RzcTUTZxZwglYGgCmcEzAuUEyZ0y57yZ0yZ7yheUKzh3OPc5dEvEfij0RyI9E+iPGfT6T/NPsQ6OKiKmajy4ijmyOyKwNAFM4JlBMudMmdMue8mdMme8me8wVmGsw0A9A+kfjjxx6J9EememfT6W/MvsMqOamKiamKmKOKM7ErErAUzAmYLyZ0y50yZ0yZkyZ7yBeULzBeYazl0T6R9KPRPYj0T2J9B9Ppj8x+wjo4qY7M9iKmKg6MrIrErALzBeYEyZ0y50yZkyZ7x50yheXPeUbzjWcqA6I+lHYnsT6J7E9iOx0z+YfYBUc1MdmexHZjsHRlRBRDYBecEzZ7yAmXNeTOmTOmPOmXOmULyjeYbzlYnQxRx057E9mexPYij6a/L/r86OOzPpjsR6Y7B9MqIaILDPYZ7zZ0y57y50yZ0x5kyAmXPeUEyjeYUznQnYnRTUTUT2JqJ7EUfTn5d9fFRx2Z9EdmPTHjLsF0h6I2OegzXmzJmzplz3lzJjzpkBMudMoplBM5JnOwOyiimzmomomonsHRdO/l318VFHYj0x6I9McgumXiHpDQ56DPebMmbNebMmXMmQEy50yguQEzCmYkA7GLGEKaObibiaOKOKPp38s+vCsj7EeiPTHIP0Hwx6ReMKDP0M95895syZ815cy5c6ZQTKCZRXMKZiQDQYQYsps5uJs5qIsjounvyz68KyLpx4z9Mcg+GXoLxl4g6IUGes+a8+e82ZM2dMuZMoJmBcwrlJM5IBoMKMoUWc2c3E0cWRUXT/wCV/XQ2R0RdiPQfDPkFwy9BeIOiHQz0Ges+e82dM2ZM2dMwLmBcwpmJc5qBoMIUIUoU2c2cWZ0R0PT/AOV/XQ2RUJdM+wfDL0Hwy5A+EfEHQz0AUGe8+dM2e82dcwJnFcwrnJc5IEKUIMIUoUWc2cWRUJ0PT/5V9dFYjZFRF0z8ZeM+QPDLxD4Q6OfoBQhefPeYEz50ziucUzCoEuclCEKFGUKEKLOLI7E6EqHqD8o+uhsRsisSoi6ZeM+QPiHhj0R8IUIdALALzgmcEzimcVAlzioGomgyhQgwhRZHZFQHQlQ9Qfk/10NiVkNiNiVGXiPxj4x8Q9IfCFCPRCwC84oA3nFQFM5KBKJIMKEIUWRoUUJWJUJ0BUPUH5L9dDZFYigjYjZHRF0x8Q9IvEHRHojQjQhecUAUAkEkziomgGgkoxZGgxZFQFQlYnQHRdPfj/10KCSCKESCNiVkViPSLpD0h6I0Q0I0A2IoBWBIJIBKBIJoJIJ2R2J0JWBUJ0JUB0XTv479dFZDYiglYigkhEgjZFQjRFQjRFQjQigFYigHYigmgEgmglYlYnQlQlYlQHQlQnQ9P/kf1yVkNiNCNkNiVENiNiViNEViNkVCVgKCViViViSCViSCVgdCViVCViVCdgVCVCdD1D+U/XBWQ2I0I2Q2JUQ2I0JWQ0I2JUQ2JUI2JUI2J0JWJWJWA2R0BWJ0I2JUJ2BUJUJ0P//EABkQAQEBAQEBAAAAAAAAAAAAAAECABEDEP/aAAgBAQABAgB1atWrVq1atWrVq1atWrVq1atWrVq1atWrVq+OrVq1atWrVq1atWrVq1atWrVq1atWrVq1atXxVppppppdWrVq1atWrVq1NNNNNNNNNNNPVWmmmmms6tWrVq1atWpppppppppppppp6q0000uc51atWrVq1ammmmmmmmmmmmmt1Vpppc5znVq1atWrVqaaaaaaaaaaaaaeqtNLnOc51atWrVq1ammmmmmmmmmmmmnqrS5znOc6tWrVq16222mmmmmmlVppp6tKuc5znOrVq1a9TbbbbTTTTTSq000qtLnOc5zq1atWrW0222200000qqqtKqrnOc5zq1atTbbbbbbbbTTTSqqqqqq5znOc6tTTTbbbbbbbbTTTSqqqqrlVznOctNNNtttttttttNNNNKqqqrqznKqrTTTTbbbbbbbbbTTTSqqqqrqznOc5aaaabbbbbbbbbaaaaVVVVVdWc5znVq1NNttttttttttNNKqqqqudWc5znVq16tbbbbbbbbbbTTSqqqq5XVnOc6tWrVrb1tttttttttNNKqqqqrWrK5VWmmm2230bbbbbbaaaXOc5zlVa1KuVVppptttt9G22222mmlzlVznK6tWVVWmmmm2222222222mlznOc5znLWppVVWmmm22222229bTWrOc5znOcq1qaaVpWmm222222229erVqznOc5znKtatStK0rTbTTbbbberXr1as5znOc5aVpppppWlabaabbbb1ta9WrVnOc5znU0rTTTTTTTTTbTTbbbTWvVq1as5znOdTTStNNNNNNNNNtNNtttN6tWvVq1ZznOrU00rTTTTTTTTTTTTTbTWvVq1atWrOc6tTTTStNNNNNNNNNNtNNtNa9WrVq1Z1Z1NNNNNK1q1NNNNNNNNNNNtNatWrVq1atWrU00000rWrVq1atWrVq1alaaa1atWrVq1NNNammmmla1atWrVq1aterVq16tWrVnVqa1NK1qaaaVX/xAAWEAADAAAAAAAAAAAAAAAAAAAhgJD/2gAIAQEAAz8AaExf/8QAGhEBAQEBAQEBAAAAAAAAAAAAAQISEQADEP/aAAgBAgEBAgDx48ePHjx48ePHjx48ePHjx48ePHjx48ePHj86IiIiIiInjx48ePHjx48IiIiIj0oooooooooRERER73ve60UUUUUUVrWiiiiiihERERER73ve97ooooorRWiiiiihKERERER73ve973RRRRWtFFFFFFCIiIiIiPe973ve60UUVrRRRRRRQiIlCIiI973ve973pRRWiiiiiiiiiiiiiiihEe973ve973RRWtFFFFFFFFFFFFFFFFFFa13ve973WitaKKKKKKKKKKKKKKKKKK1rWtd1rutFa1oooooooooooosssooorWta1rWta1rRRRRRRRRRRZZZZZZZZZWta1rWta1rRRRRRRRRZZZZZZZZZZZZe9a1rWta1rWitaKLLLLLLLLLLLLLLLLL3rWta1rWtFbLLLLLLLLLLLLLLLLLLLL3vWta1rWita1ssssssss+hZZZZZZZZe961rWta0Vre97LLLLLLLLLLLPoWWWWWXrWta1oorWta3ssss+hZZZZ9Cyyyyyyyyiita1orWta1ve9llllllllllllllllFFa0VorWta1ve9llllllllllllllllllFFFaK1rWta1rWiyyyyyyyyyyyyiiiiiiitFFa1rWta1oosoosssssoooosoooorRRRWta1rWta0UUUUUWUUUUUUUUUUUVoooorWta1rWtaKKKKKKmiiiiiiiiiiiiiiitd73ve61oSiiipoqaKKKKKKKKKK0UUUVrve973vREREZoSihEooooorRRRRWtd73ve9EREREREoSiiiiitFllllla73ve9ERERERESiiiiiitH0PoWWWWVrXe96IiIiMoiJRRRRRRWjwlFFllllFFd6IiIiIlCUUUUUUUUUePHjx48ePCIiIiIiIiUUUUUUUUUUUePHjx48ePHjx48ePHjx48IiUUUUUUJRRRX//xAAWEQADAAAAAAAAAAAAAAAAAAABYJD/2gAIAQIBAz8AtEV7/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAECEP/aAAgBAwEBAgCtNNNNNNNNNNNNNNNNNNNNNNNNNNNNNcrTTTTTTTTTTTTTTTTTTTTTTTTTTTTTXKrTTTTTTTU000000000000000000001FVpppppqampqaaaaaaaaaaaaaaaaaaaa5Vaaaaampqampqammmmmmmmmmmlaaaaaaiq0001NTU1NTU1NTTTTTTTTTTSqqtNNNcqtNNSyzU1LNTU1NTTTTTTTTTSqqq001ytNLLLLNTU1NTU1NTbbbTTTTTSqqq001ytNLLLLLNTU1NTU3NttttNNNNNKqq001KrSyyyyyzU1NTU3Nzc02220000qqqqrSqqyyyyyzU1NTU3Nzc3NttttNNNKqqqqqqssssss1NTU3Nzc3NzbbbbTTTSqqqqqqrLLLLLNTU1Nzc3Nzc22220000qqqqqqqqssss1NTU3Nzc3NzbbbbbTTSqqqqqqqqqqzU1NTc3Nzc3Nzbc22000qqqqqqqqqqqtTU3Nzc3Nzc3NtzbTTSqqqqrKqqqqqtNNzc23Nzc3Nzc3NTU1KqqqrKqqqqqtNNNNttzc3Nzc3NzU1NLLLLLKqqqqqqqq0022223Nzc3NzU1NSyyyyyyqqqqqqqrTTbbbbc3Nzc3NTU1LLLLLLKsqqqqqqrTTTTbbbc3Nzc1NTUsssssssqqqqqqrTTTTTbbbTc3NTU1NTUsssssqqqqqqqq0000222023NTU1NTUsssssqqqqqqqq000000003NTU1NTU1LLLLLNKrTSqqqqtNNNNNNtNNTU1NSzUssss00qq0qqqqrTTTTTTTTTU1NTUs1LLLNNNKrTTTSqqq00000000001NTU1LNTU0000qtNNNKqqqtNNNNNNNNTU1NTUs1NNNNNKss1NNNK00qtK0000001NNTU0s000000qq000001NKrStNNNNK1NNNNStNNNNNKqtNNNNNNNK0000000rU0000rTTTTTSq00000rTTTTTTTTTTTTTTTTStNNNNKr/xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQM/AAAf/9k=";
/** How far the backdrop is pushed at the edges of the pane, in pixels. */
var DISPLACEMENT = 20;
/** Spread between the R, G and B displacement passes. Higher fringes harder. */
var ABERRATION = .35;
/**
* The refraction filter, ported from `liquid-glass-react` (rdev).
*
* The shape of it: a displacement map is loaded with `feImage`, then the source
* is displaced through it *three times* at slightly different scales and each
* pass is masked down to a single colour channel. Screen-blending the three
* back together is what produces chromatic aberration — the coloured fringing
* real glass shows where it bends light hardest, and the detail that separates
* this from a plain blur.
*
* The aberration is then composited through an edge mask so it appears only at
* the borders. Fringing across the whole pane would read as a broken display;
* confined to the edges it reads as thickness.
*/
function GlassFilter({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": true,
		className: "pointer-events-none absolute size-0",
		focusable: "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
			id,
			x: "-35%",
			y: "-35%",
			width: "170%",
			height: "170%",
			colorInterpolationFilters: "sRGB",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feImage", {
					x: "0",
					y: "0",
					width: "100%",
					height: "100%",
					result: "DISPLACEMENT_MAP",
					href: GLASS_DISPLACEMENT_MAP,
					preserveAspectRatio: "xMidYMid slice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
					in: "DISPLACEMENT_MAP",
					type: "matrix",
					values: "0.3 0.3 0.3 0 0\r\n                    0.3 0.3 0.3 0 0\r\n                    0.3 0.3 0.3 0 0\r\n                    0   0   0   1 0",
					result: "EDGE_INTENSITY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComponentTransfer", {
					in: "EDGE_INTENSITY",
					result: "EDGE_MASK",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFuncA", {
						type: "discrete",
						tableValues: `0 ${ABERRATION * .05} 1`
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", {
					in: "SourceGraphic",
					dx: "0",
					dy: "0",
					result: "CENTER_ORIGINAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "DISPLACEMENT_MAP",
					scale: -20,
					xChannelSelector: "R",
					yChannelSelector: "B",
					result: "RED_DISPLACED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
					in: "RED_DISPLACED",
					type: "matrix",
					values: "1 0 0 0 0\r\n                    0 0 0 0 0\r\n                    0 0 0 0 0\r\n                    0 0 0 1 0",
					result: "RED_CHANNEL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "DISPLACEMENT_MAP",
					scale: DISPLACEMENT * (-1 - ABERRATION * .05),
					xChannelSelector: "R",
					yChannelSelector: "B",
					result: "GREEN_DISPLACED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
					in: "GREEN_DISPLACED",
					type: "matrix",
					values: "0 0 0 0 0\r\n                    0 1 0 0 0\r\n                    0 0 0 0 0\r\n                    0 0 0 1 0",
					result: "GREEN_CHANNEL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "DISPLACEMENT_MAP",
					scale: DISPLACEMENT * (-1 - ABERRATION * .1),
					xChannelSelector: "R",
					yChannelSelector: "B",
					result: "BLUE_DISPLACED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
					in: "BLUE_DISPLACED",
					type: "matrix",
					values: "0 0 0 0 0\r\n                    0 0 0 0 0\r\n                    0 0 1 0 0\r\n                    0 0 0 1 0",
					result: "BLUE_CHANNEL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", {
					in: "GREEN_CHANNEL",
					in2: "BLUE_CHANNEL",
					mode: "screen",
					result: "GB_COMBINED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", {
					in: "RED_CHANNEL",
					in2: "GB_COMBINED",
					mode: "screen",
					result: "RGB_COMBINED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
					in: "RGB_COMBINED",
					stdDeviation: Math.max(.1, .5 - ABERRATION * .1),
					result: "ABERRATED_BLURRED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
					in: "ABERRATED_BLURRED",
					in2: "EDGE_MASK",
					operator: "in",
					result: "EDGE_ABERRATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComponentTransfer", {
					in: "EDGE_MASK",
					result: "INVERTED_MASK",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFuncA", {
						type: "table",
						tableValues: "1 0"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
					in: "CENTER_ORIGINAL",
					in2: "INVERTED_MASK",
					operator: "in",
					result: "CENTER_CLEAN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
					in: "EDGE_ABERRATION",
					in2: "CENTER_CLEAN",
					operator: "over"
				})
			]
		}) })
	});
}
/**
* Liquid-glass chrome for the header.
*
* The technique is `liquid-glass-react`'s, but the markup is not: that package
* emits its passes as siblings with inline positioning and expects to own the
* box it sits in, which turned a 64px header into 242px of stacked layers with
* the content pushed off screen. Owning the DOM here is what lets the same
* filter work as full-bleed chrome.
*
* Two effects, on two elements, because they cannot share one:
*
*  - `backdrop-filter: blur() saturate()` frosts what is behind the header;
*  - `filter: url(#…)` refracts that frosted result through the displacement
*    map, bending the page at the edges of the pane.
*
* A single element cannot do both — `filter` would also distort the header's
* own text — so the glass is a dedicated layer behind the content.
*/
function GlassHeader({ children, className }) {
	const filterId = (0, import_react.useId)();
	const [refract, setRefract] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const isFirefox = navigator.userAgent.includes("Firefox");
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		setRefract(!isFirefox && !reduced);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("nl-glass relative", className),
		children: [
			refract ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassFilter, { id: filterId }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "nl-glass-pane pointer-events-none absolute inset-0",
				style: refract ? { filter: `url(#${filterId})` } : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "nl-glass-tint pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "nl-glass-content relative",
				children
			})
		]
	});
}
/**
* Crude suffix stripping. Enough to fold inflections onto a common stem.
*
* The doubled-consonant step matters more than it looks: English doubles the
* final letter before a suffix, so "bigger" strips to "bigg" and never reaches
* "big" — which meant the commonest way of asking for larger type matched
* nothing at all.
*/
function stem(word) {
	let out = word.toLowerCase();
	for (let pass = 0; pass < 2; pass += 1) {
		const next = out.replace(/(ing|ed|es|er|est|ly|s)$/i, "");
		if (next.length < 3) break;
		if (next === out) break;
		out = next;
	}
	return out.replace(/(i)$/i, "y").replace(/([bdfglmnprt])\1$/, "$1");
}
function tokenize(input) {
	return input.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split(/[^a-z0-9]+/).filter((word) => word.length > 1 && !STOP.has(word));
}
/** Words that carry no intent. Dropping them stops filler diluting every score. */
var STOP = /* @__PURE__ */ new Set([
	"the",
	"a",
	"an",
	"is",
	"it",
	"to",
	"of",
	"and",
	"or",
	"my",
	"me",
	"i",
	"you",
	"please",
	"can",
	"could",
	"would",
	"will",
	"do",
	"does",
	"for",
	"this",
	"that",
	"be",
	"am",
	"are",
	"was",
	"with",
	"on",
	"in",
	"at",
	"so",
	"just",
	"bit",
	"little",
	"very",
	"too",
	"really",
	"some",
	"any",
	"have",
	"has",
	"get",
	"got",
	"make",
	"makes",
	"making",
	"want",
	"need",
	"how",
	"what",
	"when",
	"where",
	"why",
	"if"
]);
/**
* Levenshtein distance, capped.
*
* Only ever asked whether two short words are within one or two edits, so it
* bails as soon as the distance cannot come back under the cap — a full matrix
* for words that obviously do not match is wasted work on every keystroke.
*/
/**
* Damerau-Levenshtein: a transposition costs one edit, not two.
*
* Swapped adjacent letters are the most common typing mistake there is, and
* plain Levenshtein charges double for them — which is why "fnot" failed to
* reach "font" while much less similar words got through on their length.
*/
function editDistance(a, b, cap = 2) {
	if (a === b) return 0;
	if (Math.abs(a.length - b.length) > cap) return cap + 1;
	const rows = [Array.from({ length: b.length + 1 }, (_, i) => i)];
	for (let i = 1; i <= a.length; i += 1) {
		const row = [i];
		let best = i;
		for (let j = 1; j <= b.length; j += 1) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			let value = Math.min(row[j - 1] + 1, rows[i - 1][j] + 1, rows[i - 1][j - 1] + cost);
			if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) value = Math.min(value, rows[i - 2][j - 2] + 1);
			row[j] = value;
			best = Math.min(best, value);
		}
		if (best > cap) return cap + 1;
		rows.push(row);
	}
	return rows[a.length][b.length];
}
/**
* Does this token mean this vocabulary word, allowing for a typo?
*
* Fuzziness is only extended to words long enough to survive it. At four
* letters a single edit connects words that mean nothing to each other —
* "read" reaches "lead", and a request to read slower came back as a change to
* line spacing. Below the floor only an exact stem or a real prefix counts.
*/
var FUZZY_MIN = 5;
function tokenMatches(token, term) {
	if (token === term) return true;
	const a = stem(token);
	const b = stem(term);
	if (a === b) return true;
	if (a.length >= 4 && b.length >= 4) {
		const [short, long] = a.length <= b.length ? [a, b] : [b, a];
		if (long.startsWith(short) && short.length >= long.length - 3) return true;
	}
	if (Math.min(a.length, b.length) < FUZZY_MIN) return false;
	if (a[0] !== b[0]) return false;
	const cap = Math.max(a.length, b.length) >= 8 ? 2 : 1;
	return editDistance(a, b, cap) <= cap;
}
var MORE_WORDS = [
	"more",
	"increase",
	"raise",
	"higher",
	"up",
	"stronger",
	"bolder",
	"bigger",
	"larger",
	"wider",
	"faster",
	"boost"
];
var LESS_WORDS = [
	"less",
	"reduce",
	"lower",
	"decrease",
	"down",
	"weaker",
	"softer",
	"soften",
	"smaller",
	"shorter",
	"slower",
	"calmer",
	"gentler",
	"subtle"
];
var OFF_WORDS = [
	"off",
	"disable",
	"stop",
	"remove",
	"hide",
	"cancel",
	"none",
	"without",
	"kill"
];
/**
* Phrases where the direction is the opposite of the words in them.
*
* "I can't keep up" contains "up" and means slow down; "falling behind" and
* "too much" carry no direction word at all and clearly mean less. Read
* word-by-word these come out backwards, which is the worst failure available
* to a command bot — it does the reverse of what it was asked and looks like it
* understood. They are matched on the raw sentence, before tokenising strips
* the negations that carry the meaning.
*/
var LESS_PHRASES = [
	/\bcan'?t keep up\b/,
	/\bcannot keep up\b/,
	/\bfalling behind\b/,
	/\bfall behind\b/,
	/\btoo much\b/,
	/\btoo many\b/,
	/\bslow (it |this )?down\b/,
	/\bease off\b/,
	/\bback off\b/,
	/\bdial (it |this )?back\b/
];
var MORE_PHRASES = [
	/\bspeed (it |this )?up\b/,
	/\bpick up the pace\b/,
	/\bnot enough\b/
];
function readDirection(tokens, raw = "") {
	const has = (list) => tokens.some((t) => list.some((w) => tokenMatches(t, w)));
	if (LESS_PHRASES.some((p) => p.test(raw))) return "less";
	if (MORE_PHRASES.some((p) => p.test(raw))) return "more";
	if (has(OFF_WORDS)) return "off";
	if (has(LESS_WORDS)) return "less";
	if (has(MORE_WORDS)) return "more";
	return "none";
}
/**
* Score every topic against the sentence and return them best-first.
*
* A topic's score is simply the sum of the weights it matched. An earlier
* version divided by vocabulary size to stop a topic winning merely by listing
* more synonyms — but that punished breadth so hard that a topic with eleven
* terms could not clear the floor on a single match, and "bigger text" matched
* nothing. Weights and `blocks` already do that job, and they do it by meaning
* rather than by counting.
*/
function scoreTopics(tokens, topics) {
	const out = [];
	for (const topic of topics) {
		if (topic.blocks?.some((b) => tokens.some((t) => tokenMatches(t, b)))) continue;
		let score = 0;
		for (const [term, weight] of topic.terms) if (tokens.some((token) => tokenMatches(token, term))) score += weight;
		if (score > 0) out.push({
			id: topic.id,
			score
		});
	}
	return out.sort((a, b) => b.score - a.score);
}
/**
* Weights say how strongly a word implies its topic. A word belonging to one
* feature and nothing else ("fixation", "parallax") can carry the topic alone;
* a word several features share ("text", "line") only nudges.
*/
/**
* Weights say how strongly a word implies its topic. A word belonging to one
* feature and nothing else ("fixation", "parallax") can carry the topic alone;
* a word several features share ("text", "line") only nudges.
*
* Most of this vocabulary is symptoms rather than setting names, because that
* is how people ask. Almost nobody says "increase the line height" — they say
* the page feels cramped, or that they keep losing their place. The engine
* already knows which lever answers which complaint; this is the same mapping,
* reached through the words someone would actually reach for.
*/
var TOPICS = [
	{
		id: "fixation",
		terms: [
			["fixation", 3],
			["bionic", 3],
			["bold", 2.5],
			["emphasis", 2],
			["heavy", 1.5],
			["thick", 1.5]
		]
	},
	{
		id: "size",
		terms: [
			["size", 2.5],
			["font", 2.5],
			["text", 1.5],
			["type", 1.5],
			["letter", 1.5],
			["word", 1.5],
			["zoom", 2.5],
			["big", 2],
			["small", 2],
			["tiny", 2.5],
			["huge", 2],
			["blurry", 2.5],
			["squint", 3],
			["magnify", 3]
		],
		blocks: [
			"spacing",
			"leading",
			"pace",
			"speed",
			"wpm",
			"contrast",
			"fixation",
			"bionic",
			"cramped",
			"squished"
		]
	},
	{
		id: "spacing",
		terms: [
			["spacing", 3],
			["leading", 2.5],
			["space", 2.5],
			["line", 2],
			["gap", 2],
			["cramped", 3],
			["crowded", 3],
			["squished", 3],
			["squashed", 3],
			["tight", 2.5],
			["airy", 2],
			["breathe", 2.5],
			["room", 2],
			["dense", 2]
		],
		blocks: [
			"pace",
			"speed",
			"wpm",
			"fixation",
			"bionic"
		]
	},
	{
		id: "pace",
		terms: [
			["pace", 3],
			["speed", 3],
			["wpm", 3],
			["fast", 2.5],
			["slow", 2.5],
			["quick", 2],
			["rush", 2.5],
			["hurry", 2.5],
			["keep", 1.5],
			["behind", 2]
		],
		blocks: [
			"fixation",
			"bionic",
			"spacing",
			"leading",
			"font",
			"size",
			"contrast"
		]
	},
	{
		id: "contrast",
		terms: [
			["contrast", 3.5],
			["faint", 3],
			["washed", 3],
			["pale", 3],
			["legible", 2],
			["dull", 2.5],
			["colour", 2],
			["color", 2],
			["grey", 2.5],
			["gray", 2.5],
			["blurry", 1.5],
			["strain", 2.5],
			["hurt", 2.5],
			["eyes", 1.5],
			["sharp", 2]
		]
	},
	{
		id: "theme-dark",
		terms: [
			["night", 3.5],
			["dark", 2],
			["black", 2.5],
			["bright", 3],
			["glare", 3],
			["blinding", 3]
		],
		blocks: [
			"contrast",
			"colour",
			"color"
		]
	},
	{
		id: "theme-light",
		terms: [
			["paper", 3.5],
			["daylight", 3],
			["white", 2.5],
			["lighter", 2]
		],
		blocks: [
			"contrast",
			"colour",
			"color",
			"bright",
			"glare"
		]
	},
	{
		id: "motion",
		terms: [
			["motion", 3],
			["movement", 3],
			["parallax", 3.5],
			["dizzy", 3.5],
			["nausea", 3.5],
			["nauseous", 3.5],
			["sick", 3],
			["vertigo", 3.5],
			["queasy", 3.5],
			["moving", 2.5],
			["animation", 2.5],
			["bouncing", 3],
			["jumpy", 3],
			["shaking", 3],
			["still", 2]
		]
	},
	{
		id: "plain",
		terms: [
			["plain", 3],
			["simple", 3],
			["simplify", 3],
			["jargon", 3],
			["vocabulary", 2.5],
			["complicated", 2.5],
			["wordy", 2.5]
		]
	},
	{
		id: "guide",
		terms: [
			["guide", 3],
			["track", 2.5],
			["place", 2.5],
			["lost", 3],
			["losing", 3],
			["reread", 3],
			["again", 1.5]
		]
	},
	{
		id: "syllables",
		terms: [["syllable", 4], ["chunk", 2.5]]
	},
	{
		id: "library",
		terms: [
			["library", 4],
			["catalog", 3],
			["gutenberg", 3],
			["shelf", 2.5],
			["browse", 2.5]
		]
	},
	{
		id: "insights",
		terms: [
			["insight", 4],
			["stats", 3],
			["statistics", 3],
			["progress", 2.5]
		]
	},
	{
		id: "settings",
		terms: [
			["setting", 3],
			["preference", 3],
			["configure", 2.5]
		],
		blocks: ["reading"]
	},
	{
		id: "options",
		terms: [
			["options", 3],
			["controls", 2.5],
			["adjust", 2]
		]
	},
	{
		id: "find",
		terms: [
			["find", 3],
			["search", 3],
			["locate", 2.5],
			["passage", 2.5]
		]
	},
	{
		id: "highlights",
		terms: [
			["highlight", 3],
			["marked", 2.5],
			["saved", 2]
		],
		blocks: ["how"]
	},
	{
		id: "adaptive",
		terms: [["adaptive", 4], ["automatic", 2.5]]
	},
	{
		id: "howto-highlight",
		terms: [
			["highlight", 2.5],
			["mark", 2.5],
			["annotate", 2.5]
		]
	},
	{
		id: "howto-read",
		terms: [
			["upload", 3],
			["paste", 3],
			["pdf", 3],
			["begin", 2.5]
		]
	},
	{
		id: "help",
		terms: [
			["help", 3.5],
			["commands", 3],
			["capable", 2.5],
			["confused", 2.5],
			["stuck", 2.5]
		]
	},
	{
		id: "dismiss",
		terms: [
			["away", 2.5],
			["hide", 3],
			["dismiss", 3],
			["leave", 2.5],
			["quiet", 2.5],
			["yourself", 2.5],
			["disappear", 3]
		]
	},
	{
		id: "fatigue",
		terms: [
			["exhausting", 3],
			["exhausted", 3],
			["tired", 3],
			["tiring", 3],
			["draining", 3],
			["fatigue", 3.5],
			["headache", 3],
			["hard", 2.5],
			["difficult", 2.5],
			["struggling", 3],
			["struggle", 3],
			["overwhelming", 3]
		]
	}
];
/** Below this, the best guess is not good enough to act on. */
var FLOOR = 1.5;
function resolve(id, direction) {
	const down = direction === "less";
	switch (id) {
		case "fixation":
			if (direction === "off") return {
				text: "Fixation off — plain type from here.",
				action: {
					kind: "setBionic",
					value: 0
				}
			};
			return down ? {
				text: "Softening the fixation. The bolded lead of each word gets lighter.",
				action: {
					kind: "adjustBionic",
					delta: -.15
				}
			} : {
				text: "Strengthening the fixation, so more of each word leads in bold.",
				action: {
					kind: "adjustBionic",
					delta: .15
				}
			};
		case "size": return down ? {
			text: "Making the type a little smaller.",
			action: {
				kind: "adjustFontSize",
				delta: -1
			}
		} : {
			text: "Making the type a little larger.",
			action: {
				kind: "adjustFontSize",
				delta: 1
			}
		};
		case "spacing": return down ? {
			text: "Tightening the line spacing.",
			action: {
				kind: "adjustLineHeight",
				delta: -.1
			}
		} : {
			text: "Opening up the line spacing.",
			action: {
				kind: "adjustLineHeight",
				delta: .1
			}
		};
		case "pace": return down ? {
			text: "Lowering the target pace.",
			action: {
				kind: "adjustWpm",
				delta: -20
			}
		} : {
			text: "Raising the target pace.",
			action: {
				kind: "adjustWpm",
				delta: 20
			}
		};
		case "contrast": return {
			text: "Switching to the high-contrast scheme.",
			action: {
				kind: "setTheme",
				value: "contrast"
			}
		};
		case "theme-dark": return {
			text: "Night scheme on.",
			action: {
				kind: "setTheme",
				value: "night"
			}
		};
		case "theme-light": return {
			text: "Back to the paper scheme.",
			action: {
				kind: "setTheme",
				value: "paper"
			}
		};
		case "motion": return {
			text: "Turning on motion cues: the page stops drifting, and steady markers along the edges give your eyes something fixed to hold on to.",
			action: {
				kind: "toggle",
				setting: "motionCues"
			}
		};
		case "plain": return {
			text: "Plain words on — longer words get simpler stand-ins.",
			action: {
				kind: "toggle",
				setting: "plainLanguage"
			}
		};
		case "guide": return {
			text: "Word guide on — the line you are reading stays marked.",
			action: {
				kind: "toggle",
				setting: "wordGuide"
			}
		};
		case "syllables": return {
			text: "Syllable breaks on.",
			action: {
				kind: "toggle",
				setting: "syllables"
			}
		};
		case "library": return {
			text: "Opening the library.",
			action: {
				kind: "goTab",
				tab: "library"
			}
		};
		case "insights": return {
			text: "Here are your insights.",
			action: {
				kind: "goTab",
				tab: "insights"
			}
		};
		case "settings": return {
			text: "Opening settings.",
			action: {
				kind: "goTab",
				tab: "settings"
			}
		};
		case "options": return {
			text: "Reading options, coming up.",
			action: {
				kind: "openPanel",
				panel: "options"
			}
		};
		case "find": return {
			text: "Opening find in book.",
			action: {
				kind: "openPanel",
				panel: "find"
			}
		};
		case "highlights": return {
			text: "Here is what you have marked.",
			action: {
				kind: "openPanel",
				panel: "highlights"
			}
		};
		case "adaptive": return direction === "off" ? {
			text: "Adaptive off. I will stop suggesting changes.",
			action: {
				kind: "setMode",
				mode: "default"
			}
		} : {
			text: "Adaptive on. I will watch how this sitting goes and suggest changes.",
			action: {
				kind: "setMode",
				mode: "adaptive"
			}
		};
		case "howto-highlight": return {
			text: "Click a line once to focus it, then click the same line again to mark it. Marked passages get a marker stroke, and the highlighter button in the reader bar lists them all.",
			action: { kind: "none" }
		};
		case "howto-read": return {
			text: "Paste text on the Explore page, upload a PDF, or pick something from the Library. Anything you open lands in the reader.",
			action: { kind: "none" }
		};
		case "dismiss": return {
			text: "I will get out of the way. Bring me back from Settings, or say my name.",
			action: { kind: "hide" }
		};
		case "fatigue": return {
			text: "Reading tires people for different reasons, so I will not guess. Larger type, more line spacing, and higher contrast are the three that help most — tell me which to try, or say “adaptive” and I will watch this sitting and suggest one.",
			action: { kind: "none" }
		};
		default: return {
			text: "Ask me to change how the page reads — softer fixation, larger type, more line spacing, slower pace, higher contrast — or ask how a feature works. I can also take you to the library, your insights, or your highlights.",
			action: { kind: "none" }
		};
	}
}
/**
* Pull the word out of a definition question.
*
* These questions are asked in a handful of shapes — "what does effort mean",
* "define effort", "meaning of effort", "what is a saccade" — and the target is
* whatever sits in the slot. Matching the shape rather than scoring the words
* matters here: the sentence is *about* a word, so scoring it against topic
* vocabularies would answer the wrong question entirely. "What does contrast
* mean" is a request for a definition, not a request to raise the contrast.
*/
var DEFINE_SHAPES = [
	/\bwhat\s+(?:does|do)\s+(?:the\s+word\s+)?["“']?([a-z][a-z'’-]{1,30})["”']?\s+means?\b/i,
	/\bwhat(?:'|’)?s?\s+(?:the\s+)?(?:meaning|definition)\s+of\s+["“']?([a-z][a-z'’-]{1,30})["”']?/i,
	/\b(?:define|definition\s+of|meaning\s+of)\s+["“']?([a-z][a-z'’-]{1,30})["”']?/i,
	/\bwhat\s+is\s+(?:a|an|the)\s+["“']?([a-z][a-z'’-]{1,30})["”']?\s*\??$/i
];
function definitionTarget(input) {
	const text = input.trim();
	for (const shape of DEFINE_SHAPES) {
		const word = shape.exec(text)?.[1]?.toLowerCase();
		if (word && !RESERVED.has(word)) return word;
	}
	return null;
}
/**
* Words a definition question should *not* be sent to the dictionary for.
*
* Deliberately short. The first version listed every piece of app vocabulary,
* on the theory that a question about "contrast" was a question about the
* setting — which meant asking what contrast *means* silently changed the
* colour scheme instead of answering. The lookup already opens with an
* on-device glossary written in this app's own terms, so "contrast" and
* "bionic" get an answer about reading rather than a generic one. Only words
* that name a place in the app, where a dictionary entry would be irrelevant,
* are held back.
*/
var RESERVED = /* @__PURE__ */ new Set([
	"neuro",
	"neurolens",
	"library",
	"insights",
	"settings"
]);
function askNeuro(input) {
	const raw = input.toLowerCase();
	const tokens = tokenize(input);
	if (!tokens.length) {
		if (/\b(what|who|help|can|do)\b/.test(raw)) return resolve("help", "none");
		return {
			text: "Ask me to change something about the page, or how a feature works.",
			action: { kind: "none" },
			unmatched: true
		};
	}
	const target = definitionTarget(input);
	if (target) return {
		text: `Looking up “${target}”…`,
		action: {
			kind: "define",
			word: target
		}
	};
	const direction = readDirection(tokens, raw);
	const best = scoreTopics(tokens, TOPICS)[0];
	if (/\b(how|explain|what is|what are|works?)\b/.test(raw)) {
		if (/\b(highlight|mark|annotat)/.test(raw)) return resolve("howto-highlight", direction);
		if (/\b(fixation|bionic)\b/.test(raw)) return {
			text: "Bionic fixation bolds the first part of each word, so your eye lands in one place per word instead of scanning for it. Reading options, on the left of the reader bar, has the strength slider.",
			action: { kind: "none" }
		};
		if (/\b(read|start|open|book|upload|paste|pdf)\b/.test(raw)) return resolve("howto-read", direction);
	}
	if (!best || best.score < FLOOR) return {
		text: "I did not follow that. Try “soften the fixation”, “larger type”, “more line spacing”, “slower pace”, or “how do I highlight”.",
		action: { kind: "none" },
		unmatched: true
	};
	return resolve(best.id, direction);
}
var NEURO_SUGGESTIONS = [
	"Soften the fixation",
	"More line spacing",
	"Larger type",
	"Higher contrast",
	"Motion makes me dizzy",
	"How do I highlight?",
	"What does saccade mean?"
];
function recognitionCtor() {
	if (typeof window === "undefined") return null;
	const w = window;
	return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function voiceSupported() {
	return recognitionCtor() !== null;
}
/** Heard as the wake word. Recognisers mangle short names, so near-misses count. */
var WAKE = /\b(neuro|nero|neural|nuro|niro|neuro lens|neurolens)\b/i;
function isWakeWord(transcript) {
	return WAKE.test(transcript);
}
function listenForWake(handlers) {
	const { onWake, onHeard, onError } = handlers;
	const Ctor = recognitionCtor();
	if (!Ctor) {
		onError?.("unsupported");
		return () => {};
	}
	let stopped = false;
	const recognition = new Ctor();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.lang = typeof navigator !== "undefined" ? navigator.language || "en-US" : "en-US";
	let woke = false;
	recognition.onresult = (event) => {
		const said = (event.results[event.results.length - 1]?.[0]?.transcript ?? "").trim();
		if (!said) return;
		onHeard?.(said);
		if (isWakeWord(said)) {
			if (woke) return;
			woke = true;
			window.setTimeout(() => {
				woke = false;
			}, 1500);
			onWake(said);
		}
	};
	recognition.onerror = (event) => {
		if (event.error === "no-speech" || event.error === "aborted") return;
		onError?.(event.error);
		if (event.error === "not-allowed" || event.error === "service-not-allowed") stopped = true;
	};
	recognition.onend = () => {
		if (stopped) return;
		try {
			recognition.start();
		} catch {}
	};
	try {
		recognition.start();
	} catch {
		onError?.("start-failed");
	}
	return () => {
		stopped = true;
		try {
			recognition.abort();
		} catch {}
	};
}
/**
* Listen for one spoken request, then stop.
*
* Separate from the wake listener on purpose. That one runs continuously and
* only ever looks for a name; this one is started by a deliberate press, takes
* a single utterance, and shuts the microphone off the moment it has one.
* Keeping them apart means dictation never becomes a reason for the microphone
* to stay open, and the reader can use it without enabling the wake word at
* all.
*/
function dictateOnce(handlers) {
	const Ctor = recognitionCtor();
	if (!Ctor) {
		handlers.onError?.("unsupported");
		return () => {};
	}
	const recognition = new Ctor();
	recognition.continuous = false;
	recognition.interimResults = true;
	recognition.lang = typeof navigator !== "undefined" ? navigator.language || "en-US" : "en-US";
	let best = "";
	recognition.onresult = (event) => {
		const said = (event.results[event.results.length - 1]?.[0]?.transcript ?? "").trim();
		if (!said) return;
		best = said;
		handlers.onPartial?.(said);
	};
	recognition.onerror = (event) => {
		if (event.error === "aborted") return;
		handlers.onError?.(event.error);
	};
	recognition.onend = () => {
		if (best) handlers.onFinal(best);
	};
	try {
		recognition.start();
	} catch {
		handlers.onError?.("start-failed");
	}
	return () => {
		try {
			recognition.stop();
		} catch {}
	};
}
var cache = /* @__PURE__ */ new Map();
/** Compact on-device glossary so tap-to-define still works when the network is quiet. */
var LOCAL = {
	adaptive: {
		phonetic: "/əˈdæptɪv/",
		definition: "Able to change to suit new conditions or needs.",
		partOfSpeech: "adjective"
	},
	attention: {
		phonetic: "/əˈtɛnʃən/",
		definition: "The act of focusing the mind on something.",
		partOfSpeech: "noun"
	},
	bionic: {
		phonetic: "/baɪˈɒnɪk/",
		definition: "Here: marking the first letters of a word so the eye can skip the rest.",
		partOfSpeech: "adjective"
	},
	cognitive: {
		phonetic: "/ˈkɒɡnɪtɪv/",
		definition: "Relating to thinking, knowing, and remembering.",
		partOfSpeech: "adjective"
	},
	contrast: {
		phonetic: "/ˈkɒntrɑːst/",
		definition: "The difference in brightness or colour that makes type readable.",
		partOfSpeech: "noun"
	},
	dyslexia: {
		phonetic: "/dɪsˈlɛksiə/",
		definition: "A difference in reading that can make decoding letters slower or less automatic.",
		partOfSpeech: "noun"
	},
	entropy: {
		phonetic: "/ˈɛntrəpi/",
		definition: "Here: visual disorder on a page that costs attention.",
		partOfSpeech: "noun"
	},
	fixation: {
		phonetic: "/fɪkˈseɪʃən/",
		definition: "A pause of the eye on a word, or the bolded landing letters that invite that pause.",
		partOfSpeech: "noun"
	},
	fluency: {
		phonetic: "/ˈfluːənsi/",
		definition: "Ease and continuity in reading without frequent stumbles.",
		partOfSpeech: "noun"
	},
	friction: {
		phonetic: "/ˈfrɪkʃən/",
		definition: "Resistance. Cognitive friction is extra effort spent on the page instead of the meaning.",
		partOfSpeech: "noun"
	},
	grapheme: {
		phonetic: "/ˈɡræfiːm/",
		definition: "A letter or letter group that stands for a sound.",
		partOfSpeech: "noun"
	},
	hypothesis: {
		phonetic: "/haɪˈpɒθɪsɪs/",
		definition: "A proposed explanation waiting to be tested.",
		partOfSpeech: "noun"
	},
	neurodivergent: {
		phonetic: "/ˌnjʊərəʊdaɪˈvɜːdʒənt/",
		definition: "Having a mind that works differently from what schools and offices treat as typical, including ADHD and dyslexia.",
		partOfSpeech: "adjective"
	},
	opendyslexic: {
		phonetic: "",
		definition: "A free typeface with heavier bases. Trials have not shown it improves reading speed or accuracy; some readers still prefer the shapes.",
		partOfSpeech: "noun"
	},
	paragraph: {
		phonetic: "/ˈpærəɡrɑːf/",
		definition: "A block of related sentences.",
		partOfSpeech: "noun"
	},
	phenomenon: {
		phonetic: "/fɪˈnɒmɪnən/",
		definition: "Something observed that invites explanation.",
		partOfSpeech: "noun"
	},
	saccade: {
		phonetic: "/səˈkɑːd/",
		definition: "A rapid jump of the eye from one landing point to the next while reading.",
		partOfSpeech: "noun"
	},
	saccadic: {
		phonetic: "/səˈkædɪk/",
		definition: "Relating to those rapid eye jumps between words.",
		partOfSpeech: "adjective"
	},
	syllable: {
		phonetic: "/ˈsɪləbəl/",
		definition: "A beat of a word, usually built around a vowel.",
		partOfSpeech: "noun"
	},
	typeface: {
		phonetic: "/ˈtaɪpfeɪs/",
		definition: "A designed family of letters, such as Lexend or OpenDyslexic.",
		partOfSpeech: "noun"
	},
	wcag: {
		phonetic: "",
		definition: "Web Content Accessibility Guidelines — the contrast and readability rules used here.",
		partOfSpeech: "noun"
	},
	reading: {
		phonetic: "/ˈriːdɪŋ/",
		definition: "The act of taking meaning from written words.",
		partOfSpeech: "noun"
	},
	reader: {
		phonetic: "/ˈriːdə/",
		definition: "A person who reads, or the view that shows a passage.",
		partOfSpeech: "noun"
	},
	focus: {
		phonetic: "/ˈfəʊkəs/",
		definition: "The point of attention; here, the line or window kept bright on the page.",
		partOfSpeech: "noun"
	},
	highlight: {
		phonetic: "/ˈhaɪlaɪt/",
		definition: "To mark a line or word so it stands apart from the rest.",
		partOfSpeech: "verb"
	},
	bookmark: {
		phonetic: "/ˈbʊkmɑːk/",
		definition: "A saved place in a passage so you can return to it.",
		partOfSpeech: "noun"
	},
	definition: {
		phonetic: "/ˌdɛfɪˈnɪʃən/",
		definition: "A statement of what a word means.",
		partOfSpeech: "noun"
	},
	sentence: {
		phonetic: "/ˈsɛntəns/",
		definition: "A complete thought, usually ending with a stop, question, or exclamation.",
		partOfSpeech: "noun"
	},
	rhythm: {
		phonetic: "/ˈrɪðəm/",
		definition: "A pattern of rest and motion — here, where the eye is invited to pause.",
		partOfSpeech: "noun"
	},
	contrastive: {
		phonetic: "",
		definition: "Marked by contrast; standing apart from what is around it.",
		partOfSpeech: "adjective"
	},
	comprehension: {
		phonetic: "/ˌkɒmprɪˈhɛnʃən/",
		definition: "Understanding of what has been read, not merely decoding it.",
		partOfSpeech: "noun"
	},
	lexend: {
		phonetic: "",
		definition: "A sans typeface designed to reduce visual crowding between letters.",
		partOfSpeech: "noun"
	},
	atkinson: {
		phonetic: "",
		definition: "Atkinson Hyperlegible — a typeface that makes similar letters easier to tell apart.",
		partOfSpeech: "noun"
	},
	academic: {
		phonetic: "/ˌækəˈdɛmɪk/",
		definition: "Related to study, research, or scholarly writing.",
		partOfSpeech: "adjective"
	},
	documentation: {
		phonetic: "/ˌdɒkjʊmɛnˈteɪʃən/",
		definition: "Written explanation of how something works.",
		partOfSpeech: "noun"
	},
	algorithm: {
		phonetic: "/ˈælɡərɪðəm/",
		definition: "A set of steps a program follows to get a result.",
		partOfSpeech: "noun"
	},
	environment: {
		phonetic: "/ɪnˈvaɪrənmənt/",
		definition: "The conditions around an activity — here, the page and its tools.",
		partOfSpeech: "noun"
	},
	significant: {
		phonetic: "/sɪɡˈnɪfɪkənt/",
		definition: "Large enough, or important enough, to matter.",
		partOfSpeech: "adjective"
	},
	implication: {
		phonetic: "/ˌɪmplɪˈkeɪʃən/",
		definition: "A likely consequence or meaning that follows from something.",
		partOfSpeech: "noun"
	},
	investigate: {
		phonetic: "/ɪnˈvɛstɪɡeɪt/",
		definition: "To look into something carefully in order to understand it.",
		partOfSpeech: "verb"
	},
	formatting: {
		phonetic: "/ˈfɔːmætɪŋ/",
		definition: "The visual arrangement of type, space, and emphasis on a page.",
		partOfSpeech: "noun"
	},
	enhances: {
		phonetic: "",
		definition: "Improves or strengthens.",
		partOfSpeech: "verb"
	},
	retention: {
		phonetic: "/rɪˈtɛnʃən/",
		definition: "The ability to keep something in mind after reading it.",
		partOfSpeech: "noun"
	},
	populations: {
		phonetic: "",
		definition: "Groups of people considered together.",
		partOfSpeech: "noun"
	},
	presents: {
		phonetic: "",
		definition: "Shows or offers to view.",
		partOfSpeech: "verb"
	},
	competing: {
		phonetic: "",
		definition: "Drawing attention in different directions at once.",
		partOfSpeech: "adjective"
	},
	orientation: {
		phonetic: "/ˌɔːriənˈteɪʃən/",
		definition: "Finding one’s place — where you are on a page or in an argument.",
		partOfSpeech: "noun"
	},
	conventional: {
		phonetic: "/kənˈvɛnʃənəl/",
		definition: "Following the usual way of doing something.",
		partOfSpeech: "adjective"
	},
	participants: {
		phonetic: "",
		definition: "People taking part in a study or activity.",
		partOfSpeech: "noun"
	},
	limitations: {
		phonetic: "",
		definition: "The bounds of what a claim or study can honestly say.",
		partOfSpeech: "noun"
	}
};
function normalizeLookupWord(raw) {
	return raw.toLowerCase().replace(/[^a-z']/g, "");
}
function fromLocal(word) {
	const entry = LOCAL[word];
	if (!entry) return null;
	return {
		word,
		audio: null,
		source: "local",
		...entry
	};
}
function senseFromRemote(word, data) {
	const entry = data[0];
	const meaning = entry?.meanings?.[0];
	const definition = meaning?.definitions?.[0];
	if (!definition?.definition) return null;
	return {
		word: entry?.word ?? word,
		phonetic: entry?.phonetic || entry?.phonetics?.find((item) => item.text)?.text || "",
		definition: definition.definition,
		partOfSpeech: meaning?.partOfSpeech ?? "",
		audio: entry?.phonetics?.find((item) => item.audio)?.audio || null,
		example: definition.example,
		source: "remote"
	};
}
function senseFromDatamuse(word, rows) {
	const row = rows.find((item) => item.defs && item.defs.length > 0) ?? rows[0];
	const raw = row?.defs?.[0];
	if (!raw) return null;
	const split = raw.split("	");
	const tag = split.length > 1 ? split[0] : "";
	const definition = (split.length > 1 ? split.slice(1).join("	") : raw).trim();
	if (!definition) return null;
	const part = tag === "n" ? "noun" : tag === "v" ? "verb" : tag === "adj" ? "adjective" : tag === "adv" ? "adverb" : tag;
	return {
		word: row?.word ?? word,
		phonetic: "",
		definition,
		partOfSpeech: part,
		audio: null,
		source: "remote"
	};
}
/**
* @param attempts Retries are worth it for a flaky connection and expensive for
* a dead one — every extra pass multiplies the wait before a fallback is even
* tried. Callers racing several sources pass 1.
*/
async function fetchJson(url, timeout = 7e3, attempts = 2) {
	for (let attempt = 0; attempt < attempts; attempt++) {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), timeout);
		try {
			const response = await fetch(url, { signal: controller.signal });
			if (response.ok) return await response.json();
			if (response.status < 500 && response.status !== 429) return null;
		} catch {} finally {
			clearTimeout(timer);
		}
		if (attempt + 1 < attempts) await new Promise((resolve) => setTimeout(resolve, 220));
	}
	return null;
}
/**
* Free Dictionary first, Datamuse as the fallback.
*
* The order used to be the other way round, and Datamuse almost always answers,
* so Free Dictionary was effectively never reached. That matters because the
* two return different amounts: Free Dictionary carries a phonetic spelling,
* pronunciation audio and a usage example, and Datamuse carries a bare gloss.
* The card here renders all three, so with Datamuse winning every race, two
* thirds of it stayed empty for no reason.
*
* The same-origin proxy is tried ahead of the public host so the request works
* where a strict CSP would block a third-party origin.
*/
/** How long to hold a usable answer back, hoping for the richer one. */
var RICHER_GRACE = 1200;
/** Whole-lookup deadline. Past this, say so rather than keep spinning. */
var DEADLINE = 5e3;
/**
* Whether Free Dictionary is answering at all right now.
*
* It is unreachable on some networks — blocked, or simply down — and when it is,
* every single lookup paid the grace period waiting for a reply that was never
* coming, and every miss paid the full retry budget of both sources stacked.
* A word with no entry took twelve seconds to report that, which reads as a
* hang, not an answer.
*
* So its health is remembered. Two failures in a row and it stops being waited
* for; a later success clears the mark, because a network that was down at
* breakfast may be fine by lunch.
*/
var richerFailures = 0;
var RICHER_GIVE_UP = 2;
/**
* Ask both dictionaries at once, and prefer the richer answer if it is prompt.
*
* The two sources are not equivalent. Free Dictionary returns a phonetic
* spelling, pronunciation audio and a usage example; Datamuse returns a bare
* gloss. The card renders all of that, so which one answers changes how much of
* it is filled in.
*
* Trying them in sequence is wrong in both directions, and I had it wrong both
* ways round before settling here. Datamuse first means it almost always wins
* and the richer fields stay permanently empty. Free Dictionary first means
* that when it is slow or unreachable — which happens, and `fetchJson` retries
* each URL twice — the reader waits ten seconds for a definition Datamuse could
* have given immediately.
*
* So they race. Free Dictionary is given a short grace period to arrive; past
* that, whatever answered is served. Nobody waits on a source that is having a
* bad day, and nobody gets a thinner entry than necessary when it is fine.
*/
async function fetchRemote(word) {
	const richer = (async () => {
		for (const url of [`/api/dictionary?q=${encodeURIComponent(word)}`, `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`]) {
			const data = await fetchJson(url, 2500, 1);
			if (!Array.isArray(data)) continue;
			const sense = senseFromRemote(word, data);
			if (sense) {
				richerFailures = 0;
				return sense;
			}
		}
		richerFailures += 1;
		return null;
	})();
	const plain = (async () => {
		const data = await fetchJson(`https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=d&max=5`, 3e3, 1);
		if (!Array.isArray(data)) return null;
		return senseFromDatamuse(word, data);
	})();
	const grace = richerFailures >= RICHER_GIVE_UP ? 0 : RICHER_GRACE;
	const first = await Promise.race([
		richer,
		plain.then((sense) => sense && grace ? new Promise((r) => setTimeout(() => r(sense), grace)) : sense),
		new Promise((r) => setTimeout(() => r(null), DEADLINE))
	]);
	if (first) return first;
	return await Promise.race([Promise.all([richer, plain]).then(([a, c]) => a ?? c), new Promise((r) => setTimeout(() => r(null), 1e3))]);
}
async function lookupWord(raw) {
	const word = normalizeLookupWord(raw);
	if (word.length < 2) return null;
	if (cache.has(word)) return cache.get(word) ?? null;
	const local = fromLocal(word);
	if (local) {
		cache.set(word, local);
		return local;
	}
	const remote = await fetchRemote(word);
	if (remote) cache.set(word, remote);
	return remote;
}
function speakWord(word) {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(word);
	utterance.rate = .85;
	window.speechSynthesis.speak(utterance);
}
/**
* Close a panel when the pointer goes down outside it.
*
* Radix handles this for its own popovers, but two surfaces here are not Radix:
* the companion's panel, and the reading options sheet, which is deliberately
* non-modal so the page stays scrollable and legible while settings change.
* Non-modal means there is no overlay to catch the click, so the dismissal has
* to be wired by hand — and without it those two stayed open until the trigger
* was pressed again, which is not what pressing somewhere else means.
*
* `pointerdown`, not `click`: a click only lands after the button comes back up,
* which on a drag or a text selection that started inside and ended outside
* arrives at the wrong moment or not at all.
*
* Scrolling is deliberately not a dismissal. The whole reason the sheet is
* non-modal is to let someone read while adjusting, and taking it away the
* moment they move the page would defeat what it is for.
*/
function useDismiss(refs, open, onDismiss) {
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const list = Array.isArray(refs) ? refs : [refs];
		const onDown = (event) => {
			const target = event.target;
			if (!target) return;
			for (const ref of list) {
				const node = ref.current;
				if (node && node.contains(target)) return;
			}
			if (target instanceof Element && target.closest("[data-radix-popper-content-wrapper],[role=dialog],[role=menu],[role=listbox]")) {
				for (const ref of list) if (ref.current && target.closest("[role=dialog]") === ref.current) return;
			}
			onDismiss();
		};
		document.addEventListener("pointerdown", onDown, true);
		return () => document.removeEventListener("pointerdown", onDown, true);
	}, [
		refs,
		open,
		onDismiss
	]);
}
var DOCK_KEY = "neurolens-neuro-dock";
var VOICE_KEY = "neurolens-neuro-voice";
var DEFAULT_DOCK = {
	x: .94,
	y: .86
};
function readDock() {
	try {
		const raw = JSON.parse(localStorage.getItem(DOCK_KEY) || "null");
		if (raw && Number.isFinite(raw.x) && Number.isFinite(raw.y)) return {
			x: Math.min(1, Math.max(0, raw.x)),
			y: Math.min(1, Math.max(0, raw.y))
		};
	} catch {}
	return DEFAULT_DOCK;
}
/**
* Neuro — the companion, everywhere.
*
* Floats above every view, can be dragged anywhere, answers questions about the
* app, and carries out the ones that map to a setting. It can be dismissed
* outright from Settings, which is not a token option: a face that follows you
* across an app you are trying to read in is exactly the kind of thing some of
* these readers will want gone, and the honest way to offer it is to make
* leaving as easy as arriving.
*
* Position is stored as a fraction of the viewport rather than in pixels, so
* where you put it survives a resize, a rotation, and a different screen.
*/
function Neuro() {
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const setTab = useAppStore((s) => s.setTab);
	const setMode = useAppStore((s) => s.setMode);
	const setControlsOpen = useAppStore((s) => s.setControlsOpen);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const setTargetWpm = useAppStore((s) => s.setTargetWpm);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [dock, setDock] = (0, import_react.useState)(DEFAULT_DOCK);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [said, setSaid] = (0, import_react.useState)(null);
	const [voiceOn, setVoiceOn] = (0, import_react.useState)(false);
	const [voiceError, setVoiceError] = (0, import_react.useState)(null);
	const [heard, setHeard] = (0, import_react.useState)(null);
	const [dictating, setDictating] = (0, import_react.useState)(false);
	const [sense, setSense] = (0, import_react.useState)(null);
	const [looking, setLooking] = (0, import_react.useState)(false);
	const stopDictation = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const rootRef = (0, import_react.useRef)(null);
	const dragged = (0, import_react.useRef)(false);
	const grab = (0, import_react.useRef)({
		dx: 0,
		dy: 0
	});
	(0, import_react.useEffect)(() => {
		setDock(readDock());
		try {
			setVoiceOn(localStorage.getItem(VOICE_KEY) === "on");
		} catch {}
	}, []);
	/** Run what a question asked for. Everything here is a real app setting. */
	const perform = (0, import_react.useCallback)((action) => {
		const current = useAppStore.getState().profile;
		const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
		switch (action.kind) {
			case "setBionic":
				setProfile({
					...current,
					bionicStrength: action.value
				});
				break;
			case "adjustBionic":
				setProfile({
					...current,
					bionicStrength: clamp(current.bionicStrength + action.delta, 0, 1)
				});
				break;
			case "adjustFontSize":
				setProfile({
					...current,
					fontSize: clamp(current.fontSize + action.delta, 14, 28)
				});
				break;
			case "adjustLineHeight":
				setProfile({
					...current,
					lineHeight: Math.round(clamp(current.lineHeight + action.delta, 1.4, 2.2) * 10) / 10
				});
				break;
			case "adjustWpm":
				setTargetWpm(clamp(targetWpm + action.delta, 120, 480));
				break;
			case "setTheme":
				setProfile({
					...current,
					theme: action.value
				});
				break;
			case "toggle":
				setProfile({
					...current,
					[action.setting]: !current[action.setting]
				});
				break;
			case "goTab":
				setTab(action.tab);
				break;
			case "openPanel":
				if (action.panel === "options") setControlsOpen(true);
				else window.dispatchEvent(new CustomEvent("nl-neuro-panel", { detail: action.panel }));
				break;
			case "setMode":
				setMode(action.mode);
				break;
			case "hide": setProfile({
				...current,
				companion: false
			});
		}
	}, [
		setProfile,
		setTab,
		setMode,
		setControlsOpen,
		setTargetWpm,
		targetWpm
	]);
	const ask = (0, import_react.useCallback)((text) => {
		const reply = askNeuro(text);
		setSaid(reply.text);
		setSense(null);
		announce(reply.text);
		setQuestion("");
		if (reply.action.kind === "define") {
			const word = reply.action.word;
			setLooking(true);
			lookupWord(word).then((found) => {
				setLooking(false);
				if (found) {
					setSense(found);
					announce(`${found.word}, ${found.partOfSpeech}. ${found.definition}`);
					setSaid(null);
				} else setSaid(`I could not find “${word}”. It may be a name, or spelled differently.`);
			}).catch(() => {
				setLooking(false);
				setSaid(`I could not reach the dictionary for “${word}”. It needs a connection.`);
			});
			return;
		}
		perform(reply.action);
	}, [perform]);
	/** Speak a request instead of typing it. One utterance, then the mic closes. */
	const dictate = (0, import_react.useCallback)(() => {
		if (dictating) {
			stopDictation.current?.();
			setDictating(false);
			return;
		}
		setDictating(true);
		setQuestion("");
		stopDictation.current = dictateOnce({
			onPartial: (text) => setQuestion(text),
			onFinal: (text) => {
				setDictating(false);
				setQuestion(text);
				ask(text);
			},
			onError: (reason) => {
				setDictating(false);
				setVoiceError(reason);
			}
		});
	}, [dictating, ask]);
	(0, import_react.useEffect)(() => {
		if (!voiceOn) return;
		return listenForWake({
			onWake: () => {
				const current = useAppStore.getState().profile;
				if (current.companion === false) setProfile({
					...current,
					companion: true
				});
				setOpen(true);
				setSaid("You called?");
				announce("Neuro is listening");
			},
			onHeard: (transcript) => setHeard(transcript),
			onError: (reason) => setVoiceError(reason)
		});
	}, [voiceOn, setProfile]);
	useDismiss(rootRef, open, (0, import_react.useCallback)(() => setOpen(false), []));
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key !== "Escape") return;
			event.preventDefault();
			event.stopPropagation();
			setOpen(false);
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [open]);
	function onPointerDown(event) {
		const node = rootRef.current;
		if (!node) return;
		const box = node.getBoundingClientRect();
		grab.current = {
			dx: event.clientX - box.left,
			dy: event.clientY - box.top
		};
		dragged.current = false;
		setDragging(true);
		impact("soft");
		node.setPointerCapture(event.pointerId);
	}
	const lean = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	function onPointerMove(event) {
		if (!dragging) return;
		const node = rootRef.current;
		if (!node) return;
		const box = node.getBoundingClientRect();
		if (Math.abs(event.movementX) + Math.abs(event.movementY) > 2) dragged.current = true;
		const x = (event.clientX - grab.current.dx + box.width / 2) / window.innerWidth;
		const y = (event.clientY - grab.current.dy + box.height / 2) / window.innerHeight;
		setDock({
			x: Math.min(.98, Math.max(.02, x)),
			y: Math.min(.96, Math.max(.04, y))
		});
		lean.current.x = lean.current.x * .7 + event.movementX * .3;
		lean.current.y = lean.current.y * .7 + event.movementY * .3;
		const tilt = Math.max(-14, Math.min(14, lean.current.x * .9));
		const squash = Math.min(.12, Math.hypot(lean.current.x, lean.current.y) * .006);
		const orb = rootRef.current?.querySelector(".nl-neuro-orb");
		if (orb) orb.style.transform = `rotate(${tilt.toFixed(1)}deg) scale(${(1.1 + squash).toFixed(3)}, ${(1.1 - squash).toFixed(3)})`;
	}
	function onPointerUp(event) {
		if (!dragging) return;
		setDragging(false);
		rootRef.current?.releasePointerCapture(event.pointerId);
		const orb = rootRef.current?.querySelector(".nl-neuro-orb");
		if (orb) orb.style.transform = "";
		lean.current = {
			x: 0,
			y: 0
		};
		if (dragged.current) impact("rigid");
		try {
			localStorage.setItem(DOCK_KEY, JSON.stringify(dock));
		} catch {}
		if (!dragged.current) setOpen((value) => !value);
	}
	if (profile.companion === false) return null;
	const mood = dragging ? "pleased" : open ? "watching" : voiceOn ? "idle" : "idle";
	const leftHalf = dock.x < .5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: cn("fixed z-70 -translate-x-1/2 -translate-y-1/2 select-none", dragging ? "cursor-grabbing" : "cursor-grab", !dragging && !reduce && "transition-[left,top] duration-300 ease-[var(--ease-out)]"),
		style: {
			left: `${dock.x * 100}%`,
			top: `${dock.y * 100}%`
		},
		onPointerDown,
		onPointerMove,
		onPointerUp,
		onPointerCancel: onPointerUp,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": open ? "Close Neuro" : "Ask Neuro",
			"aria-expanded": open,
			className: cn("nl-neuro-orb icon-group flex size-16 items-center justify-center rounded-full", "transition-transform duration-[160ms] ease-[var(--ease-out)]", "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-fg)_22%,transparent)]", dragging && "scale-110"),
			onClick: (event) => event.preventDefault(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Companion, {
				mood,
				follow: true,
				className: "size-16 drop-shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
			})
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-label": "Ask Neuro",
			className: cn("nl-menu-in absolute bottom-[calc(100%+0.75rem)] w-[min(20rem,calc(100vw-2rem))] rounded-lg bg-surface p-3 shadow-float", leftHalf ? "left-0 origin-bottom-left" : "right-0 origin-bottom-right"),
			onPointerDown: (event) => event.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: "Ask Neuro"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close",
						className: "icon-group -mt-0.5 -mr-0.5 rounded-sm p-1 text-muted hover:text-fg",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							icon: x,
							width: 14,
							height: 14,
							"aria-hidden": true,
							className: "icon-motion icon-turn"
						})
					})]
				}),
				said ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 rounded-md bg-bg px-3 py-2.5 text-sm leading-relaxed text-pretty",
					children: said
				}) : null,
				looking ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 rounded-md bg-bg px-3 py-2.5 text-sm text-muted",
					children: "Looking it up…"
				}) : null,
				sense ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 rounded-md bg-bg px-3 py-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: sense.word
								}),
								sense.phonetic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: sense.phonetic
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => speakWord(sense.word),
									"aria-label": `Hear ${sense.word}`,
									className: "icon-group ml-auto rounded-sm p-1 text-muted hover:text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										icon: speakerHigh,
										width: 14,
										height: 14,
										"aria-hidden": true,
										className: "icon-motion icon-lift"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle italic",
							children: sense.partOfSpeech
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm leading-relaxed text-pretty",
							children: sense.definition
						}),
						sense.example ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 border-l-2 border-fg/10 pl-2.5 text-sm leading-relaxed text-pretty text-muted italic",
							children: sense.example
						}) : null
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex items-center gap-1.5",
					onSubmit: (event) => {
						event.preventDefault();
						ask(question);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: question,
						onChange: (event) => setQuestion(event.target.value),
						placeholder: dictating ? "Listening…" : "Reduce the fixation…",
						"aria-label": "Ask Neuro a question",
						autoFocus: true,
						className: "min-w-0 flex-1"
					}), voiceSupported() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: dictate,
						"aria-label": dictating ? "Stop listening" : "Speak your request",
						"aria-pressed": dictating,
						className: cn("icon-group flex size-9 shrink-0 items-center justify-center rounded-md", "transition-[background-color,color] duration-[140ms] ease-[var(--ease-out)]", dictating ? "nl-neuro-listening bg-accent/15 text-accent" : "text-muted hover:bg-fg/6 hover:text-fg"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							icon: microphone,
							width: 17,
							height: 17,
							"aria-hidden": true,
							className: "icon-motion icon-lift"
						})
					}) : null]
				}),
				!said ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2.5 flex flex-wrap gap-1.5",
					children: NEURO_SUGGESTIONS.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-full bg-fg/6 px-2.5 py-1 text-xs text-muted transition-colors hover:bg-fg/10 hover:text-fg",
						onClick: () => ask(suggestion),
						children: suggestion
					}, suggestion))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between gap-2 border-t border-fg/8 pt-2.5",
					children: [voiceSupported() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: voiceOn,
							onChange: (event) => {
								const on = event.target.checked;
								setVoiceOn(on);
								setVoiceError(null);
								try {
									localStorage.setItem(VOICE_KEY, on ? "on" : "off");
								} catch {}
							}
						}), "Say “Neuro” to call me"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-subtle",
						children: "Voice needs Chrome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "shrink-0 text-xs",
						onClick: () => setProfile({
							...profile,
							companion: false
						}),
						children: "Hide me"
					})]
				}),
				voiceOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-subtle",
					children: voiceError === "not-allowed" || voiceError === "service-not-allowed" ? "Microphone permission was declined, so I cannot listen. Allow it from the padlock in the address bar." : voiceError === "network" ? "Speech recognition needs a network connection, and there is none." : voiceError ? `Listening stopped: ${voiceError}.` : heard ? `Heard “${heard}”. Say “Neuro” and I will open.` : "Listening for my name. Your browser sends audio to its speech service to do this — everything else in NeuroLens stays on your device."
				}) : null
			]
		}) : null]
	});
}
/** Dots per edge column. Enough to read as a field, few enough to ignore. */
var PER_EDGE = 6;
/**
* Vehicle-motion-style cues, for scroll-induced nausea.
*
* Modelled on the accommodation iOS ships for reading in a moving car. The
* discomfort comes from a mismatch: the inner ear reports one thing and the
* eyes, locked on text that is itself sliding, report another. Damping the
* animation — which is all the first version of this did — does not address
* that at all, because the provoking motion is the *scrolling*, and stopping
* that would mean stopping reading.
*
* What helps is giving the eye an independent reference. Dots pinned to the
* edges of the screen move *against* the scroll, so peripheral vision gets an
* unambiguous read on direction and speed while central vision stays on the
* words. The dots are deliberately in the periphery and deliberately dim: they
* are meant to be seen without being looked at.
*
* Driven straight to the DOM rather than through React state. This runs on
* every scroll frame, and re-rendering twelve dots per frame would spend more
* than the effect is worth.
*/
function MotionCues() {
	const enabled = useAppStore((s) => s.profile.motionCues);
	const ref = (0, import_react.useRef)(null);
	/**
	* Whether the accelerometer is actually reporting, not merely present.
	*
	* `DeviceMotionEvent` exists in desktop Chrome on a machine with no
	* accelerometer at all, so testing for the API would have stood the scroll
	* fallback down on every desktop and left the cues frozen. The only honest
	* test is whether samples arrive.
	*/
	const [sensorLive, setSensorLive] = (0, import_react.useState)(false);
	/**
	* Physical motion, when the device can report it.
	*
	* This is the signal that actually matches what the inner ear is sensing, so
	* where it exists it takes over from scroll entirely: the dots move with the
	* vehicle rather than with the page. Scrolling remains the fallback, which is
	* better than nothing on a desktop or a device with no accelerometer, but it
	* is a proxy — it describes what the page is doing, which the eyes could
	* already see.
	*/
	(0, import_react.useEffect)(() => {
		if (!enabled || !deviceMotionSupported()) return;
		const root = ref.current;
		if (!root) return;
		let raf = 0;
		let x = 0;
		let y = 0;
		let live = false;
		const stop = listenToMotion((sample) => {
			if (Math.abs(sample.x) + Math.abs(sample.y) < .12) return;
			if (!live) setSensorLive(true);
			live = true;
			x = sample.x;
			y = sample.y;
			if (!raf) raf = requestAnimationFrame(paint);
		});
		let shift = 0;
		function paint() {
			raf = 0;
			if (!root || !live) return;
			shift -= y * 2.4;
			const wrapped = (shift % 64 + 64) % 64;
			root.style.setProperty("--nl-cue-shift", `${wrapped}px`);
			root.style.setProperty("--nl-cue-lean", `${Math.max(-14, Math.min(14, -x * 3)).toFixed(1)}px`);
			const force = Math.min(1, (Math.abs(x) + Math.abs(y)) / 2.2);
			root.style.setProperty("--nl-cue-strength", String(.25 + force * .75));
			raf = requestAnimationFrame(paint);
		}
		return () => {
			stop();
			if (raf) cancelAnimationFrame(raf);
			setSensorLive(false);
		};
	}, [enabled]);
	(0, import_react.useEffect)(() => {
		if (!enabled || sensorLive) return;
		const root = ref.current;
		if (!root) return;
		let raf = 0;
		let last = 0;
		let offset = 0;
		let velocity = 0;
		const scroller = () => document.querySelector(".reader-scroll") ?? document.querySelector(".pane-scroll");
		const read = () => {
			const node = scroller();
			if (!node) return 0;
			return node.scrollTop;
		};
		last = read();
		const frame = () => {
			raf = 0;
			const now = read();
			const delta = now - last;
			last = now;
			velocity = velocity * .82 - delta * .55;
			offset += velocity * .06;
			const wrapped = (offset % 64 + 64) % 64;
			root.style.setProperty("--nl-cue-shift", `${wrapped}px`);
			const intensity = Math.min(1, Math.abs(velocity) / 12);
			root.style.setProperty("--nl-cue-strength", String(.25 + intensity * .75));
			if (Math.abs(velocity) > .05) raf = requestAnimationFrame(frame);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(frame);
		};
		document.addEventListener("scroll", onScroll, {
			passive: true,
			capture: true
		});
		return () => {
			document.removeEventListener("scroll", onScroll, { capture: true });
			if (raf) cancelAnimationFrame(raf);
		};
	}, [enabled, sensorLive]);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		"aria-hidden": true,
		className: "nl-cues pointer-events-none fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "nl-cue-edge nl-cue-left",
			children: Array.from({ length: PER_EDGE }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nl-cue-dot" }, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "nl-cue-edge nl-cue-right",
			children: Array.from({ length: PER_EDGE }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nl-cue-dot" }, i))
		})]
	});
}
/**
* Register the service worker, in production only.
*
* Not in dev: Vite serves modules unbundled and rewrites them constantly, and a
* worker sitting in front of that will happily serve yesterday's module graph
* and produce failures that look like code bugs. The offline story is a
* property of the built app, so it is tested against the built app.
*
* Registration is deferred to `load` so it never competes with the first paint
* — the point is to help the *second* visit, and it should cost the first one
* nothing.
*/
function OfflineReady() {
	(0, import_react.useEffect)(() => {
		if (!("serviceWorker" in navigator)) return;
		const register = () => {
			navigator.serviceWorker.register("/sw.js").catch(() => {});
		};
		if (document.readyState === "complete") register();
		else window.addEventListener("load", register, { once: true });
		return () => window.removeEventListener("load", register);
	}, []);
	return null;
}
/**
* The escape hatch.
*
* If a release ever ships a worker that serves a broken shell, visitors have no
* obvious way out — the bad worker answers before the network does. Exposing
* this on `window` means a fix can be talked through with someone in a support
* thread without asking them to find Application → Storage in devtools.
*/
if (typeof window !== "undefined") window.nlDisableOffline = () => {
	navigator.serviceWorker?.controller?.postMessage("nl-unregister");
	navigator.serviceWorker?.getRegistrations().then((all) => {
		for (const registration of all) registration.unregister();
	});
};
/** Visually hidden polite live region for status messages (WCAG 4.1.3). */
function LiveAnnouncer() {
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const stop = subscribeAnnounce((next) => {
			setMessage("");
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => setMessage(next));
		});
		return () => {
			cancelAnimationFrame(frame);
			stop();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "status",
		"aria-live": "polite",
		"aria-atomic": "true",
		className: "sr-only",
		children: message
	});
}
var FONT_HREF = {
	serif: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap",
	atkinson: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap",
	lexend: "https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap",
	inclusive: "https://fonts.googleapis.com/css2?family=Inclusive+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap",
	andika: "https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400&display=swap",
	literata: "https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,600&display=swap",
	comicneue: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap",
	sourcesans: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap"
};
var injected = /* @__PURE__ */ new Set();
function ensurePreconnect() {
	if (typeof document === "undefined") return;
	if (document.querySelector("link[data-nl-font-preconnect]")) return;
	for (const href of ["https://fonts.googleapis.com", "https://fonts.gstatic.com"]) {
		const link = document.createElement("link");
		link.rel = "preconnect";
		link.href = href;
		link.crossOrigin = "anonymous";
		link.dataset.nlFontPreconnect = "1";
		document.head.appendChild(link);
	}
}
function inject(id, href) {
	if (typeof document === "undefined") return;
	if (injected.has(id) || document.querySelector(`link[data-nl-font="${id}"]`)) return;
	injected.add(id);
	ensurePreconnect();
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	link.dataset.nlFont = id;
	link.media = "print";
	link.addEventListener("load", () => {
		link.media = "all";
	}, { once: true });
	link.addEventListener("error", () => {
		injected.delete(id);
		link.remove();
	}, { once: true });
	document.head.appendChild(link);
}
function preloadReadingFonts() {
	if (typeof document === "undefined") return;
	for (const [id, href] of Object.entries(FONT_HREF)) if (href) inject(id, href);
}
/** Load the active face after first paint. System serifs show immediately if the request is slow. */
function FontLoader() {
	const font = useAppStore((s) => s.profile.fontFamily);
	const tab = useAppStore((s) => s.tab);
	const controlsOpen = useAppStore((s) => s.controlsOpen);
	(0, import_react.useEffect)(() => {
		if (FONT_HREF.serif) inject("serif", FONT_HREF.serif);
		const extra = FONT_HREF[font];
		if (extra && font !== "serif") inject(font, extra);
	}, [font]);
	(0, import_react.useEffect)(() => {
		if (tab === "settings" || controlsOpen) preloadReadingFonts();
	}, [tab, controlsOpen]);
	return null;
}
var WORDS = {
	phenomenon: "event",
	phenomena: "events",
	cognitive: "mental",
	significant: "important",
	significantly: "greatly",
	friction: "difficulty",
	implications: "effects",
	implication: "effect",
	neurodivergent: "neurodivergent",
	manifestation: "sign",
	facilitate: "help",
	facilitates: "helps",
	facilitated: "helped",
	utilize: "use",
	utilizes: "uses",
	utilized: "used",
	utilizing: "using",
	demonstrate: "show",
	demonstrates: "shows",
	demonstrated: "showed",
	ameliorate: "improve",
	exacerbate: "worsen",
	arbitrary: "random",
	substantive: "real",
	meticulous: "careful",
	proficient: "skilled",
	ephemeral: "short-lived",
	ubiquitous: "common",
	aggregate: "total",
	culmination: "result",
	discrepancy: "gap",
	empirical: "observed",
	hypothesis: "theory",
	hypotheses: "theories",
	pervasive: "widespread",
	trajectory: "path",
	paradigm: "model",
	dichotomy: "split",
	ambiguous: "unclear",
	coherent: "clear",
	synthesis: "combination",
	comprehensive: "complete",
	constrain: "limit",
	constrained: "limited",
	propensity: "tendency",
	magnitude: "size",
	proliferate: "spread",
	recursive: "repeating",
	algorithm: "method",
	algorithms: "methods",
	transform: "change",
	transforms: "changes",
	dynamically: "as you go",
	graphemes: "letters",
	grapheme: "letter",
	optimize: "improve",
	optimizes: "improves",
	saccadic: "eye-jump",
	conventional: "usual",
	participants: "readers in the study",
	entropy: "clutter",
	orientation: "finding your place",
	retention: "holding on",
	populations: "groups",
	investigations: "studies",
	investigates: "looks at",
	investigate: "look at",
	subsequently: "later",
	approximately: "about",
	sufficient: "enough",
	insufficient: "not enough",
	nevertheless: "still",
	furthermore: "also",
	moreover: "also",
	therefore: "so",
	consequently: "as a result",
	regarding: "about",
	concerning: "about",
	numerous: "many",
	additional: "more",
	previously: "before",
	currently: "now",
	predominantly: "mostly",
	particularly: "especially",
	specifically: "in particular",
	fundamentally: "at root",
	essentially: "basically",
	relatively: "fairly",
	considerably: "a lot",
	enhances: "improves",
	acquire: "get",
	acquired: "got",
	acquirement: "getting",
	relocate: "move",
	relocations: "moves",
	relocation: "move",
	fixation: "pause on a word",
	fixations: "pauses on words",
	vocabulary: "words",
	intimidating: "daunting",
	intervention: "change",
	interventions: "changes",
	combination: "mix",
	straightforward: "simple",
	exhausting: "tiring",
	fatigue: "tiredness",
	comprehension: "understanding",
	accuracy: "how right it is",
	assumed: "took as true",
	distinction: "difference",
	limitations: "limits",
	literary: "story-like",
	argument: "point",
	environmental: "about the page",
	periphery: "edge",
	interferes: "gets in the way",
	aesthetic: "looks",
	preference: "choice",
	frequent: "often",
	undershoots: "lands short",
	overshoots: "lands past",
	correction: "fix",
	corrections: "fixes",
	mandate: "must-do",
	medication: "medicine",
	phonemes: "sounds",
	typography: "type",
	scanning: "looking",
	representing: "standing for",
	between: "between",
	emphasis: "weight",
	remainder: "rest",
	deterministic: "fixed",
	transformation: "change",
	intentionally: "on purpose",
	pipeline: "process",
	documentation: "document",
	recommendation: "suggestion",
	recommendations: "suggestions",
	structured: "ordered",
	module: "part",
	receives: "gets",
	metrics: "measures",
	remaining: "left"
};
var PHRASES = [
	[/\bin light of\b/gi, "because of"],
	[/\bin the context of\b/gi, "in"],
	[/\bwith respect to\b/gi, "about"],
	[/\bin order to\b/gi, "to"],
	[/\bin accordance with\b/gi, "following"],
	[/\bit is worth noting that\b/gi, "note that"],
	[/\bit is worth noting\b/gi, "note"],
	[/\bprior to\b/gi, "before"],
	[/\bsubsequent to\b/gi, "after"],
	[/\ba large number of\b/gi, "many"],
	[/\ba number of\b/gi, "some"],
	[/\bdue to the fact that\b/gi, "because"],
	[/\bin the event that\b/gi, "if"],
	[/\bhas the ability to\b/gi, "can"],
	[/\bin addition to\b/gi, "besides"],
	[/\bon the other hand\b/gi, "but"],
	[/\bas a result of\b/gi, "from"],
	[/\bthe majority of\b/gi, "most"],
	[/\bwith the exception of\b/gi, "except"],
	[/\bfor the purpose of\b/gi, "to"],
	[/\bin spite of\b/gi, "despite"]
];
function preserveCase(source, replacement) {
	if (!source) return replacement;
	if (source === source.toUpperCase() && source.length > 1) return replacement.toUpperCase();
	if (source[0] === source[0]?.toUpperCase()) return replacement.charAt(0).toUpperCase() + replacement.slice(1);
	return replacement;
}
function gradeLevel(text) {
	const sentences = splitSentences$1(text);
	const words = text.trim().split(/\s+/).filter(Boolean);
	const chars = text.replace(/\s/g, "").length;
	const sentenceCount = Math.max(1, sentences.length);
	const wordCount = Math.max(1, words.length);
	const averageSentenceLength = wordCount / sentenceCount;
	const averageWordLength = chars / wordCount;
	const grade = .39 * averageSentenceLength + 11.8 * (averageWordLength / 2.5) - 15.59;
	return Math.max(1, Math.min(18, Math.round(grade)));
}
function complexityOf(text) {
	const hits = Object.keys(WORDS).filter((word) => new RegExp(`\\b${word}\\b`, "i").test(text)).length;
	const long = splitSentences$1(text).filter((sentence) => sentence.split(/\s+/).length > 24).length;
	if (hits >= 6 || long >= 3) return "complex";
	if (hits >= 2 || long >= 1) return "moderate";
	return "easy";
}
function swapPlainWord(word) {
	const simple = WORDS[word.toLowerCase()];
	if (!simple || simple.toLowerCase() === word.toLowerCase()) return {
		next: word,
		original: null
	};
	return {
		next: preserveCase(word, simple),
		original: word
	};
}
function applyPlainPhrases(text) {
	let next = text;
	let count = 0;
	for (const [pattern, simple] of PHRASES) next = next.replace(pattern, () => {
		count += 1;
		return simple;
	});
	return {
		text: next,
		count
	};
}
function simplifyPhrases(text) {
	return applyPlainPhrases(text);
}
function simplifyWords(text) {
	let count = 0;
	return {
		text: text.replace(/[\p{L}']+(?:-[\p{L}']+)*/gu, (word) => {
			if (word.includes("-")) return word;
			const swapped = swapPlainWord(word);
			if (!swapped.original) return word;
			count += 1;
			return swapped.next;
		}),
		count
	};
}
/** Live reading swap: phrases + words, keep sentence shape. */
function applyPlainLanguage(text) {
	return simplifyWords(applyPlainPhrases(text).text).text;
}
function shortenSentences(text) {
	return splitSentences$1(text).map((sentence) => {
		if (sentence.split(/\s+/).length <= 22) return sentence;
		const parts = sentence.split(/,\s+(?=(?:and|but|which|while|although|because)\b)/i);
		if (parts.length < 2) return sentence;
		return parts.map((part, index) => {
			const trimmed = part.trim().replace(/[.!?]+$/, "");
			if (!trimmed) return "";
			return `${index === 0 ? trimmed : trimmed.charAt(0).toUpperCase() + trimmed.slice(1)}.`;
		}).filter(Boolean).join(" ");
	}).join(" ");
}
function simplifyText(originalText) {
	if (!originalText.trim()) return {
		original: originalText,
		simplified: originalText,
		replacements: 0,
		complexity: "easy",
		originalGrade: 1,
		simplifiedGrade: 1
	};
	const phrases = simplifyPhrases(originalText);
	const words = simplifyWords(phrases.text);
	const simplified = shortenSentences(words.text).replace(/\s+/g, " ").trim();
	return {
		original: originalText,
		simplified,
		replacements: phrases.count + words.count,
		complexity: complexityOf(originalText),
		originalGrade: gradeLevel(originalText),
		simplifiedGrade: gradeLevel(simplified)
	};
}
/**
* The old vocabulary, mapped onto the real one.
*
* These six names predate the haptics module and are still used across the app.
* Rather than a churn of renames, each is translated to the Apple intent it
* always meant — which is also a useful check on the naming: "ok" was doing the
* work of a light impact, and "good"/"bad" were notifications all along.
*/
var AS_INTENT = {
	press: () => impact("light"),
	ok: () => selection(),
	good: () => notification("success"),
	bad: () => notification("warning"),
	start: () => impact("soft"),
	adapt: () => impact("rigid")
};
/**
* Haptics for a legacy feedback name.
*
* Kept as the old export so existing call sites are unchanged, but the
* behaviour now goes through the same generators as everything else — including
* the iOS path, which the previous `navigator.vibrate`-only version could never
* reach.
*/
function tapFeedback(kind) {
	AS_INTENT[kind]?.();
}
/**
* Confirm an action across every channel available.
*
* The app used to confirm actions with haptics alone. On an iPhone, on any
* desktop, and to any screen reader, that meant marking a passage or accepting
* a suggestion produced *nothing* — the state changed and nothing said so.
*
* There is deliberately no visual channel here. Every action that calls this
* already has one that suits it better than a generic flash would: a highlight
* draws its own marker stroke, and the rest raise a toast. A ring on the
* control was tried and does not survive contact with React — these actions
* re-render or unmount the very button that triggered them, so the class is
* wiped before it can play. Sight is covered at the call site; what was
* missing, and what this adds, is speech.
*/
function feedback(kind, options = {}) {
	tapFeedback(kind);
	if (options.message) announce(options.message);
}
var Dialog = Dialog$1;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-70 bg-fg/30", "data-[state=open]:animate-[overlay-in_250ms_var(--ease-out)]", "data-[state=closed]:animate-[overlay-out_150ms_var(--ease-out)]", "motion-reduce:data-[state=open]:animate-[overlay-in_160ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_120ms_ease]", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-70 w-[min(100%-2rem,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface p-5 shadow-float origin-center", "data-[state=open]:animate-[modal-in_250ms_var(--ease-out)]", "data-[state=closed]:animate-[modal-out_150ms_var(--ease-out)]", "motion-reduce:data-[state=open]:animate-[overlay-in_160ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_120ms_ease]", className),
		...props,
		children
	})] });
}
registerGsap();
function IconSwap({ active, ActiveIcon, InactiveIcon, size = 16 }) {
	const reduce = useReducedMotion();
	const onRef = (0, import_react.useRef)(null);
	const offRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		const on = onRef.current;
		const off = offRef.current;
		if (!on || !off) return;
		const duration = reduce ? .01 : .3;
		gsapWithCSS.to(on, {
			opacity: active ? 1 : 0,
			scale: active ? 1 : .25,
			filter: active ? "blur(0px)" : "blur(4px)",
			duration,
			ease: "power3.out"
		});
		gsapWithCSS.to(off, {
			opacity: active ? 0 : 1,
			scale: active ? .25 : 1,
			filter: active ? "blur(4px)" : "blur(0px)",
			duration,
			ease: "power3.out"
		});
	}, { dependencies: [active, reduce] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-flex size-4 items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: offRef,
			className: "absolute inset-0 flex items-center justify-center",
			style: { opacity: active ? 0 : 1 },
			"aria-hidden": active,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InactiveIcon, { size })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: onRef,
			className: "absolute inset-0 flex items-center justify-center",
			style: { opacity: active ? 1 : 0 },
			"aria-hidden": !active,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveIcon, { size })
		})]
	});
}
/**
* Subscribe to a media query.
*
* Starts `false` and resolves after mount so the server render and the first
* client render agree — a width read during render would hydrate mismatched.
* Components that switch layout on the result should pick the wide layout as
* the `false` case only when that is the safe default.
*/
function useMediaQuery(query) {
	const [matches, setMatches] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia(query);
		setMatches(media.matches);
		const onChange = () => setMatches(media.matches);
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [query]);
	return matches;
}
/** Matches Tailwind's `sm` breakpoint boundary: true below 640px. */
function useIsMobile() {
	return useMediaQuery("(width < 40rem)");
}
/**
* Resting height, and the height when the reader wants to browse.
*
* The panel opens at the low stop. Every control in it — contrast, size,
* spacing, bionic strength — is judged against the text, so the default has to
* leave a real paragraph on screen rather than the two lines a taller sheet
* left behind. Dragging up is for hunting through modes; you come back down to
* see what the change actually did.
*/
var SNAP_LOW = .42;
var SNAP_HIGH = .9;
function Sheet({ open, onOpenChange, children, title }) {
	const mobile = useIsMobile();
	const panelRef = (0, import_react.useRef)(null);
	useDismiss(panelRef, open, (0, import_react.useCallback)(() => onOpenChange(false), [onOpenChange]));
	/**
	* A panel arriving and leaving both register.
	*
	* Medium on the way in and light on the way out, deliberately asymmetric:
	* something appearing in front of you is a larger event than the same thing
	* getting out of the way, and matching them makes dismissal feel heavier than
	* it is.
	*/
	const wasOpen = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (open === wasOpen.current) return;
		wasOpen.current = open;
		impact(open ? "medium" : "light");
	}, [open]);
	const [snap, setSnap] = (0, import_react.useState)(SNAP_LOW);
	(0, import_react.useEffect)(() => {
		if (open) setSnap(SNAP_LOW);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key !== "Escape") return;
			event.preventDefault();
			onOpenChange(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onOpenChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
		open,
		onOpenChange,
		direction: mobile ? "bottom" : "left",
		shouldScaleBackground: false,
		/**
		* Non-modal on purpose. These are live formatting controls, and almost
		* every one of them — contrast, theme, size, spacing, bionic strength —
		* can only be judged against the actual text. A modal drawer locked
		* scrolling, trapped focus, and laid a scrim over the page, so the reader
		* was changing type settings against a dimmed sample they could not
		* scroll. Non-modal keeps the text live, legible, and scrollable while
		* the panel is open.
		*/
		modal: false,
		dismissible: true,
		...mobile ? {
			snapPoints: [SNAP_LOW, SNAP_HIGH],
			activeSnapPoint: snap,
			setActiveSnapPoint: setSnap
		} : {},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
			ref: panelRef,
			"aria-describedby": void 0,
			className: cn("fixed z-60 flex min-w-0 flex-col overflow-hidden bg-surface outline-none shadow-float", mobile ? "inset-x-0 bottom-0 h-[90dvh] rounded-t-xl pb-[env(safe-area-inset-bottom)]" : "inset-y-0 left-0 h-dvh max-h-dvh w-[min(24rem,calc(100vw-0.75rem))]"),
			style: { transitionTimingFunction: "var(--ease-drawer)" },
			children: [
				mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "mx-auto mt-2 mb-1 h-1 w-9 shrink-0 rounded-full bg-fg/20"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
					className: "sr-only",
					children: title
				}),
				children
			]
		}) })
	});
}
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		sideOffset,
		className: cn("z-80 min-w-44 rounded-md bg-surface p-1 shadow-float", "origin-[var(--radix-dropdown-menu-content-transform-origin)]", "data-[state=open]:animate-[menu-in_180ms_var(--ease-out)]", "data-[state=closed]:animate-[menu-out_120ms_var(--ease-out)]", "motion-reduce:data-[state=open]:animate-[overlay-in_140ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_100ms_ease]", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("icon-group flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm leading-snug whitespace-normal outline-none", "data-[highlighted]:bg-fg/6", "data-[disabled]:pointer-events-none data-[disabled]:opacity-40", className),
		...props
	});
}
/**
* Side-panel scroller: native bars stay hidden. A thin overlay rail and
* top/bottom fades show there is more, without stealing width from labels.
*/
function PanelScroller({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const [state, setState] = (0, import_react.useState)({
		top: false,
		bottom: false,
		thumb: 0,
		thumbH: 28,
		overflow: false
	});
	const measure = (0, import_react.useCallback)(() => {
		const node = ref.current;
		if (!node) return;
		const { scrollTop, scrollHeight, clientHeight } = node;
		const overflow = scrollHeight - clientHeight;
		const track = Math.max(clientHeight - 16, 32);
		const ratio = scrollHeight > 0 ? clientHeight / scrollHeight : 1;
		const thumbH = Math.min(track, Math.max(28, Math.round(ratio * track)));
		const maxThumb = Math.max(0, track - thumbH);
		const thumb = overflow > 1 ? scrollTop / overflow * maxThumb : 0;
		setState({
			top: scrollTop > 6,
			bottom: overflow > 1 && scrollTop < overflow - 6,
			thumb,
			thumbH,
			overflow: overflow > 1
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(node);
		const inner = node.firstElementChild;
		if (inner) observer.observe(inner);
		return () => observer.disconnect();
	}, [measure]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-0 flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				onScroll: measure,
				className: cn("controls-scroll h-full min-h-0 overflow-y-auto overscroll-contain px-4 py-4", className),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("pointer-events-none absolute inset-x-0 top-0 z-10 h-7 bg-gradient-to-b from-surface to-transparent transition-opacity duration-[150ms] ease-[var(--ease-out)]", state.top ? "opacity-100" : "opacity-0"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("pointer-events-none absolute inset-x-0 bottom-0 z-10 h-9 bg-gradient-to-t from-surface to-transparent transition-opacity duration-[150ms] ease-[var(--ease-out)]", state.bottom ? "opacity-100" : "opacity-0"),
				"aria-hidden": true
			}),
			state.overflow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-2 right-1 bottom-2 z-10 w-1.5 rounded-full bg-fg/15",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 rounded-full bg-fg/50",
					style: {
						height: state.thumbH,
						transform: `translateY(${state.thumb}px)`,
						transition: "transform 80ms linear"
					}
				})
			}) : null
		]
	});
}
var MODES = [
	"default",
	"adhd",
	"dyslexia",
	"focus",
	"academic",
	"speed",
	"adaptive"
];
var JUMP = [
	{
		id: "rc-mode",
		label: "Mode"
	},
	{
		id: "rc-type",
		label: "Type"
	},
	{
		id: "rc-color",
		label: "Color"
	},
	{
		id: "rc-guides",
		label: "Guides"
	},
	{
		id: "rc-pace",
		label: "Pace"
	}
];
function LockToggle({ setting }) {
	const locked = useAppStore((s) => s.lockedSettings.includes(setting));
	const toggleLock = useAppStore((s) => s.toggleLock);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "icon-group shrink-0 text-subtle hover:text-fg",
		"aria-label": locked ? "Unlock setting" : "Lock setting from Adaptive",
		"aria-pressed": locked,
		onClick: () => toggleLock(setting),
		children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
			size: 13,
			className: "icon-motion icon-lift"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, {
			size: 13,
			className: "icon-motion icon-lift"
		})
	});
}
function jumpTo(id) {
	const node = document.getElementById(id);
	const scroller = document.querySelector(".controls-scroll");
	if (!node || !scroller) return;
	const top = node.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 12;
	scroller.scrollTo({
		top: Math.max(0, top),
		behavior: "smooth"
	});
}
function ReaderControls({ onClose }) {
	const mode = useAppStore((s) => s.mode);
	const profile = useAppStore((s) => s.profile);
	const setMode = useAppStore((s) => s.setMode);
	const setProfile = useAppStore((s) => s.setProfile);
	const autoScrolling = useAppStore((s) => s.autoScrolling);
	const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const setTargetWpm = useAppStore((s) => s.setTargetWpm);
	const currentWpm = useAppStore((s) => s.reading.currentWpm);
	const reading = useAppStore((s) => s.reading);
	const lastAdaptiveChange = useAppStore((s) => s.lastAdaptiveChange);
	const undoAdaptiveChange = useAppStore((s) => s.undoAdaptiveChange);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const saveCurrentProfile = useAppStore((s) => s.saveCurrentProfile);
	const savedProfiles = useAppStore((s) => s.savedProfiles);
	const [profileName, setProfileName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-col gap-3 px-4 pt-3 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 text-sm font-medium text-pretty",
						children: "Reading options"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							"aria-label": "Full screen",
							title: "Fullscreen",
							onClick: () => {
								const next = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
								Promise.resolve(next).catch(() => {});
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {
								size: 16,
								className: "icon-motion icon-lift"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							onClick: onClose,
							"aria-label": "Close options",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								size: 16,
								className: "icon-motion icon-turn"
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Options sections",
					className: "flex flex-wrap gap-1.5",
					children: JUMP.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => jumpTo(item.id),
						className: "h-8 shrink-0 rounded-full bg-fg/6 px-2.5 text-xs font-medium whitespace-nowrap hover:bg-fg/10",
						children: item.label
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelScroller, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8 pr-2 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rc-mode",
						className: "rc-section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
								children: "Mode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-1.5 sm:grid-cols-1",
								children: MODES.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": mode === id,
									onClick: () => setMode(id),
									className: cn("flex min-h-11 min-w-0 items-center rounded-md px-3 py-2 text-left text-sm font-medium text-pretty transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", mode === id ? "bg-fg text-primary-fg" : "bg-fg/4 text-fg hover:bg-fg/8"),
									children: READING_PROFILES[id].name
								}, id))
							}),
							mode === "adaptive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-pretty text-muted",
								children: "NeuroLens learns how you read and recommends adjustments — pace, spacing, focus, and contrast. Locked settings will not be changed."
							}),
							lastAdaptiveChange && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "mt-3 h-auto min-h-11 w-full whitespace-normal",
								onClick: undoAdaptiveChange,
								children: "Undo last recommendation"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
							children: "Profiles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-1.5 sm:grid-cols-1",
							children: [NAMED_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applySavedProfile(preset),
								className: "flex min-h-11 min-w-0 items-center rounded-md bg-fg/4 px-3 py-2 text-left text-sm font-medium text-pretty hover:bg-fg/8",
								children: preset.name
							}, preset.id)), savedProfiles.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applySavedProfile(preset),
								className: "flex min-h-11 min-w-0 items-center rounded-md bg-fg/4 px-3 py-2 text-left text-sm font-medium text-pretty hover:bg-fg/8",
								children: preset.name
							}, preset.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: profileName,
								onChange: (event) => setProfileName(event.target.value),
								placeholder: "Name this setup",
								"aria-label": "Name this setup",
								className: "h-9 min-w-0 flex-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "shrink-0 whitespace-nowrap",
								onClick: () => {
									saveCurrentProfile(profileName);
									setProfileName("");
								},
								children: "Save"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rc-type",
						className: "rc-section space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
								children: "Typeface"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FontPicker, {
								compact: true,
								value: profile.fontFamily,
								onChange: (fontFamily) => setProfile({
									...profile,
									fontFamily
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex min-w-0 items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-pretty",
										children: "Size"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "fontSize" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 tabular-nums text-muted",
									children: [profile.fontSize, "px"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 14,
								max: 28,
								step: 1,
								value: [profile.fontSize],
								onValueChange: ([value]) => setProfile({
									...profile,
									fontSize: value ?? 18
								}),
								"aria-label": "Type size"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex min-w-0 items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-pretty",
										children: "Line height"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "lineHeight" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 tabular-nums text-muted",
									children: profile.lineHeight.toFixed(1)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 1.4,
								max: 2.2,
								step: .1,
								value: [profile.lineHeight],
								onValueChange: ([value]) => setProfile({
									...profile,
									lineHeight: value ?? 1.6
								}),
								"aria-label": "Line height"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-pretty",
									children: "Letter spacing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 tabular-nums text-muted",
									children: profile.letterSpacing.toFixed(2)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: .12,
								step: .01,
								value: [profile.letterSpacing],
								onValueChange: ([value]) => setProfile({
									...profile,
									letterSpacing: value ?? 0
								}),
								"aria-label": "Letter spacing"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-pretty",
									children: "Word spacing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 tabular-nums text-muted",
									children: profile.wordSpacing.toFixed(2)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: .2,
								step: .02,
								value: [profile.wordSpacing],
								onValueChange: ([value]) => setProfile({
									...profile,
									wordSpacing: value ?? 0
								}),
								"aria-label": "Word spacing"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "rc-color",
						className: "rc-section space-y-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Color scheme"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "theme" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemePicker, {
								compact: true,
								value: profile.theme,
								onChange: (theme) => setProfile({
									...profile,
									theme
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastMeter, {
								theme: profile.theme,
								fontSize: profile.fontSize
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rc-guides",
						className: "rc-section space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-pretty",
										children: "Fixation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 tabular-nums text-muted",
										children: nearestFixationPreset(profile.bionicStrength).label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 flex flex-wrap gap-1.5",
									children: FIXATION_PRESETS.map((preset) => {
										const selected = nearestFixationPreset(profile.bionicStrength).id === preset.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": selected,
											onClick: () => setProfile({
												...profile,
												bionicStrength: preset.value
											}),
											className: cn("h-11 min-w-[4.5rem] flex-1 rounded-md px-2 text-xs font-medium whitespace-nowrap sm:text-sm", selected ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
											children: preset.label
										}, preset.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 0,
									max: .8,
									step: .05,
									value: [profile.bionicStrength],
									onValueChange: ([value]) => setProfile({
										...profile,
										bionicStrength: value ?? 0
									}),
									"aria-label": "Fixation strength"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "plain-words",
								label: "Plain words",
								checked: Boolean(profile.plainLanguage),
								onChange: (checked) => setProfile({
									...profile,
									plainLanguage: checked
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "motion-cues",
								label: "Motion cues",
								hint: "Stops parallax and scroll drift, and anchors the page with a fixed horizon line. For motion sickness.",
								checked: Boolean(profile.motionCues),
								onChange: (checked) => {
									setProfile({
										...profile,
										motionCues: checked
									});
									if (checked && motionPermissionNeeded()) requestMotionPermission();
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "justify",
								label: "Justify text",
								checked: profile.align === "justify",
								onChange: (checked) => setProfile({
									...profile,
									align: checked ? "justify" : "left"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "syllables",
								label: "Syllables",
								checked: Boolean(profile.syllables),
								onChange: (checked) => setProfile({
									...profile,
									syllables: checked
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "letter-guide",
								label: "Letter guide",
								checked: Boolean(profile.letterGuide),
								onChange: (checked) => setProfile({
									...profile,
									letterGuide: checked
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "word-guide",
								label: "Word highlight",
								checked: Boolean(profile.wordGuide),
								onChange: (checked) => setProfile({
									...profile,
									wordGuide: checked
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "lookup",
								label: "Tap definitions",
								checked: profile.lookup !== false,
								onChange: (checked) => setProfile({
									...profile,
									lookup: checked
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "dim-chrome",
								label: "Dim chrome",
								checked: Boolean(profile.dimChrome),
								onChange: (checked) => setProfile({
									...profile,
									dimChrome: checked
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
									children: "Rhythm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-1.5",
									children: RHYTHM_CHOICES.map((curve) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": profile.rhythmCurve === curve.id,
										onClick: () => setProfile({
											...profile,
											rhythmCurve: curve.id,
											rhythmOptimization: curve.id !== "steady"
										}),
										className: cn("flex min-h-11 min-w-0 flex-col items-start justify-center rounded-md px-3 py-2 text-left", profile.rhythmCurve === curve.id ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium whitespace-nowrap",
											children: curve.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("text-xs leading-snug text-pretty", profile.rhythmCurve === curve.id ? "text-primary-fg/75" : "text-muted"),
											children: curve.hint
										})]
									}, curve.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-pretty text-muted",
									children: "Auto-scroll and the speed reader rest on true sentence ends, not abbreviations."
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rc-pace",
						className: "rc-section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
								children: "Pace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 rounded-md bg-fg/4 px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] tracking-wide text-muted uppercase",
										children: "Target WPM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-2xl font-medium tabular-nums",
										children: targetWpm
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 rounded-md bg-fg/4 px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] tracking-wide text-muted uppercase",
										children: "Current WPM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-2xl font-medium tabular-nums",
										children: currentWpm ?? "—"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex min-w-0 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-pretty",
											children: "Target WPM"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "targetWpm" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 tabular-nums text-muted",
										children: targetWpm
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 120,
									max: 480,
									step: 10,
									value: [targetWpm],
									onValueChange: ([value]) => setTargetWpm(value ?? 220),
									"aria-label": "Target words per minute"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
									id: "autoscroll",
									label: "Scroll at target pace",
									checked: autoScrolling,
									onChange: (checked) => {
										setAutoScrolling(checked);
										if (checked) onClose();
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs leading-relaxed text-pretty text-muted",
								children: [
									Math.round(reading.progress * 100),
									"% through this page",
									reading.pauses.length > 0 ? ` · ${reading.pauses.length} pause${reading.pauses.length === 1 ? "" : "s"}` : "",
									reading.rereads.length > 0 ? ` · ${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}` : ""
								]
							})
						]
					})
				]
			}) })
		]
	});
}
function ToggleRow({ id, label, hint, checked, onChange, lock }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-11 items-center justify-between gap-3 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex min-w-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: id,
					className: "text-pretty",
					children: label
				}), lock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: lock }) : null]
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: `${id}-hint`,
				className: "mt-0.5 text-xs leading-snug text-pretty text-muted",
				children: hint
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			id,
			checked,
			onCheckedChange: onChange,
			"aria-describedby": hint ? `${id}-hint` : void 0
		})]
	});
}
registerGsap();
function RecommendationBanner() {
	const mode = useAppStore((s) => s.mode);
	const recommendation = useAppStore((s) => s.recommendation);
	const applyRecommendation = useAppStore((s) => s.applyRecommendation);
	const dismissRecommendation = useAppStore((s) => s.dismissRecommendation);
	const undoAdaptiveChange = useAppStore((s) => s.undoAdaptiveChange);
	const [whyOpen, setWhyOpen] = (0, import_react.useState)(false);
	const reduce = useReducedMotion();
	const show = mode === "adaptive" && recommendation;
	const [shown, setShown] = (0, import_react.useState)(false);
	const cardRef = (0, import_react.useRef)(null);
	const whyRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (show && recommendation) tapFeedback("adapt");
	}, [show, recommendation?.id]);
	(0, import_react.useEffect)(() => {
		if (show) setShown(true);
	}, [show]);
	useGSAP(() => {
		const card = cardRef.current;
		if (!card || !shown) return;
		gsapWithCSS.killTweensOf(card);
		if (show) gsapWithCSS.fromTo(card, {
			opacity: 0,
			y: 12,
			scale: .98
		}, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: reduce ? .01 : .32,
			ease: easeOut
		});
		else gsapWithCSS.to(card, {
			opacity: 0,
			y: 10,
			scale: .98,
			duration: reduce ? .01 : .18,
			ease: "power2.in",
			onComplete: () => setShown(false)
		});
	}, { dependencies: [
		show,
		shown,
		recommendation?.id,
		reduce
	] });
	useGSAP(() => {
		const why = whyRef.current;
		if (!why) return;
		gsapWithCSS.killTweensOf(why);
		if (whyOpen) gsapWithCSS.fromTo(why, {
			opacity: 0,
			height: 0,
			marginTop: 0
		}, {
			opacity: 1,
			height: "auto",
			marginTop: 8,
			duration: reduce ? .01 : .28,
			ease: easeOut
		});
		else gsapWithCSS.to(why, {
			opacity: 0,
			height: 0,
			marginTop: 0,
			duration: reduce ? .01 : .2,
			ease: "power2.in"
		});
	}, { dependencies: [whyOpen, reduce] });
	if (!shown || !recommendation) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: cardRef,
		role: "status",
		"aria-live": "polite",
		"aria-atomic": "true",
		className: "pointer-events-auto w-[min(28rem,calc(100vw-1.5rem))] origin-bottom rounded-lg bg-surface p-3 shadow-float",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: "NeuroLens recommendation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: recommendation.reason
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				ref: whyRef,
				className: "overflow-hidden text-sm leading-relaxed text-muted",
				style: {
					height: whyOpen ? void 0 : 0,
					opacity: whyOpen ? 1 : 0,
					marginTop: whyOpen ? 8 : 0
				},
				children: recommendation.why
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center justify-end gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						"aria-expanded": whyOpen,
						onClick: () => setWhyOpen((open) => !open),
						children: whyOpen ? "Hide why" : "Why?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: dismissRecommendation,
						children: "Dismiss"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => {
							applyRecommendation();
							setWhyOpen(false);
							feedback("adapt", { message: "Suggestion applied" });
							toast.success("Recommendation applied", { action: {
								label: "Undo",
								onClick: () => undoAdaptiveChange()
							} });
						},
						children: "Apply"
					})
				]
			})
		]
	});
}
function SpeedReader({ open, onOpenChange, words, onProgress }) {
	const profile = useAppStore((s) => s.profile);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const progress = useAppStore((s) => s.reading.progress);
	const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [wpm, setWpm] = (0, import_react.useState)(targetWpm);
	const [index, setIndex] = (0, import_react.useState)(0);
	const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const start = words.length ? Math.min(words.length - 1, Math.max(0, Math.floor(progress * words.length))) : 0;
		setIndex(start);
		setWpm(targetWpm);
		setPlaying(words.length > 0);
		setAutoScrolling(false);
		tapFeedback("start");
	}, [
		open,
		words.length,
		progress,
		targetWpm,
		setAutoScrolling
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		onProgress?.(index);
	}, [
		open,
		index,
		onProgress
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.code === "Space") {
				event.preventDefault();
				setPlaying((prev) => !prev);
			} else if (event.code === "ArrowRight") {
				event.preventDefault();
				skipSentence(1);
			} else if (event.code === "ArrowLeft") {
				event.preventDefault();
				skipSentence(-1);
			} else if (event.code === "Escape") onOpenChange(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		open,
		words,
		index,
		onOpenChange
	]);
	(0, import_react.useEffect)(() => {
		if (!open || !playing || words.length === 0) return;
		const delay = rsvpDelayMs(words[index] || "", wpm, rhythmCurve, words[index + 1] || "");
		const timer = window.setTimeout(() => {
			setIndex((prev) => {
				if (prev >= words.length - 1) {
					setPlaying(false);
					announce("End of speed reader");
					return prev;
				}
				return prev + 1;
			});
		}, delay);
		return () => window.clearTimeout(timer);
	}, [
		open,
		playing,
		wpm,
		words,
		index,
		rhythmCurve
	]);
	function skipSentence(direction) {
		if (words.length === 0) return;
		if (direction > 0) {
			let next = index;
			while (next < words.length - 1 && !isSentenceBoundary(words[next] || "", words[next + 1] || "")) next += 1;
			setIndex(Math.min(words.length - 1, next + 1));
			return;
		}
		let prev = index > 0 ? index - 1 : 0;
		while (prev > 0 && !isSentenceBoundary(words[prev - 1] || "", words[prev] || "")) prev -= 1;
		setIndex(prev);
	}
	const parts = splitOrp(words[index] || "");
	const minutes = Math.max(0, words.length - index) / Math.max(80, wpm);
	const pct = words.length ? Math.round((index + 1) / words.length * 100) : 0;
	const done = words.length > 0 && index >= words.length - 1 && !playing;
	const stage = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rsvp-stage mx-auto w-full max-w-lg font-medium tracking-tight",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rsvp-before",
				children: parts.before
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rsvp-orp",
				children: parts.orp || "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rsvp-after",
				children: parts.after
			})
		]
	}), [
		parts.after,
		parts.before,
		parts.orp
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "w-[min(100%-1.5rem,36rem)] text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm font-medium text-muted",
					children: "Speed reader"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: "Visual one-word display aligned to the recognition point. This is not spoken. Use Listen in the reader for speech. Space pauses. Arrows skip a sentence."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "Starts where you left the page. The accent letter is the landing point. Spoken reading lives on Listen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6 min-h-28",
					"aria-hidden": "true",
					children: [stage, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rsvp-tick" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: pct,
						label: "Speed reader progress"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs tabular-nums text-muted",
						children: [
							index + 1,
							" / ",
							words.length,
							" · ",
							wpm,
							" WPM · ",
							done ? "done" : `~${Math.max(1, Math.ceil(minutes * 60))}s left`
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 120,
						max: 600,
						step: 10,
						value: [wpm],
						onValueChange: ([value]) => setWpm(value ?? targetWpm),
						"aria-label": "Words per minute"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => setPlaying((prev) => !prev),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSwap, {
								active: playing,
								ActiveIcon: Pause,
								InactiveIcon: Play
							}), playing ? "Pause" : "Play"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => skipSentence(-1),
							children: "Last sentence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => skipSentence(1),
							children: "Next sentence"
						})
					]
				})
			]
		})
	});
}
var NEURAL_KINDS = [
	"fixation",
	"saccade",
	"regression",
	"skip",
	"disengage"
];
function asNeuralKind(value) {
	return typeof value === "string" && NEURAL_KINDS.includes(value) ? value : null;
}
function useReadingTracker(scrollRef, wordTotal) {
	const reportReading = useAppStore((s) => s.reportReading);
	const tab = useAppStore((s) => s.tab);
	const text = useAppStore((s) => s.text);
	const highWater = (0, import_react.useRef)(0);
	const lastProgress = (0, import_react.useRef)(0);
	const lastMeaningfulAt = (0, import_react.useRef)(Date.now());
	const lastProgressAt = (0, import_react.useRef)(Date.now());
	const paused = (0, import_react.useRef)(false);
	const pauseStartedAt = (0, import_react.useRef)(null);
	const activeAccumulated = (0, import_react.useRef)(0);
	const runStartedAt = (0, import_react.useRef)(Date.now());
	const pauses = (0, import_react.useRef)([]);
	const rereads = (0, import_react.useRef)([]);
	const skips = (0, import_react.useRef)([]);
	const dwellCount = (0, import_react.useRef)(0);
	const dwellMs = (0, import_react.useRef)(0);
	const longDwellCount = (0, import_react.useRef)(0);
	const forwardSteps = (0, import_react.useRef)(0);
	const dwelledLines = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const longLines = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const neuralEvents = (0, import_react.useRef)([]);
	const lastFlush = (0, import_react.useRef)(0);
	const lastText = (0, import_react.useRef)(text);
	(0, import_react.useEffect)(() => {
		const stored = useAppStore.getState().reading;
		if (lastText.current !== text) {
			lastText.current = text;
			highWater.current = 0;
			lastProgress.current = 0;
			lastMeaningfulAt.current = Date.now();
			lastProgressAt.current = Date.now();
			paused.current = false;
			pauseStartedAt.current = null;
			activeAccumulated.current = 0;
			runStartedAt.current = Date.now();
			pauses.current = [];
			rereads.current = [];
			skips.current = [];
			dwellCount.current = 0;
			dwellMs.current = 0;
			longDwellCount.current = 0;
			forwardSteps.current = 0;
			dwelledLines.current = /* @__PURE__ */ new Set();
			longLines.current = /* @__PURE__ */ new Set();
			neuralEvents.current = [];
			return;
		}
		highWater.current = Math.max(highWater.current, stored.progress);
		lastProgress.current = stored.progress;
		activeAccumulated.current = stored.elapsedActiveMs;
		pauses.current = stored.pauses;
		rereads.current = stored.rereads;
		skips.current = stored.skips ?? [];
		dwellCount.current = stored.dwellCount ?? 0;
		dwellMs.current = stored.dwellMs ?? 0;
		longDwellCount.current = stored.longDwellCount ?? 0;
		forwardSteps.current = stored.forwardSteps ?? 0;
		neuralEvents.current = stored.neuralEvents ?? [];
		runStartedAt.current = Date.now();
		paused.current = false;
		pauseStartedAt.current = stored.pausedAt ?? null;
		lastMeaningfulAt.current = Date.now();
		lastProgressAt.current = Date.now();
	}, [text]);
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node || tab !== "read") return;
		function elapsedMs() {
			if (paused.current) return activeAccumulated.current;
			return activeAccumulated.current + (Date.now() - runStartedAt.current);
		}
		function beginPause(at) {
			if (paused.current) return;
			activeAccumulated.current = elapsedMs();
			paused.current = true;
			pauseStartedAt.current = at;
		}
		function endPause() {
			if (!paused.current) return;
			const started = pauseStartedAt.current;
			const duration = started != null ? Date.now() - started : 0;
			paused.current = false;
			pauseStartedAt.current = null;
			runStartedAt.current = Date.now();
			if (started != null && duration >= ADAPTIVE_THRESHOLDS.pauseMinMs && highWater.current >= .05) {
				pauses.current = [...pauses.current, {
					startedAt: started,
					durationMs: duration,
					progress: lastProgress.current
				}].slice(-24);
				return true;
			}
			return false;
		}
		function snapshot(progress) {
			return {
				progress,
				wordCount: wordTotal,
				wordsRead: Math.round(Math.min(1, Math.max(0, progress)) * Math.max(wordTotal, 0)),
				elapsedActiveMs: elapsedMs(),
				pauses: pauses.current,
				rereads: rereads.current,
				skips: skips.current,
				pausedAt: pauseStartedAt.current,
				dwellCount: dwellCount.current,
				dwellMs: dwellMs.current,
				longDwellCount: longDwellCount.current,
				forwardSteps: forwardSteps.current,
				neuralEvents: neuralEvents.current
			};
		}
		function flush(force = false) {
			const now = performance.now();
			if (!force && now - lastFlush.current < 250) return;
			lastFlush.current = now;
			reportReading(snapshot(lastProgress.current));
		}
		const onScroll = () => {
			const remaining = node.scrollHeight - node.clientHeight;
			const progress = remaining > 1 ? Math.min(1, Math.max(0, node.scrollTop / remaining)) : 1;
			const previous = lastProgress.current;
			if (!isMeaningfulProgressChange(previous, progress)) return;
			const durationMs = Date.now() - lastProgressAt.current;
			lastProgressAt.current = Date.now();
			const recordedPause = endPause();
			lastProgress.current = progress;
			lastMeaningfulAt.current = Date.now();
			const autoScrolling = useAppStore.getState().autoScrolling;
			if (!autoScrolling && isSkipJump(previous, progress, durationMs)) skips.current = [...skips.current, {
				at: Date.now(),
				from: previous,
				to: progress,
				durationMs
			}].slice(-24);
			else if (!autoScrolling && isForwardStep(previous, progress, durationMs)) forwardSteps.current += 1;
			if (isReread(highWater.current, progress)) {
				rereads.current = [...rereads.current, {
					at: Date.now(),
					from: highWater.current,
					to: progress
				}].slice(-24);
				highWater.current = progress;
				flush(true);
				return;
			}
			if (progress > highWater.current) highWater.current = progress;
			const skipGrew = skips.current.length !== (useAppStore.getState().reading.skips?.length ?? 0);
			flush(recordedPause || skipGrew);
		};
		const onHand = () => {
			lastMeaningfulAt.current = Date.now();
			if (endPause()) flush(true);
		};
		const onPresence = () => {
			lastMeaningfulAt.current = Date.now();
			if (endPause()) flush(true);
		};
		const onDwell = (event) => {
			const detail = event.detail;
			const id = detail?.id;
			const ms = detail?.ms ?? 0;
			if (id == null || ms < 400) return;
			lastMeaningfulAt.current = Date.now();
			const recordedPause = endPause();
			if (!dwelledLines.current.has(id)) {
				dwelledLines.current.add(id);
				dwellCount.current += 1;
				dwellMs.current += ms;
			}
			if (detail?.long && !longLines.current.has(id)) {
				longLines.current.add(id);
				longDwellCount.current += 1;
			}
			flush(recordedPause || true);
		};
		const onNeural = (event) => {
			const detail = event.detail;
			const kind = asNeuralKind(detail?.kind);
			if (!kind) return;
			const at = typeof detail.at === "number" ? detail.at : Date.now();
			const line = typeof detail.line === "number" ? detail.line : 0;
			const ms = typeof detail.ms === "number" ? detail.ms : 0;
			neuralEvents.current = [...neuralEvents.current, {
				kind,
				at,
				line,
				fromLine: typeof detail.fromLine === "number" ? detail.fromLine : void 0,
				ms
			}].slice(-80);
			if (kind !== "disengage") {
				lastMeaningfulAt.current = Date.now();
				endPause();
			}
			flush(true);
		};
		const onKey = (event) => {
			const target = event.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
			onHand();
		};
		const tick = window.setInterval(() => {
			if (document.hidden) {
				beginPause(Date.now() - ADAPTIVE_THRESHOLDS.pauseIdleMs);
				flush(true);
				return;
			}
			const idle = Date.now() - lastMeaningfulAt.current;
			if (!paused.current && idle >= ADAPTIVE_THRESHOLDS.pauseIdleMs) {
				beginPause(lastMeaningfulAt.current);
				flush(true);
				return;
			}
			if (paused.current) return;
			flush();
		}, 1e3);
		const onVisibility = () => {
			if (document.hidden) {
				beginPause(Date.now());
				flush(true);
			} else {
				lastMeaningfulAt.current = Date.now();
				endPause();
				flush(true);
			}
		};
		node.addEventListener("scroll", onScroll, { passive: true });
		node.addEventListener("pointerdown", onHand, { passive: true });
		node.addEventListener("nl-presence", onPresence);
		node.addEventListener("nl-dwell", onDwell);
		node.addEventListener("nl-neural", onNeural);
		document.addEventListener("keydown", onKey);
		document.addEventListener("visibilitychange", onVisibility);
		onScroll();
		return () => {
			node.removeEventListener("scroll", onScroll);
			node.removeEventListener("pointerdown", onHand);
			node.removeEventListener("nl-presence", onPresence);
			node.removeEventListener("nl-dwell", onDwell);
			node.removeEventListener("nl-neural", onNeural);
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("visibilitychange", onVisibility);
			window.clearInterval(tick);
		};
	}, [
		scrollRef,
		wordTotal,
		tab,
		reportReading,
		text
	]);
}
/** Where the eye enters the page: under the chrome, not halfway down. */
var READING_ANCHOR = .16;
function readingAnchorY(viewTop, viewHeight) {
	return viewTop + Math.min(108, Math.max(72, viewHeight * READING_ANCHOR));
}
/** Ignore line-boxes tucked under the floating header — initial pick only. */
function readingFloorY(viewTop, viewHeight) {
	return viewTop + Math.min(96, Math.max(52, viewHeight * .1));
}
function lineBoxesOf(el) {
	return Array.from(el.getClientRects()).filter((rect) => rect.width > 2 && rect.height > 2).map((rect) => ({
		top: rect.top,
		height: rect.height,
		bottom: rect.bottom
	}));
}
function boxOnScreen(box, floor, viewBottom) {
	return box.height >= 2 && box.bottom > floor + 4 && box.top < viewBottom - 4;
}
/** Still inside the overlay, including under the header — used to ride a line. */
function boxInPane(box, viewTop, viewBottom) {
	return box.height >= 2 && box.bottom > viewTop + 2 && box.top < viewBottom - 2;
}
/**
* Ride a visual line as its box moves through the pane. The band stays glued
* to that text — including in the middle of the page — until the box actually
* leaves the overlay. Click/speech pin via preferId.
*/
function chooseFollowHit(hits, viewTop, viewBottom, prev, preferId) {
	if (!hits.length) return null;
	const inPane = (hit) => boxInPane(hit.box, viewTop, viewBottom);
	const indexOf = (id, boxIndex) => hits.findIndex((hit) => hit.id === id && hit.boxIndex === boxIndex);
	const firstInPaneAfter = (from) => {
		for (let j = from + 1; j < hits.length; j += 1) if (inPane(hits[j])) return hits[j];
		return null;
	};
	const lastInPaneBefore = (from) => {
		for (let j = from - 1; j >= 0; j -= 1) if (inPane(hits[j])) return hits[j];
		return null;
	};
	if (preferId != null) {
		const ofPin = hits.filter((hit) => hit.id === preferId);
		if (ofPin.length) {
			if (prev?.id === preferId) {
				const same = ofPin.find((hit) => hit.boxIndex === prev.boxIndex && inPane(hit));
				if (same) return same;
			}
			const visible = ofPin.filter(inPane);
			if (visible.length) return visible[0];
			const last = ofPin[ofPin.length - 1];
			const first = ofPin[0];
			if (last.box.bottom <= viewTop + 2) return firstInPaneAfter(indexOf(last.id, last.boxIndex)) ?? last;
			if (first.box.top >= viewBottom - 2) return lastInPaneBefore(indexOf(first.id, first.boxIndex)) ?? first;
			return last;
		}
	}
	if (prev) {
		const i = indexOf(prev.id, prev.boxIndex);
		const current = i >= 0 ? hits[i] : null;
		if (current && inPane(current)) return current;
		if (current && current.box.bottom <= viewTop + 2) return firstInPaneAfter(i) ?? current;
		if (current && current.box.top >= viewBottom - 2) return lastInPaneBefore(i) ?? current;
		if (current) return current;
	}
	const floor = readingFloorY(viewTop, Math.max(1, viewBottom - viewTop));
	return hits.find((hit) => boxOnScreen(hit.box, floor, viewBottom)) ?? hits.find(inPane) ?? hits[0] ?? null;
}
function collectReadingHits(scrollNode) {
	const lines = scrollNode.querySelectorAll(".reading-line");
	const hits = [];
	for (const el of lines) {
		const raw = el.id.startsWith("line-") ? Number(el.id.slice(5)) : NaN;
		if (!Number.isFinite(raw)) continue;
		lineBoxesOf(el).forEach((box, boxIndex) => {
			hits.push({
				el,
				id: raw,
				box,
				boxIndex
			});
		});
	}
	return hits;
}
function followReadingLine(scrollNode, view, prev, preferId) {
	const viewRect = view ?? scrollNode.getBoundingClientRect();
	return chooseFollowHit(collectReadingHits(scrollNode), viewRect.top, viewRect.bottom, prev ?? null, preferId);
}
var PRESENCE_MAX_MS = 12e3;
var TICK_MS = 250;
var BAND_MARGIN = "-10% 0px -55% 0px";
function lineId(node) {
	const raw = node.id.match(/^line-(\d+)$/);
	if (!raw) return null;
	const id = Number(raw[1]);
	return Number.isFinite(id) ? id : null;
}
/**
* Passive reading: the line at the reading band (or under the pointer) is the
* fovea. Holds become fixations; line changes become saccades, skips, or
* regressions. No camera.
*/
function useLineDwell(scrollRef, replayKey) {
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") return;
		const pane = node;
		const inBand = /* @__PURE__ */ new Set();
		const credited = /* @__PURE__ */ new Set();
		const longCredited = /* @__PURE__ */ new Set();
		let pointerEl = null;
		let currentId = null;
		let enteredAt = 0;
		let lastPresence = 0;
		let lastDisengage = 0;
		function pingPresence(now) {
			if (now - lastPresence < 700) return;
			lastPresence = now;
			pane.dispatchEvent(new Event("nl-presence"));
		}
		function emitDwell(id, ms, long) {
			pane.dispatchEvent(new CustomEvent("nl-dwell", { detail: {
				id,
				ms: Math.round(ms),
				long
			} }));
		}
		function emitNeural(kind, detail) {
			pane.dispatchEvent(new CustomEvent("nl-neural", { detail: {
				kind,
				...detail
			} }));
		}
		function credit(id, ms) {
			if (ms >= NEURAL_THRESHOLDS.minFixationMs && !credited.has(id)) {
				credited.add(id);
				emitDwell(id, ms, false);
				emitNeural("fixation", {
					line: id,
					ms: Math.round(ms),
					at: Date.now()
				});
			}
			if (ms >= NEURAL_THRESHOLDS.longFixationMs && !longCredited.has(id)) {
				longCredited.add(id);
				emitDwell(id, ms, true);
			}
		}
		function pickFoveal() {
			if (pointerEl && pane.contains(pointerEl)) {
				const id = lineId(pointerEl);
				if (id != null) return {
					id,
					el: pointerEl
				};
			}
			const view = pane.getBoundingClientRect();
			const anchor = readingAnchorY(view.top, view.height);
			let best = null;
			for (const el of inBand) {
				const id = lineId(el);
				if (id == null) continue;
				for (const box of lineBoxesOf(el)) {
					const dist = Math.abs(box.top + box.height / 2 - anchor);
					if (!best || dist < best.dist) best = {
						id,
						el,
						dist
					};
				}
			}
			return best ? {
				id: best.id,
				el: best.el
			} : null;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) inBand.add(entry.target);
			else inBand.delete(entry.target);
		}, {
			root: pane,
			rootMargin: BAND_MARGIN,
			threshold: 0
		});
		pane.querySelectorAll(".reading-line").forEach((el) => io.observe(el));
		const tick = window.setInterval(() => {
			if (document.hidden) return;
			const now = Date.now();
			const hit = pickFoveal();
			if (!hit) {
				if (currentId != null) {
					const ms = now - enteredAt;
					credit(currentId, ms);
					if (ms >= NEURAL_THRESHOLDS.minFixationMs && now - lastDisengage > 1200) {
						lastDisengage = now;
						emitNeural("disengage", {
							line: currentId,
							fromLine: currentId,
							ms: Math.round(ms),
							at: now
						});
					}
					currentId = null;
				}
				return;
			}
			if (currentId == null) {
				currentId = hit.id;
				enteredAt = now;
				return;
			}
			if (hit.id === currentId) {
				const ms = now - enteredAt;
				credit(currentId, ms);
				if (ms <= PRESENCE_MAX_MS) pingPresence(now);
				return;
			}
			const ms = now - enteredAt;
			credit(currentId, ms);
			emitNeural(classifyMove(currentId, hit.id, ms), {
				line: hit.id,
				fromLine: currentId,
				ms: Math.round(ms),
				at: now
			});
			currentId = hit.id;
			enteredAt = now;
		}, TICK_MS);
		const onPointer = (event) => {
			if (event.pointerType !== "mouse") return;
			const hit = event.target?.closest?.(".reading-line") ?? null;
			pointerEl = hit;
			if (hit) pingPresence(Date.now());
		};
		const onLeave = () => {
			pointerEl = null;
		};
		pane.addEventListener("pointermove", onPointer, { passive: true });
		pane.addEventListener("pointerleave", onLeave);
		return () => {
			io.disconnect();
			window.clearInterval(tick);
			pane.removeEventListener("pointermove", onPointer);
			pane.removeEventListener("pointerleave", onLeave);
		};
	}, [scrollRef, replayKey]);
}
var OPTIONS = [
	{
		id: "slow",
		label: "Too fast"
	},
	{
		id: "right",
		label: "Just right"
	},
	{
		id: "fast",
		label: "Too slow"
	}
];
function ReadingFeelBar() {
	const progress = useAppStore((s) => s.reading.progress);
	const feel = useAppStore((s) => s.readingFeel);
	const submit = useAppStore((s) => s.submitReadingFeel);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const setTargetWpm = useAppStore((s) => s.setTargetWpm);
	const locked = useAppStore((s) => s.lockedSettings.includes("targetWpm"));
	const mode = useAppStore((s) => s.mode);
	if (progress < .12 || feel) return null;
	function choose(id) {
		feedback(id === "right" ? "good" : "ok", { message: id === "right" ? "Pace noted as right" : id === "slow" ? "Marked as too fast" : "Marked as too slow" });
		submit(id);
		if (id === "right") {
			toast.success("Noted. We’ll keep this pace in mind.");
			return;
		}
		if (locked) {
			toast("Thanks — Target WPM is locked, so nothing will change.");
			return;
		}
		if (mode === "adaptive") {
			toast.success(id === "slow" ? "Adaptive will offer a slower target." : "Adaptive will offer a faster target.");
			return;
		}
		const next = id === "slow" ? Math.max(120, targetWpm - 20) : Math.min(480, targetWpm + 20);
		toast(id === "slow" ? "This stretch felt rushed." : "You had room to go a little faster.", {
			description: `Move target to ${next} WPM?`,
			action: {
				label: "Apply",
				onClick: () => setTargetWpm(next)
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "group",
		"aria-label": "How is this pace?",
		className: "material-surface pointer-events-auto flex max-w-md flex-col gap-2 rounded-lg px-3 py-2.5 shadow-float sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium text-muted",
			children: "How is this pace?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: () => choose(option.id),
				children: option.label
			}, option.id))
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var shapeRecap = createServerFn({ method: "POST" }).validator((input) => ({
	covered: String(input.covered ?? "").slice(0, 1200),
	next: String(input.next ?? "").slice(0, 500),
	progress: Number(input.progress) || 0,
	text: String(input.text ?? "").slice(0, 4e3)
})).handler(createSsrRpc("5d2f684ffb1e01f066fae9f45c56e7e9fabc7a84bc9a894683d3b8bbe7023f19"));
var recapCache = /* @__PURE__ */ new Map();
var recapCalls = 0;
var MAX_RECAP_CALLS = 6;
var shapedFor = /* @__PURE__ */ new Set();
function ReconnectDock({ text, open, onOpenChange, onResume }) {
	const progress = useAppStore((s) => s.reading.progress);
	const elapsedActiveMs = useAppStore((s) => s.reading.elapsedActiveMs);
	const pauses = useAppStore((s) => s.reading.pauses);
	const rereads = useAppStore((s) => s.reading.rereads);
	const skips = useAppStore((s) => s.reading.skips);
	const pausedAt = useAppStore((s) => s.reading.pausedAt);
	const startedAt = useAppStore((s) => s.reading.startedAt);
	const autoScrolling = useAppStore((s) => s.autoScrolling);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [recap, setRecap] = (0, import_react.useState)(null);
	const [shaping, setShaping] = (0, import_react.useState)(false);
	const [openPrompt, setOpenPrompt] = (0, import_react.useState)("A short recap of the last solid stretch.");
	const lastText = (0, import_react.useRef)(text);
	const openProgress = (0, import_react.useRef)(progress);
	(0, import_react.useEffect)(() => {
		if (lastText.current === text) return;
		lastText.current = text;
		recapCalls = 0;
		setRecap(null);
	}, [text]);
	(0, import_react.useEffect)(() => {
		if (!pausedAt) return;
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, [pausedAt]);
	const idleMs = pausedAt ? Math.max(0, now - pausedAt) : 0;
	const nudge = detectDisengagement({
		progress,
		elapsedActiveMs,
		pauses,
		rereads,
		skips,
		now,
		startedAt,
		autoScrolling,
		idleMs
	});
	const silenced = reconnectDismissed(now);
	const showChip = Boolean(nudge) && !open && !silenced && !autoScrolling;
	(0, import_react.useEffect)(() => {
		if (!open) {
			setShaping(false);
			return;
		}
		const state = useAppStore.getState();
		const at = state.reading.progress;
		openProgress.current = at;
		const live = detectDisengagement({
			progress: at,
			elapsedActiveMs: state.reading.elapsedActiveMs,
			pauses: state.reading.pauses,
			rereads: state.reading.rereads,
			skips: state.reading.skips,
			now: Date.now(),
			startedAt: state.reading.startedAt,
			autoScrolling: state.autoScrolling,
			idleMs: state.reading.pausedAt ? Date.now() - state.reading.pausedAt : 0
		});
		setOpenPrompt(live?.prompt ?? "A short recap of the last solid stretch.");
		const key = recapCacheKey(text, at);
		const local = recapCache.get(key) ?? buildLocalRecap(text, at);
		recapCache.set(key, local);
		setRecap(local);
		if (shapedFor.has(key) || recapCalls >= MAX_RECAP_CALLS) return;
		const slice = windowForModel(text, at);
		if (!slice.covered.trim()) return;
		let cancelled = false;
		recapCalls += 1;
		shapedFor.add(key);
		setShaping(true);
		shapeRecap({ data: {
			covered: slice.covered,
			next: slice.next,
			progress: at,
			text
		} }).then((result) => {
			if (cancelled || !result?.recap) return;
			recapCache.set(key, result.recap);
			setRecap(result.recap);
		}).catch(() => {}).finally(() => {
			if (!cancelled) setShaping(false);
		});
		return () => {
			cancelled = true;
		};
	}, [open, text]);
	function closeQuiet() {
		dismissReconnect();
		setNow(Date.now());
		onOpenChange(false);
	}
	function takeThere() {
		const skip = (skips ?? []).at(-1);
		const target = (skip && Date.now() - skip.at < 9e4 && skip.to - skip.from >= .12 ? skip.from : null) ?? recap?.resumeAt ?? Math.max(0, openProgress.current - .08);
		tapFeedback("ok");
		onResume(target);
		closeQuiet();
	}
	if (!showChip && !open) return null;
	if (!open && nudge) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "material-surface pointer-events-auto flex max-w-md flex-col gap-2 rounded-lg px-3 py-2.5 shadow-float sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "min-w-0 text-xs leading-relaxed text-pretty",
			children: nudge.prompt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: closeQuiet,
				children: "Not now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				onClick: () => {
					tapFeedback("ok");
					onOpenChange(true);
				},
				children: "Reconnect"
			})]
		})]
	});
	const body = recap ?? buildLocalRecap(text, progress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-label": "Reconnect",
		className: "material-surface pointer-events-auto w-[min(28rem,calc(100vw-1.5rem))] rounded-lg p-3 shadow-float",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
					size: 14,
					"aria-hidden": true,
					className: "icon-motion icon-turn"
				}), "Reconnect"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed",
				children: openPrompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "What you just covered"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-pretty",
				children: body.recap
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-3 rounded-sm border-l-2 border-accent bg-fg/4 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "Main idea"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-serif text-base leading-snug text-pretty",
					children: body.idea
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "What matters next"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-pretty text-muted",
				children: body.next
			}),
			shaping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Shaping the recap…"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: closeQuiet,
					children: "Not now"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: takeThere,
					children: "Take me there"
				})]
			})
		]
	});
}
registerGsap();
function PdfPageCanvas({ page }) {
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const inView = useInView(wrapRef, { rootMargin: "120px 0px" });
	const [status, setStatus] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!inView) return;
		if (!canvas || !hasPdfDocument()) {
			setStatus("missing");
			return;
		}
		let cancelled = false;
		setStatus("idle");
		canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
		renderPdfPage(page, canvas, Math.min(520, canvas.parentElement?.clientWidth || 520)).then((ok) => {
			if (!cancelled) setStatus(ok ? "ready" : "missing");
		}).catch(() => {
			if (!cancelled) setStatus("missing");
		});
		return () => {
			cancelled = true;
		};
	}, [page, inView]);
	useGSAP(() => {
		const wrap = wrapRef.current;
		if (!wrap || status !== "ready") return;
		gsapWithCSS.fromTo(wrap, {
			opacity: .55,
			y: 10
		}, {
			opacity: 1,
			y: 0,
			duration: .32,
			ease: easeOut
		});
	}, { dependencies: [page, status] });
	if (status === "missing" && !hasPdfDocument()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "pdf-page-preview mb-8 overflow-hidden rounded-lg bg-surface shadow-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: cn("mx-auto block h-auto w-full bg-bg", status !== "ready" && "min-h-40"),
			"aria-label": `PDF page ${page}`
		}, page)
	});
}
function ReaderPager({ page, pageCount, chapter, chapterCount, chapters, onPage, onChapter }) {
	const hasChapters = chapterCount > 1;
	const current = hasChapters ? chapters[Math.max(0, chapter - 1)] : null;
	const label = hasChapters ? chapter < 1 ? "Opening" : current?.title.replace(/^Chapter\s+/i, "Ch. ") || `Chapter ${chapter}` : pageCount > 1 ? `${page} / ${pageCount}` : "";
	if (!hasChapters && pageCount <= 1) return null;
	const prev = () => hasChapters ? onChapter(chapter < 1 ? 1 : chapter - 1) : onPage(page - 1);
	const next = () => hasChapters ? onChapter(chapter < 1 ? 1 : chapter + 1) : onPage(page + 1);
	const prevDisabled = hasChapters ? chapter <= 1 : page <= 1;
	const nextDisabled = hasChapters ? chapter >= chapterCount : page >= pageCount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-0.5",
		role: "navigation",
		"aria-label": hasChapters ? "Chapters" : "Pages",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				onClick: prev,
				disabled: prevDisabled,
				"aria-label": hasChapters ? "Previous chapter" : "Previous page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					size: 16,
					className: "icon-motion icon-shift-back"
				})
			}),
			hasChapters ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					className: "h-9 max-w-36 min-w-0 gap-1 px-2 text-xs font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						size: 12,
						className: "shrink-0 opacity-60 icon-motion icon-drop"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
				side: "top",
				align: "center",
				className: "max-h-72 w-64 overflow-y-auto p-1",
				children: chapters.map((item, index) => {
					const active = index + 1 === chapter;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onSelect: () => onChapter(index + 1),
						className: cn("justify-between", active && "bg-fg/6"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate",
							children: item.title
						}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							size: 14,
							className: "shrink-0 icon-motion icon-lift"
						}) : null]
					}, `${item.startPage}-${item.title}`);
				})
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-w-12 px-1 text-center text-xs tabular-nums text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon-sm",
				onClick: next,
				disabled: nextDisabled,
				"aria-label": hasChapters ? "Next chapter" : "Next page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					size: 16,
					className: "icon-motion icon-shift"
				})
			}),
			hasChapters && pageCount > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "hidden px-1 text-[11px] tabular-nums text-subtle sm:block",
				children: [
					page,
					"/",
					pageCount
				]
			}) : null
		]
	});
}
/** Every text node inside a line, in document order. */
function textNodesOf(root) {
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	const nodes = [];
	let node = walker.nextNode();
	while (node) {
		nodes.push(node);
		node = walker.nextNode();
	}
	return nodes;
}
/** Offset of a (node, offset) pair within the line's plain text. */
function offsetWithin(root, target, offset) {
	let total = 0;
	for (const node of textNodesOf(root)) {
		if (node === target) return total + offset;
		total += node.data.length;
	}
	if (root.contains(target)) return total;
	return null;
}
/**
* Read the current selection as a range within one line.
*
* Returns null when there is nothing selected, when the selection is collapsed
* (a plain click, which is not a highlight), or when it spans more than one
* line. Cross-line selections are refused rather than clipped: silently marking
* a different amount of text than someone dragged over is worse than declining.
*/
function readSelection(container) {
	const selection = window.getSelection?.();
	if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;
	const range = selection.getRangeAt(0);
	const startLine = (range.startContainer.nodeType === Node.TEXT_NODE ? range.startContainer.parentElement : range.startContainer)?.closest(".reading-line");
	const endLine = (range.endContainer.nodeType === Node.TEXT_NODE ? range.endContainer.parentElement : range.endContainer)?.closest(".reading-line");
	if (!startLine || startLine !== endLine) return null;
	if (!container.contains(startLine)) return null;
	const start = offsetWithin(startLine, range.startContainer, range.startOffset);
	const end = offsetWithin(startLine, range.endContainer, range.endOffset);
	if (start == null || end == null || start === end) return null;
	const id = Number(startLine.id.replace("line-", ""));
	if (!Number.isFinite(id)) return null;
	const lineText = startLine.textContent ?? "";
	const snapped = snapToWords(lineText, Math.min(start, end), Math.max(start, end));
	if (!snapped) return null;
	return {
		lineIdx: id,
		start: snapped.start,
		end: snapped.end,
		text: lineText.slice(snapped.start, snapped.end).trim()
	};
}
/**
* Grow a raw drag out to whole words.
*
* A drag rarely begins and ends on a word boundary — starting a pixel late
* gives "entence" instead of "Sentence" — and nobody means to mark half a word.
* Every reading app that offers highlighting snaps for this reason.
*
* Trailing whitespace is trimmed back rather than included, so the stroke stops
* at the last letter instead of running into the gap after it.
*/
function snapToWords(text, rawStart, rawEnd) {
	const isWord = (index) => index >= 0 && index < text.length && /[\p{L}\p{N}'’-]/u.test(text[index]);
	let start = Math.max(0, Math.min(rawStart, text.length));
	let end = Math.max(0, Math.min(rawEnd, text.length));
	while (start > 0 && isWord(start - 1)) start -= 1;
	while (end < text.length && isWord(end)) end += 1;
	while (end > start && /\s/.test(text[end - 1])) end -= 1;
	if (end <= start) return null;
	return {
		start,
		end
	};
}
/** Rebuild a DOM Range from stored offsets, for painting a saved highlight. */
function rangeFromOffsets(line, start, end) {
	const nodes = textNodesOf(line);
	if (!nodes.length) return null;
	let startNode = null;
	let startOffset = 0;
	let endNode = null;
	let endOffset = 0;
	let seen = 0;
	for (const node of nodes) {
		const length = node.data.length;
		if (!startNode && seen + length >= start) {
			startNode = node;
			startOffset = start - seen;
		}
		if (seen + length >= end) {
			endNode = node;
			endOffset = end - seen;
			break;
		}
		seen += length;
	}
	if (!startNode || !endNode) return null;
	try {
		const range = document.createRange();
		range.setStart(startNode, Math.max(0, Math.min(startOffset, startNode.data.length)));
		range.setEnd(endNode, Math.max(0, Math.min(endOffset, endNode.data.length)));
		return range;
	} catch {
		return null;
	}
}
function customHighlightsSupported() {
	return typeof CSS !== "undefined" && "highlights" in CSS;
}
/**
* Register the marker style at runtime.
*
* `::highlight()` cannot live in the stylesheet: Lightning CSS, which Tailwind
* runs the sheet through, does not recognise the pseudo-element and drops the
* rule silently. That failure is invisible from the outside — the ranges were
* live and correctly registered, the highlight object existed, and nothing was
* painted, because the stylesheet had no rule to paint with. A constructed
* sheet goes straight to the document and never passes the build.
*
* Colours are read from the same custom properties the rest of the app uses, so
* a scheme change is picked up by re-running this rather than by duplicating
* the palette here.
*/
var sheet = null;
function ensureHighlightStyle() {
	if (typeof document === "undefined") return;
	if (!("adoptedStyleSheets" in document)) return;
	if (!sheet) try {
		sheet = new CSSStyleSheet();
		document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
	} catch {
		sheet = null;
		return;
	}
	const scheme = document.documentElement.dataset.scheme ?? "paper";
	const strength = [
		"night",
		"ink",
		"dusk",
		"forest"
	].includes(scheme) ? 38 : 30;
	try {
		sheet.replaceSync(`::highlight(nl-mark){background-color:color-mix(in oklab, var(--color-accent) ${strength}%, transparent);color:var(--color-fg);}`);
	} catch {}
}
var VOWELS = /[aeiouy]/i;
var PREFIXES = [
	"over",
	"under",
	"inter",
	"super",
	"pre",
	"pro",
	"dis",
	"mis",
	"non",
	"un",
	"re",
	"in",
	"im",
	"en",
	"em",
	"con",
	"com"
];
var SUFFIXES = [
	"tion",
	"sion",
	"ture",
	"ment",
	"ness",
	"able",
	"ible",
	"ous",
	"ful",
	"less",
	"ing",
	"est",
	"ers",
	"ied",
	"ies",
	"ly",
	"er",
	"ed"
];
var ONSETS = [
	"sch",
	"scr",
	"spl",
	"spr",
	"str",
	"thr",
	"chr",
	"shr",
	"th",
	"sh",
	"ch",
	"wh",
	"ph",
	"ck",
	"qu",
	"ng"
];
function isVowel(ch) {
	return Boolean(ch && VOWELS.test(ch));
}
function peel(list, word, fromEnd) {
	const parts = [];
	let rest = word;
	let guard = 0;
	while (rest.length > 3 && guard < 4) {
		const hit = list.find((item) => (fromEnd ? rest.endsWith(item) : rest.startsWith(item)) && rest.length - item.length >= 2);
		if (!hit) break;
		if (fromEnd) {
			parts.unshift(hit);
			rest = rest.slice(0, -hit.length);
		} else {
			parts.push(hit);
			rest = rest.slice(hit.length);
		}
		guard += 1;
	}
	return {
		rest,
		parts
	};
}
/** Greedy VC-CV split with common prefixes/suffixes kept intact. */
function syllabify(raw) {
	const match = raw.match(/^([^A-Za-z]*)([A-Za-z']+)([^A-Za-z]*)$/);
	if (!match) return [raw];
	const [, prefix, core, suffix] = match;
	if (core.length <= 3) return [raw];
	const front = peel(PREFIXES, core.toLowerCase(), false);
	const back = peel(SUFFIXES, front.rest, true);
	const middle = splitNucleus(back.rest);
	const pieces = [
		...front.parts,
		...middle,
		...back.parts
	].filter(Boolean);
	if (pieces.length <= 1) return [raw];
	let cursor = 0;
	const out = [];
	for (const piece of pieces) {
		out.push(core.slice(cursor, cursor + piece.length));
		cursor += piece.length;
	}
	if (cursor < core.length) out[out.length - 1] = (out[out.length - 1] ?? "") + core.slice(cursor);
	if (prefix) out[0] = prefix + (out[0] ?? "");
	if (suffix) out[out.length - 1] = (out[out.length - 1] ?? "") + suffix;
	return out;
}
function splitNucleus(word) {
	if (word.length <= 3) return word ? [word] : [];
	const chars = [...word];
	const cuts = [];
	for (let i = 1; i < chars.length - 1; i += 1) {
		const prev = chars[i - 1];
		const cur = chars[i];
		const next = chars[i + 1];
		if (isVowel(prev) && !isVowel(cur) && isVowel(next)) {
			const cluster = onsetAt(word, i);
			cuts.push(cluster ? i + cluster.length : i);
		} else if (isVowel(prev) && !isVowel(cur) && !isVowel(next) && isVowel(chars[i + 2])) cuts.push(i + 1);
	}
	const unique = [...new Set(cuts)].filter((at) => at > 0 && at < word.length).sort((a, b) => a - b);
	if (!unique.length) return [word];
	const parts = [];
	let start = 0;
	for (const cut of unique) {
		if (cut - start < 1) continue;
		parts.push(word.slice(start, cut));
		start = cut;
	}
	if (start < word.length) parts.push(word.slice(start));
	return parts.filter(Boolean);
}
function onsetAt(word, index) {
	const slice = word.slice(index);
	return ONSETS.find((item) => slice.startsWith(item)) ?? null;
}
var CLUSTERS = /^(sch|scr|spl|spr|str|thr|chr|shr|th|sh|ch|wh|ph|ck|ng|qu)/i;
var CONFUSING = /* @__PURE__ */ new Set([
	"b",
	"d",
	"p",
	"q"
]);
function tokenizeWords(text) {
	const parts = [];
	const re = /([A-Za-z][A-Za-z']*(?:-[A-Za-z][A-Za-z']*)*)|([^A-Za-z]+)/g;
	let match;
	while (match = re.exec(text)) parts.push({
		raw: match[0],
		isWord: Boolean(match[1]),
		charStart: match.index
	});
	return parts;
}
function decorateWord(word, { bionic = 0, syllables = false, letterGuide = false, rhythm = false, plainLanguage = false } = {}) {
	try {
		const swapped = plainLanguage ? swapPlainWord(word) : {
			next: word,
			original: null
		};
		const source = swapped.next;
		const letters = source.match(/^([^A-Za-z]*)([A-Za-z']+)([^A-Za-z]*)$/);
		if (!letters) return escapeHtml(source);
		const [, lead, core, trail] = letters;
		const bounds = syllables ? syllableBounds(core) : [];
		const boldMatch = (bionic > 0 ? processBionicText(core, bionic, rhythm) : escapeHtml(core)).match(/^<span class="fixation">([^<]*)<\/span>(.*)$/);
		const boldLen = boldMatch ? boldMatch[1].length : 0;
		let html = escapeHtml(lead);
		for (let i = 0; i < core.length; i += 1) {
			if (bounds.includes(i) && i > 0) html += "<span class=\"syl-dot\" aria-hidden=\"true\">·</span>";
			const cluster = letterGuide ? clusterAt(core, i) : null;
			if (cluster) {
				const full = core.slice(i, i + cluster.length);
				html += `<span class="letter-cluster">${escapeHtml(full)}</span>`;
				i += cluster.length - 1;
				continue;
			}
			const ch = core[i] ?? "";
			let piece = escapeHtml(ch);
			if (letterGuide && CONFUSING.has(ch.toLowerCase())) piece = `<span class="letter-${ch.toLowerCase()}">${piece}</span>`;
			if (i < boldLen) piece = `<span class="fixation">${piece}</span>`;
			html += piece;
		}
		const inner = html + escapeHtml(trail);
		if (!swapped.original) return inner;
		return `<span class="plain-swap" title="Was: ${escapeHtml(swapped.original)}">${inner}</span>`;
	} catch {
		return escapeHtml(word);
	}
}
function decorateLine(text, opts) {
	try {
		return tokenizeWords(opts.plainLanguage ? applyPlainPhrases(text).text : text).map((part) => part.isWord ? decorateWord(part.raw, opts) : escapeHtml(part.raw)).join("");
	} catch {
		return escapeHtml(text);
	}
}
function syllableBounds(core) {
	const parts = syllabify(core);
	const at = [];
	let cursor = 0;
	for (let i = 1; i < parts.length; i += 1) {
		cursor += parts[i - 1]?.length ?? 0;
		at.push(cursor);
	}
	return at;
}
function clusterAt(word, index) {
	const hit = word.slice(index).match(CLUSTERS);
	return hit ? hit[1] : null;
}
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wordAtChar(text, charIndex) {
	const tokens = tokenizeWords(text).filter((part) => part.isWord);
	let found = 0;
	for (let i = 0; i < tokens.length; i += 1) {
		const token = tokens[i];
		if (!token) continue;
		if (charIndex >= token.charStart) found = i;
	}
	return found;
}
function wordAtOffset(text, offset) {
	if (!text) return null;
	let i = offset;
	if (i < 0) i = 0;
	if (i >= text.length) i = text.length - 1;
	if (i < 0) return null;
	const at = text[i] ?? "";
	if (!/[A-Za-z']/.test(at) && i > 0 && /[A-Za-z']/.test(text[i - 1] ?? "")) i -= 1;
	if (!/[A-Za-z']/.test(text[i] ?? "")) return null;
	let start = i;
	let end = i + 1;
	while (start > 0 && /[A-Za-z']/.test(text[start - 1] ?? "")) start -= 1;
	while (end < text.length && /[A-Za-z']/.test(text[end] ?? "")) end += 1;
	const word = text.slice(start, end).replace(/^'+|'+$/g, "");
	return word.length >= 2 ? word : null;
}
function wordFromPoint(clientX, clientY, root) {
	if (typeof document === "undefined") return null;
	const point = root ? pointOnLineBoxes(root, clientX, clientY) : {
		x: clientX,
		y: clientY
	};
	const hitWord = document.elementFromPoint(point.x, point.y)?.closest(".reading-word");
	if (hitWord && (!root || root.contains(hitWord))) return cleanWord(hitWord.textContent);
	const caret = caretFromPoint(point.x, point.y);
	let node = caret.node;
	let offset = caret.offset;
	if (root && node && !root.contains(node)) {
		const box = pointOnLineBoxes(root, point.x, point.y);
		const next = caretFromPoint(box.x, box.y);
		node = next.node;
		offset = next.offset;
	}
	if (!node) return nearestWord(root, point.x, point.y);
	if (root && !root.contains(node)) return nearestWord(root, point.x, point.y);
	const wordEl = (node instanceof Element ? node : node.parentElement)?.closest(".reading-word");
	if (wordEl && (!root || root.contains(wordEl))) return cleanWord(wordEl.textContent);
	if (node.nodeType !== Node.TEXT_NODE) return wordAtOffset((node.textContent ?? "").replace(/·/g, ""), Math.min(offset, node.textContent?.length ?? 0)) ?? nearestWord(root, point.x, point.y);
	return expandWordFromTextNode(node, offset, root) ?? nearestWord(root, point.x, point.y);
}
function pointOnLineBoxes(root, clientX, clientY) {
	const rects = [...root.getClientRects()].filter((r) => r.width > 2 && r.height > 2);
	if (!rects.length) return {
		x: clientX,
		y: clientY
	};
	let best = rects[0];
	let bestD = Infinity;
	for (const r of rects) {
		const dx = clientX < r.left ? r.left - clientX : clientX > r.right ? clientX - r.right : 0;
		const dy = clientY < r.top ? r.top - clientY : clientY > r.bottom ? clientY - r.bottom : 0;
		const d = dx * dx + dy * dy;
		if (d < bestD) {
			bestD = d;
			best = r;
		}
	}
	return {
		x: Math.min(Math.max(clientX, best.left + 2), best.right - 2),
		y: (best.top + best.bottom) / 2
	};
}
function nearestWord(root, clientX, clientY) {
	if (!root) return null;
	const words = root.querySelectorAll(".reading-word");
	let best = null;
	let bestD = Infinity;
	for (const word of words) {
		const r = word.getBoundingClientRect();
		if (r.width < 1 || r.height < 1) continue;
		const dx = clientX < r.left ? r.left - clientX : clientX > r.right ? clientX - r.right : 0;
		const dy = clientY < r.top ? r.top - clientY : clientY > r.bottom ? clientY - r.bottom : 0;
		const d = dx * dx + dy * dy;
		if (d < bestD) {
			bestD = d;
			best = word;
		}
	}
	if (best && bestD < 6400) return cleanWord(best.textContent);
	return null;
}
function caretFromPoint(clientX, clientY) {
	const doc = document;
	if (typeof doc.caretRangeFromPoint === "function") {
		const range = doc.caretRangeFromPoint(clientX, clientY);
		if (range) return {
			node: range.startContainer,
			offset: range.startOffset
		};
	}
	if (typeof doc.caretPositionFromPoint === "function") {
		const pos = doc.caretPositionFromPoint(clientX, clientY);
		if (pos) return {
			node: pos.offsetNode,
			offset: pos.offset
		};
	}
	return {
		node: null,
		offset: 0
	};
}
function cleanWord(value) {
	const raw = (value ?? "").replace(/·/g, "").replace(/^'+|'+$/g, "");
	return raw.length >= 2 ? raw : null;
}
function expandWordFromTextNode(node, offset, root) {
	const line = root ?? node.parentElement?.closest(".reading-line");
	if (!line) return wordAtOffset((node.textContent ?? "").replace(/·/g, ""), offset);
	const visual = line.querySelector("[aria-hidden='true']") ?? line;
	const scope = visual.contains(node) ? visual : line;
	const collect = (start, direction) => {
		const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
		walker.currentNode = start;
		let out = "";
		let cursor = direction === "prev" ? walker.previousNode() : walker.nextNode();
		while (cursor) {
			if (cursor.parentElement?.closest(".sr-only")) {
				cursor = direction === "prev" ? walker.previousNode() : walker.nextNode();
				continue;
			}
			const t = (cursor.textContent ?? "").replace(/·/g, "");
			if (!t) {
				cursor = direction === "prev" ? walker.previousNode() : walker.nextNode();
				continue;
			}
			const edge = direction === "prev" ? t[t.length - 1] : t[0];
			if (!/[A-Za-z']/.test(edge ?? "")) break;
			out = direction === "prev" ? t + out : out + t;
			cursor = direction === "prev" ? walker.previousNode() : walker.nextNode();
		}
		return out;
	};
	const before = collect(node, "prev");
	const after = collect(node, "next");
	return wordAtOffset(before + (node.textContent ?? "").replace(/·/g, "") + after, before.length + offset);
}
function chunkByMinutes(text, wpm, minutes = 3) {
	const target = Math.max(80, Math.round(wpm * minutes));
	const units = text.split(/\n{2,}|(?<=[.!?])\s+/);
	const chunks = [];
	let bucket = [];
	let count = 0;
	const flush = () => {
		if (!bucket.length) return;
		chunks.push(bucket.join(" ").replace(/\s+/g, " ").trim());
		bucket = [];
		count = 0;
	};
	for (const unit of units) {
		const words = unit.trim().split(/\s+/).filter(Boolean).length;
		if (!words) continue;
		if (count && count + words > target) flush();
		if (words > target) {
			const tokens = unit.trim().split(/\s+/);
			for (let i = 0; i < tokens.length; i += target) {
				if (count) flush();
				chunks.push(tokens.slice(i, i + target).join(" "));
			}
			continue;
		}
		bucket.push(unit.trim());
		count += words;
	}
	flush();
	return chunks.length ? chunks : [text];
}
var WordRun = (0, import_react.memo)(function WordRun({ text, html, lineIdx, highlightIndex, guides, bionic, rhythm, plainLanguage = false }) {
	const split = Boolean(guides.wordGuide) || highlightIndex != null;
	const decorate = Boolean(guides.syllables || guides.letterGuide || plainLanguage);
	const spoken = plainLanguage ? applyPlainLanguage(text) : text;
	const source = plainLanguage ? applyPlainPhrases(text).text : text;
	const tokens = (0, import_react.useMemo)(() => split ? tokenizeWords(source) : [], [split, source]);
	const decorated = (0, import_react.useMemo)(() => !split && decorate ? decorateLine(text, {
		bionic,
		syllables: guides.syllables,
		letterGuide: guides.letterGuide,
		rhythm,
		plainLanguage
	}) : "", [
		split,
		decorate,
		text,
		bionic,
		guides.syllables,
		guides.letterGuide,
		rhythm,
		plainLanguage
	]);
	if (!split && !decorate) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibleBionic, {
		text,
		html
	});
	if (!split) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibleBionic, {
		text: spoken,
		html: decorated || html
	});
	const needsInner = bionic > 0 || decorate;
	let wordIndex = -1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		children: tokens.map((token, i) => {
			if (!token.isWord) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: token.raw }, i);
			wordIndex += 1;
			const index = wordIndex;
			const current = highlightIndex === index;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-word": `${lineIdx}-${index}`,
				className: cn("reading-word", current && "is-current"),
				children: needsInner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { dangerouslySetInnerHTML: { __html: decorateWord(token.raw, {
					bionic,
					syllables: guides.syllables,
					letterGuide: guides.letterGuide,
					rhythm,
					plainLanguage
				}) } }) : token.raw
			}, i);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: spoken
	})] });
});
function WordCard({ word, onClose }) {
	const [sense, setSense] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		let live = true;
		setSense(void 0);
		lookupWord(word).then((result) => {
			if (live) setSense(result);
		});
		return () => {
			live = false;
		};
	}, [word]);
	function play() {
		if (sense?.audio) {
			new Audio(sense.audio).play().catch(() => speakWord(word));
			return;
		}
		speakWord(word);
	}
	const display = sense?.word ?? word.replace(/[^A-Za-z']/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "material-surface pointer-events-auto w-full max-w-sm rounded-lg p-4 shadow-float",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-xl",
				children: display
			}), sense?.phonetic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm text-muted",
				children: sense.phonetic
			}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					onClick: play,
					"aria-label": "Pronounce",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
						size: 16,
						className: "icon-motion icon-lift"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					onClick: onClose,
					"aria-label": "Close definition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						size: 16,
						className: "icon-motion icon-turn"
					})
				})]
			})]
		}), sense === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "Looking up…"
		}) : sense ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-1.5",
			children: [
				sense.partOfSpeech ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: sense.partOfSpeech
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed",
					children: sense.definition
				}),
				sense.example ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted italic",
					children: [
						"“",
						sense.example,
						"”"
					]
				}) : null
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "No definition on hand. Pronounce still works."
		})]
	});
}
function splitSentences(text) {
	return splitSentences$1(text).filter((sentence) => sentence.split(/\s+/).length >= 6);
}
function clip(sentence, max = 140) {
	if (sentence.length <= max) return sentence;
	return `${sentence.slice(0, max).trim()}…`;
}
function mulberry(seed) {
	let t = seed >>> 0;
	return () => {
		t += 1831565813;
		let r = Math.imul(t ^ t >>> 15, 1 | t);
		r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
		return ((r ^ r >>> 14) >>> 0) / 4294967296;
	};
}
function shuffle(items, seed) {
	const copy = [...items];
	const rand = mulberry(seed);
	for (let i = copy.length - 1; i > 0; i -= 1) {
		const j = Math.floor(rand() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}
function choice(kind, at, prompt, correct, wrong, seed) {
	const options = shuffle([correct, ...[...new Set(wrong.filter((item) => item && item !== correct))].slice(0, 2)], seed);
	return {
		id: `${kind}-${at}`,
		at,
		kind,
		prompt,
		options,
		answerIndex: options.indexOf(correct)
	};
}
function buildCheckpoints(text) {
	const sentences = splitSentences(text);
	if (sentences.length < 3) return [];
	const first = clip(sentences[0]);
	const mid = clip(sentences[Math.floor(sentences.length * .45)]);
	const last = clip(sentences[sentences.length - 1]);
	const extra = sentences.map(clip).filter((item) => item !== first && item !== mid && item !== last);
	return [
		choice("main", .34, "Which sentence best captures the opening claim of this passage?", first, [
			mid,
			last,
			extra[0] ?? "The passage is mainly a list of unrelated facts."
		], text.length + 11),
		choice("detail", .67, "Which of these was actually stated in the passage?", mid, [
			first,
			last,
			extra[1] ?? extra[0] ?? "None of these ideas appear in the text."
		], text.length + 29),
		choice("recall", .92, "How does this passage land?", last, [
			first,
			mid,
			extra[2] ?? extra[0] ?? "It ends without a concluding thought."
		], text.length + 47)
	].filter((question) => question.answerIndex >= 0 && question.options.length >= 2);
}
function scoreComprehension(results) {
	if (results.length === 0) return null;
	return results.filter(Boolean).length / results.length;
}
/** Web Speech synthesis helpers. Voices load asynchronously on some engines. */
function speechSupported() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
/** Map a reading WPM target onto SpeechSynthesis rate (0.5–1.6). 220 WPM ≈ 1. */
function rateFromWpm(wpm) {
	return Math.min(1.6, Math.max(.55, wpm / 220));
}
function stopSpeech() {
	if (!speechSupported()) return;
	window.speechSynthesis.cancel();
}
function pauseSpeech() {
	if (!speechSupported()) return;
	window.speechSynthesis.pause();
}
function resumeSpeech() {
	if (!speechSupported()) return;
	window.speechSynthesis.resume();
}
function speakText(text, { rate = .95, voice, onBoundary, onEnd, onError } = {}) {
	if (!speechSupported() || !text.trim()) return null;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.rate = rate;
	if (voice) utterance.voice = voice;
	utterance.onboundary = (event) => {
		if (event.charIndex == null) return;
		onBoundary?.(event.charIndex);
	};
	utterance.onend = () => onEnd?.();
	utterance.onerror = () => onError?.();
	window.speechSynthesis.speak(utterance);
	return utterance;
}
registerGsap();
function afterMenu(fn) {
	window.setTimeout(() => {
		try {
			fn();
		} catch (error) {
			console.error(error);
		}
	}, 0);
}
/** IconSwap takes components, so the Phosphor data is wrapped to match. */
var PhPause = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
	icon: pause,
	width: props.size ?? 19,
	height: props.size ?? 19,
	"aria-hidden": true,
	className: props.className
});
var PhPlay = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
	icon: play,
	width: props.size ?? 19,
	height: props.size ?? 19,
	"aria-hidden": true,
	className: props.className
});
var PhSpeaker = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
	icon: speakerHigh,
	width: props.size ?? 19,
	height: props.size ?? 19,
	"aria-hidden": true,
	className: props.className
});
function Reader() {
	const text = useAppStore((s) => s.text);
	const sourceKind = useAppStore((s) => s.sourceKind);
	const pdfPage = useAppStore((s) => s.pdfPage);
	const pdfPageCount = useAppStore((s) => s.pdfPageCount);
	const setPdfPage = useAppStore((s) => s.setPdfPage);
	const chapterIndex = useAppStore((s) => s.chapterIndex);
	const chapterCount = useAppStore((s) => s.chapterCount);
	const setChapter = useAppStore((s) => s.setChapter);
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const mode = useAppStore((s) => s.mode);
	const controlsOpen = useAppStore((s) => s.controlsOpen);
	const setControlsOpen = useAppStore((s) => s.setControlsOpen);
	const autoScrolling = useAppStore((s) => s.autoScrolling);
	const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const highlights = useAppStore((s) => s.highlights);
	const elapsedActiveMs = useAppStore((s) => s.reading.elapsedActiveMs);
	const addHighlight = useAppStore((s) => s.addHighlight);
	const removeHighlight = useAppStore((s) => s.removeHighlight);
	const annotateHighlight = useAppStore((s) => s.annotateHighlight);
	const pendingJump = useAppStore((s) => s.pendingJump);
	const clearJump = useAppStore((s) => s.clearJump);
	const toggleBookmark = useAppStore((s) => s.toggleBookmark);
	const bookmarks = useAppStore((s) => s.bookmarks);
	const sourceId = useAppStore((s) => s.sourceId);
	const scrollRef = (0, import_react.useRef)(null);
	const toolbarRef = (0, import_react.useRef)(null);
	const reduceMotion = useReducedMotion();
	const startReading = useAppStore((s) => s.startReading);
	const [isSpeaking, setIsSpeaking] = (0, import_react.useState)(false);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [rsvpOpen, setRsvpOpen] = (0, import_react.useState)(false);
	const [noteOpen, setNoteOpen] = (0, import_react.useState)(false);
	const [marksOpen, setMarksOpen] = (0, import_react.useState)(false);
	const [findOpen, setFindOpen] = (0, import_react.useState)(false);
	/**
	* Touch targets, then mouse targets.
	*
	* The dock's controls were 36px squares. That is under the 44px minimum for a
	* touch target, and this app is used by people who often have motor as well
	* as attention differences — a control you cannot reliably hit is not a
	* control. Nine of them across a 390px phone also left no room to grow, which
	* is why the secondary four move into the overflow menu below `sm` rather
	* than being shrunk further.
	*/
	const dockButton = "size-11 min-h-11 sm:size-9 sm:min-h-9";
	const [findQuery, setFindQuery] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [simplifyOpen, setSimplifyOpen] = (0, import_react.useState)(false);
	const [checkOpen, setCheckOpen] = (0, import_react.useState)(false);
	const [checkPicks, setCheckPicks] = (0, import_react.useState)([]);
	const [reconnectOpen, setReconnectOpen] = (0, import_react.useState)(false);
	const [resumeLine, setResumeLine] = (0, import_react.useState)(null);
	const [lookup, setLookup] = (0, import_react.useState)(null);
	const [activeWord, setActiveWord] = (0, import_react.useState)(null);
	const [chunkOn, setChunkOn] = (0, import_react.useState)(false);
	const [chunkIndex, setChunkIndex] = (0, import_react.useState)(0);
	const speechIndex = (0, import_react.useRef)(0);
	const programmaticScroll = (0, import_react.useRef)(false);
	const didAnnounceScroll = (0, import_react.useRef)(false);
	const pendingRestore = (0, import_react.useRef)(0);
	const activeLineRef = (0, import_react.useRef)(null);
	const followStateRef = (0, import_react.useRef)(null);
	const pageKeyRef = (0, import_react.useRef)("");
	const placedKey = (0, import_react.useRef)("");
	const resumeTimer = (0, import_react.useRef)(0);
	const pdfPages = (0, import_react.useMemo)(() => sourceKind === "pdf" ? splitPdfPages(text) : [], [sourceKind, text]);
	const textChapters = (0, import_react.useMemo)(() => {
		if (sourceKind !== "text") return [];
		const declared = splitTextChapters(text);
		return declared.length > 0 ? declared : paginateLongText(text);
	}, [sourceKind, text]);
	const pdfChapters = (0, import_react.useMemo)(() => sourceKind === "pdf" ? detectChapters(pdfPages) : [], [sourceKind, pdfPages]);
	const chapters = sourceKind === "pdf" ? pdfChapters : textChapters.map((chapter, index) => ({
		title: chapter.title,
		startPage: index + 1,
		endPage: index + 1
	}));
	const pageCount = pdfPageCount || pdfPages.length;
	const paged = sourceKind === "pdf" && pageCount > 0;
	const chaptered = chapterCount > 1;
	const pageText = paged ? pdfPages[Math.max(0, pdfPage - 1)] ?? "" : chaptered ? textChapters[Math.max(0, chapterIndex - 1)]?.body ?? text : text;
	const chunks = (0, import_react.useMemo)(() => chunkOn ? chunkByMinutes(pageText, targetWpm, 3) : [pageText], [
		chunkOn,
		pageText,
		targetWpm
	]);
	const viewText = chunks[Math.min(chunkIndex, Math.max(0, chunks.length - 1))] ?? pageText;
	const blocks = (0, import_react.useMemo)(() => parseBlocks(viewText), [viewText]);
	const titlePage = isTitlePage(blocks) || chaptered && chapterRole(chapters[Math.max(0, chapterIndex - 1)]?.title ?? "") === "front";
	const words = (0, import_react.useMemo)(() => viewText.trim().split(/\s+/).filter(Boolean), [viewText]);
	useReadingTracker(scrollRef, words.length);
	const pageKey = `${pdfPage}:${chapterIndex}:${viewText.length}:${viewText.slice(0, 24)}`;
	useLineDwell(scrollRef, pageKey);
	if (pageKeyRef.current !== pageKey) {
		pageKeyRef.current = pageKey;
		activeLineRef.current = null;
		followStateRef.current = null;
	}
	const guides = (0, import_react.useMemo)(() => ({
		syllables: Boolean(profile.syllables),
		letterGuide: Boolean(profile.letterGuide),
		wordGuide: Boolean(profile.wordGuide)
	}), [
		profile.syllables,
		profile.letterGuide,
		profile.wordGuide
	]);
	const markActiveLine = (0, import_react.useCallback)((lineIdx) => {
		const node = scrollRef.current;
		const prev = activeLineRef.current;
		if (prev === lineIdx && lineIdx != null) return;
		if (node) {
			if (prev != null) node.querySelector(`#line-${prev}`)?.classList.remove("active");
			if (lineIdx == null) node.querySelectorAll(".reading-line.active").forEach((el) => el.classList.remove("active"));
			else {
				node.querySelector(`#line-${lineIdx}`)?.classList.add("active");
				node.dispatchEvent(new Event("nl-line"));
			}
		}
		activeLineRef.current = lineIdx;
	}, []);
	const lines = (0, import_react.useMemo)(() => {
		const list = [];
		blocks.forEach((block, blockIndex) => {
			(block.items?.map((item) => item.text) ?? (block.text ? [block.text] : [])).forEach((source, itemIndex) => {
				splitSentenceSpans(source).forEach((span, index) => {
					const full = span.trim();
					if (!full) return;
					list.push({
						text: full,
						html: profile.bionicStrength > 0 ? processBionicText(full, profile.bionicStrength, profile.rhythmOptimization) : full,
						lineIdx: blockIndex * 1e3 + itemIndex * 40 + index,
						blockIndex,
						itemIndex
					});
				});
			});
		});
		return list;
	}, [
		blocks,
		profile.bionicStrength,
		profile.rhythmOptimization
	]);
	const resumeTo = (0, import_react.useCallback)((progress) => {
		const node = scrollRef.current;
		if (!node || !lines.length) return;
		const at = Math.min(1, Math.max(0, progress));
		const idx = Math.min(lines.length - 1, Math.max(0, Math.round(at * (lines.length - 1))));
		const line = lines[idx];
		if (!line) return;
		markActiveLine(line.lineIdx);
		followStateRef.current = {
			id: line.lineIdx,
			boxIndex: 0
		};
		setResumeLine(line.lineIdx);
		node.querySelector(`#line-${line.lineIdx}`)?.scrollIntoView({
			behavior: reduceMotion ? "auto" : "smooth",
			block: "center"
		});
		window.clearTimeout(resumeTimer.current);
		resumeTimer.current = window.setTimeout(() => setResumeLine(null), 5e3);
		announce("Back at the last solid stretch");
	}, [
		lines,
		markActiveLine,
		reduceMotion
	]);
	(0, import_react.useEffect)(() => {
		const key = text.trim().slice(0, 40) || "default";
		try {
			setNote(localStorage.getItem(`neurolens-note-${key}`) || "");
		} catch {
			setNote("");
		}
	}, [text]);
	(0, import_react.useEffect)(() => {
		const key = text.trim().slice(0, 40) || "default";
		const timer = window.setTimeout(() => {
			try {
				localStorage.setItem(`neurolens-note-${key}`, note);
			} catch {}
		}, 350);
		return () => window.clearTimeout(timer);
	}, [note, text]);
	function speakAt(index) {
		if (!speechSupported()) return;
		if (index < 0 || index >= lines.length) {
			stopSpeech();
			setIsSpeaking(false);
			setIsPaused(false);
			return;
		}
		const item = lines[index];
		speechIndex.current = index;
		markActiveLine(item.lineIdx);
		followStateRef.current = {
			id: item.lineIdx,
			boxIndex: 0
		};
		document.getElementById(`line-${item.lineIdx}`)?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
		speakText(profile.plainLanguage ? applyPlainLanguage(item.text) : item.text, {
			rate: rateFromWpm(targetWpm),
			onBoundary: (charIndex) => {
				setActiveWord({
					line: item.lineIdx,
					index: wordAtChar(item.text, charIndex)
				});
			},
			onEnd: () => {
				if (speechIndex.current === index) speakAt(index + 1);
			},
			onError: () => {
				setIsSpeaking(false);
				setIsPaused(false);
			}
		});
	}
	function toggleSpeech() {
		if (!speechSupported()) {
			toast.error("Speech is not available here");
			return;
		}
		if (isSpeaking && !isPaused) {
			pauseSpeech();
			setIsPaused(true);
			announce("Paused listening");
			return;
		}
		if (isSpeaking && isPaused) {
			resumeSpeech();
			setIsPaused(false);
			announce("Resumed listening");
			return;
		}
		setIsSpeaking(true);
		setIsPaused(false);
		announce("Reading aloud");
		const current = activeLineRef.current;
		speakAt(current == null ? 0 : Math.max(0, lines.findIndex((line) => line.lineIdx === current)));
	}
	(0, import_react.useEffect)(() => () => {
		stopSpeech();
		window.clearTimeout(resumeTimer.current);
	}, []);
	(0, import_react.useEffect)(() => {
		pendingRestore.current = useAppStore.getState().restoreTo;
		if (pendingRestore.current) useAppStore.setState({ restoreTo: 0 });
	}, [text]);
	(0, import_react.useLayoutEffect)(() => {
		const id = activeLineRef.current;
		const node = scrollRef.current;
		if (!node) return;
		if (id == null) return;
		node.querySelector(`#line-${id}`)?.classList.add("active");
	});
	(0, import_react.useEffect)(() => {
		if (placedKey.current === pageKey) return;
		placedKey.current = pageKey;
		markActiveLine(null);
		setResumeLine(null);
		setReconnectOpen(false);
		const node = scrollRef.current;
		if (!node) return;
		const restore = pendingRestore.current;
		const place = () => {
			followStateRef.current = null;
			const picked = followReadingLine(node, null, null);
			if (picked) {
				followStateRef.current = {
					id: picked.id,
					boxIndex: picked.boxIndex
				};
				markActiveLine(picked.id);
			} else node.dispatchEvent(new Event("nl-line"));
		};
		if (restore > .02 && restore < .98) {
			let frames = 0;
			const restoreScroll = () => {
				const max = node.scrollHeight - node.clientHeight;
				if (max <= 8) {
					if (frames++ < 30) {
						requestAnimationFrame(restoreScroll);
						return;
					}
				} else node.scrollTop = restore * max;
				pendingRestore.current = 0;
				requestAnimationFrame(place);
			};
			requestAnimationFrame(restoreScroll);
		} else {
			node.scrollTop = 0;
			requestAnimationFrame(place);
		}
		if (chaptered && chapterIndex > 0) {
			const title = chapters[chapterIndex - 1]?.title;
			if (title) announce(title);
		} else if (paged) announce(`Page ${pdfPage} of ${pageCount}`);
	}, [
		pageKey,
		pdfPage,
		chapterIndex,
		pageText,
		markActiveLine,
		chaptered,
		paged,
		pageCount
	]);
	(0, import_react.useEffect)(() => {
		setChunkIndex(0);
	}, [pageText, chunkOn]);
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node || isSpeaking) return;
		if (!profile.wordGuide) return;
		let frame = 0;
		const sync = () => {
			frame = 0;
			const picked = followReadingLine(node, null, followStateRef.current);
			if (picked) {
				followStateRef.current = {
					id: picked.id,
					boxIndex: picked.boxIndex
				};
				markActiveLine(picked.id);
			}
		};
		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(sync);
		};
		node.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		sync();
		return () => {
			node.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [
		viewText,
		isSpeaking,
		profile.wordGuide,
		lines.length,
		markActiveLine
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "f") return;
			event.preventDefault();
			setFindOpen(true);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!paged && !chaptered) return;
		const onKey = (event) => {
			const target = event.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable)) return;
			if (event.key === "ArrowRight" || event.key === "PageDown") {
				event.preventDefault();
				if (chaptered) setChapter(chapterIndex < 1 ? 1 : chapterIndex + 1);
				else setPdfPage(pdfPage + 1);
			} else if (event.key === "ArrowLeft" || event.key === "PageUp") {
				event.preventDefault();
				if (chaptered) setChapter(chapterIndex - 1);
				else setPdfPage(pdfPage - 1);
			} else if (paged && event.key === "]") {
				event.preventDefault();
				setPdfPage(pdfPage + 1);
			} else if (paged && event.key === "[") {
				event.preventDefault();
				setPdfPage(pdfPage - 1);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		paged,
		chaptered,
		pdfPage,
		chapterIndex,
		setPdfPage,
		setChapter
	]);
	const simplified = (0, import_react.useMemo)(() => simplifyText(viewText), [viewText]);
	const checkpoints = (0, import_react.useMemo)(() => buildCheckpoints(viewText), [viewText]);
	const markKey = text.trim().slice(0, 48) || "default";
	/**
	* Which slice of the book the reader is looking at.
	*
	* Line indices restart inside every chapter, Part, and PDF page, so a
	* highlight is only located once it is paired with the section it was made
	* in. Without this, marking a line lit up the same index in every other
	* section of the book.
	*/
	const section = paged ? pdfPage : chaptered ? chapterIndex : 0;
	/**
	* The book as the reader navigates it, for searching across the whole thing.
	*
	* Search has to look beyond the section on screen — the point of it is to
	* find the passage you cannot see — so it works from every section's text and
	* reports matches in the same section/line terms the reader jumps by.
	*/
	/** Move the reader to a section/line pair, changing section first if needed. */
	const jumpTo = (0, import_react.useCallback)((toSection, lineIdx) => {
		const here = toSection === section;
		if (!here) {
			if (paged) setPdfPage(toSection);
			else if (chaptered) setChapter(toSection);
		}
		window.setTimeout(() => {
			const node = scrollRef.current?.querySelector(`#line-${lineIdx}`);
			node?.scrollIntoView({
				block: "center",
				behavior: "smooth"
			});
			if (node instanceof HTMLElement) markActiveLine(lineIdx);
		}, here ? 60 : 320);
	}, [
		section,
		paged,
		chaptered,
		setPdfPage,
		setChapter,
		markActiveLine
	]);
	(0, import_react.useEffect)(() => {
		if (!pendingJump || !lines.length) return;
		const { section: to, lineIdx } = pendingJump;
		clearJump();
		jumpTo(to, lineIdx);
	}, [
		pendingJump,
		lines.length,
		clearJump,
		jumpTo
	]);
	const searchSections = (0, import_react.useMemo)(() => {
		if (paged) return pdfPages;
		if (chaptered) return textChapters.map((chapter) => chapter.body);
		return [text];
	}, [
		paged,
		pdfPages,
		chaptered,
		textChapters,
		text
	]);
	const findHits = (0, import_react.useMemo)(() => findOpen && findQuery.trim().length > 1 ? searchBook(searchSections, findQuery) : [], [
		findOpen,
		findQuery,
		searchSections
	]);
	const bookHighlights = (0, import_react.useMemo)(() => highlights[markKey] ?? [], [highlights, markKey]);
	/**
	* Whether the reader has reached the end of this part, and what to say.
	*
	* Only for a book that actually has parts — an undivided passage has no
	* boundary to mark, and inventing one would be a celebration of nothing.
	*/
	const partDone = (0, import_react.useMemo)(() => {
		if (!chaptered && !paged) return null;
		const words = viewText.trim() ? viewText.trim().split(/\s+/).length : 0;
		if (!words) return null;
		const minutes = Math.max(1, Math.round(elapsedActiveMs / 6e4));
		const markCount = bookHighlights.filter((h) => h.section === section).length;
		const summary = [
			`${words.toLocaleString()} words`,
			`${minutes} min`,
			markCount ? `${markCount} highlight${markCount === 1 ? "" : "s"}` : null
		].filter(Boolean).join(" · ");
		const total = paged ? pageCount : chapterCount;
		const at = paged ? pdfPage : chapterIndex;
		return {
			summary,
			next: at < total ? chapters[at]?.title ?? (paged ? `Page ${at + 1}` : `Part ${at + 1}`) : null
		};
	}, [
		chaptered,
		paged,
		viewText,
		elapsedActiveMs,
		bookHighlights,
		section,
		pageCount,
		chapterCount,
		pdfPage,
		chapterIndex,
		chapters
	]);
	/** Marks that belong to the section currently on screen. */
	const marksHere = (0, import_react.useMemo)(() => bookHighlights.filter((h) => h.section === section), [bookHighlights, section]);
	/**
	* Paint saved marks as ranges over the live text.
	*
	* The CSS Custom Highlight API is the right tool and the only clean one: a
	* mark can start mid-word and end mid-word, and the line underneath is
	* already a nest of elements because bionic formatting wraps the lead of
	* every word. Splicing `<mark>` into that would mean rebuilding the markup on
	* every change and fighting React for it. Ranges sit *over* the DOM instead
	* and never touch it.
	*
	* Re-runs on font and spacing changes as well as on the marks themselves,
	* because a reflow moves the text the ranges are pinned to.
	*/
	(0, import_react.useEffect)(() => {
		if (!customHighlightsSupported()) return;
		const node = scrollRef.current;
		if (!node) return;
		ensureHighlightStyle();
		const ranges = [];
		for (const mark of marksHere) {
			const line = node.querySelector(`#line-${mark.lineIdx}`);
			if (!line) continue;
			const range = rangeFromOffsets(line, mark.start, mark.end);
			if (range) ranges.push(range);
		}
		const registry = CSS.highlights;
		if (!ranges.length) {
			registry.delete("nl-mark");
			return;
		}
		registry.set("nl-mark", new window.Highlight(...ranges));
		return () => {
			registry.delete("nl-mark");
		};
	}, [
		marksHere,
		viewText,
		profile.fontSize,
		profile.lineHeight,
		profile.bionicStrength,
		profile.fontFamily,
		profile.theme
	]);
	/**
	* Mark whatever was dragged over.
	*
	* On `pointerup` rather than on `selectionchange`, because a selection is
	* still growing while the pointer is down and marking mid-drag would leave a
	* trail of half-phrases. Keyboard selection is covered too: Shift+Arrow ends
	* on a keyup, and someone selecting by keyboard is often someone who cannot
	* comfortably drag.
	*
	* The selection is deliberately left in place afterwards, so the same drag
	* can still be copied. Marking and copying are both reasonable things to want
	* from having selected a phrase, and clearing it would silently rule one out.
	*/
	const markSelection = (0, import_react.useCallback)(() => {
		const node = scrollRef.current;
		if (!node || isSpeaking) return;
		const picked = readSelection(node);
		if (!picked) return;
		addHighlight({
			lineIdx: picked.lineIdx,
			section,
			start: picked.start,
			end: picked.end,
			text: picked.text
		});
		feedback("good", { message: `Highlighted: ${picked.text.slice(0, 60)}` });
		window.getSelection?.()?.removeAllRanges();
	}, [
		isSpeaking,
		section,
		addHighlight
	]);
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node) return;
		const onUp = () => {
			window.setTimeout(markSelection, 0);
		};
		const onKeyUp = (event) => {
			if (!event.shiftKey) return;
			if (!event.key.startsWith("Arrow")) return;
			window.setTimeout(markSelection, 0);
		};
		node.addEventListener("pointerup", onUp);
		node.addEventListener("keyup", onKeyUp);
		return () => {
			node.removeEventListener("pointerup", onUp);
			node.removeEventListener("keyup", onKeyUp);
		};
	}, [markSelection]);
	const bookmarked = bookmarks.some((item) => sourceId ? item.sourceId === sourceId : item.content === text);
	const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
	const contrast = evaluateScheme(profile.theme, profile.fontSize);
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node || !autoScrolling) {
			didAnnounceScroll.current = false;
			return;
		}
		let frame = 0;
		let last = performance.now();
		let carry = 0;
		const stopForUser = () => {
			if (programmaticScroll.current) return;
			setAutoScrolling(false);
		};
		if (node.scrollHeight - node.clientHeight - node.scrollTop < 8) {
			setAutoScrolling(false);
			toast("You’re already at the end of the page");
			return;
		}
		if (!didAnnounceScroll.current) {
			toast.success(`Scrolling at ${targetWpm} WPM`);
			didAnnounceScroll.current = true;
		}
		const step = (now) => {
			const dtSec = Math.min(.05, (now - last) / 1e3);
			last = now;
			const maxScroll = node.scrollHeight - node.clientHeight;
			const remainingPx = maxScroll - node.scrollTop;
			if (maxScroll <= 1 || remainingPx <= 2) {
				setAutoScrolling(false);
				toast.success("End of the page");
				return;
			}
			const localProgress = node.scrollTop / maxScroll;
			const remainingWords = Math.max(1, Math.round((1 - localProgress) * words.length));
			const focus = tokenContextAtProgress(words, localProgress);
			carry += autoScrollDeltaPx({
				remainingPx,
				remainingWords,
				targetWpm,
				dtSec,
				focusToken: focus.token,
				nextToken: focus.next,
				curve: rhythmCurve
			});
			const px = Math.trunc(carry);
			if (px >= 1) {
				programmaticScroll.current = true;
				node.scrollTop += px;
				programmaticScroll.current = false;
				carry -= px;
			}
			const line = lines[Math.min(lines.length - 1, Math.max(0, Math.floor(localProgress * lines.length)))];
			if (line) markActiveLine(line.lineIdx);
			if (node.scrollTop + node.clientHeight >= node.scrollHeight - 4) {
				setAutoScrolling(false);
				toast.success("End of the page");
				return;
			}
			frame = requestAnimationFrame(step);
		};
		frame = requestAnimationFrame(step);
		node.addEventListener("wheel", stopForUser, { passive: true });
		node.addEventListener("pointerdown", stopForUser);
		node.addEventListener("touchmove", stopForUser, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			node.removeEventListener("wheel", stopForUser);
			node.removeEventListener("pointerdown", stopForUser);
			node.removeEventListener("touchmove", stopForUser);
		};
	}, [
		autoScrolling,
		targetWpm,
		words,
		setAutoScrolling,
		rhythmCurve,
		lines,
		markActiveLine
	]);
	function toggleAutoScroll() {
		if (autoScrolling) {
			setAutoScrolling(false);
			announce("Auto-scroll paused");
			return;
		}
		const node = scrollRef.current;
		const remaining = node ? node.scrollHeight - node.clientHeight - node.scrollTop : 0;
		if (!node || remaining < 8) {
			toast("You’re already at the end of the page");
			return;
		}
		tapFeedback("start");
		setAutoScrolling(true);
	}
	const onRsvpProgress = (0, import_react.useCallback)((index) => {
		const node = scrollRef.current;
		if (!node || words.length < 2) return;
		const max = node.scrollHeight - node.clientHeight;
		if (max <= 1) return;
		programmaticScroll.current = true;
		node.scrollTop = index / (words.length - 1) * max;
		programmaticScroll.current = false;
	}, [words.length]);
	const readingTitle = useAppStore((s) => s.sessions[0]?.title) || text.split(/\n/).find((line) => line.trim())?.slice(0, 80) || "Untitled reading";
	useGSAP(() => {
		const bar = toolbarRef.current;
		if (!bar || reduceMotion) return;
		gsapWithCSS.from(bar, {
			y: 22,
			opacity: 0,
			duration: .5,
			delay: .12,
			ease: easeOut
		});
	}, { dependencies: [reduceMotion] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex h-full min-h-0 flex-1 flex-col", TINT_CLASS[profile.tint] ?? "bg-bg", rhythmCurve === "breath" && "rhythm-breath", autoScrolling && "is-autoscrolling"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: controlsOpen,
				onOpenChange: setControlsOpen,
				title: "Reading options",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderControls, { onClose: () => setControlsOpen(false) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollRef,
					className: cn("reader-scroll h-full overflow-y-auto", "transition-[padding] duration-[250ms] ease-[var(--ease-out)] motion-reduce:transition-none", controlsOpen && "lg:pl-[24rem]"),
					"data-resume": resumeLine ?? void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"aria-labelledby": "reading-title",
						className: cn("mx-auto max-w-2xl px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20", FONT_CLASS[profile.fontFamily] ?? "font-sans", "break-words", profile.wordGuide && "word-guide-on", profile.align === "justify" && !titlePage && "text-justify", titlePage && "is-title-page"),
						style: {
							fontSize: profile.fontSize,
							lineHeight: profile.lineHeight,
							letterSpacing: `${profile.letterSpacing}em`,
							wordSpacing: `${profile.wordSpacing}em`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								id: "reading-title",
								className: "sr-only",
								children: readingTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-8 text-xs font-medium tracking-wide text-muted uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sr-only",
									children: [
										chaptered && chapterIndex > 0 ? `Chapter ${chapterIndex} of ${chapterCount}. ` : "",
										paged ? `Page ${pdfPage} of ${pageCount}. ` : "",
										wordCount(viewText).toLocaleString(),
										" words",
										paged || chaptered ? " in this section." : ".",
										mode === "adaptive" ? " Adaptive is watching pace, pauses, and rereads." : "",
										` Contrast ${formatContrastRatio(contrast.body)}, ${contrast.bodyLevel}.`,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderLiveStats, {
											autoScrolling,
											targetWpm
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"aria-hidden": "true",
									children: [
										chaptered && chapterIndex > 0 ? `Chapter ${chapterIndex} of ${chapterCount} · ` : "",
										paged ? `Page ${pdfPage} of ${pageCount} · ` : "",
										wordCount(viewText).toLocaleString(),
										" words"
									]
								})]
							}),
							chaptered && chapterIndex > 0 && !titlePage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-6 font-serif text-3xl",
								children: chapters[chapterIndex - 1]?.title
							}) : null,
							paged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfPageCanvas, { page: pdfPage }) : null,
							paged && blocks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6 text-sm leading-relaxed text-muted",
								children: "This page is an image. The drawing is above; there isn’t selectable text to format."
							}) : null,
							blocks.map((block, blockIndex) => {
								const renderSentences = (itemIndex = 0) => {
									return lines.filter((line) => line.blockIndex === blockIndex && line.itemIndex === itemIndex).map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [index > 0 ? " " : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										id: `line-${line.lineIdx}`,
										className: cn("reading-line cursor-pointer", rhythmCurve !== "steady" && /[.!?…]["'”’)]*$/.test(line.text.trim()) && "rhythm-cadence", resumeLine === line.lineIdx && "is-resume"),
										onClick: (event) => {
											if (isSpeaking) {
												const found = lines.findIndex((item) => item.lineIdx === line.lineIdx);
												if (found !== -1) speakAt(found);
												return;
											}
											if (profile.lookup !== false) {
												const word = wordFromPoint(event.clientX, event.clientY, event.currentTarget);
												if (word) setLookup(word);
											}
											{
												markActiveLine(line.lineIdx);
												const boxes = lineBoxesOf(event.currentTarget);
												let boxIndex = 0;
												for (let i = 0; i < boxes.length; i += 1) {
													const box = boxes[i];
													if (event.clientY >= box.top && event.clientY <= box.bottom) {
														boxIndex = i;
														break;
													}
												}
												followStateRef.current = {
													id: line.lineIdx,
													boxIndex
												};
											}
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordRun, {
											text: line.text,
											html: line.html,
											lineIdx: line.lineIdx,
											highlightIndex: activeWord?.line === line.lineIdx ? activeWord.index : null,
											guides,
											bionic: profile.bionicStrength,
											rhythm: profile.rhythmOptimization,
											plainLanguage: Boolean(profile.plainLanguage)
										})
									})] }, line.lineIdx));
								};
								if (block.kind === "list" && block.items?.length) {
									const ListTag = block.ordered ? "ol" : "ul";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTag, {
										className: cn("reading-list reading-block mb-6", block.ordered ? "is-ordered" : "is-bulleted"),
										children: block.items.map((_, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0",
											children: renderSentences(itemIndex)
										}) }, itemIndex))
									}, blockIndex);
								}
								if (block.kind === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "reading-title reading-block mb-6 font-serif",
									children: renderSentences()
								}, blockIndex);
								if (block.kind === "kicker") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "reading-kicker reading-block mb-3",
									children: renderSentences()
								}, blockIndex);
								if (block.kind === "heading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "reading-heading reading-block mb-4 mt-8 font-serif text-2xl",
									children: renderSentences()
								}, blockIndex);
								if (block.kind === "quote") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "reading-quote reading-block mb-6",
									children: renderSentences()
								}, blockIndex);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("reading-block mb-6", block.kind === "lead" && "reading-lead"),
									children: renderSentences()
								}, blockIndex);
							}),
							partDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "nl-part-done mt-10 rounded-lg bg-surface p-4 shadow-border sm:p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: chaptered && chapters[chapterIndex - 1]?.title ? `${chapters[chapterIndex - 1].title} finished` : `Part ${section} finished`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted tabular-nums",
										children: partDone.summary
									}),
									partDone.next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted",
											children: ["Next: ", partDone.next]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											onClick: () => {
												if (paged) setPdfPage(pdfPage + 1);
												else setChapter(chapterIndex < 1 ? 2 : chapterIndex + 1);
											},
											children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												icon: caretRight,
												width: 14,
												height: 14,
												"aria-hidden": true,
												className: "icon-motion icon-shift"
											})]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: "That was the last part."
									})
								]
							}) : null
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reader-dock pointer-events-none shrink-0 px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingCoach, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingFeelBar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendationBanner, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternHint, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReconnectDock, {
							text: viewText,
							open: reconnectOpen,
							onOpenChange: setReconnectOpen,
							onResume: resumeTo
						}),
						lookup ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-auto w-full max-w-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordCard, {
								word: lookup,
								onClose: () => setLookup(null)
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: toolbarRef,
							role: "toolbar",
							"aria-label": "Reading tools",
							className: "material-surface pointer-events-auto flex max-w-full items-center gap-1 rounded-lg p-1.5 shadow-float",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: cn(dockButton, "hidden sm:inline-flex"),
										onClick: () => setProfile({
											...useAppStore.getState().profile,
											plainLanguage: !useAppStore.getState().profile.plainLanguage
										}),
										"aria-label": profile.plainLanguage ? "Turn off plain words" : "Plain words",
										"aria-pressed": Boolean(profile.plainLanguage),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: translate,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-lift"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: profile.plainLanguage ? "Plain words on" : "Plain words" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: dockButton,
										onClick: () => setControlsOpen(true),
										"aria-label": "Reading options",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: slidersHorizontal,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-turn"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Options" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: cn(dockButton, "hidden sm:inline-flex"),
										"aria-label": "Reading guides",
										"aria-pressed": Boolean(profile.syllables || profile.letterGuide || profile.wordGuide || profile.plainLanguage),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: crosshair,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-lift"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
									align: "start",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													syllables: !current.syllables
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpellCheck, {
												size: 14,
												className: "icon-motion icon-lift"
											}), profile.syllables ? "Syllables on" : "Syllables"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													letterGuide: !current.letterGuide
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenText, {
												size: 14,
												className: "icon-motion icon-lift"
											}), profile.letterGuide ? "Letter guide on" : "Letter guide"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													wordGuide: !current.wordGuide
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, {
												size: 14,
												className: "icon-motion icon-lift"
											}), profile.wordGuide ? "Word highlight on" : "Word highlight"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													plainLanguage: !current.plainLanguage
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
												size: 14,
												className: "icon-motion icon-lift"
											}), profile.plainLanguage ? "Plain words on" : "Plain words"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													lookup: !current.lookup
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenText, {
												size: 14,
												className: "icon-motion icon-lift"
											}), profile.lookup !== false ? "Definitions on" : "Tap for definition"]
										}),
										isSpeaking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => {
												afterMenu(() => {
													stopSpeech();
													setIsSpeaking(false);
													setIsPaused(false);
													announce("Stopped listening");
												});
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
												size: 14,
												className: "icon-motion icon-lift"
											}), "Stop listening"]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													dimChrome: !current.dimChrome
												});
											}),
											children: profile.dimChrome ? "Chrome dimmed" : "Dim the chrome"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												setChunkOn((value) => !value);
												setChunkIndex(0);
											}),
											children: chunkOn ? "Exit chunks" : "Break into 3-minute chunks"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: dockButton,
										onClick: () => setFindOpen(true),
										"aria-label": "Find in book",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: magnifyingGlass,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-lift"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, { children: ["Find in book ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "⌘F" })] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: dockButton,
										onClick: () => setMarksOpen(true),
										disabled: bookHighlights.length === 0,
										"aria-label": `Highlights (${bookHighlights.length})`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: highlighter,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-lift"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: bookHighlights.length > 0 ? `Highlights · ${bookHighlights.length}` : "No highlights yet" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: cn(dockButton, "hidden sm:inline-flex"),
										onClick: () => setReconnectOpen((value) => !value),
										"aria-label": "Where was I",
										"aria-pressed": reconnectOpen,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: compass,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-turn"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Where was I" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: dockButton,
										onClick: () => {
											const was = bookmarked;
											toggleBookmark();
											toast.success(was ? "Bookmark removed" : `Saved at ${Math.round(useAppStore.getState().reading.progress * 100)}%`);
										},
										"aria-label": bookmarked ? "Remove bookmark" : "Bookmark this place",
										"aria-pressed": bookmarked,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: bookmarked ? bookmarkSimpleFill : bookmarkSimple,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-rise"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: bookmarked ? "Remove bookmark" : "Save this place" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: cn(dockButton, "hidden sm:inline-flex"),
										onClick: toggleSpeech,
										"aria-label": isSpeaking && !isPaused ? "Pause listening" : isPaused ? "Resume listening" : "Listen",
										"aria-pressed": isSpeaking,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSwap, {
											active: isSpeaking && !isPaused,
											ActiveIcon: PhPause,
											InactiveIcon: isPaused ? PhPlay : PhSpeaker
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: isSpeaking && !isPaused ? "Pause listening" : isPaused ? "Resume listening" : "Listen" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon-sm",
										className: dockButton,
										"aria-label": "More actions",
										"aria-pressed": autoScrolling,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: dotsThree,
											width: 19,
											height: 19,
											"aria-hidden": true,
											className: "icon-motion icon-lift"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
									align: "end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											className: "sm:hidden",
											onSelect: () => afterMenu(toggleSpeech),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												icon: isSpeaking && !isPaused ? pause : speakerHigh,
												width: 14,
												height: 14,
												"aria-hidden": true,
												className: "icon-motion icon-lift"
											}), isSpeaking && !isPaused ? "Pause listening" : isPaused ? "Resume listening" : "Listen"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											className: "sm:hidden",
											onSelect: () => afterMenu(() => setReconnectOpen((value) => !value)),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												icon: compass,
												width: 14,
												height: 14,
												"aria-hidden": true,
												className: "icon-motion icon-turn"
											}), "Where was I"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											className: "sm:hidden",
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													plainLanguage: !current.plainLanguage
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												icon: translate,
												width: 14,
												height: 14,
												"aria-hidden": true,
												className: "icon-motion icon-lift"
											}), profile.plainLanguage ? "Plain words on" : "Plain words"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											className: "sm:hidden",
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													wordGuide: !current.wordGuide
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												icon: crosshair,
												width: 14,
												height: 14,
												"aria-hidden": true,
												className: "icon-motion icon-lift"
											}), profile.wordGuide ? "Word highlight on" : "Word highlight"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											className: "sm:hidden",
											onSelect: () => afterMenu(() => {
												const current = useAppStore.getState().profile;
												setProfile({
													...current,
													syllables: !current.syllables
												});
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpellCheck, {
												size: 14,
												className: "icon-motion icon-lift"
											}), profile.syllables ? "Syllables on" : "Syllables"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(toggleAutoScroll),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsDown, {
												size: 14,
												className: "icon-motion icon-drop"
											}), autoScrolling ? "Pause auto-scroll" : "Auto-scroll"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => setRsvpOpen(true)),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
												size: 14,
												className: "icon-motion icon-lift"
											}), "Speed reader"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => setSimplifyOpen(true)),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
												size: 14,
												className: "icon-motion icon-lift"
											}), "Rewrite this page"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												setCheckPicks([]);
												setCheckOpen(true);
											}),
											disabled: checkpoints.length === 0,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, {
												size: 14,
												className: "icon-motion icon-lift"
											}), "Check understanding"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => setNoteOpen(true)),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyNote, {
												size: 14,
												className: "icon-motion icon-lift"
											}), "Quick note"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												copyReading(text, profile, targetWpm, readingTitle).then(() => toast.success("Copied with formatting")).catch(() => toast.error("Could not copy"));
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
												size: 14,
												className: "icon-motion icon-lift"
											}), "Copy text"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => afterMenu(() => {
												try {
													downloadReading(text, profile, targetWpm, readingTitle);
													toast.success("Downloaded with formatting");
												} catch {
													toast.error("Could not download");
												}
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
												size: 14,
												className: "icon-motion icon-drop"
											}), "Download"]
										})
									]
								})] }),
								paged || chaptered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-0.5 hidden h-5 w-px bg-fg/12 sm:block",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderPager, {
									page: paged ? pdfPage : chapterIndex,
									pageCount: paged ? pageCount : 0,
									chapter: chapterIndex,
									chapterCount,
									chapters,
									onPage: setPdfPage,
									onChapter: setChapter
								})] }) : null,
								chunkOn && chunks.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-1 flex items-center gap-1 text-xs tabular-nums text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon-sm",
											disabled: chunkIndex <= 0,
											onClick: () => setChunkIndex((i) => Math.max(0, i - 1)),
											"aria-label": "Previous chunk",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
												size: 16,
												className: "icon-motion icon-shift-back"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											chunkIndex + 1,
											"/",
											chunks.length
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon-sm",
											disabled: chunkIndex >= chunks.length - 1,
											onClick: () => setChunkIndex((i) => Math.min(chunks.length - 1, i + 1)),
											"aria-label": "Next chunk",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
												size: 16,
												className: "icon-motion icon-shift"
											})
										})
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderProgress, {})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeedReader, {
				open: rsvpOpen,
				onOpenChange: setRsvpOpen,
				words,
				onProgress: onRsvpProgress
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: simplifyOpen,
				onOpenChange: setSimplifyOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-2 text-lg font-medium",
						children: "Simpler wording"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mb-4 text-sm text-muted",
						children: "A local rewrite. Dense words become plainer ones. Nothing leaves this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: [
							simplified.complexity,
							" · grade ",
							simplified.originalGrade,
							simplified.simplifiedGrade !== simplified.originalGrade ? ` → ${simplified.simplifiedGrade}` : "",
							simplified.replacements > 0 ? ` · ${simplified.replacements} swap${simplified.replacements === 1 ? "" : "s"}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-h-64 overflow-y-auto text-sm leading-relaxed",
						children: simplified.simplified
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setSimplifyOpen(false),
							children: "Keep original"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: simplified.replacements === 0 && simplified.simplified === pageText.trim(),
							onClick: () => {
								tapFeedback("ok");
								if (paged) {
									const next = [...pdfPages];
									next[Math.max(0, pdfPage - 1)] = simplified.simplified;
									startReading(joinPdfPages(next), {
										title: readingTitle,
										kind: "pdf",
										pdfPage
									});
								} else if (chaptered) {
									const next = [...textChapters];
									const index = Math.max(0, chapterIndex - 1);
									if (next[index]) next[index] = {
										...next[index],
										body: simplified.simplified
									};
									startReading(joinTextChapters(next), {
										title: readingTitle,
										kind: "text",
										chapter: chapterIndex
									});
								} else startReading(simplified.simplified);
								setSimplifyOpen(false);
								toast.success("Using the simpler version");
							},
							children: "Use this version"
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: checkOpen,
				onOpenChange: setCheckOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-2 text-lg font-medium",
						children: "Check understanding"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mb-4 text-sm text-muted",
						children: "Three gist questions from this page. Nothing is scored off this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-80 space-y-4 overflow-y-auto",
						children: checkpoints.map((question, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-sm font-medium",
								children: question.prompt
							}), question.options.map((option, optionIndex) => {
								const picked = checkPicks[index];
								const show = typeof picked === "number";
								const right = optionIndex === question.answerIndex;
								const selected = picked === optionIndex;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCheckPicks((current) => {
										const next = [...current];
										next[index] = optionIndex;
										return next;
									}),
									className: cn("flex min-h-11 w-full rounded-md px-3 py-2 text-left text-sm", selected ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8", show && right && !selected && "ring-1 ring-accent"),
									children: option
								}, option);
							})]
						}, question.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setCheckOpen(false),
							children: "Close"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: checkPicks.filter((n) => typeof n === "number").length < checkpoints.length,
							onClick: () => {
								const score = scoreComprehension(checkpoints.map((question, index) => checkPicks[index] === question.answerIndex));
								const pct = score == null ? 0 : Math.round(score * 100);
								toast.success(`${pct}% on this check`);
								setCheckOpen(false);
							},
							children: "Score"
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: findOpen,
				onOpenChange: setFindOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-3 text-lg font-medium",
						children: "Find in book"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "sr-only",
						children: "Search every chapter of this book and jump to a result."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: findQuery,
						onChange: (event) => setFindQuery(event.target.value),
						placeholder: "Search this book…",
						"aria-label": "Search this book",
						className: "mb-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs text-muted",
						role: "status",
						children: findQuery.trim().length < 2 ? "Type at least two characters." : findHits.length === 0 ? "No matches." : `${findHits.length}${findHits.length === 200 ? "+" : ""} match${findHits.length === 1 ? "" : "es"}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[52vh] space-y-1.5 overflow-y-auto",
						children: findHits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "icon-group flex w-full flex-col items-start gap-1 rounded-md bg-bg px-3 py-2.5 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
							onClick: () => {
								setFindOpen(false);
								jumpTo(hit.section, hit.lineIdx);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "line-clamp-2 text-sm leading-relaxed",
								children: [
									hit.text.slice(0, hit.start),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
										className: "rounded-xs bg-accent/25 text-fg",
										children: hit.text.slice(hit.start, hit.end)
									}),
									hit.text.slice(hit.end)
								]
							}), searchSections.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: chapters[Math.max(0, hit.section - 1)]?.title ?? (paged ? `Page ${hit.section}` : `Part ${hit.section}`)
							}) : null]
						}, `${hit.section}:${hit.lineIdx}:${hit.start}`))
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: marksOpen,
				onOpenChange: setMarksOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-3 text-lg font-medium",
						children: "Highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "mb-3 text-sm text-muted",
						children: [
							bookHighlights.length,
							" in ",
							readingTitle,
							". Select one to jump to it."
						]
					}),
					bookHighlights.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => {
								exportHighlights({ [markKey]: bookHighlights }, () => readingTitle);
								feedback("good", { message: "Highlights exported" });
							},
							children: "Export as Markdown"
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[60vh] space-y-1.5 overflow-y-auto",
						children: [...bookHighlights].sort((a, b) => a.section - b.section || a.lineIdx - b.lineIdx || a.start - b.start).map((mark) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-md bg-bg px-3 py-2.5 shadow-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "icon-group flex w-full flex-col items-start gap-1 text-left",
										onClick: () => {
											setMarksOpen(false);
											jumpTo(mark.section, mark.lineIdx);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-clamp-3 pr-7 text-sm leading-relaxed",
											children: mark.text
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted",
											children: chaptered || paged ? chapters[Math.max(0, mark.section - 1)]?.title ?? (paged ? `Page ${mark.section}` : `Part ${mark.section}`) : new Date(mark.at).toLocaleDateString()
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Remove highlight: ${mark.text.slice(0, 50)}`,
										className: "icon-group absolute top-1.5 right-1.5 rounded-sm p-1.5 text-subtle transition-colors hover:bg-fg/6 hover:text-fg",
										onClick: () => {
											removeHighlight(mark.lineIdx, mark.section, mark.start);
											feedback("bad", { message: "Highlight removed" });
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											icon: x,
											width: 13,
											height: 13,
											"aria-hidden": true,
											className: "icon-motion icon-turn"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										defaultValue: mark.note ?? "",
										placeholder: "Add a note…",
										"aria-label": `Note on: ${mark.text.slice(0, 60)}`,
										rows: mark.note ? 2 : 1,
										onBlur: (event) => {
											if (event.target.value.trim() === (mark.note ?? "")) return;
											annotateHighlight(mark.lineIdx, mark.section, mark.start, event.target.value);
										},
										className: "mt-2 min-h-9 w-full resize-y rounded-sm bg-surface px-2 py-1.5 text-xs leading-relaxed"
									})
								]
							}, `${mark.section}:${mark.lineIdx}:${mark.start}`);
						})
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: noteOpen,
				onOpenChange: setNoteOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-3 text-lg font-medium",
						children: "Quick note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mb-4 text-sm text-muted",
						children: "Saved to this session on this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: note,
						onChange: (event) => setNote(event.target.value),
						placeholder: "Capture a thought while you read…",
						"aria-label": "Quick note",
						className: "min-h-40 rounded-md bg-bg px-3 py-2 shadow-border"
					})
				] })
			})
		]
	});
}
function ReaderProgress() {
	const progress = useAppStore((s) => s.reading.progress);
	const pct = Math.round(progress * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "px-1.5 text-xs tabular-nums text-muted sm:hidden",
			children: [pct, "%"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-2 hidden w-20 sm:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: pct,
				label: "Reading progress"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hidden pr-2 text-xs tabular-nums text-muted sm:inline",
			children: [pct, "%"]
		})
	] });
}
function ReaderLiveStats({ autoScrolling, targetWpm }) {
	const currentWpm = useAppStore((s) => s.reading.currentWpm);
	const pauses = useAppStore((s) => s.reading.pauses.length);
	const rereads = useAppStore((s) => s.reading.rereads.length);
	const dwells = useAppStore((s) => s.reading.dwellCount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		pauses > 0 ? ` ${pauses} pause${pauses === 1 ? "" : "s"}.` : "",
		rereads > 0 ? ` ${rereads} reread${rereads === 1 ? "" : "s"}.` : "",
		dwells > 0 ? ` ${dwells} line${dwells === 1 ? "" : "s"} held.` : "",
		autoScrolling ? ` Auto-scrolling at ${targetWpm} words per minute.` : "",
		currentWpm ? ` Current pace ${currentWpm} words per minute.` : ""
	] });
}
function lazyView(load, exportName) {
	return (0, import_react.lazy)(async () => {
		const open = async () => {
			const Comp = (await load())[exportName];
			if (!Comp) throw new Error("Could not open this view.");
			return { default: Comp };
		};
		try {
			return await open();
		} catch (error) {
			await new Promise((resolve) => window.setTimeout(resolve, 160));
			try {
				return await open();
			} catch (retryError) {
				if (isStaleChunkError(retryError) || isStaleChunkError(error)) reloadView(exportName);
				const message = friendlyViewError(retryError);
				return { default: function ViewLoadError() {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col items-center justify-center gap-3 px-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm text-pretty text-muted",
							children: message
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
							onClick: () => window.location.reload(),
							children: "Reload"
						})]
					});
				} };
			}
		}
	});
}
var Library$1 = lazyView(() => import("./library-D_49Ttl4.mjs"), "Library");
var Insights = lazyView(() => import("./insights-wJ9KXvQP.mjs"), "Insights");
var SettingsPanel = lazyView(() => import("./settings-panel-BnuAeZeq.mjs"), "SettingsPanel");
var CommandPalette = (0, import_react.lazy)(async () => {
	try {
		return { default: (await import("./command-palette-5D99wA0E.mjs")).CommandPalette };
	} catch {
		return { default: function PaletteUnavailable() {
			return null;
		} };
	}
});
var HAS_SCROLL_TIMELINE = typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");
/**
* Flag whether the active pane has moved off its top.
*
* The header carries no seam until something is actually behind it — an edge
* that appears on first scroll and dissolves on the way back. Guarded so the
* attribute is only touched when the boolean flips, not on every frame.
*/
var lastScrolled = false;
function markScrolled(scrolled) {
	if (scrolled === lastScrolled) return;
	lastScrolled = scrolled;
	document.documentElement.dataset.scrolled = scrolled ? "true" : "false";
}
function Pane({ children, className, onProgress }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("pane-scroll h-full overflow-y-auto", className),
		onScroll: () => {
			const node = ref.current;
			if (!node) return;
			markScrolled(node.scrollTop > 4);
			if (HAS_SCROLL_TIMELINE) return;
			if (!onProgress) return;
			const remaining = node.scrollHeight - node.clientHeight;
			onProgress(remaining > 1 ? Math.min(1, node.scrollTop / remaining) : 1);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-full pt-14 sm:pt-16",
			children
		})
	});
}
function TabFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-center justify-center pt-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Loading" })
	});
}
function AppShell() {
	const hydrate = useAppStore((s) => s.hydrate);
	const tab = useAppStore((s) => s.tab);
	const direction = useAppStore((s) => s.direction);
	const setTab = useAppStore((s) => s.setTab);
	const text = useAppStore((s) => s.text);
	const setCommandOpen = useAppStore((s) => s.setCommandOpen);
	const theme = useAppStore((s) => s.profile.theme);
	const dimChrome = useAppStore((s) => s.profile.dimChrome);
	const motionCues = useAppStore((s) => s.profile.motionCues);
	const cvdPreview = useAppStore((s) => s.cvdPreview);
	const setCvdPreview = useAppStore((s) => s.setCvdPreview);
	const progressRef = (0, import_react.useRef)(0);
	const navigate = useNavigate();
	const urlView = useSearch({
		from: "/",
		select: (search) => search.view
	});
	/**
	* Keep the URL and the store's tab in step, in both directions.
	*
	* This has to be one effect, not two. Two effects run in the same commit and
	* each sees the other's value pre-update: the URL->store one queues setTab
	* while the store->URL one still reads the old tab and navigates straight
	* back, so a deep link ping-pongs forever. `lastSynced` records the value the
	* two sides last agreed on, which is enough to tell which one actually moved
	* and therefore which one to follow.
	*
	* Store->URL is driven off `tab` rather than off setTab because some moves
	* (startReading) change the tab from inside the store, and those deserve a
	* history entry too. It pushes, so Back returns to the previous view instead
	* of leaving the app.
	*/
	const lastSynced = (0, import_react.useRef)(tab);
	(0, import_react.useEffect)(() => {
		const raw = urlView;
		const valid = typeof raw === "string" && TABS.some((item) => item.id === raw);
		const url = valid ? raw : "explore";
		if (raw !== void 0 && !valid) {
			navigate({
				to: "/",
				search: {},
				replace: true
			});
			return;
		}
		if (url === tab) {
			lastSynced.current = tab;
			return;
		}
		if (url !== lastSynced.current) {
			lastSynced.current = url;
			setTab(url);
			return;
		}
		lastSynced.current = tab;
		navigate({
			to: "/",
			search: tab === "explore" ? {} : { view: tab }
		});
	}, [
		tab,
		urlView,
		setTab,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.motionCues = motionCues ? "true" : "false";
	}, [motionCues]);
	(0, import_react.useEffect)(() => {
		const stopNav = (event) => {
			if (!event.dataTransfer || ![...event.dataTransfer.types].includes("Files")) return;
			event.preventDefault();
		};
		window.addEventListener("dragover", stopNav);
		window.addEventListener("drop", stopNav);
		return () => {
			window.removeEventListener("dragover", stopNav);
			window.removeEventListener("drop", stopNav);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const label = TABS.find((item) => item.id === tab)?.label ?? "Explore";
		document.title = tab === "explore" ? "NeuroLens" : `${label} · NeuroLens`;
	}, [tab]);
	(0, import_react.useEffect)(() => {
		progressRef.current = 0;
		document.documentElement.style.setProperty("--scroll-progress", "0");
		markScrolled(false);
	}, [tab]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				setCommandOpen(!useAppStore.getState().commandOpen);
			}
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [setCommandOpen]);
	const toastTheme = isDarkScheme(theme) ? "dark" : "light";
	function setProgress(value) {
		progressRef.current = value;
		if (HAS_SCROLL_TIMELINE) return;
		document.documentElement.style.setProperty("--scroll-progress", String(value));
	}
	const reading = tab === "read";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("nl-shell relative flex h-dvh flex-col overflow-hidden bg-bg text-fg", reading && "is-reading", reading && dimChrome && "is-reading-dim"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "nl-chrome-in pointer-events-none absolute inset-x-0 top-0 z-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex h-14 items-center gap-1.5 px-2 sm:h-16 sm:gap-2 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": "NeuroLens home",
								className: "icon-group flex shrink-0 items-center gap-2.5 text-fg",
								onClick: () => setTab("explore"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
									detail: true,
									className: "size-9 text-fg sm:size-10"
								}, tab), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-sm font-medium tracking-tight sm:inline",
									children: "NeuroLens"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "nl-title-swap min-w-0 flex-1 truncate text-sm font-medium tracking-tight lg:hidden",
								children: TABS.find((item) => item.id === tab)?.label ?? "Explore"
							}, tab),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								"aria-label": "Primary",
								className: "hidden min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] lg:block [&::-webkit-scrollbar]:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									tone: "nav",
									value: tab,
									onChange: setTab,
									options: TABS.map((item) => ({
										id: item.id,
										label: item.label,
										disabled: item.id === "read" && !text,
										disabledReason: item.id === "read" && !text ? "Open a book or paste some text first" : void 0
									})),
									className: "mx-auto h-10 w-max max-w-full"
								})
							}),
							cvdPreview !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "hidden sm:inline-flex",
								"aria-label": `Turn off ${CVD_LABELS[cvdPreview]} simulation`,
								onClick: () => setCvdPreview("none"),
								children: CVD_LABELS[cvdPreview]
							}),
							reading ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "hidden lg:inline-flex",
								onClick: () => setCommandOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										icon: magnifyingGlass,
										width: 14,
										height: 14,
										"aria-hidden": true,
										className: "icon-motion icon-lift"
									}),
									"Search",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "⌘K" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon-sm",
								className: "lg:hidden",
								"aria-label": "Search",
								onClick: () => setCommandOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									icon: magnifyingGlass,
									width: 16,
									height: 16,
									"aria-hidden": true,
									className: "icon-motion icon-lift"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, {})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "scroll-progress pointer-events-none h-0.5 bg-fg/35"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "nl-scroll-edge pointer-events-none h-6 bg-gradient-to-b from-bg/80 to-transparent"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				tabIndex: -1,
				"aria-label": TABS.find((item) => item.id === tab)?.label ?? "Explore",
				className: "relative min-h-0 flex-1 outline-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nl-stage-in absolute inset-0 overflow-hidden",
					"data-dir": direction >= 0 ? "1" : "-1",
					children: [
						tab === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
							onProgress: setProgress,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {})
						}),
						tab === "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabErrorBoundary, {
							slot: "reader",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, {})
						}),
						tab === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
							onProgress: setProgress,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabErrorBoundary, {
								slot: "library",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabFallback, {}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library$1, { className: "icon-motion icon-lift" })
								})
							})
						}),
						tab === "insights" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
							onProgress: setProgress,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabErrorBoundary, {
								slot: "insights",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabFallback, {}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insights, {})
								})
							})
						}),
						tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
							onProgress: setProgress,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabErrorBoundary, {
								slot: "settings",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabFallback, {}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {})
								})
							})
						})
					]
				}, tab)
			}),
			reading ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "nl-footer-in flex shrink-0 flex-row items-center justify-center gap-3 px-4 py-2 text-center text-xs text-muted sm:min-h-12 sm:gap-4 sm:py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "NeuroLens · Crafted for neurodivergent minds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden opacity-40 sm:inline",
						"aria-hidden": true,
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Legal",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-fg",
							children: "Privacy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/thank-you",
							className: "hover:text-fg",
							children: "Thank you"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionCues, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Neuro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveAnnouncer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FontLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineReady, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: toastTheme,
				position: "bottom-right",
				offset: 24,
				mobileOffset: 16,
				visibleToasts: 3,
				gap: 10,
				toastOptions: { classNames: {
					toast: "!bg-surface !text-fg !border-0 !shadow-[var(--shadow-float)] !rounded-[16px]",
					title: "!text-sm !font-medium !text-fg",
					description: "!text-sm !text-muted"
				} }
			})
		]
	}) });
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { SCHEME_TOKENS as A, leverOf as B, Segmented as C, processBionicText as D, nearestFixationPreset as E, evaluateScheme as F, simulatedContrast as G, measureReadingStrain as H, formatContrastRatio as I, textContrastLevel as J, splitPdfPages as K, hueDistinctionLost as L, bestContrastTheme as M, classifyReading as N, CVD_HINTS as O, describePair as P, isHexColor as R, Label as S, Switch as T, normalizeHex as U, linearizeChannel as V, simulateHex as W, useAppStore as X, uiContrastPass as Y, searchBook as _, requestMotionPermission as a, FIXATION_PRESETS as b, ContrastMeter as c, processDocument as d, FileDrop as f, PatternPanel as g, Companion as h, motionPermissionNeeded as i, TRUST as j, PATTERN_META as k, SchemePicker as l, announce as m, exportEverything as n, AccessibleBionic as o, LensLoader as p, splitTextChapters as q, exportHighlights as r, FontPicker as s, routes_exports as t, downloadHighlights as u, DEMO_SENTENCE as v, Slider as w, Input as x, SAMPLE_TEXTS as y, isLargeText as z };
