import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as ChevronRight } from "../_libs/lucide-react.mjs";
import { A as ScrollScene, D as GsapStagger, G as PanelWell, H as Media, U as Panel, W as PanelHeader, et as wordCount, k as PageEnter, p as Button } from "./router-BR13pP-z.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as leverOf, F as evaluateScheme, H as measureReadingStrain, I as formatContrastRatio, M as bestContrastTheme, N as classifyReading, X as useAppStore, g as PatternPanel, h as Companion, j as TRUST, k as PATTERN_META, y as SAMPLE_TEXTS } from "./routes-DSsj-njg.mjs";
import { t as NumberFlow } from "../_libs/number-flow+number-flow__react.mjs";
import { i as ResponsiveContainer, n as XAxis, r as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-C--JBv-W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LEVER_LABEL$1 = {
	"contrast-low": "raising contrast",
	rereading: "opening up line spacing",
	"type-size": "increasing type size",
	pauses: "increasing type size after pauses",
	"pace-strain": "slowing the target pace",
	"strong-performance": "raising the target pace"
};
/**
* What the adaptive engine has worked out, said plainly.
*
* The engine keeps a trust weight per lever and moves it based on whether a
* change actually reduced strain — so it holds real opinions about how this
* particular person reads. None of that was visible anywhere, which is a bad
* position for software that asks to be trusted with someone's attention: it
* was making decisions and showing only the decision.
*
* Lens is the face of it because the alternative is a bare table of weights.
* A companion that says "spacing helped, so I reach for it first" is legible in
* a way that `rereading: 1.25` is not.
*/
function AdaptivePanel() {
	const memory = useAppStore((s) => s.adaptiveMemory);
	const reading = useAppStore((s) => s.reading);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const feel = useAppStore((s) => s.readingFeel);
	const mode = useAppStore((s) => s.mode);
	const strain = (0, import_react.useMemo)(() => measureReadingStrain({
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
	}), [
		reading,
		targetWpm,
		feel
	]);
	const learned = (0, import_react.useMemo)(() => {
		return Object.keys(LEVER_LABEL$1).map((rule) => ({
			rule,
			...leverOf(memory, rule)
		})).filter((lever) => lever.uses > 0).sort((a, b) => Math.abs(b.trust - 1) - Math.abs(a.trust - 1));
	}, [memory]);
	const mood = mode !== "adaptive" ? "resting" : learned.length === 0 ? "watching" : strain.peak > .5 ? "thinking" : "pleased";
	const headline = mode !== "adaptive" ? "Adaptive is off, so I am not watching this sitting." : learned.length === 0 ? "Still learning how you read. Nothing worth changing yet." : strain.peak > .5 ? "This page is costing you more than the last one." : "This is going well.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		className: "mt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4 px-5 py-5 sm:gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Companion, {
				mood,
				label: "Lens, your reading companion",
				className: "size-14 shrink-0 sm:size-16"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: "What I have learned"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm leading-relaxed text-pretty",
						children: headline
					}),
					learned.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5",
						children: learned.map((lever) => {
							const helped = lever.trust > 1.001;
							const gaveUp = lever.trust <= TRUST.min + .001;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: `mt-1.5 size-1.5 shrink-0 rounded-full ${helped ? "bg-accent" : "bg-fg/25"}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: helped ? `${LEVER_LABEL$1[lever.rule]} helped, so I try it sooner` : gaveUp ? `${LEVER_LABEL$1[lever.rule]} did not help you, so I have stopped suggesting it` : `${LEVER_LABEL$1[lever.rule]} made little difference`
								})]
							}, lever.rule);
						})
					}) : null
				]
			})]
		})
	});
}
function formatDuration(ms) {
	const seconds = Math.max(0, Math.round(ms / 1e3));
	if (seconds < 60) return `${seconds}s`;
	const minutes = Math.floor(seconds / 60);
	const rest = seconds % 60;
	return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
}
function average(values) {
	const clean = values.filter((value) => Number.isFinite(value));
	if (!clean.length) return null;
	return Math.round(clean.reduce((sum, value) => sum + value, 0) / clean.length);
}
function buildSuggestions({ sessions, reading, profile, mode, targetWpm, feel }) {
	const out = [];
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
		neuralEvents: reading.neuralEvents ?? []
	});
	if (!sessions.length && !reading.startedAt) out.push({
		id: "sample",
		title: "Start a first sitting",
		body: `Open “${SAMPLE_TEXTS[0].title}” and read a page. Insights fill from pace, pauses, and how the page felt.`,
		cta: "Open a sample"
	});
	if (feel === "slow" || wpm != null && wpm < targetWpm * .72) out.push({
		id: "wpm-down",
		title: "Lower the target pace",
		body: `This sitting ran behind ${targetWpm} WPM. A slower target gives the line more room.`,
		cta: `Set ${Math.max(120, targetWpm - 20)} WPM`
	});
	else if (feel === "fast" || wpm != null && wpm > targetWpm * 1.15 && rereads < 1) out.push({
		id: "wpm-up",
		title: "You can raise the target",
		body: "Pace held without rereads. A slightly higher target keeps auto-scroll honest.",
		cta: `Set ${Math.min(420, targetWpm + 15)} WPM`
	});
	if (rereads >= 2 && !profile.plainLanguage) out.push({
		id: "plain",
		title: "Turn on plain words",
		body: "You moved back through the page more than once. Swapping dense words for simpler ones makes the next pass cheaper.",
		cta: "Enable plain words"
	});
	if ((pattern.id === "scan" || pattern.id === "wander") && pattern.confidence >= .35 && !profile.wordGuide) out.push({
		id: "scan",
		title: pattern.id === "wander" ? "Catch the last stretch" : "Stay with the line",
		body: pattern.id === "wander" ? "This sitting mixed long holds with jumps — a common signature of mindless reading. Word highlight keeps the next pass on the line." : "This sitting jumped ahead more than it landed. Word highlight keeps the next pass from skipping.",
		cta: "Turn on word highlight"
	});
	if (pattern.id === "decode" && !profile.plainLanguage && rereads < 2) out.push({
		id: "plain",
		title: "Turn on plain words",
		body: "Lines are being held longer than a fluent pass. Simpler wording can shorten the next fixation.",
		cta: "Enable plain words"
	});
	if (pauses >= 2 && profile.fontFamily === "sans") out.push({
		id: "lexend",
		title: "Try a quieter typeface",
		body: "Long pauses often mean the letters are working too hard. Lexend lowers crowding without rewriting the prose.",
		cta: "Use Lexend"
	});
	if (contrast.bodyLevel === "fail" || rereads >= 2 && profile.theme === "paper") {
		const next = bestContrastTheme(profile.theme);
		if (next !== profile.theme) out.push({
			id: "contrast",
			title: "Raise the ink",
			body: `Body contrast is ${contrast.body.toFixed(1)}:1 at ${profile.fontSize}px. ${next === "ink" ? "Ink" : "Contrast"} keeps your room and darkens the type.`,
			cta: `Switch to ${next === "ink" ? "Ink" : "Contrast"}`
		});
	}
	if (mode !== "adaptive" && sessions.length > 0) out.push({
		id: "adaptive",
		title: "Let Adaptive watch a sitting",
		body: "It recommends pace, spacing, and contrast. It will not silently rewrite a locked setting.",
		cta: "Turn on Adaptive"
	});
	return out.slice(0, 3);
}
function Insights() {
	const sessions = useAppStore((s) => s.sessions);
	const text = useAppStore((s) => s.text);
	const startReading = useAppStore((s) => s.startReading);
	const reading = useAppStore((s) => s.reading);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const setTargetWpm = useAppStore((s) => s.setTargetWpm);
	const readingFeel = useAppStore((s) => s.readingFeel);
	const mode = useAppStore((s) => s.mode);
	const setMode = useAppStore((s) => s.setMode);
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const wordsBySession = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const session of sessions) map.set(session.openedAt, wordCount(session.content));
		return map;
	}, [sessions]);
	const words = (0, import_react.useMemo)(() => [...wordsBySession.values()].reduce((sum, n) => sum + n, 0), [wordsBySession]);
	const sessionCount = sessions.length;
	const progressPct = Math.round(reading.progress * 100);
	const focusScore = Math.max(0, 100 - reading.pauses.length * 12 - reading.rereads.length * 8);
	const feelScore = readingFeel === "right" ? 100 : readingFeel === "slow" || readingFeel === "fast" ? 70 : null;
	const quality = progressPct === 0 && feelScore == null ? null : feelScore == null ? Math.round(progressPct * .7 + focusScore * .3) : Math.round(progressPct * .4 + feelScore * .35 + focusScore * .25);
	const wpmSeries = sessions.slice(0, 8).reverse().map((session, index) => ({
		d: String(index + 1),
		v: session.currentWpm ?? Math.round((session.progress ?? 0) * 100)
	}));
	const chartData = wpmSeries.length > 0 ? wpmSeries : [{
		d: "1",
		v: reading.currentWpm ?? progressPct
	}];
	const meanWpm = average(sessions.map((session) => session.currentWpm ?? 0).filter(Boolean));
	const totalTime = sessions.reduce((sum, session) => sum + (session.elapsedMs ?? 0), 0) + reading.elapsedActiveMs;
	const contrast = evaluateScheme(profile.theme, profile.fontSize);
	const suggestions = (0, import_react.useMemo)(() => buildSuggestions({
		sessions,
		reading,
		profile,
		mode,
		targetWpm,
		feel: readingFeel
	}), [
		sessions,
		reading,
		profile,
		mode,
		targetWpm,
		readingFeel
	]);
	const insight = readingFeel === "slow" ? "You marked this page as too fast. A lower target may help the next pass." : readingFeel === "fast" ? "You marked this page as too slow. You can raise the target if you want." : reading.rereads.length >= 2 ? "You moved back through the page more than once." : reading.pauses.length >= 2 ? "Long pauses showed up in this session." : text ? "Keep reading. Pace, pauses, and rereads fill this log as you go." : "Open a passage to start a live reading log.";
	const feelLabel = readingFeel === "slow" ? "Too fast" : readingFeel === "fast" ? "Too slow" : readingFeel === "right" ? "Just right" : "—";
	function apply(id) {
		try {
			if (id === "sample") {
				startReading(SAMPLE_TEXTS[0].text, { title: SAMPLE_TEXTS[0].title });
				return;
			}
			if (id === "plain") {
				setProfile({
					...profile,
					plainLanguage: true
				});
				toast.success("Plain words on");
				return;
			}
			if (id === "lexend") {
				setProfile({
					...profile,
					fontFamily: "lexend"
				});
				toast.success("Lexend is on");
				return;
			}
			if (id === "contrast") {
				const next = bestContrastTheme(profile.theme);
				setProfile({
					...profile,
					theme: next
				});
				toast.success("Contrast raised");
				return;
			}
			if (id === "scan") {
				setProfile({
					...profile,
					wordGuide: true
				});
				toast.success("Word highlight on");
				return;
			}
			if (id === "adaptive") {
				setMode("adaptive");
				toast.success("Adaptive is watching");
				return;
			}
			if (id === "wpm-down") {
				setTargetWpm(Math.max(120, targetWpm - 20));
				toast.success("Target slowed");
				return;
			}
			if (id === "wpm-up") {
				setTargetWpm(Math.min(420, targetWpm + 15));
				toast.success("Target raised");
			}
		} catch {
			toast.error("Could not apply that");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageEnter, {
		className: "mx-auto h-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-enter": true,
				className: "text-5xl",
				children: "Insights"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-enter": true,
				className: "mt-3 max-w-lg text-muted",
				children: "How this sitting moves: fixations, saccades, rereads. Inferred from the page — no camera."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollScene, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-enter": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
									src: "/images/reading-room.jpg",
									alt: "Window light in a university reading room",
									width: 1600,
									height: 900,
									"data-scrub": true,
									className: "aspect-[16/8] w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col justify-end p-5 text-primary-fg sm:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-wide text-primary-fg/70 uppercase",
											children: "Session score"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-serif text-6xl tracking-tight tabular-nums",
											children: quality == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": true,
												className: "text-primary-fg/35",
												children: "—"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "sr-only",
												children: "No score yet"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberFlow, { value: quality })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 max-w-sm text-sm text-primary-fg/75",
											children: insight
										})
									]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-enter": true,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternPanel, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-enter": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptivePanel, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-enter": true,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptiveLearning, {})
				}),
				suggestions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"data-enter": true,
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
						children: "What to try"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GsapStagger, {
						className: "grid gap-3 md:grid-cols-3",
						children: suggestions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							title: item.title,
							description: item.body
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
							className: "px-3 pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								onClick: () => apply(item.id),
								children: item.cta
							})
						})] }, item.id))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-enter": true,
					className: "mt-10 mb-3 text-xs font-medium tracking-wide text-muted uppercase",
					children: "Pace and focus"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GsapStagger, {
					className: "grid gap-3 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
							className: "bg-primary px-5 py-5 text-primary-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide uppercase opacity-70",
								children: meanWpm ? "Pace across sittings" : "Recent progress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 h-24 w-full min-w-0",
								children: chartData.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: 96,
									minWidth: 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: chartData,
										barCategoryGap: 8,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "d",
											hide: true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "v",
											fill: "color-mix(in oklab, var(--color-primary-fg) 45%, transparent)",
											radius: [
												3,
												3,
												0,
												0
											]
										})]
									})
								}) : null
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "How it felt",
							value: feelLabel,
							hint: "Pace, pauses, rereads, and how the page felt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Current WPM",
							value: reading.currentWpm == null ? "—" : reading.currentWpm,
							hint: meanWpm ? `Average ${meanWpm} · target ${targetWpm}` : `Target ${targetWpm}`,
							numeric: typeof reading.currentWpm === "number"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-enter": true,
					className: "mt-10 mb-3 text-xs font-medium tracking-wide text-muted uppercase",
					children: "All time"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GsapStagger, {
					className: "grid gap-3 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Words processed",
							value: words,
							hint: `Across ${sessionCount} session${sessionCount === 1 ? "" : "s"}`,
							numeric: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Time reading",
							value: totalTime > 0 ? formatDuration(totalTime) : "—",
							hint: `${reading.pauses.length} pause${reading.pauses.length === 1 ? "" : "s"} · ${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Contrast",
							value: formatContrastRatio(contrast.body),
							hint: `${profile.name} · WCAG ${contrast.bodyLevel} · ${mode}`
						})
					]
				}),
				sessions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10 pb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-4 flex items-baseline gap-2 text-xs font-medium tracking-wide text-muted uppercase",
						children: ["History", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-subtle tabular-nums normal-case",
							children: sessions.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-2",
						"data-batch-children": true,
						children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => startReading(session.content, {
								title: session.title,
								kind: session.kind,
								sourceId: session.sourceId
							}),
							className: "group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-between gap-3 rounded-lg bg-bg px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-medium",
										children: session.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs text-muted",
										children: [
											new Date(session.openedAt).toLocaleTimeString([], {
												hour: "2-digit",
												minute: "2-digit"
											}),
											" · ",
											wordsBySession.get(session.openedAt) ?? 0,
											" words",
											session.progress != null ? ` · ${Math.round(session.progress * 100)}%` : "",
											session.currentWpm ? ` · ${session.currentWpm} WPM` : "",
											session.elapsedMs ? ` · ${formatDuration(session.elapsedMs)}` : "",
											session.pattern && PATTERN_META[session.pattern] ? ` · ${PATTERN_META[session.pattern].label.toLowerCase()}` : ""
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted",
									children: ["Resume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 14,
										className: "icon-motion icon-shift"
									})]
								})]
							})
						}, session.openedAt))
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 pb-8 text-sm text-muted",
					children: "No sittings yet. A sample or a pasted page will start the log."
				})
			] })
		]
	});
}
var LEVER_LABEL = {
	"contrast-low": "Higher contrast",
	rereading: "More line spacing",
	"type-size": "Larger type",
	pauses: "Larger type after pauses",
	"pace-strain": "Slower target pace",
	"strong-performance": "Faster target pace"
};
function AdaptiveLearning() {
	const memory = useAppStore((s) => s.adaptiveMemory);
	const mode = useAppStore((s) => s.mode);
	const learned = Object.entries(memory).filter(([, lever]) => lever && lever.uses > 0).sort((a, b) => (b[1]?.trust ?? 0) - (a[1]?.trust ?? 0));
	if (mode !== "adaptive" && learned.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
		title: "What NeuroLens has learned",
		description: learned.length === 0 ? "Nothing yet. Accept or dismiss a suggestion and its effect gets measured on the next stretch of reading." : "Each change is scored by whether your rereads and pauses actually fell afterwards. Ones that help get offered sooner."
	}), learned.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
		className: "space-y-2.5 px-5 pb-5",
		children: learned.map(([rule, lever]) => {
			const trust = lever?.trust ?? 1;
			const pct = Math.round((trust - .25) / 1.25 * 100);
			const verdict = trust > 1.05 ? "helping" : trust < .85 ? "not helping" : "no clear effect";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: LEVER_LABEL[rule] ?? rule
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [
						verdict,
						" · tried ",
						lever?.uses,
						"×"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-fg/8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-fg/45 transition-[width] duration-[400ms] ease-[var(--ease-out)]",
					style: { width: `${Math.max(4, Math.min(100, pct))}%` }
				})
			})] }, rule);
		})
	}) : null] });
}
function StatCard({ label, value, hint, numeric }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
		className: "px-5 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 font-serif tracking-tight ${numeric ? "text-4xl tabular-nums" : "text-3xl"}`,
				children: typeof value === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberFlow, { value }) : value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: hint
			})
		]
	}) });
}
//#endregion
export { Insights };
