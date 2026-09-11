import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ScrollScene, G as PanelWell, U as Panel, W as PanelHeader, Y as cn, _ as FONT_CLASS, b as READING_PROFILES, k as PageEnter, p as Button, x as RHYTHM_CHOICES, y as NAMED_PRESETS } from "./router-BhUcEtEs.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as SCHEME_TOKENS, C as Segmented, D as processBionicText, E as nearestFixationPreset, G as simulatedContrast, I as formatContrastRatio, J as textContrastLevel, L as hueDistinctionLost, O as CVD_HINTS, P as describePair, R as isHexColor, S as Label, T as Switch, U as normalizeHex, V as linearizeChannel, W as simulateHex, X as useAppStore, Y as uiContrastPass, a as requestMotionPermission, b as FIXATION_PRESETS, c as ContrastMeter, i as motionPermissionNeeded, l as SchemePicker, n as exportEverything, o as AccessibleBionic, r as exportHighlights, s as FontPicker, v as DEMO_SENTENCE, w as Slider, x as Input, z as isLargeText } from "./routes-Bg4iLR7G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-panel-QOyDtXRE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WCAG_22_READER = [
	{
		id: "1.3.1",
		level: "A",
		name: "Info and Relationships",
		addedIn: "2.0",
		summary: "Headings, landmarks, lists, and labels carry structure. Screen readers must not have to guess what a region is from visual layout."
	},
	{
		id: "1.4.1",
		level: "A",
		name: "Use of Color",
		addedIn: "2.0",
		summary: "Color is not the only way to tell things apart. Hue-only emphasis fails when reds and greens collapse."
	},
	{
		id: "1.4.3",
		level: "AA",
		name: "Contrast (Minimum)",
		addedIn: "2.0",
		summary: "Normal text 4.5:1. Large text (24px, or 18.67px bold) 3:1."
	},
	{
		id: "1.4.4",
		level: "AA",
		name: "Resize Text",
		addedIn: "2.0",
		summary: "Text can grow to 200% without clipping or losing meaning."
	},
	{
		id: "1.4.6",
		level: "AAA",
		name: "Contrast (Enhanced)",
		addedIn: "2.0",
		summary: "Normal text 7:1. Large text 4.5:1."
	},
	{
		id: "1.4.10",
		level: "AA",
		name: "Reflow",
		addedIn: "2.1",
		summary: "At 320 CSS pixels wide, reading does not require horizontal scrolling."
	},
	{
		id: "1.4.11",
		level: "AA",
		name: "Non-text Contrast",
		addedIn: "2.1",
		summary: "UI controls and meaningful graphics 3:1 against adjacent colors."
	},
	{
		id: "1.4.12",
		level: "AA",
		name: "Text Spacing",
		addedIn: "2.1",
		summary: "Content still works when line-height is 1.5, letter-spacing 0.12em, word-spacing 0.16em, paragraph 2em."
	},
	{
		id: "2.1.1",
		level: "A",
		name: "Keyboard",
		addedIn: "2.0",
		summary: "Everything you can do with a pointer is reachable from the keyboard."
	},
	{
		id: "2.4.1",
		level: "A",
		name: "Bypass Blocks",
		addedIn: "2.0",
		summary: "A skip link jumps past repeating chrome (header, primary nav) to the main region."
	},
	{
		id: "2.4.3",
		level: "A",
		name: "Focus Order",
		addedIn: "2.0",
		summary: "Tab order follows reading order. Sentences in the reader are not a field of buttons."
	},
	{
		id: "2.4.6",
		level: "AA",
		name: "Headings and Labels",
		addedIn: "2.0",
		summary: "Each view has a heading. Icon-only controls have an accessible name."
	},
	{
		id: "2.4.7",
		level: "AA",
		name: "Focus Visible",
		addedIn: "2.0",
		summary: "Keyboard focus has a visible indicator."
	},
	{
		id: "2.4.11",
		level: "AA",
		name: "Focus Not Obscured (Minimum)",
		addedIn: "2.2",
		summary: "The focused item is at least partly visible — not fully hidden under sticky chrome."
	},
	{
		id: "2.4.13",
		level: "AAA",
		name: "Focus Appearance",
		addedIn: "2.2",
		summary: "Focus indicator is at least 2 CSS px, 3:1 contrast, and encloses the component (or equivalent area)."
	},
	{
		id: "2.5.7",
		level: "AA",
		name: "Dragging Movements",
		addedIn: "2.2",
		summary: "Anything that uses a drag also has a single-pointer alternative. File drop is paired with Upload."
	},
	{
		id: "2.5.8",
		level: "AA",
		name: "Target Size (Minimum)",
		addedIn: "2.2",
		summary: "Pointer targets are at least 24×24 CSS pixels, unless spaced or text-only."
	},
	{
		id: "3.2.6",
		level: "A",
		name: "Consistent Help",
		addedIn: "2.2",
		summary: "Help, if offered, sits in the same relative place across pages."
	},
	{
		id: "3.3.7",
		level: "A",
		name: "Redundant Entry",
		addedIn: "2.2",
		summary: "Do not ask for the same information twice in a process. NeuroLens has no multi-step forms."
	},
	{
		id: "3.3.8",
		level: "AA",
		name: "Accessible Authentication (Minimum)",
		addedIn: "2.2",
		summary: "Sign-in cannot require recalling a password from memory. NeuroLens has no accounts."
	},
	{
		id: "4.1.2",
		level: "A",
		name: "Name, Role, Value",
		addedIn: "2.0",
		summary: "Controls expose a name, a role, and their state (pressed, current page, progress). Bionic markup is hidden from the accessibility tree."
	},
	{
		id: "4.1.3",
		level: "AA",
		name: "Status Messages",
		addedIn: "2.1",
		summary: "Recommendations, listen, and auto-scroll announce through a live region. Focus does not move."
	}
];
/** Overrides a page must still survive under SC 1.4.12. */
var TEXT_SPACING_1_4_12 = {
	lineHeight: 1.5,
	letterSpacingEm: .12,
	wordSpacingEm: .16,
	paragraphEm: 2
};
function evaluateTextSpacing(input) {
	return {
		lineHeight: input.lineHeight,
		letterSpacingEm: input.letterSpacing,
		wordSpacingEm: input.wordSpacing,
		lineMeets: input.lineHeight >= TEXT_SPACING_1_4_12.lineHeight,
		letterMeets: input.letterSpacing >= TEXT_SPACING_1_4_12.letterSpacingEm,
		wordMeets: input.wordSpacing >= TEXT_SPACING_1_4_12.wordSpacingEm
	};
}
function evaluatePairCriteria(input) {
	const large = isLargeText(input.fontSizePx);
	const level = textContrastLevel(input.ratio, input.fontSizePx);
	const simulated = simulatedContrast(input.fg, input.bg, input.cvd);
	const hueLost = hueDistinctionLost(input.fg, input.bg, input.cvd);
	return [
		{
			id: "1.4.1",
			status: input.cvd === "none" ? "info" : hueLost ? "fail" : "pass",
			detail: hueLost ? `Under ${input.cvd} these two colors pull together. Hue was doing the work.` : input.cvd === "none" ? "Run a color-vision view to see if the pair still holds without hue." : `Still separable under ${input.cvd} (${simulated.toFixed(1)}:1 as seen).`
		},
		{
			id: "1.4.3",
			status: level === "fail" ? "fail" : "pass",
			detail: large ? `${input.ratio.toFixed(1)}:1 at ${input.fontSizePx}px (large text, AA is 3:1).` : `${input.ratio.toFixed(1)}:1 at ${input.fontSizePx}px (AA is 4.5:1).`
		},
		{
			id: "1.4.6",
			status: level === "AAA" ? "pass" : "fail",
			detail: large ? `AAA large text needs 4.5:1.` : `AAA normal text needs 7:1.`
		},
		{
			id: "1.4.11",
			status: uiContrastPass(input.ratio) ? "pass" : "fail",
			detail: `${input.ratio.toFixed(1)}:1 against adjacent paper. Controls need 3:1.`
		}
	];
}
function Level({ value }) {
	if (value === true || value === "pass") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-success",
		children: "pass"
	});
	if (value === false || value === "fail") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-danger",
		children: "fail"
	});
	if (value === "info") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-muted",
		children: "note"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value });
}
var CVD_OPTIONS = [
	{
		id: "none",
		label: "Typical"
	},
	{
		id: "protanopia",
		label: "Red-blind"
	},
	{
		id: "deuteranopia",
		label: "Green-blind"
	},
	{
		id: "tritanopia",
		label: "Blue-blind"
	}
];
function verdict(level) {
	if (level === "AAA") return "Easy to read";
	if (level === "AA") return "Readable";
	return "Harder than recommended";
}
function ContrastLab() {
	const profile = useAppStore((s) => s.profile);
	const cvd = useAppStore((s) => s.cvdPreview);
	const setCvd = useAppStore((s) => s.setCvdPreview);
	const tokens = SCHEME_TOKENS[profile.theme] ?? SCHEME_TOKENS.paper;
	const [fg, setFg] = (0, import_react.useState)(tokens.fg);
	const [bg, setBg] = (0, import_react.useState)(tokens.bg);
	(0, import_react.useEffect)(() => {
		setFg(tokens.fg);
		setBg(tokens.bg);
	}, [tokens.fg, tokens.bg]);
	const pair = (0, import_react.useMemo)(() => {
		if (!isHexColor(fg) || !isHexColor(bg)) return null;
		return describePair(fg, bg);
	}, [fg, bg]);
	const seenFg = pair ? simulateHex(pair.fg, cvd) : tokens.fg;
	const seenBg = pair ? simulateHex(pair.bg, cvd) : tokens.bg;
	const seenRatio = pair ? simulatedContrast(pair.fg, pair.bg, cvd) : 0;
	const spacing = evaluateTextSpacing(profile);
	const live = pair ? evaluatePairCriteria({
		ratio: pair.ratio,
		fontSizePx: profile.fontSize,
		cvd,
		fg: pair.fg,
		bg: pair.bg
	}) : [];
	const liveById = Object.fromEntries(live.map((row) => [row.id, row]));
	const seenLevel = seenRatio >= 7 ? "AAA" : seenRatio >= 4.5 ? "AA" : "fail";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-pretty text-muted",
			children: "Check this pair. Changing rooms above updates the page. These boxes only test a pair."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "lab-fg",
				children: "Ink"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "scheme-dot size-8 shrink-0 rounded-md",
					style: { background: isHexColor(fg) ? normalizeHex(fg) : tokens.fg }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "lab-fg",
					value: fg,
					onChange: (event) => setFg(event.target.value),
					spellCheck: false
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "lab-bg",
				children: "Paper"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "scheme-dot size-8 shrink-0 rounded-md",
					style: { background: isHexColor(bg) ? normalizeHex(bg) : tokens.bg }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "lab-bg",
					value: bg,
					onChange: (event) => setBg(event.target.value),
					spellCheck: false
				})]
			})] })]
		}),
		pair ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-md px-4 py-5",
			style: {
				background: seenBg,
				color: seenFg
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-medium",
				children: "The quick brown fox reads the page."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm",
				style: {
					color: seenFg,
					opacity: .8
				},
				children: [
					verdict(seenLevel),
					" · ",
					formatContrastRatio(seenRatio),
					cvd !== "none" ? " with this vision" : ""
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "Use six-digit hex, like #1c1611."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
					children: "Color vision"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
					value: cvd,
					onChange: setCvd,
					label: "Color vision simulation",
					options: CVD_OPTIONS,
					className: "h-9 w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-pretty text-muted",
					children: CVD_HINTS[cvd]
				})
			]
		}),
		pair ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-4 grid grid-cols-2 gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs tracking-wide text-muted uppercase",
				children: "This pair"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
				className: "mt-1 font-medium",
				children: [
					verdict(pair.normal),
					" · ",
					formatContrastRatio(pair.ratio)
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs tracking-wide text-muted uppercase",
				children: "Controls"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 font-medium",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Level, { value: pair.ui })
			})] })]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "mt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer text-sm font-medium",
					children: "How the score is counted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-pretty text-muted",
					children: "Contrast is a luminance ratio, not a guess about how a color looks. Body text needs 4.5:1 for AA and 7:1 for AAA."
				}),
				pair ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-xs leading-relaxed text-muted",
					children: [
						"Ink L ",
						pair.fgLum.toFixed(3),
						" · paper L ",
						pair.bgLum.toFixed(3),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"(",
						Math.max(pair.fgLum, pair.bgLum).toFixed(3),
						" + 0.05) / (",
						Math.min(pair.fgLum, pair.bgLum).toFixed(3),
						" + 0.05) = ",
						pair.ratio.toFixed(2),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Linear ink (",
						pair.fgRgb.map((c) => linearizeChannel(c).toFixed(3)).join(", "),
						")"
					]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer text-sm font-medium",
					children: "Checks on this page"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-pretty text-muted",
					children: "Contrast is three criteria. The rest is whether the page still works when color, space, or target size change."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 divide-y divide-border rounded-md bg-fg/4",
					children: WCAG_22_READER.map((criterion) => {
						const liveRow = liveById[criterion.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-3 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted",
											children: criterion.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-2",
											children: criterion.name
										})]
									}), liveRow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Level, { value: liveRow.status }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: "page"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted",
									children: criterion.summary
								}),
								liveRow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed",
									children: liveRow.detail
								}) : null
							]
						}, criterion.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs leading-relaxed text-pretty text-muted",
					children: [
						"Your spacing ",
						spacing.lineHeight.toFixed(1),
						" / ",
						TEXT_SPACING_1_4_12.lineHeight.toFixed(1),
						" line, letter",
						" ",
						spacing.letterSpacingEm.toFixed(2),
						"em, word ",
						spacing.wordSpacingEm.toFixed(2),
						"em. Reader controls are 44px."
					]
				})
			]
		})
	] });
}
function SettingsPanel() {
	const clearData = useAppStore((s) => s.clearData);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const saveCurrentProfile = useAppStore((s) => s.saveCurrentProfile);
	const savedProfiles = useAppStore((s) => s.savedProfiles);
	const deleteSavedProfile = useAppStore((s) => s.deleteSavedProfile);
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const mode = useAppStore((s) => s.mode);
	const setMode = useAppStore((s) => s.setMode);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const setTargetWpm = useAppStore((s) => s.setTargetWpm);
	const [holding, setHolding] = (0, import_react.useState)(false);
	const [profileName, setProfileName] = (0, import_react.useState)("");
	const timer = (0, import_react.useRef)(null);
	function startHold() {
		setHolding(true);
		timer.current = window.setTimeout(() => {
			clearData();
			setHolding(false);
			toast.success("Local data cleared");
		}, 2e3);
	}
	function endHold() {
		setHolding(false);
		if (timer.current) window.clearTimeout(timer.current);
	}
	const preview = profile.bionicStrength > 0 ? processBionicText(DEMO_SENTENCE, profile.bionicStrength, profile.rhythmOptimization) : DEMO_SENTENCE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageEnter, {
		className: "mx-auto h-full max-w-3xl px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-enter": true,
				className: "text-5xl",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-enter": true,
				className: "mt-3 text-muted",
				children: "These controls write to the reader immediately. Nothing is stored off this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollScene, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 mb-1 px-1 text-xs font-medium tracking-wide text-muted uppercase first:mt-0",
							children: "Reading"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Mode",
							description: "A named starting point. You can still tune every slider below."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
							className: "grid grid-cols-2 gap-1.5 p-2",
							children: (() => {
								const ids = Object.keys(READING_PROFILES);
								return ids.map((id, index) => {
									const selected = mode === id;
									const spans = index === ids.length - 1 && ids.length % 2 === 1;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": selected,
										onClick: () => setMode(id),
										className: cn("min-w-0 rounded-md px-3 py-3 text-left text-sm font-medium text-pretty whitespace-normal transition-[background-color,box-shadow,color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-fg)_18%,transparent)]", selected ? "bg-fg text-primary-fg shadow-border" : "bg-surface text-fg shadow-border hover:shadow-border-hover", spans && "col-span-2"),
										children: READING_PROFILES[id].name
									}, id);
								});
							})()
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Live preview",
							description: "The sentence updates as you move the sliders."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
							className: "px-5 py-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("text-left leading-relaxed", FONT_CLASS[profile.fontFamily] ?? "font-sans"),
								style: {
									fontSize: profile.fontSize,
									lineHeight: profile.lineHeight,
									letterSpacing: `${profile.letterSpacing}em`,
									wordSpacing: `${profile.wordSpacing}em`
								},
								children: profile.bionicStrength > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibleBionic, {
									text: DEMO_SENTENCE,
									html: preview
								}) : DEMO_SENTENCE
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 mb-1 px-1 text-xs font-medium tracking-wide text-muted uppercase first:mt-0",
							children: "Appearance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Color",
							description: "Cream, peach, and butter are the evidence-backed pastels for dyslexia — warmer pages, less glare. High-contrast white is the one to avoid."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemePicker, {
									value: profile.theme,
									onChange: (theme) => setProfile({
										...profile,
										theme
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastMeter, {
									theme: profile.theme,
									fontSize: profile.fontSize
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "mt-4 border-t border-border pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
										className: "cursor-pointer text-sm font-medium",
										children: "Contrast lab"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastLab, {})
									})]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Type",
							description: "Size and spacing move the needle. Lexend reduces crowding. Atkinson keeps I, l, and 1 from collapsing. OpenDyslexic is a preference — trials have not shown it faster or more accurate than a clear sans."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
							className: "space-y-5 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FontPicker, {
									value: profile.fontFamily,
									onChange: (fontFamily) => setProfile({
										...profile,
										fontFamily
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
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
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Line height" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted",
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
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Letter spacing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted",
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
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Word spacing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted",
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
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Fixation",
							description: "Bionic reading marks the letters the eye lands on first, so the rest of the word can be skipped. Stronger marks help tired or wandering attention; lighter marks stay closer to ordinary type."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
							className: "space-y-5 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Strength" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: [Math.round(profile.bionicStrength * 100), "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 0,
									max: .8,
									step: .05,
									value: [profile.bionicStrength],
									onValueChange: ([value]) => setProfile({
										...profile,
										bionicStrength: value ?? 0
									}),
									"aria-label": "Fixation strength"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
									children: "Rhythm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-1.5 sm:grid sm:grid-cols-3",
									children: RHYTHM_CHOICES.map((curve) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": profile.rhythmCurve === curve.id,
										onClick: () => setProfile({
											...profile,
											rhythmCurve: curve.id,
											rhythmOptimization: curve.id !== "steady"
										}),
										className: cn("flex min-h-11 min-w-0 flex-col items-start justify-center rounded-md px-3 py-2 text-left sm:items-center sm:text-center", profile.rhythmCurve === curve.id ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium whitespace-nowrap",
											children: curve.label
										})
									}, curve.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-center justify-between gap-3 px-1 py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "plain-settings",
										children: "Plain words (swap dense wording)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "plain-settings",
										checked: Boolean(profile.plainLanguage),
										onCheckedChange: (checked) => setProfile({
											...profile,
											plainLanguage: checked
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-start justify-between gap-3 px-1 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex min-w-0 flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "motion-cues-settings",
											children: "Motion cues"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											id: "motion-cues-settings-hint",
											className: "mt-0.5 text-xs leading-snug text-pretty text-muted",
											children: "For motion sickness: stops parallax and scroll drift, and runs markers along the screen edges that move against your travel. Uses the motion sensor where one exists, so it works in a car or on a train. Separate from your system’s reduced-motion setting."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "motion-cues-settings",
										checked: Boolean(profile.motionCues),
										onCheckedChange: (checked) => {
											setProfile({
												...profile,
												motionCues: checked
											});
											if (checked && motionPermissionNeeded()) requestMotionPermission();
										},
										"aria-describedby": "motion-cues-settings-hint"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-start justify-between gap-3 px-1 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex min-w-0 flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "companion-settings",
											children: "Neuro, the companion"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											id: "companion-settings-hint",
											className: "mt-0.5 text-xs leading-snug text-pretty text-muted",
											children: "A face you can drag anywhere and ask to change how the page reads. Turning this off removes it everywhere; this is where it comes back."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "companion-settings",
										checked: profile.companion !== false,
										onCheckedChange: (checked) => setProfile({
											...profile,
											companion: checked
										}),
										"aria-describedby": "companion-settings-hint"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-center justify-between gap-3 px-1 py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "justify-settings",
										children: "Justify text"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "justify-settings",
										checked: profile.align === "justify",
										onCheckedChange: (checked) => setProfile({
											...profile,
											align: checked ? "justify" : "left"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-center justify-between gap-3 px-1 py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "syllables-settings",
										children: "Syllables"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "syllables-settings",
										checked: Boolean(profile.syllables),
										onCheckedChange: (checked) => setProfile({
											...profile,
											syllables: checked
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-center justify-between gap-3 px-1 py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "letters-settings",
										children: "Letter guide (b / d)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "letters-settings",
										checked: Boolean(profile.letterGuide),
										onCheckedChange: (checked) => setProfile({
											...profile,
											letterGuide: checked
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-center justify-between gap-3 px-1 py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "words-settings",
										children: "Word highlight"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "words-settings",
										checked: Boolean(profile.wordGuide),
										onCheckedChange: (checked) => setProfile({
											...profile,
											wordGuide: checked
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-11 items-center justify-between gap-3 px-1 py-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "lookup-settings",
										children: "Tap a word for its definition"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										id: "lookup-settings",
										checked: profile.lookup !== false,
										onCheckedChange: (checked) => setProfile({
											...profile,
											lookup: checked
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Target pace" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: [targetWpm, " WPM"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: 120,
									max: 420,
									step: 10,
									value: [targetWpm],
									onValueChange: ([value]) => setTargetWpm(value ?? 220),
									"aria-label": "Target words per minute"
								})] })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 mb-1 px-1 text-xs font-medium tracking-wide text-muted uppercase first:mt-0",
							children: "Your setups"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Saved setups",
							description: "Apply a named setup, or keep the one you just tuned."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
							className: "flex flex-col gap-1.5 p-2",
							children: [
								NAMED_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "justify-between",
									onClick: () => {
										applySavedProfile(preset);
										toast.success(preset.name);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: preset.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted",
										children: [preset.targetWpm, " WPM"]
									})]
								}, preset.id)),
								savedProfiles.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "flex-1 justify-between",
										onClick: () => applySavedProfile(preset),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: preset.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted",
											children: [preset.targetWpm, " WPM"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										onClick: () => deleteSavedProfile(preset.id),
										children: "Remove"
									})]
								}, preset.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: profileName,
										onChange: (event) => setProfileName(event.target.value),
										placeholder: "Name this setup",
										"aria-label": "Name this setup",
										className: "h-11 min-w-0 flex-1 rounded-md bg-bg px-3 text-sm shadow-border outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: () => {
											if (!profileName.trim()) {
												toast.error("Name this setup first");
												return;
											}
											saveCurrentProfile(profileName);
											setProfileName("");
											toast.success("Setup saved");
										},
										children: "Save"
									})]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 mb-1 px-1 text-xs font-medium tracking-wide text-muted uppercase first:mt-0",
							children: "Data"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Export",
							description: "Everything NeuroLens knows lives in this browser. Clearing site data, switching browsers, or losing this machine takes it with them — these files are how you keep it."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
							className: "flex flex-wrap gap-2 px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									const marks = useAppStore.getState().highlights;
									const count = Object.values(marks).reduce((sum, list) => sum + list.length, 0);
									if (!count) {
										toast("Nothing marked yet.");
										return;
									}
									const sessions = useAppStore.getState().sessions;
									exportHighlights(marks, (key) => {
										return sessions.find((item) => item.content.startsWith(key))?.title ?? key.slice(0, 60);
									});
									toast.success(`${count} highlight${count === 1 ? "" : "s"} exported`);
								},
								children: "Highlights as Markdown"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									const state = useAppStore.getState();
									exportEverything({
										sessions: state.sessions,
										highlights: state.highlights,
										bookmarks: state.bookmarks,
										savedProfiles: state.savedProfiles,
										profile: state.profile,
										targetWpm: state.targetWpm
									});
									toast.success("Backup downloaded");
								},
								children: "Everything as JSON"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
							as: "h3",
							title: "Reset",
							description: "Hold to clear saved settings, notes, bookmarks, and reading history. Release to cancel."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
							className: "px-4 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "destructive",
								className: "relative overflow-hidden",
								onPointerDown: startHold,
								onPointerUp: endHold,
								onPointerLeave: endHold,
								onPointerCancel: endHold,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hold-fill absolute inset-0 bg-danger/20",
									"data-holding": holding ? "true" : "false"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative",
									children: holding ? "Hold to confirm" : "Clear local data"
								})]
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
								as: "h3",
								title: "About NeuroLens"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
								className: "px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: "An adaptive reading environment. Paste text, open a PDF page by page, look up a Bible chapter, search Project Gutenberg, or open a poem. Adaptive watches pace, pauses, rereads, and feel — it recommends, and it never silently rewrites a locked setting."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs text-subtle",
									children: "Version 4.0 · WEB · Gutendex · PoetryDB"
								})]
							})]
						})
					]
				}) })
			})
		]
	});
}
//#endregion
export { SettingsPanel };
