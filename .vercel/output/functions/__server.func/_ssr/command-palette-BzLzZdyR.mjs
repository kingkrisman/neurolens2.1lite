import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS, t as useGSAP } from "../_libs/gsap+gsap__react.mjs";
import { o as FEATURED_PASSAGES, s as fetchPassage, u as passageToReaderText } from "./bible-api-h6m_SDja.mjs";
import { N as BookOpen, b as Eye, c as Sparkles, g as Library, l as Settings2 } from "../_libs/lucide-react.mjs";
import { B as easeOut, O as remoteMessage, U as useReducedMotion, V as registerGsap, j as Kbd } from "./router-DpF9KtHP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as NAMED_PRESETS, O as TABS, T as READING_PROFILES, U as useAppStore, b as SAMPLE_TEXTS } from "./routes-tWvz_YTN.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/command-palette-BzLzZdyR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
registerGsap();
var TAB_ICONS = {
	explore: Sparkles,
	read: BookOpen,
	library: Library,
	insights: Eye,
	settings: Settings2
};
function CommandPalette() {
	const open = useAppStore((s) => s.commandOpen);
	const setOpen = useAppStore((s) => s.setCommandOpen);
	const setTab = useAppStore((s) => s.setTab);
	const startReading = useAppStore((s) => s.startReading);
	const sessions = useAppStore((s) => s.sessions);
	const text = useAppStore((s) => s.text);
	const setMode = useAppStore((s) => s.setMode);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const savedProfiles = useAppStore((s) => s.savedProfiles);
	const reduce = useReducedMotion();
	const [shown, setShown] = (0, import_react.useState)(open);
	const veilRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open) setShown(true);
	}, [open]);
	useGSAP(() => {
		if (!shown) return;
		const veil = veilRef.current;
		const panel = panelRef.current;
		if (!veil || !panel) return;
		try {
			gsapWithCSS.killTweensOf([veil, panel]);
			if (open) {
				gsapWithCSS.fromTo(veil, { opacity: 0 }, {
					opacity: 1,
					duration: reduce ? .01 : .22,
					ease: "none"
				});
				gsapWithCSS.fromTo(panel, {
					opacity: 0,
					y: 12,
					scale: .98
				}, {
					opacity: 1,
					y: 0,
					scale: 1,
					duration: reduce ? .01 : .38,
					ease: easeOut
				});
			} else {
				gsapWithCSS.to(veil, {
					opacity: 0,
					duration: reduce ? .01 : .16,
					ease: "none"
				});
				gsapWithCSS.to(panel, {
					opacity: 0,
					y: 8,
					scale: .98,
					duration: reduce ? .01 : .18,
					ease: "power2.in",
					onComplete: () => setShown(false)
				});
			}
		} catch {
			setShown(open);
		}
	}, { dependencies: [
		open,
		shown,
		reduce
	] });
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [setOpen]);
	return shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			ref: veilRef,
			type: "button",
			className: "absolute inset-0 bg-fg/25",
			"aria-label": "Close command menu",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-[18%] left-1/2 w-[min(32rem,calc(100%-1.5rem))] -translate-x-1/2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: panelRef,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Command menu",
				className: "origin-top overflow-hidden rounded-lg bg-surface shadow-float",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e, {
					label: "Command menu",
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
							autoFocus: true,
							"aria-label": "Search commands",
							placeholder: "Go somewhere, open a chapter, or apply a profile",
							className: "h-12 w-full border-b border-border bg-transparent px-4 text-sm outline-none placeholder:text-subtle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.List, {
							className: "max-h-80 overflow-y-auto p-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
									className: "px-3 py-6 text-center text-sm text-muted",
									children: "Nothing matches."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
									heading: "Navigate",
									className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
									children: TABS.map((tab) => {
										const Icon = TAB_ICONS[tab.id];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
											disabled: tab.id === "read" && !text,
											onSelect: () => {
												try {
													setTab(tab.id);
													setOpen(false);
												} catch {
													setOpen(false);
												}
											},
											className: "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												size: 15,
												className: "text-muted"
											}), tab.label]
										}, tab.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
									heading: "Reading modes",
									className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
									children: Object.keys(READING_PROFILES).map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
										onSelect: () => {
											try {
												setMode(mode);
											} catch {}
											setOpen(false);
										},
										className: "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
										children: READING_PROFILES[mode].name
									}, mode))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
									heading: "Profiles",
									className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
									children: [...NAMED_PRESETS, ...savedProfiles].map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
										onSelect: () => {
											try {
												applySavedProfile(preset);
											} catch {
												toast.error("Could not apply that profile");
											}
											setOpen(false);
										},
										className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
										children: preset.name
									}, preset.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
									heading: "Samples",
									className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
									children: SAMPLE_TEXTS.map((sample) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
										onSelect: () => {
											startReading(sample.text, {
												title: sample.title,
												kind: "text"
											});
											setOpen(false);
										},
										className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
										children: sample.title
									}, sample.title))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
									heading: "Bible",
									className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
									children: FEATURED_PASSAGES.map((passage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
										onSelect: () => {
											(async () => {
												try {
													const next = await fetchPassage({
														book: passage.book,
														chapter: passage.chapter,
														verse: passage.verse
													});
													startReading(passageToReaderText(next), {
														title: next.reference,
														kind: "bible",
														sourceId: next.reference
													});
													setOpen(false);
												} catch (err) {
													toast.error(remoteMessage(err, "Could not load that passage"));
												}
											})();
										},
										className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
										children: passage.label
									}, passage.id))
								}),
								sessions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
									heading: "Recent",
									className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
									children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
										onSelect: () => {
											startReading(session.content, {
												title: session.title,
												kind: session.kind,
												sourceId: session.sourceId
											});
											setOpen(false);
										},
										className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
										children: session.title
									}, session.openedAt))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 border-t border-border px-3 py-2 text-[11px] text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "↵" }), " select"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "esc" }), " close"]
							})]
						})
					]
				})
			})
		})]
	}) : null;
}
//#endregion
export { CommandPalette };
