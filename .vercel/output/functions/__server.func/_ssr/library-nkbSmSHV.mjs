import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as DEFAULT_TRANSLATION, c as findPassage, i as BIBLE_TRANSLATIONS, l as parseReference, n as BIBLE_BOOKS, o as FEATURED_PASSAGES, r as BIBLE_PLANS, s as fetchPassage, t as BIBLE_ATTRIBUTION, u as passageToReaderText } from "./bible-api-h6m_SDja.mjs";
import { A as BookOpen, D as ChevronLeft, E as ChevronRight, b as Download, u as Search, v as Highlighter, w as CircleAlert } from "../_libs/lucide-react.mjs";
import { A as ScrollScene, F as fetchJson, G as PanelWell, H as Media, I as isAbortError, J as Skeleton, L as isRemoteError, N as RemoteError, P as asRemoteError, R as remoteMessage, U as Panel, Y as cn, c as fallbackGutendexSearch, d as pickGutendexCover, f as searchGutendex, k as PageEnter, l as fetchGutendexPage, p as Button, s as FEATURED_GUTENDEX_QUERIES, u as fetchGutendexReaderText, y as NAMED_PRESETS, z as Badge } from "./router-DspHHMnI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as Segmented, X as useAppStore, d as processDocument, f as FileDrop, m as announce, p as LensLoader, u as downloadHighlights, x as Input } from "./routes-CFhoKWK7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-nkbSmSHV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* One poster in a shelf.
*
* Artwork first: the title and meta sit under a gradient and only resolve on
* hover, so a row scans as a wall of covers rather than a wall of text. Touch
* has no hover to reveal them with, so there they are simply always visible
* (see `.nl-poster-meta`).
*/
function Poster({ title, meta, cover, badge, busy, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: onOpen,
		disabled: busy,
		"aria-label": meta ? `${title} — ${meta}` : title,
		className: cn("nl-poster group relative block overflow-hidden rounded-lg bg-surface text-left shadow-border", "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-fg)_30%,transparent)]", "disabled:opacity-60"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[2/3] w-full overflow-hidden bg-bg",
			children: [
				cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: cover,
					alt: "",
					width: 400,
					height: 600,
					className: "size-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-full items-center justify-center bg-gradient-to-br from-fg/8 to-fg/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						size: 26,
						className: "text-subtle",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
				}),
				badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-2 left-2 rounded-sm bg-black/55 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white/90 uppercase backdrop-blur-[2px]",
					children: badge
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nl-poster-meta absolute inset-x-0 bottom-0 p-2.5 sm:p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-2 text-xs leading-snug font-medium text-white sm:text-sm",
							children: title
						}),
						meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 line-clamp-1 text-[11px] text-white/65",
							children: meta
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-medium text-white/90",
							children: [busy ? "Opening" : "Read", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 11,
								"aria-hidden": true
							})]
						})
					]
				})
			]
		})
	});
}
/**
* A horizontally scrolling row of posters.
*
* Arrows are pointer-only affordances — a touch device scrolls the row
* directly, and rendering buttons it does not need would just cover two posters.
* They hide at the ends rather than sitting there disabled, so the control only
* exists while it can actually do something.
*/
function Shelf({ title, action, children }) {
	const ref = (0, import_react.useRef)(null);
	const [edges, setEdges] = (0, import_react.useState)({
		start: false,
		end: false
	});
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const read = () => {
			const max = node.scrollWidth - node.clientWidth;
			setEdges({
				start: node.scrollLeft > 8,
				end: node.scrollLeft < max - 8
			});
		};
		read();
		node.addEventListener("scroll", read, { passive: true });
		const observer = new ResizeObserver(read);
		observer.observe(node);
		return () => {
			node.removeEventListener("scroll", read);
			observer.disconnect();
		};
	}, []);
	function nudge(dir) {
		const node = ref.current;
		if (!node) return;
		node.scrollBy({
			left: dir * node.clientWidth * .85,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-medium tracking-tight sm:text-base",
				children: title
			}), action]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "nl-shelf",
				children
			}), [-1, 1].map((dir) => {
				const visible = dir === -1 ? edges.start : edges.end;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					tabIndex: -1,
					"aria-hidden": true,
					onClick: () => nudge(dir),
					className: cn("absolute top-1/2 z-30 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full", "bg-surface/90 text-fg shadow-float backdrop-blur-sm transition-opacity duration-[250ms]", "hover:bg-surface md:flex", dir === -1 ? "-left-2" : "-right-2", visible ? "opacity-100" : "pointer-events-none opacity-0"),
					children: dir === -1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						size: 17,
						"aria-hidden": true
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						size: 17,
						"aria-hidden": true
					})
				}, dir);
			})]
		})]
	});
}
var LINE_WIDTHS = [
	"w-5/6",
	"w-full",
	"w-2/3",
	"w-4/5",
	"w-3/4",
	"w-5/6"
];
function RemoteLoading({ label, lines = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label }), Array.from({ length: lines }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: `h-4 ${LINE_WIDTHS[index % LINE_WIDTHS.length]}` }, index))]
	});
}
function RemoteErrorView({ error, onRetry, hint }) {
	const message = remoteMessage(error, "Could not load that.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
				size: 16,
				className: "mt-0.5 shrink-0 text-danger"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: message
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs leading-relaxed text-muted",
				children: hint
			}) : null] })]
		}), onRetry ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			onClick: onRetry,
			children: "Retry"
		}) : null]
	});
}
var JOHN = BIBLE_BOOKS.find((book) => book.name === "John") ?? BIBLE_BOOKS[42];
function BibleLibrary() {
	const startReading = useAppStore((s) => s.startReading);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const [query, setQuery] = (0, import_react.useState)("");
	const [testament, setTestament] = (0, import_react.useState)("NT");
	const [book, setBook] = (0, import_react.useState)(JOHN);
	const [chapter, setChapter] = (0, import_react.useState)(3);
	const [verse, setVerse] = (0, import_react.useState)(void 0);
	const [translation, setTranslation] = (0, import_react.useState)(DEFAULT_TRANSLATION.id);
	const [passage, setPassage] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [error, setError] = (0, import_react.useState)(null);
	const [retryTick, setRetryTick] = (0, import_react.useState)(0);
	const spec = BIBLE_TRANSLATIONS.find((item) => item.id === translation) ?? DEFAULT_TRANSLATION;
	const ref = (0, import_react.useMemo)(() => verse ? {
		book: book.name,
		chapter,
		verse
	} : {
		book: book.name,
		chapter
	}, [
		book.name,
		chapter,
		verse
	]);
	const books = BIBLE_BOOKS.filter((item) => testament === "all" || item.testament === testament);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		setStatus("loading");
		setError(null);
		fetchPassage(ref, {
			signal: controller.signal,
			translation
		}).then((next) => {
			setPassage(next);
			setStatus("ready");
			announce(`Loaded ${next.reference}, ${next.translationName}`);
		}).catch((err) => {
			if (controller.signal.aborted || isAbortError(err)) return;
			setPassage(null);
			setStatus("error");
			setError(err);
			announce("Could not load that passage");
		});
		return () => controller.abort();
	}, [
		ref.book,
		ref.chapter,
		ref.verse,
		translation,
		retryTick
	]);
	function selectBook(next) {
		setBook(next);
		setChapter(1);
		setVerse(void 0);
	}
	function selectChapter(next) {
		setChapter(next);
		setVerse(void 0);
	}
	function openPassage(next) {
		startReading(passageToReaderText(next), {
			title: next.reference,
			kind: "bible",
			sourceId: next.reference
		});
	}
	function lookup(raw) {
		const parsed = parseReference(raw);
		if (!parsed) {
			toast("Use a reference like John 3:16 or Psalm 23");
			return;
		}
		const meta = BIBLE_BOOKS.find((item) => item.name === parsed.book);
		if (meta) setBook(meta);
		setChapter(parsed.chapter);
		setVerse(parsed.verse == null ? void 0 : String(parsed.verse));
	}
	function openFeatured(id) {
		const featured = findPassage(id);
		if (!featured) return;
		const meta = BIBLE_BOOKS.find((item) => item.name === featured.book);
		if (meta) setBook(meta);
		setChapter(featured.chapter);
		setVerse(featured.verse);
	}
	const heading = passage?.reference ?? `${book.name} ${chapter}${verse ? `:${verse}` : ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex max-w-2xl flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					lookup(query);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Bible reference"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "John 3:16, Psalm 23, Romans 8",
						"aria-label": "Bible reference"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "sm:w-32",
					children: "Look up"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
					children: "Translation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					role: "radiogroup",
					"aria-label": "Bible translation",
					children: BIBLE_TRANSLATIONS.map((item) => {
						const active = item.id === translation;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "radio",
							"aria-checked": active,
							onClick: () => setTranslation(item.id),
							className: cn("h-9 min-h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
							children: [item.short, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr-only",
								children: [" ", item.name]
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-subtle",
					children: spec.name
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Open a verse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: FEATURED_PASSAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openFeatured(item.id),
					className: cn("h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", book.name === item.book && chapter === item.chapter && verse === item.verse ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
					children: item.label
				}, item.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Reading plans"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: BIBLE_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
					className: "px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: plan.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 w-full",
							variant: "outline",
							onClick: () => {
								const first = plan.chapters[0];
								if (first) openFeatured(first);
							},
							children: "Begin"
						})
					]
				}) }, plan.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-medium tracking-wide text-muted uppercase",
							children: "Books"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
							value: testament,
							onChange: setTestament,
							label: "Testament",
							options: [
								{
									id: "all",
									label: "All"
								},
								{
									id: "OT",
									label: "Old"
								},
								{
									id: "NT",
									label: "New"
								}
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid max-h-[28rem] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-1",
						children: books.map((item) => {
							const active = item.name === book.name;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": active,
								onClick: () => selectBook(item),
								className: cn("rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform,background-color] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]", active && "bg-fg text-primary-fg"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("block rounded-lg px-3 py-3", active ? "bg-primary-fg/10" : "bg-bg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("mt-1 block text-xs", active ? "text-primary-fg/70" : "text-muted"),
										children: [
											item.chapters,
											" chapter",
											item.chapters === 1 ? "" : "s"
										]
									})]
								})
							}, item.name);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 pt-3 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-muted uppercase",
							children: book.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-2xl",
							children: book.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
						className: "max-h-48 overflow-y-auto p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: Array.from({ length: book.chapters }, (_, index) => {
								const n = index + 1;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": n === chapter,
									onClick: () => selectChapter(n),
									className: cn("min-h-11 min-w-11 rounded-md px-2 text-sm tabular-nums", n === chapter ? "bg-fg text-primary-fg" : "text-fg hover:bg-fg/8"),
									children: n
								}, n);
							})
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3 px-3 pt-3 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-muted uppercase",
								children: passage?.translationName ?? spec.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-2xl",
								children: heading
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: verse ? "Verse" : "Chapter" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
							className: "max-h-[32rem] overflow-y-auto px-4 py-5",
							"aria-busy": status === "loading",
							children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteLoading, {
								label: `Loading ${heading}`,
								lines: 6
							}) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteErrorView, {
								error,
								onRetry: () => setRetryTick((n) => n + 1),
								hint: "Check the reference, try another translation, or retry in a moment."
							}) : passage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: passage.verses.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex gap-3 text-base leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-7 shrink-0 pt-0.5 text-xs tabular-nums text-muted",
										children: item.verse
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif",
										children: item.text
									})]
								}, `${item.chapter}:${item.verse}`))
							}) : null
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-subtle",
								children: [
									passage?.source === "helloao" ? "via HelloAO" : "via bible-api.com",
									" · ",
									spec.short
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "pl-4 pr-3.5",
								disabled: !passage,
								onClick: () => {
									if (passage) openPassage(passage);
								},
								children: ["Open in reader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 16,
									className: "icon-motion icon-shift"
								})]
							})]
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-xs leading-relaxed text-subtle",
					children: BIBLE_ATTRIBUTION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => {
						const preset = NAMED_PRESETS.find((item) => item.id === "bible-study");
						if (preset) applySavedProfile(preset);
					},
					children: "Use Bible Study profile"
				})]
			})
		]
	});
}
var POETRYDB_ORIGIN = "https://poetrydb.org";
/** Exact endpoint requested for the featured poem. */
var OZYMANDIAS_LINES_URL = `${POETRYDB_ORIGIN}/title/Ozymandias/lines.json`;
var FEATURED_POEMS = [
	{
		title: "Ozymandias",
		author: "Percy Bysshe Shelley",
		url: OZYMANDIAS_LINES_URL
	},
	{
		title: "Sonnet 18: Shall I compare thee to a summer's day?",
		author: "William Shakespeare"
	},
	{
		title: "The Raven",
		author: "Edgar Allan Poe"
	},
	{
		title: "\"Hope\" is the thing with feathers",
		author: "Emily Dickinson"
	}
];
function poetryTitleUrl(title) {
	return `${POETRYDB_ORIGIN}/title/${encodeURIComponent(title.trim())}`;
}
function poetryAuthorUrl(author) {
	return `${POETRYDB_ORIGIN}/author/${encodeURIComponent(author.trim())}`;
}
function poetryRandomUrl(count = 6) {
	return `${POETRYDB_ORIGIN}/random/${count}`;
}
function isMiss(data) {
	return Boolean(data && typeof data === "object" && "status" in data && data.status === 404);
}
function normalize(record, fallback) {
	const lines = (record.lines ?? []).map((line) => line.trimEnd()).filter((line) => line !== void 0);
	if (!lines.length) return null;
	return {
		title: (record.title ?? fallback?.title ?? "Untitled").trim(),
		author: (record.author ?? fallback?.author ?? "Unknown").trim(),
		lines
	};
}
function asList(data) {
	if (isMiss(data)) return [];
	return Array.isArray(data) ? data : [data];
}
async function getPoems(url, signal, fallback) {
	return asList(await fetchJson(url, { signal })).map((item) => normalize(item, fallback)).filter((item) => item !== null);
}
async function fetchOzymandias(signal) {
	const poem = (await getPoems(OZYMANDIAS_LINES_URL, signal, {
		title: "Ozymandias",
		author: "Percy Bysshe Shelley"
	}))[0];
	if (!poem) throw new RemoteError("empty", "Ozymandias could not be loaded from PoetryDB.");
	return poem;
}
async function fetchPoemByTitle(title, signal) {
	const poems = await getPoems(poetryTitleUrl(title), signal, { title });
	if (!poems.length) throw new RemoteError("not-found", `No poem titled “${title}” in PoetryDB.`);
	return poems;
}
async function fetchFeaturedPoem(featured, signal) {
	if (featured.url === OZYMANDIAS_LINES_URL) return fetchOzymandias(signal);
	const poem = (await fetchPoemByTitle(featured.title, signal))[0];
	if (!poem) throw new RemoteError("not-found", `No poem titled “${featured.title}” in PoetryDB.`);
	return {
		...poem,
		author: poem.author === "Unknown" ? featured.author : poem.author
	};
}
async function searchPoems(query, signal) {
	const term = query.trim();
	if (!term) throw new RemoteError("empty", "Type a title or author.");
	try {
		const byTitle = await getPoems(poetryTitleUrl(term), signal);
		if (byTitle.length) return byTitle.slice(0, 12);
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
	}
	try {
		const byAuthor = await getPoems(poetryAuthorUrl(term), signal);
		if (byAuthor.length) return byAuthor.slice(0, 12);
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		throw asRemoteError(error, "PoetryDB could not be reached.");
	}
	throw new RemoteError("not-found", `No poems matching “${term}”. Try Ozymandias, Dickinson, or Keats.`);
}
async function fetchRandomPoems(signal) {
	const poems = await getPoems(poetryRandomUrl(6), signal);
	if (!poems.length) throw new RemoteError("empty", "PoetryDB returned no poems.");
	return poems;
}
function poemToReaderText(poem) {
	return `${poem.title}\n${poem.author}\n\n${poem.lines.join("\n")}`.trim();
}
var DEFAULT_LOAD = {
	type: "featured",
	title: "Ozymandias"
};
function poemKey(poem) {
	return `${poem.title}::${poem.author}`;
}
function PoetryLibrary() {
	const startReading = useAppStore((s) => s.startReading);
	const [query, setQuery] = (0, import_react.useState)("");
	const [load, setLoad] = (0, import_react.useState)(DEFAULT_LOAD);
	const [poem, setPoem] = (0, import_react.useState)(null);
	const [browse, setBrowse] = (0, import_react.useState)([]);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [error, setError] = (0, import_react.useState)(null);
	const [retryTick, setRetryTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		setStatus("loading");
		setError(null);
		const request = load.type === "featured" ? FEATURED_POEMS.find((item) => item.title === load.title) ?? FEATURED_POEMS[0] : null;
		const run = async () => {
			if (load.type === "featured" && request) {
				const next = await fetchFeaturedPoem(request, controller.signal);
				setPoem(next);
				setBrowse([]);
				announce(`Loaded ${next.title} by ${next.author}`);
				return;
			}
			const poems = load.type === "search" ? await searchPoems(load.query, controller.signal) : await fetchRandomPoems(controller.signal);
			setBrowse(poems);
			setPoem(poems[0] ?? null);
			announce(load.type === "search" ? `Found ${poems.length} poem${poems.length === 1 ? "" : "s"}` : `Loaded ${poems.length} poems from PoetryDB`);
		};
		run().then(() => {
			if (!controller.signal.aborted) setStatus("ready");
		}).catch((err) => {
			if (controller.signal.aborted || isAbortError(err)) return;
			setPoem(null);
			setBrowse([]);
			setStatus("error");
			setError(err);
			announce("Could not load that poem");
		});
		return () => controller.abort();
	}, [load, retryTick]);
	function openPoem(next) {
		startReading(poemToReaderText(next), {
			title: next.title,
			kind: "poem",
			sourceId: poemKey(next)
		});
	}
	const heading = poem?.title ?? (load.type === "search" ? load.query : "Poetry");
	const emptyMiss = status === "error" && isRemoteError(error) && (error.kind === "empty" || error.kind === "not-found");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex max-w-2xl flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					const next = query.trim();
					if (next) setLoad({
						type: "search",
						query: next
					});
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search poems"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Ozymandias, Keats, Dickinson",
						"aria-label": "Search poems by title or author"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "sm:w-32",
					children: "Search"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "Open a poem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => setLoad({ type: "random" }),
					children: "Surprise me"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: FEATURED_POEMS.map((item) => {
					const active = load.type === "featured" && load.title === item.title;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLoad({
							type: "featured",
							title: item.title
						}),
						className: cn("h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
						children: item.title === "\"Hope\" is the thing with feathers" ? "Hope" : item.title.replace(/:.*$/, "")
					}, item.title);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 px-3 pt-3 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: poem?.author ?? "PoetryDB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-serif text-2xl",
						children: heading
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: load.type === "featured" && load.title === "Ozymandias" ? "Featured" : "Poem" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
					className: "max-h-[32rem] overflow-y-auto px-4 py-5",
					"aria-busy": status === "loading",
					children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteLoading, {
						label: `Loading ${heading}`,
						lines: 8
					}) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteErrorView, {
						error,
						onRetry: () => setRetryTick((n) => n + 1),
						hint: emptyMiss ? "Try Ozymandias, The Raven, or an author such as Keats." : "PoetryDB may be busy. Retry in a moment."
					}) : poem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: poem.lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("font-serif text-base leading-relaxed", !line.trim() && "h-4"),
							children: line || "\xA0"
						}, `${poem.title}-${index}`))
					}) : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: load.type === "featured" && load.title === "Ozymandias" ? "via poetrydb.org/title/Ozymandias/lines.json" : "via PoetryDB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "pl-4 pr-3.5",
						disabled: !poem,
						onClick: () => {
							if (poem) openPoem(poem);
						},
						children: ["Open in reader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							size: 16,
							className: "icon-motion icon-shift"
						})]
					})]
				})
			] }),
			browse.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Also in this search"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: browse.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPoem(item),
					className: "rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block rounded-lg bg-bg px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: item.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block line-clamp-2 font-serif text-sm text-muted",
								children: item.lines.filter((line) => line.trim()).slice(0, 2).join(" / ")
							})
						]
					})
				}, poemKey(item)))
			})] }) : null
		]
	});
}
function kindLabel(kind) {
	if (kind === "bible") return "Bible";
	if (kind === "pdf") return "Document";
	if (kind === "poem") return "Poem";
	return "Reading";
}
/**
* Cinematic opener for the catalog: one title at poster scale with its cover
* bled behind it.
*
* The artwork is duplicated — blurred and scaled as the backdrop, sharp in the
* card. Gutenberg covers are small and portrait, so stretching one to fill a
* wide banner would show every artifact; blurring the same image instead gives
* the row a colour field that always matches the book.
*/
function Billboard({ book, busy, onOpen }) {
	const cover = pickGutendexCover(book.formats);
	const author = book.authors.map((person) => person.name).join(", ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mt-6 overflow-hidden rounded-xl bg-fg/90 shadow-border",
		children: [
			cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cover,
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 size-full scale-125 object-cover opacity-70 blur-3xl"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center gap-4 p-4 sm:gap-7 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-24 shrink-0 overflow-hidden rounded-lg shadow-float sm:w-36 lg:w-44",
					children: cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
						src: cover,
						alt: "",
						width: 400,
						height: 600,
						className: "aspect-[2/3] w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex aspect-[2/3] items-center justify-center bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 30,
							className: "text-white/50",
							"aria-hidden": true
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium tracking-[0.16em] text-white/60 uppercase sm:text-xs",
							children: "Most read · Gutenberg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1.5 line-clamp-3 font-serif text-xl leading-[1.12] tracking-tight text-balance sm:mt-2.5 sm:text-3xl lg:text-4xl",
							children: book.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 line-clamp-1 text-xs text-white/70 sm:mt-2.5 sm:text-sm",
							children: [author || "Author unrecorded", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: [
									" · ",
									book.download_count.toLocaleString(),
									" reads"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: onOpen,
							disabled: busy,
							className: "mt-3.5 bg-white pr-3 pl-4 text-black hover:opacity-90 sm:mt-5",
							children: [busy ? "Opening" : "Start reading", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 15,
								className: "icon-motion icon-shift"
							})]
						})
					]
				})]
			})
		]
	});
}
var MIN_SHELF = 4;
var MAX_SHELVES = 6;
/**
* Group a flat result list into rows using Gutenberg's own `bookshelves`.
*
* The categories are real catalog metadata rather than buckets invented here,
* which matters: a row labelled "Detective Fiction" has to actually mean it. A
* book can sit in more than one row, as it does in the catalog itself.
*
* Rows shorter than `MIN_SHELF` are folded into a trailing catch-all — a shelf
* holding two books reads as a mistake, not a category.
*/
function groupIntoShelves(books) {
	const byShelf = /* @__PURE__ */ new Map();
	for (const book of books) for (const raw of book.bookshelves) {
		const name = raw.replace(/^(?:Browsing|Category)\s*:\s*/i, "").trim();
		if (!name) continue;
		const list = byShelf.get(name);
		if (list) list.push(book);
		else byShelf.set(name, [book]);
	}
	const shelves = [...byShelf.entries()].filter(([, list]) => list.length >= MIN_SHELF).sort((a, b) => b[1].length - a[1].length).slice(0, MAX_SHELVES).map(([title, list]) => ({
		title,
		books: list
	}));
	const shelved = new Set(shelves.flatMap((shelf) => shelf.books.map((book) => book.id)));
	return {
		shelves,
		rest: books.filter((book) => !shelved.has(book.id))
	};
}
/**
* Every passage marked across every book.
*
* Highlights are stored per book, which is right for reading but wrong for
* remembering: what someone marks is usually the thing they want to find again
* later, without first recalling which book it was in. Gathering them in one
* place is what turns marking from a reading aid into something closer to
* notes, and it only became possible once a highlight started carrying its own
* text rather than a bare line number.
*
* Opening one reopens the book at the passage. The reader resolves the section
* itself, so this only has to hand it the text.
*/
function MarkedPassages() {
	const highlights = useAppStore((s) => s.highlights);
	const sessions = useAppStore((s) => s.sessions);
	const startReading = useAppStore((s) => s.startReading);
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const groups = (0, import_react.useMemo)(() => {
		return Object.entries(highlights).map(([key, marks]) => {
			const session = sessions.find((item) => item.content.trim().slice(0, 48) === key);
			return {
				key,
				title: session?.title ?? key.slice(0, 40),
				content: session?.content ?? null,
				marks: [...marks].sort((a, b) => b.at - a.at)
			};
		}).filter((group) => group.marks.length > 0).sort((a, b) => (b.marks[0]?.at ?? 0) - (a.marks[0]?.at ?? 0));
	}, [highlights, sessions]);
	const total = groups.reduce((sum, group) => sum + group.marks.length, 0);
	if (total === 0) return null;
	const shown = expanded ? groups : groups.slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mb-4 flex items-baseline gap-2 text-xs font-medium tracking-wide text-muted uppercase",
			children: ["Highlights", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-subtle tabular-nums normal-case",
				children: total
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 -mt-2 text-sm text-muted",
			children: "Passages you marked, across every book."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: shown.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 truncate text-sm font-medium",
				children: group.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1.5",
				children: group.marks.slice(0, expanded ? 20 : 3).map((mark) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: !group.content,
					onClick: () => {
						if (group.content) startReading(group.content, { title: group.title });
					},
					className: "icon-group flex w-full items-start gap-2.5 rounded-md bg-surface px-3 py-2.5 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:not-disabled:scale-[0.99] disabled:opacity-60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, {
						size: 14,
						className: "mt-0.5 shrink-0 text-accent icon-motion icon-lift"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line-clamp-2 block text-sm leading-relaxed",
							children: mark.text
						}), mark.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 line-clamp-2 block text-xs text-muted italic",
							children: mark.note
						}) : null]
					})]
				}, `${mark.section}:${mark.lineIdx}:${mark.at}`))
			})] }, group.key))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: [groups.length > 2 || total > 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => setExpanded((v) => !v),
				children: expanded ? "Show less" : `Show all ${total}`
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				className: "pl-3 pr-2.5",
				onClick: () => {
					try {
						downloadHighlights(groups);
						toast.success(`Exported ${total} passage${total === 1 ? "" : "s"}`);
					} catch {
						toast.error("Could not export");
					}
				},
				children: ["Export", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
					size: 14,
					className: "icon-motion icon-drop"
				})]
			})]
		})
	] });
}
function Catalog() {
	const startReading = useAppStore((s) => s.startReading);
	const [query, setQuery] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)("");
	const [books, setBooks] = (0, import_react.useState)([]);
	const [nextUrl, setNextUrl] = (0, import_react.useState)(null);
	const [total, setTotal] = (0, import_react.useState)(0);
	const [source, setSource] = (0, import_react.useState)("gutendex");
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [error, setError] = (0, import_react.useState)(null);
	const [retryTick, setRetryTick] = (0, import_react.useState)(0);
	const [openingId, setOpeningId] = (0, import_react.useState)(null);
	const [loadingMore, setLoadingMore] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		setStatus("loading");
		setError(null);
		(async () => {
			try {
				const result = await searchGutendex(submitted, controller.signal);
				if (controller.signal.aborted) return;
				let all = result.results;
				let next = result.next;
				if (next) try {
					const more = await fetchGutendexPage(next, controller.signal);
					if (controller.signal.aborted) return;
					const seen = new Set(all.map((book) => book.id));
					all = [...all, ...more.results.filter((book) => !seen.has(book.id))];
					next = more.next;
				} catch {}
				setBooks(all);
				setNextUrl(next);
				setTotal(result.count);
				setSource(result.source);
				setStatus("ready");
				announce(all.length ? `${all.length} Gutenberg titles${submitted ? ` for ${submitted}` : ""}` : `No Gutenberg titles${submitted ? ` for ${submitted}` : ""}`);
			} catch (err) {
				if (controller.signal.aborted || isAbortError(err)) return;
				const fallback = fallbackGutendexSearch(submitted);
				setBooks(fallback.results);
				setNextUrl(null);
				setTotal(fallback.count);
				setSource("fallback");
				setError(err);
				setStatus(fallback.results.length ? "ready" : "error");
				announce("Could not load the Gutenberg catalog");
			}
		})();
		return () => controller.abort();
	}, [submitted, retryTick]);
	async function openBook(book) {
		setOpeningId(book.id);
		try {
			const text = await fetchGutendexReaderText(book);
			startReading(text, {
				title: book.title,
				kind: "text",
				sourceId: `gutenberg-${book.id}`
			});
		} catch (err) {
			if (!isAbortError(err)) toast.error(err instanceof Error ? err.message : "Could not open that book");
		} finally {
			setOpeningId(null);
		}
	}
	async function loadMore() {
		if (!nextUrl || loadingMore) return;
		setLoadingMore(true);
		try {
			const result = await fetchGutendexPage(nextUrl);
			setBooks((current) => [...current, ...result.results]);
			setNextUrl(result.next);
			setTotal(result.count);
		} catch (err) {
			if (!isAbortError(err)) toast.error(err instanceof Error ? err.message : "Could not load more titles");
		} finally {
			setLoadingMore(false);
		}
	}
	const emptyMiss = status === "error" && isRemoteError(error) && (error.kind === "empty" || error.kind === "not-found");
	const featured = books.length > 0 ? books.reduce((best, book) => book.download_count > best.download_count ? book : best) : null;
	const { shelves, rest } = groupIntoShelves(books.filter((book) => book.id !== featured?.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row",
			onSubmit: (event) => {
				event.preventDefault();
				const next = query.trim();
				setSubmitted(next);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search Project Gutenberg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						className: "absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle icon-motion icon-lift"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Austen, Darwin, Frankenstein",
						className: "pl-10"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: status === "loading",
				className: "sm:w-32",
				children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Searching" }) : "Search"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-1.5",
			children: FEATURED_GUTENDEX_QUERIES.map((item) => {
				const active = submitted.toLowerCase() === item.toLowerCase();
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setQuery(item);
						setSubmitted(item);
					},
					className: cn("h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
					children: item
				}, item);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: ["Catalog · ", submitted ? `“${submitted}”` : "Popular"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tabular-nums text-subtle",
					children: status === "ready" ? total.toLocaleString() : ""
				})]
			}), status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-6 h-40 rounded-xl sm:h-56 lg:h-64" }), Array.from({ length: 2 }).map((_, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-2 h-4 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "nl-shelf",
					children: Array.from({ length: 8 }).map((__, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[2/3] rounded-lg" }, index))
				})] }, row))]
			}) : status === "error" && !emptyMiss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-surface p-2 shadow-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg bg-bg px-4 py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteErrorView, {
						error,
						onRetry: () => setRetryTick((n) => n + 1),
						hint: "Titles come from Gutendex, a Project Gutenberg catalog. The readable text is fetched from Gutenberg through a same-origin proxy."
					})
				})
			}) : books.length === 0 || emptyMiss ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl bg-surface p-2 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: "/images/feature-books.jpg",
					alt: "A stack of clothbound books on a linen table",
					width: 1200,
					height: 900,
					className: "aspect-[16/9] w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 22,
							className: "mx-auto mb-3 text-muted icon-motion icon-lift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "No catalog records"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Try Austen, Darwin, or Frankenstein."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "outline",
							onClick: () => setRetryTick((n) => n + 1),
							children: "Retry"
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Billboard, {
					book: featured,
					busy: openingId === featured.id,
					onOpen: () => void openBook(featured)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-7 sm:space-y-9",
					children: [shelves.map((shelf) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelf, {
						title: shelf.title,
						children: shelf.books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poster, {
							title: book.title,
							meta: book.authors.map((person) => person.name).join(", ") || "Author unrecorded",
							cover: pickGutendexCover(book.formats),
							badge: `${Math.round(book.download_count / 1e3)}k`,
							busy: openingId === book.id,
							onOpen: () => void openBook(book)
						}, book.id))
					}, shelf.title)), rest.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelf, {
						title: shelves.length > 0 ? "More from this search" : "Catalog",
						children: rest.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poster, {
							title: book.title,
							meta: book.authors.map((person) => person.name).join(", ") || "Author unrecorded",
							cover: pickGutendexCover(book.formats),
							badge: `${Math.round(book.download_count / 1e3)}k`,
							busy: openingId === book.id,
							onOpen: () => void openBook(book)
						}, book.id))
					}) : null]
				}),
				nextUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => void loadMore(),
						disabled: loadingMore,
						children: loadingMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Loading" }) : "More titles"
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-xs leading-relaxed text-subtle",
					children: source === "fallback" ? "Gutendex is taking a moment, so this is a local Gutenberg shelf. Full text still opens from Project Gutenberg." : "Catalog from Gutendex. Full text from Project Gutenberg. Public-domain works only."
				})
			] })]
		})
	] });
}
function Library() {
	const startReading = useAppStore((s) => s.startReading);
	const sessions = useAppStore((s) => s.sessions);
	const bookmarks = useAppStore((s) => s.bookmarks);
	const removeBookmark = useAppStore((s) => s.removeBookmark);
	const [section, setSection] = (0, import_react.useState)("catalog");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageEnter, {
		className: "mx-auto h-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12",
		replayKey: section,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-enter": true,
				className: "text-3xl sm:text-4xl lg:text-5xl",
				children: "Library"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-enter": true,
				className: "mt-2 max-w-prose text-sm text-pretty text-muted sm:mt-3 sm:text-base",
				children: "Project Gutenberg via Gutendex, a live Bible, PoetryDB, and what you’ve kept."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-enter": true,
				className: "mt-6 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mt-8 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
					value: section,
					onChange: setSection,
					label: "Library sections",
					className: "w-max",
					options: [
						{
							id: "catalog",
							label: "Catalog"
						},
						{
							id: "bible",
							label: "Bible"
						},
						{
							id: "poems",
							label: "Poems"
						},
						{
							id: "yours",
							label: "Yours"
						}
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollScene, {
				replayKey: section,
				children: [
					section === "bible" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-enter": true,
						className: "mt-8 pb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BibleLibrary, {})
					}),
					section === "poems" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-enter": true,
						className: "mt-8 pb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoetryLibrary, {})
					}),
					section === "yours" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nl-yours mt-8 pb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mb-4 flex items-baseline gap-2 text-xs font-medium tracking-wide text-muted uppercase",
								children: ["Recently read", sessions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle tabular-nums normal-case",
									children: sessions.length
								}) : null]
							}), sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Open a passage and it will land here."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 md:grid-cols-2",
								children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => startReading(session.content, {
										title: session.title,
										kind: session.kind,
										sourceId: session.sourceId
									}),
									className: "rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block rounded-lg bg-bg px-4 py-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted",
												children: kindLabel(session.kind)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-medium",
												children: session.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 line-clamp-2 text-sm text-muted",
												children: session.content.slice(0, 240)
											})
										]
									})
								}, session.openedAt))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkedPassages, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mb-4 flex items-baseline gap-2 text-xs font-medium tracking-wide text-muted uppercase",
									children: ["Bookmarks", bookmarks.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle tabular-nums normal-case",
										children: bookmarks.length
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 -mt-2 text-sm text-muted",
									children: "Where you stopped reading."
								}),
								bookmarks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: "Nothing bookmarked yet. Save a place while you read."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-2.5 md:grid-cols-2",
									children: bookmarks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => startReading(item.content, {
												title: item.title,
												kind: item.kind,
												sourceId: item.sourceId,
												pdfPage: item.pdfPage,
												chapter: item.chapter,
												progress: item.progress
											}),
											className: "group block w-full rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block rounded-lg bg-bg px-4 py-4 pr-20",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block truncate font-medium",
														children: item.title
													}),
													item.excerpt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 block truncate text-sm text-muted",
														children: item.excerpt
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-2 flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"aria-hidden": true,
															className: "h-1 flex-1 overflow-hidden rounded-full bg-fg/10",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block h-full rounded-full bg-fg/45",
																style: { width: `${Math.round(item.progress * 100)}%` }
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "shrink-0 text-xs tabular-nums text-muted",
															children: [Math.round(item.progress * 100), "%"]
														})]
													})
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Remove ${item.title}`,
											className: "absolute top-1/2 right-4 min-h-11 -translate-y-1/2 rounded-md px-2 text-sm text-muted hover:text-fg",
											onClick: () => removeBookmark(item.id),
											children: "Remove"
										})]
									}, item.id))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-xs font-medium tracking-wide text-muted uppercase",
								children: "Upload"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl bg-surface p-2 shadow-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
									busy: uploading,
									onFile: (file) => {
										(async () => {
											setUploading(true);
											try {
												const doc = await processDocument(file);
												startReading(doc.content, {
													title: doc.title,
													kind: doc.metadata.format === "PDF" ? "pdf" : "text"
												});
												toast.success("Opened in the reader");
											} catch (err) {
												toast.error(err instanceof Error ? err.message : "Could not read that file");
											} finally {
												setUploading(false);
											}
										})();
									}
								})
							})] })
						]
					}),
					section === "catalog" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {})
				]
			})
		]
	});
}
//#endregion
export { Library };
