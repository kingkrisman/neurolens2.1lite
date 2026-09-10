import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime, h as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as gsapWithCSS, t as useGSAP } from "../_libs/gsap+gsap__react.mjs";
import { t as ScrollToPlugin } from "../_libs/gsap.mjs";
import { _ as Link, b as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gsap-xfETP6gY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Tiny stand-in for motion/react's hook — keeps that library off the first paint. */
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(media.matches);
		const onChange = () => setReduced(media.matches);
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);
	return reduced;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function wordCount(text) {
	return text.trim() ? text.trim().split(/\s+/).length : 0;
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-surface p-3 shadow-border transition-[box-shadow] duration-[150ms] ease-[var(--ease-out)]", className),
		...props
	});
}
/** Concentric shell: 16px outer radius, 8px pad, 8px inner well. */
function Panel({ hover = false, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-surface p-2 shadow-border", hover && "transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]", className),
		...props
	});
}
function PanelWell({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg bg-bg", className),
		...props
	});
}
function PanelHeader({ eyebrow, title, description, className, as: Heading = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("scroll-mt-20 px-3 pt-3 pb-3", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				className: cn("font-medium", eyebrow && "mt-1"),
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm leading-relaxed text-muted",
				children: description
			}) : null
		]
	});
}
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-fg/6 px-2.5 py-1 text-xs font-medium text-muted", className),
		...props
	});
}
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("skeleton rounded-md", className),
		...props
	});
}
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "separator",
		className: cn("bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
function Progress({ value, className, label = "Progress" }) {
	const now = Math.round(Math.min(100, Math.max(0, value)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "progressbar",
		"aria-label": label,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": now,
		className: cn("h-1.5 overflow-hidden rounded-full bg-fg/10", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left rounded-full bg-fg transition-transform duration-[250ms] ease-[var(--ease-out)] motion-reduce:transition-none",
			style: { transform: `scaleX(${now / 100})` }
		})
	});
}
function Kbd({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
		className: "kbd",
		...props,
		children
	});
}
function Media({ zoom, className, alt = "", loading = "lazy", decoding = "async", src, onLoad, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const eager = loading === "eager";
	const [ready, setReady] = (0, import_react.useState)(eager);
	(0, import_react.useLayoutEffect)(() => {
		const node = ref.current;
		if (node && node.complete && node.naturalWidth > 0) setReady(true);
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref,
		alt,
		src,
		loading: eager ? "eager" : "lazy",
		decoding,
		onLoad: (event) => {
			setReady(true);
			onLoad?.(event);
		},
		className: cn("media bg-fg/6 transition-opacity duration-300 ease-[var(--ease-out)] motion-reduce:transition-none", zoom && "media-zoom", ready ? "opacity-100" : "opacity-0", className),
		...props
	});
}
var registered = false;
function registerGsap() {
	if (registered || typeof window === "undefined") return;
	gsapWithCSS.registerPlugin(useGSAP, ScrollToPlugin);
	gsapWithCSS.defaults({
		ease: "power3.out",
		duration: .4
	});
	registered = true;
}
registerGsap();
var easeOut = "power3.out";
/** The app scrolls inside `.pane-scroll`, not the window. */
function scrollerOf(node) {
	const pane = node?.closest(".pane-scroll") ?? node?.closest(".reader-scroll");
	return pane instanceof HTMLElement ? pane : window;
}
function finePointer() {
	return typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
}
function scrollToId(id, offsetY = 88) {
	registerGsap();
	const target = document.getElementById(id);
	if (!target) return;
	gsapWithCSS.to(scrollerOf(target), {
		duration: .7,
		ease: "power3.inOut",
		overwrite: "auto",
		scrollTo: {
			y: target,
			offsetY,
			autoKill: true
		}
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/remote-DLfAazCa.js
var RETRYABLE = {
	abort: false,
	timeout: true,
	offline: true,
	"not-found": false,
	"rate-limit": true,
	http: true,
	parse: false,
	empty: false
};
var RemoteError = class extends Error {
	kind;
	status;
	retryable;
	constructor(kind, message, options) {
		super(message, options?.cause !== void 0 ? { cause: options.cause } : void 0);
		this.name = "RemoteError";
		this.kind = kind;
		this.status = options?.status;
		this.retryable = options?.retryable ?? RETRYABLE[kind];
	}
};
function isRemoteError(error) {
	return error instanceof RemoteError;
}
function isAbortError(error) {
	if (isRemoteError(error) && error.kind === "abort") return true;
	if (error instanceof DOMException && error.name === "AbortError") return true;
	return error instanceof Error && error.name === "AbortError";
}
function asRemoteError(error, fallback = "Something went wrong.") {
	if (isRemoteError(error)) return error;
	if (isAbortError(error)) return new RemoteError("abort", "Cancelled.");
	return new RemoteError("http", error instanceof Error ? error.message : fallback, { cause: error });
}
function isRetryableError(error) {
	if (!isRemoteError(error)) return false;
	return error.retryable && error.kind !== "abort";
}
var DEFAULT_TIMEOUT_MS = 12e3;
var DEFAULT_RETRIES = 1;
var USER_AGENT$4 = "NeuroLens/1.0 (adaptive reader)";
function isOffline() {
	return typeof navigator !== "undefined" && navigator.onLine === false;
}
function sleep$1(ms, signal) {
	return new Promise((resolve, reject) => {
		if (signal?.aborted) {
			reject(new RemoteError("abort", "Cancelled."));
			return;
		}
		const timer = setTimeout(() => {
			signal?.removeEventListener("abort", onAbort);
			resolve();
		}, ms);
		const onAbort = () => {
			clearTimeout(timer);
			reject(new RemoteError("abort", "Cancelled."));
		};
		signal?.addEventListener("abort", onAbort, { once: true });
	});
}
function retryDelayMs(attempt, kind) {
	return Math.min(1400, (kind === "rate-limit" ? 500 : 180) * 2 ** attempt);
}
async function fetchOnce(url, options = {}) {
	if (isOffline()) throw new RemoteError("offline", "You appear to be offline.");
	const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
	const parent = options.signal;
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort("timeout"), timeoutMs);
	const onParentAbort = () => controller.abort(parent?.reason ?? "abort");
	parent?.addEventListener("abort", onParentAbort);
	try {
		let response;
		try {
			response = await fetch(url, {
				signal: controller.signal,
				headers: {
					Accept: options.accept ?? "application/json",
					...typeof navigator === "undefined" ? { "User-Agent": USER_AGENT$4 } : {},
					...options.headers
				}
			});
		} catch (error) {
			if (controller.signal.aborted) {
				if (parent?.aborted) throw new RemoteError("abort", "Cancelled.");
				throw new RemoteError("timeout", "That request took too long.");
			}
			if (isOffline()) throw new RemoteError("offline", "You appear to be offline.");
			throw new RemoteError("http", "Could not reach that service.", { cause: error });
		}
		if (response.status === 404) throw new RemoteError("not-found", "Nothing was found.", { status: 404 });
		if (response.status === 429) throw new RemoteError("rate-limit", "Too many requests. Wait a moment, then retry.", { status: 429 });
		if (!response.ok) throw new RemoteError("http", `The service returned ${response.status}.`, {
			status: response.status,
			retryable: response.status >= 500
		});
		return response;
	} finally {
		clearTimeout(timer);
		parent?.removeEventListener("abort", onParentAbort);
	}
}
async function fetchResponse(url, options = {}) {
	const retries = options.retries ?? DEFAULT_RETRIES;
	let lastError;
	for (let attempt = 0; attempt <= retries; attempt++) try {
		return await fetchOnce(url, options);
	} catch (error) {
		lastError = error;
		if (options.signal?.aborted) throw asRemoteError(error);
		if (!isRetryableError(error) || attempt === retries) throw error;
		await sleep$1(retryDelayMs(attempt, isRemoteError(error) ? error.kind : void 0), options.signal);
	}
	throw lastError instanceof Error ? lastError : new RemoteError("http", "Could not reach that service.");
}
/** JSON GET with timeout, abort, retries, 404/429, parse, and offline handling. */
async function fetchJson(url, options = {}) {
	const text = await (await fetchResponse(url, options)).text();
	if (!text.trim()) throw new RemoteError("empty", "The service returned nothing.");
	try {
		return JSON.parse(text);
	} catch {
		throw new RemoteError("parse", "The response could not be read.");
	}
}
/** Plain-text GET with the same timeout / abort / retry / status handling as fetchJson. */
async function fetchText(url, options = {}) {
	const text = await (await fetchResponse(url, {
		...options,
		accept: options.accept ?? "text/plain"
	})).text();
	if (!text.trim()) throw new RemoteError("empty", "The service returned nothing.");
	return text;
}
function remoteMessage(error, fallback = "Could not load that.") {
	if (isAbortError(error)) return "";
	if (isRemoteError(error)) return error.message;
	if (error instanceof Error && error.message) return error.message;
	return fallback;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/gsap-motion-CsPy174G.js
/** Preload about half a screen ahead of the scroll, not behind it. */
var LAZY_ROOT_MARGIN = "0px 0px 50% 0px";
function alreadyInRange(node, root, extraBottom = .5) {
	const rootBox = (root ?? document.documentElement).getBoundingClientRect();
	const box = node.getBoundingClientRect();
	const ahead = rootBox.height * extraBottom;
	return box.top < rootBox.bottom + ahead;
}
function useInView(ref, { rootMargin = LAZY_ROOT_MARGIN, once = true, enabled = true } = {}) {
	const [visible, setVisible] = (0, import_react.useState)(!enabled);
	(0, import_react.useEffect)(() => {
		if (!enabled) {
			setVisible(true);
			return;
		}
		const node = ref.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const root = node.closest(".pane-scroll, .reader-scroll");
		const rootEl = root instanceof Element ? root : null;
		if (alreadyInRange(node, rootEl)) {
			setVisible(true);
			if (once) return;
		}
		const io = new IntersectionObserver(([entry]) => {
			const rootBox = entry.rootBounds ?? rootEl?.getBoundingClientRect();
			if (!(Boolean(entry.isIntersecting) || rootBox != null && entry.boundingClientRect.top < rootBox.bottom)) return;
			setVisible(true);
			if (once) io.disconnect();
		}, {
			root: rootEl,
			rootMargin: once ? `10000px 0px ${rootMargin.split(" ")[2] ?? "50%"} 0px` : rootMargin,
			threshold: 0
		});
		io.observe(node);
		return () => io.disconnect();
	}, [
		enabled,
		once,
		ref,
		rootMargin
	]);
	return visible;
}
registerGsap();
function PageEnter({ children, className, replayKey }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	useGSAP(() => {
		const root = ref.current;
		if (!root || reduce) return;
		const items = root.querySelectorAll("[data-enter]");
		const targets = items.length ? items : root.querySelectorAll(":scope > *");
		if (!targets.length) return;
		gsapWithCSS.fromTo(targets, {
			y: 22,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1,
			duration: .48,
			stagger: .06,
			ease: easeOut,
			clearProps: "transform,visibility,opacity"
		});
	}, {
		scope: ref,
		dependencies: [reduce, replayKey]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children
	});
}
function GsapStagger({ children, className, replayKey, selector = ":scope > *", y = 18 }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	useGSAP(() => {
		const root = ref.current;
		if (!root || reduce) return;
		const items = root.querySelectorAll(selector);
		if (!items.length) return;
		gsapWithCSS.fromTo(items, {
			y,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1,
			duration: .45,
			stagger: .055,
			ease: easeOut,
			clearProps: "transform,visibility,opacity"
		});
	}, {
		scope: ref,
		dependencies: [
			reduce,
			replayKey,
			selector,
			y
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("gsap-stagger", className),
		children
	});
}
function GsapCount({ value, suffix = "", className }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const inView = useInView(ref, { rootMargin: "0px 0px -6% 0px" });
	const played = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (reduce) {
			el.textContent = `${value}${suffix}`;
			return;
		}
		if (!inView || played.current) return;
		played.current = true;
		const state = { n: 0 };
		el.textContent = `0${suffix}`;
		gsapWithCSS.to(state, {
			n: value,
			duration: 1.05,
			ease: "power2.out",
			onUpdate: () => {
				el.textContent = `${Math.round(state.n)}${suffix}`;
			}
		});
	}, [
		inView,
		value,
		suffix,
		reduce
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [value, suffix]
	});
}
function Magnetic({ children, className, strength = 8 }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	useGSAP(() => {
		const el = ref.current;
		if (!el || reduce || !finePointer()) return;
		const xTo = gsapWithCSS.quickTo(el, "x", {
			duration: .45,
			ease: easeOut
		});
		const yTo = gsapWithCSS.quickTo(el, "y", {
			duration: .45,
			ease: easeOut
		});
		const onMove = (event) => {
			const box = el.getBoundingClientRect();
			xTo(((event.clientX - box.left) / box.width - .5) * strength);
			yTo(((event.clientY - box.top) / box.height - .5) * strength);
		};
		const reset = () => {
			xTo(0);
			yTo(0);
			el.style.willChange = "auto";
		};
		const arm = () => {
			el.style.willChange = "transform";
		};
		el.addEventListener("pointerenter", arm);
		el.addEventListener("pointermove", onMove);
		el.addEventListener("pointerleave", reset);
		return () => {
			el.removeEventListener("pointerenter", arm);
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerleave", reset);
		};
	}, { dependencies: [reduce, strength] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children
	});
}
/** In-page scroll links + IntersectionObserver enters. No per-frame ScrollTrigger scrub. */
function ScrollScene({ children, className, replayKey }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const root = ref.current;
		if (!root || reduce) return;
		if (typeof IntersectionObserver === "undefined") return;
		const scroller = root.closest(".pane-scroll, .reader-scroll");
		const nodes = [
			...root.querySelectorAll("[data-batch]"),
			...[...root.querySelectorAll("[data-batch-children]")].flatMap((group) => [...group.querySelectorAll(":scope > *")]),
			...root.querySelectorAll("[data-scrub-fade]")
		];
		if (!nodes.length) return;
		const seen = /* @__PURE__ */ new Set();
		const io = new IntersectionObserver((entries) => {
			const rootBox = scroller instanceof Element ? scroller.getBoundingClientRect() : new DOMRect(0, 0, window.innerWidth, window.innerHeight);
			for (const entry of entries) {
				if (seen.has(entry.target)) continue;
				if (!(entry.isIntersecting || entry.boundingClientRect.top < rootBox.bottom)) continue;
				seen.add(entry.target);
				entry.target.classList.add("is-in");
				io.unobserve(entry.target);
			}
		}, {
			root: scroller instanceof Element ? scroller : null,
			rootMargin: "10000px 0px -10% 0px",
			threshold: 0
		});
		nodes.forEach((node) => {
			node.classList.add("io-reveal");
			const rootBox = (scroller instanceof Element ? scroller : document.documentElement).getBoundingClientRect();
			if (node.getBoundingClientRect().top < rootBox.bottom) {
				node.classList.add("is-in");
				seen.add(node);
				return;
			}
			io.observe(node);
		});
		return () => io.disconnect();
	}, [reduce, replayKey]);
	function onInPageNav(event) {
		const link = event.target.closest("a[href^='#']");
		if (!(link instanceof HTMLAnchorElement) || !link.hash) return;
		const id = decodeURIComponent(link.hash.slice(1));
		if (!id || !document.getElementById(id)) return;
		event.preventDefault();
		scrollToId(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		onClick: onInPageNav,
		children
	});
}
function StaggerBlock({ children, delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	useGSAP(() => {
		const el = ref.current;
		if (!el || reduce) return;
		gsapWithCSS.fromTo(el, {
			y: 14,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1,
			duration: .48,
			delay: delay / 1e3,
			ease: "power3.out",
			clearProps: "transform,visibility,opacity"
		});
	}, { dependencies: [delay, reduce] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("stagger-block", className),
		children
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/mark-DSNI2yLD.js
/**
* The NeuroLens iris: a pupil, eight radial spokes, and the finer branches that
* fork off each one.
*
* Two stroke weights carry the whole idea — the heavy spokes read at any size,
* the light branches only resolve when the mark is given room. That is why the
* detail layer is dropped below about 32px (see `detail`): at header scale the
* 3.2 strokes land on roughly a third of a pixel each and turn into grey haze
* around the pupil, which reads as a smudge rather than as an eye.
*
* No `color` attribute: the mark inherits `currentColor`, so it takes the ink of
* whatever it sits in rather than pinning itself to one hex value.
*/
function Mark({ className, detail = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 96 96",
		className: cn("nl-mark size-7", className),
		fill: "none",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "48",
				r: "8",
				fill: "currentColor",
				stroke: "none",
				className: "nl-mark-pupil"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				strokeWidth: "4.5",
				className: "nl-mark-rays",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60.9 53.4L72.0 57.9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M53.4 60.9L57.9 72.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M42.6 60.9L38.1 72.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M35.1 53.4L24.0 57.9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M35.1 42.6L24.0 38.1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M42.6 35.1L38.1 24.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M53.4 35.1L57.9 24.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M60.9 42.6L72.0 38.1" })
				]
			}),
			detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				strokeWidth: "3.2",
				className: "nl-mark-branches",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72.0 57.9Q79.0 57.4 84.0 57.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72.0 57.9Q76.6 63.3 79.8 67.1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M57.9 72.0Q63.3 76.6 67.1 79.8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M57.9 72.0Q57.4 79.0 57.0 84.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38.1 72.0Q38.6 79.0 39.0 84.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38.1 72.0Q32.7 76.6 28.9 79.8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.0 57.9Q19.4 63.3 16.2 67.1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.0 57.9Q17.0 57.4 12.0 57.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.0 38.1Q17.0 38.6 12.0 39.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.0 38.1Q19.4 32.7 16.2 28.9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38.1 24.0Q32.7 19.4 28.9 16.2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38.1 24.0Q38.6 17.0 39.0 12.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M57.9 24.0Q57.4 17.0 57.0 12.0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M57.9 24.0Q63.3 19.4 67.1 16.2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72.0 38.1Q76.6 32.7 79.8 28.9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72.0 38.1Q79.0 38.6 84.0 39.0" })
				]
			}) : null
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BR13pP-z.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var READING_PROFILES = {
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
		lookup: true
	},
	adhd: {
		id: "adhd",
		name: "ADHD",
		fontFamily: "sans",
		fontSize: 20,
		lineHeight: 1.8,
		letterSpacing: .02,
		wordSpacing: .05,
		bionicStrength: .6,
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
		attentionFollow: "line"
	},
	dyslexia: {
		id: "dyslexia",
		name: "Dyslexia",
		fontFamily: "opendyslexic",
		fontSize: 20,
		lineHeight: 2,
		letterSpacing: .05,
		wordSpacing: .1,
		bionicStrength: .4,
		focusHighlight: false,
		rhythmOptimization: true,
		rhythmCurve: "breath",
		tint: "dyslexia",
		align: "left",
		theme: "cream",
		syllables: true,
		letterGuide: true,
		lookup: true,
		plainLanguage: true
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
		attentionFollow: "line"
	},
	academic: {
		id: "academic",
		name: "Academic",
		fontFamily: "serif",
		fontSize: 18,
		lineHeight: 1.7,
		letterSpacing: 0,
		wordSpacing: 0,
		bionicStrength: .3,
		focusHighlight: false,
		rhythmOptimization: true,
		rhythmCurve: "breath",
		tint: "academic",
		align: "left",
		theme: "sepia"
	},
	speed: {
		id: "speed",
		name: "Speed",
		fontFamily: "sans",
		fontSize: 18,
		lineHeight: 1.5,
		letterSpacing: 0,
		wordSpacing: 0,
		bionicStrength: .8,
		focusHighlight: false,
		rhythmOptimization: false,
		rhythmCurve: "steady",
		tint: "none",
		align: "left",
		theme: "paper"
	},
	adaptive: {
		id: "adaptive",
		name: "Adaptive",
		fontFamily: "sans",
		fontSize: 18,
		lineHeight: 1.7,
		letterSpacing: 0,
		wordSpacing: 0,
		bionicStrength: .35,
		focusHighlight: false,
		rhythmOptimization: true,
		rhythmCurve: "sentence",
		tint: "none",
		align: "left",
		theme: "paper"
	}
};
var NAMED_PRESETS = [
	{
		id: "deep-study",
		name: "Deep Study",
		targetWpm: 180,
		profile: {
			...READING_PROFILES.academic,
			name: "Deep Study",
			fontSize: 20,
			lineHeight: 1.9
		}
	},
	{
		id: "quick",
		name: "Quick Reading",
		targetWpm: 340,
		profile: {
			...READING_PROFILES.speed,
			name: "Quick Reading"
		}
	},
	{
		id: "night",
		name: "Night Reading",
		targetWpm: 200,
		profile: {
			...READING_PROFILES.default,
			name: "Night Reading",
			theme: "night",
			fontSize: 20,
			lineHeight: 1.8
		}
	},
	{
		id: "bible-study",
		name: "Bible Study",
		targetWpm: 160,
		profile: {
			...READING_PROFILES.academic,
			name: "Bible Study",
			lineHeight: 1.9,
			fontSize: 20
		}
	}
];
var COLOR_SCHEMES = [
	{
		id: "paper",
		label: "Paper",
		swatch: "#f0e8dc",
		ink: "#3d2a1f",
		room: "light",
		line: "Warm page"
	},
	{
		id: "cream",
		label: "Cream",
		swatch: "#f7f1e3",
		ink: "#2c2418",
		room: "light",
		line: "BDA cream · less glare"
	},
	{
		id: "peach",
		label: "Peach",
		swatch: "#f4ddd2",
		ink: "#2a1c16",
		room: "light",
		line: "Warm peach · less glare"
	},
	{
		id: "butter",
		label: "Butter",
		swatch: "#f2ebc4",
		ink: "#2a2412",
		room: "light",
		line: "Pale yellow · less glare"
	},
	{
		id: "sage",
		label: "Sage",
		swatch: "#e7eee6",
		ink: "#2c3f30",
		room: "light",
		line: "Calm green"
	},
	{
		id: "mist",
		label: "Mist",
		swatch: "#e8eef2",
		ink: "#1a232b",
		room: "light",
		line: "Cool daylight"
	},
	{
		id: "sepia",
		label: "Sepia",
		swatch: "#e9dcc8",
		ink: "#3a2818",
		room: "light",
		line: "Study lamp"
	},
	{
		id: "contrast",
		label: "Contrast",
		swatch: "#fffdf6",
		ink: "#100c08",
		room: "light",
		line: "Highest ink · more glare"
	},
	{
		id: "night",
		label: "Night",
		swatch: "#1a1612",
		ink: "#f3eadf",
		room: "dark",
		line: "Low glare"
	},
	{
		id: "dusk",
		label: "Dusk",
		swatch: "#1c1418",
		ink: "#f3e6dc",
		room: "dark",
		line: "Warm dark"
	},
	{
		id: "ink",
		label: "Ink",
		swatch: "#14161a",
		ink: "#f2f4f8",
		room: "dark",
		line: "Cool slate"
	},
	{
		id: "forest",
		label: "Forest",
		swatch: "#152019",
		ink: "#e6f0e8",
		room: "dark",
		line: "Deep green"
	}
];
var DARK_SCHEMES = [
	"night",
	"ink",
	"dusk",
	"forest"
];
var FONT_CHOICES = [
	{
		id: "sans",
		label: "Sans",
		hint: "System UI",
		group: "readable",
		sample: "Read with less effort."
	},
	{
		id: "sourcesans",
		label: "Source Sans",
		hint: "Humanist sans",
		group: "readable",
		sample: "Read with less effort."
	},
	{
		id: "inclusive",
		label: "Inclusive",
		hint: "Accessible sans",
		group: "readable",
		sample: "Read with less effort."
	},
	{
		id: "atkinson",
		label: "Atkinson",
		hint: "Distinct I, l, 1",
		group: "readable",
		sample: "I, l, 1 stay distinct."
	},
	{
		id: "opendyslexic",
		label: "OpenDyslexic",
		hint: "Preference · distinct b/d",
		group: "dyslexia",
		sample: "b d p q stay distinct."
	},
	{
		id: "lexend",
		label: "Lexend",
		hint: "Low crowding",
		group: "dyslexia",
		sample: "Letters keep their space."
	},
	{
		id: "andika",
		label: "Andika",
		hint: "Literacy sans",
		group: "dyslexia",
		sample: "Built for new readers."
	},
	{
		id: "serif",
		label: "Newsreader",
		hint: "Literary serif",
		group: "literary",
		sample: "A quieter long page."
	},
	{
		id: "literata",
		label: "Literata",
		hint: "Reading serif",
		group: "literary",
		sample: "Made for long form."
	},
	{
		id: "comicneue",
		label: "Comic Neue",
		hint: "Informal, distinct",
		group: "literary",
		sample: "Friendly, unmirrored."
	}
];
var FONT_GROUPS = [
	{
		id: "readable",
		label: "Clear sans",
		hint: "Everyday reading"
	},
	{
		id: "dyslexia",
		label: "Dyslexia-friendly",
		hint: "Spacing and distinct shapes do the work. Weighted-base fonts are a preference, not a proven boost."
	},
	{
		id: "literary",
		label: "Literary",
		hint: "Long-form serifs and informal faces"
	}
];
var RHYTHM_CHOICES = [
	{
		id: "steady",
		label: "Steady",
		hint: "Even pace"
	},
	{
		id: "sentence",
		label: "Sentence",
		hint: "Rest at true sentence ends"
	},
	{
		id: "breath",
		label: "Breath",
		hint: "Rest at clauses"
	}
];
var TABS = [
	{
		id: "explore",
		label: "Explore"
	},
	{
		id: "read",
		label: "Read"
	},
	{
		id: "library",
		label: "Library"
	},
	{
		id: "insights",
		label: "Insights"
	},
	{
		id: "settings",
		label: "Settings"
	}
];
var FONT_CLASS = {
	sans: "font-sans",
	serif: "font-serif",
	lexend: "font-lexend",
	atkinson: "font-atkinson",
	inclusive: "font-inclusive",
	andika: "font-andika",
	opendyslexic: "font-opendyslexic",
	literata: "font-literata",
	comicneue: "font-comicneue",
	sourcesans: "font-sourcesans"
};
var TINT_CLASS = {
	none: "bg-bg",
	adhd: "bg-tint-adhd",
	dyslexia: "bg-tint-dyslexia",
	focus: "bg-tint-focus",
	academic: "bg-tint-academic"
};
var tapScale = "active:not-disabled:scale-[0.97]";
var buttonVariants = cva("icon-group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium outline-none select-none disabled:pointer-events-none disabled:opacity-40 transition-[transform,background-color,box-shadow,color,opacity] duration-[140ms] ease-[var(--ease-out)] focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-fg)_18%,transparent)]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-border hover:opacity-90",
			outline: "bg-surface text-fg shadow-border hover:shadow-border-hover",
			ghost: "bg-transparent text-fg hover:bg-fg/5",
			destructive: "bg-danger-soft text-danger hover:bg-danger/15"
		},
		size: {
			default: "h-11 min-h-11 px-4 rounded-md text-sm",
			sm: "h-9 min-h-9 px-3 rounded-sm text-sm",
			lg: "h-12 min-h-12 px-5 rounded-lg text-sm",
			icon: "size-11 min-h-11 rounded-md",
			"icon-sm": "size-9 min-h-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild = false, static: isStatic, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), !isStatic && tapScale, className),
		...props
	});
});
Button.displayName = "Button";
var GUTENDEX_ORIGIN$1 = "https://gutendex.com";
var GUTENDEX_TIMEOUT_MS = 3e3;
var GUTENBERG_TEXT_TIMEOUT_MS = 2e4;
var FEATURED_GUTENDEX_QUERIES = [
	"Austen",
	"Darwin",
	"Frankenstein",
	"Dickens",
	"Sherlock",
	"Homer"
];
/**
* Should requests go through this app's same-origin proxy?
*
* True in the browser, where a direct cross-origin call would be blocked; false
* on the server, which can reach the upstream host itself.
*
* Named `shouldUseSameOriginProxy` rather than `useSameOriginProxy` on purpose:
* the `use` prefix made every lint pass read a plain predicate as a React hook
* and report a rules-of-hooks violation at each call site. The rule was right
* to complain — the name claimed something the function is not.
*/
function shouldUseSameOriginProxy() {
	return typeof window !== "undefined";
}
function gutendexBooksUrl(params) {
	const query = params.toString();
	const path = query ? `books?${query}` : "books";
	return shouldUseSameOriginProxy() ? `/api/gutendex/${path}` : `${GUTENDEX_ORIGIN$1}/${path}`;
}
function gutendexSearchParams(term) {
	const params = new URLSearchParams({
		languages: "en",
		mime_type: "text/plain"
	});
	const needle = term.trim();
	if (needle) params.set("search", needle);
	return params;
}
function rewriteGutendexNext(next) {
	if (!next) return null;
	try {
		const url = new URL(next);
		if (url.hostname !== "gutendex.com" && url.hostname !== "www.gutendex.com") return null;
		const path = `${url.pathname.replace(/^\//, "").replace(/\/$/, "")}${url.search}`;
		return shouldUseSameOriginProxy() ? `/api/gutendex/${path}` : next;
	} catch {
		return null;
	}
}
function pickGutendexCover(formats) {
	return formats["image/jpeg"] || formats["image/png"] || void 0;
}
function pickGutendexTextUrl(formats) {
	const entries = Object.entries(formats);
	const utf8 = entries.find(([mime, url]) => mime.startsWith("text/plain") && /utf-8/i.test(mime) && isAllowedGutenbergUrl(url));
	if (utf8) return utf8[1];
	return entries.find(([mime, url]) => mime.startsWith("text/plain") && isAllowedGutenbergUrl(url))?.[1];
}
var GUTENBERG_HOSTS = /* @__PURE__ */ new Set([
	"www.gutenberg.org",
	"gutenberg.org",
	"aleph.gutenberg.org"
]);
function isAllowedGutenbergUrl(value) {
	if (!value) return false;
	try {
		const url = new URL(value);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		if (!GUTENBERG_HOSTS.has(url.hostname)) return false;
		return /^\/(ebooks|cache\/epub|files)\//.test(url.pathname);
	} catch {
		return false;
	}
}
function gutenbergFetchUrl(target) {
	return shouldUseSameOriginProxy() ? `/api/gutenberg?url=${encodeURIComponent(target)}` : target;
}
var START_MARK = /\*\*\*\s*START OF (THE |THIS )?PROJECT GUTENBERG EBOOK[\s\S]*?\*\*\*/i;
var END_MARK = /\*\*\*\s*END OF (THE |THIS )?PROJECT GUTENBERG EBOOK[\s\S]*?\*\*\*/i;
function stripGutenbergBoilerplate(text) {
	let body = text.replace(/^\uFEFF/, "");
	const start = body.match(START_MARK);
	if (start && start.index != null) body = body.slice(start.index + start[0].length);
	const end = body.search(END_MARK);
	if (end !== -1) body = body.slice(0, end);
	return body.replace(/^\s+/, "").trim();
}
function gutenbergBook(id, title, authors, subjects, downloads) {
	return {
		id,
		title,
		authors,
		subjects,
		bookshelves: [],
		languages: ["en"],
		copyright: false,
		media_type: "Text",
		download_count: downloads,
		formats: {
			"text/plain; charset=utf-8": `https://www.gutenberg.org/ebooks/${id}.txt.utf-8`,
			"image/jpeg": `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`
		}
	};
}
var FALLBACK_SHELF = [
	gutenbergBook(1342, "Pride and Prejudice", [{
		name: "Austen, Jane",
		birth_year: 1775,
		death_year: 1817
	}], ["England -- Fiction"], 198164),
	gutenbergBook(84, "Frankenstein; Or, The Modern Prometheus", [{
		name: "Shelley, Mary Wollstonecraft",
		birth_year: 1797,
		death_year: 1851
	}], ["Science fiction"], 91e3),
	gutenbergBook(11, "Alice's Adventures in Wonderland", [{
		name: "Carroll, Lewis",
		birth_year: 1832,
		death_year: 1898
	}], ["Fantasy"], 88e3),
	gutenbergBook(1661, "The Adventures of Sherlock Holmes", [{
		name: "Doyle, Arthur Conan",
		birth_year: 1859,
		death_year: 1930
	}], ["Detective and mystery stories"], 72e3),
	gutenbergBook(98, "A Tale of Two Cities", [{
		name: "Dickens, Charles",
		birth_year: 1812,
		death_year: 1870
	}], ["France -- History -- Revolution"], 68e3),
	gutenbergBook(2701, "Moby Dick; Or, The Whale", [{
		name: "Melville, Herman",
		birth_year: 1819,
		death_year: 1891
	}], ["Whaling -- Fiction"], 54e3),
	gutenbergBook(174, "The Picture of Dorian Gray", [{
		name: "Wilde, Oscar",
		birth_year: 1854,
		death_year: 1900
	}], ["Didactic fiction"], 51e3),
	gutenbergBook(345, "Dracula", [{
		name: "Stoker, Bram",
		birth_year: 1847,
		death_year: 1912
	}], ["Gothic fiction"], 49e3),
	gutenbergBook(1260, "Jane Eyre", [{
		name: "Brontë, Charlotte",
		birth_year: 1816,
		death_year: 1855
	}], ["Orphans -- Fiction"], 43e3),
	gutenbergBook(76, "Adventures of Huckleberry Finn", [{
		name: "Twain, Mark",
		birth_year: 1835,
		death_year: 1910
	}], ["Mississippi River -- Fiction"], 41e3),
	gutenbergBook(2009, "On the Origin of Species", [{
		name: "Darwin, Charles",
		birth_year: 1809,
		death_year: 1882
	}], ["Evolution (Biology)"], 18e3),
	gutenbergBook(6130, "The Iliad", [{
		name: "Homer",
		birth_year: -750,
		death_year: -650
	}], ["Epic poetry, Greek"], 22e3),
	gutenbergBook(1727, "The Odyssey", [{
		name: "Homer",
		birth_year: -750,
		death_year: -650
	}], ["Epic poetry, Greek"], 21e3),
	gutenbergBook(1952, "The Yellow Wallpaper", [{
		name: "Gilman, Charlotte Perkins",
		birth_year: 1860,
		death_year: 1935
	}], ["Feminist fiction"], 19e3),
	gutenbergBook(43, "The Strange Case of Dr. Jekyll and Mr. Hyde", [{
		name: "Stevenson, Robert Louis",
		birth_year: 1850,
		death_year: 1894
	}], ["Horror tales"], 17e3)
];
function fallbackGutendexSearch(term) {
	const needle = term.trim().toLowerCase();
	const results = needle ? FALLBACK_SHELF.filter((book) => {
		const hay = `${book.title} ${book.authors.map((a) => a.name).join(" ")} ${book.subjects.join(" ")}`.toLowerCase();
		return needle.split(/\s+/).every((part) => hay.includes(part));
	}) : FALLBACK_SHELF;
	return {
		count: results.length,
		next: null,
		previous: null,
		results,
		source: "fallback"
	};
}
async function searchGutendex(term, signal) {
	try {
		const data = await fetchJson(gutendexBooksUrl(gutendexSearchParams(term)), {
			signal,
			timeoutMs: GUTENDEX_TIMEOUT_MS
		});
		if (!Array.isArray(data.results)) throw new RemoteError("parse", "Gutendex returned an unexpected catalog.");
		return {
			count: data.count ?? data.results.length,
			next: rewriteGutendexNext(data.next),
			previous: rewriteGutendexNext(data.previous),
			results: data.results,
			source: "gutendex"
		};
	} catch (error) {
		if (isAbortError(error)) throw error;
		return fallbackGutendexSearch(term);
	}
}
async function fetchGutendexPage(url, signal) {
	const data = await fetchJson(url, {
		signal,
		timeoutMs: GUTENDEX_TIMEOUT_MS
	});
	return {
		count: data.count ?? data.results?.length ?? 0,
		next: rewriteGutendexNext(data.next),
		previous: rewriteGutendexNext(data.previous),
		results: Array.isArray(data.results) ? data.results : [],
		source: "gutendex"
	};
}
async function fetchGutendexReaderText(book, signal) {
	const target = pickGutendexTextUrl(book.formats);
	if (!target) throw new RemoteError("empty", "That title isn’t available as readable text.");
	try {
		const stripped = stripGutenbergBoilerplate(await fetchText(gutenbergFetchUrl(target), {
			signal,
			timeoutMs: GUTENBERG_TEXT_TIMEOUT_MS,
			retries: 0,
			accept: "text/plain, text/html;q=0.8, */*;q=0.1"
		}));
		if (!stripped) throw new RemoteError("empty", "That file didn’t contain readable text.");
		return stripped.slice(0, 4e5);
	} catch (error) {
		if (isAbortError(error)) throw error;
		throw asRemoteError(error, "Could not open that book.");
	}
}
function isStaleChunkError(error) {
	const message = error instanceof Error ? error.message : String(error ?? "");
	return /dynamically imported module|loading chunk \d+|Importing a module script failed/i.test(message);
}
function friendlyViewError(error) {
	if (isStaleChunkError(error)) return "This view did not load. Reload and it should come back.";
	if (error instanceof Error && error.message.trim()) return error.message;
	return "This view hit a snag.";
}
function reloadView(slot = "view") {
	if (typeof window === "undefined") return;
	try {
		const key = `nl-chunk-reload:${slot}`;
		const last = Number(sessionStorage.getItem(key) || "0");
		if (Date.now() - last < 12e3) return;
		sessionStorage.setItem(key, String(Date.now()));
	} catch {}
	window.location.reload();
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-medium",
				children: "The page hit a snag"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: friendlyViewError(error) || "Reload and try again. If you were opening a file, paste the text instead."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
				onClick: () => window.location.reload(),
				children: "Reload"
			})
		]
	});
}
var TabErrorBoundary = class extends import_react.Component {
	state = {
		error: null,
		nonce: 0
	};
	static getDerivedStateFromError(error) {
		return { error };
	}
	componentDidCatch(error, info) {
		console.error("NeuroLens view failed", error, info.componentStack);
		if (isStaleChunkError(error)) reloadView(this.props.slot ?? "tab");
	}
	render() {
		if (this.state.error) {
			const stale = isStaleChunkError(this.state.error);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col items-center justify-center gap-3 px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm text-pretty text-muted",
					children: friendlyViewError(this.state.error)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
					onClick: () => {
						if (stale) {
							window.location.reload();
							return;
						}
						this.setState((state) => ({
							error: null,
							nonce: state.nonce + 1
						}));
					},
					children: stale ? "Reload" : "Try again"
				})]
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "contents",
			children: this.props.children
		}, this.state.nonce);
	}
};
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-c1IwcQPA.css";
var APP_NAME = "NeuroLens";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "NeuroLens turns dense text into a calmer, more accessible reading experience for ADHD, dyslexia, and cognitive fatigue."
			},
			{
				name: "theme-color",
				content: "#F0E8DC"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preload",
				as: "image",
				href: "/images/hero-lens.jpg"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "try{var p=JSON.parse(localStorage.getItem(\"neurolens-profile\")||\"{}\");if(p&&p.theme)document.documentElement.dataset.scheme=p.theme;if(localStorage.getItem(\"neurolens-started\"))document.documentElement.dataset.started=\"1\"}catch(e){}" } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$2 = () => import("./routes-DSsj-njg.mjs").then((n) => n.t);
var TAB_IDS = new Set(TABS.map((tab) => tab.id));
var Route$6 = createFileRoute("/")({
	/**
	* The active view lives in the URL so a tab can be linked, bookmarked, and
	* reached with the back button. `explore` is the default and stays absent
	* from the query string rather than writing `?view=explore` on first paint.
	*
	* An unknown value falls back to the default instead of throwing — a stale
	* or hand-edited link should land on the app, not an error boundary.
	*/
	validateSearch: (search) => {
		const view = search.view;
		return typeof view === "string" && TAB_IDS.has(view) && view !== "explore" ? { view } : {};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./privacy-BDT5i5eh.mjs");
var Route$5 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./thank-you-DFu_YidW.mjs");
var Route$4 = createFileRoute("/thank-you")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
/** Same-origin API proxies: timeout plus one retry on 5xx / network, never on timeout. */
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function isAbort(error) {
	if (error instanceof DOMException && error.name === "AbortError") return true;
	return error instanceof Error && error.name === "AbortError";
}
async function proxyFetch(url, init, options) {
	const attempts = Math.max(1, options.attempts ?? 2);
	const retryDelayMs = options.retryDelayMs ?? 220;
	let lastError;
	for (let attempt = 0; attempt < attempts; attempt++) {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), options.timeoutMs);
		try {
			const response = await fetch(url, {
				...init,
				signal: controller.signal
			});
			if (!response.ok && response.status >= 500 && attempt < attempts - 1) {
				await sleep(retryDelayMs);
				continue;
			}
			return response;
		} catch (error) {
			lastError = error;
			if (isAbort(error) || attempt === attempts - 1) throw error;
			await sleep(retryDelayMs);
		} finally {
			clearTimeout(timer);
		}
	}
	throw lastError instanceof Error ? lastError : /* @__PURE__ */ new Error("Request failed");
}
var DICTIONARY_ORIGIN = "https://api.dictionaryapi.dev";
var USER_AGENT$3 = "NeuroLens/1.0 (adaptive reader; dictionary lookup)";
var Route$3 = createFileRoute("/api/dictionary")({ server: { handlers: { GET: async ({ request }) => {
	const word = (new URL(request.url).searchParams.get("q") ?? "").toLowerCase().replace(/[^a-z']/g, "");
	if (word.length < 2 || word.length > 40) return Response.json({ error: "Invalid word" }, { status: 400 });
	try {
		const response = await proxyFetch(`${DICTIONARY_ORIGIN}/api/v2/entries/en/${encodeURIComponent(word)}`, { headers: {
			Accept: "application/json",
			"User-Agent": USER_AGENT$3
		} }, { timeoutMs: 6e3 });
		const body = await response.arrayBuffer();
		const headers = new Headers();
		headers.set("content-type", response.headers.get("content-type") ?? "application/json");
		headers.set("cache-control", response.ok ? "public, max-age=86400" : "no-store");
		return new Response(body, {
			status: response.status,
			headers
		});
	} catch {
		return Response.json({ error: "Dictionary is unavailable." }, { status: 502 });
	}
} } } });
var USER_AGENT$2 = "NeuroLens/1.0 (adaptive reader; Project Gutenberg text)";
var Route$2 = createFileRoute("/api/gutenberg")({ server: { handlers: { GET: async ({ request }) => {
	const target = new URL(request.url).searchParams.get("url");
	if (!isAllowedGutenbergUrl(target)) return new Response("Not found", { status: 404 });
	try {
		const response = await proxyFetch(target, {
			headers: {
				Accept: "text/plain, text/html;q=0.8, image/*;q=0.5, */*;q=0.1",
				"User-Agent": USER_AGENT$2
			},
			redirect: "follow"
		}, { timeoutMs: 2e4 });
		const body = await response.arrayBuffer();
		const headers = new Headers();
		headers.set("content-type", response.headers.get("content-type") ?? "text/plain; charset=utf-8");
		headers.set("cache-control", response.ok ? "public, max-age=86400" : "no-store");
		return new Response(body, {
			status: response.status,
			headers
		});
	} catch {
		return Response.json({ error: "Project Gutenberg is unavailable." }, { status: 502 });
	}
} } } });
var GUTENDEX_ORIGIN = "https://gutendex.com";
var USER_AGENT$1 = "NeuroLens/1.0 (adaptive reader; Project Gutenberg via Gutendex)";
function isAllowedSplat$1(splat) {
	return splat === "books" || /^books\/\d+$/.test(splat);
}
var Route$1 = createFileRoute("/api/gutendex/$")({ server: { handlers: { GET: async ({ params, request }) => {
	const splat = params._splat ?? "";
	if (!isAllowedSplat$1(splat)) return new Response("Not found", { status: 404 });
	const incoming = new URL(request.url);
	const target = new URL(`${GUTENDEX_ORIGIN}/${splat}`);
	incoming.searchParams.forEach((value, key) => {
		target.searchParams.set(key, value);
	});
	try {
		const response = await proxyFetch(target, { headers: {
			Accept: "application/json",
			"User-Agent": USER_AGENT$1
		} }, { timeoutMs: 3e3 });
		const body = await response.arrayBuffer();
		const out = new Headers();
		out.set("content-type", response.headers.get("content-type") ?? "application/json");
		out.set("cache-control", response.ok ? "public, max-age=180" : "no-store");
		return new Response(body, {
			status: response.status,
			headers: out
		});
	} catch {
		return Response.json({ error: "Gutendex is unavailable." }, { status: 502 });
	}
} } } });
var OPEN_LIBRARY_ORIGIN = "https://openlibrary.org";
var USER_AGENT = "NeuroLens/1.0 (adaptive reader)";
function isAllowedSplat(splat) {
	if (splat === "search.json") return true;
	return /^works\/OL\d+W\.json$/.test(splat);
}
var Route = createFileRoute("/api/openlibrary/$")({ server: { handlers: { GET: async ({ params, request }) => {
	const splat = params._splat ?? "";
	if (!isAllowedSplat(splat)) return new Response("Not found", { status: 404 });
	const incoming = new URL(request.url);
	const target = new URL(`${OPEN_LIBRARY_ORIGIN}/${splat}`);
	incoming.searchParams.forEach((value, key) => {
		target.searchParams.set(key, value);
	});
	try {
		const response = await proxyFetch(target, { headers: {
			Accept: "application/json",
			"User-Agent": USER_AGENT
		} }, { timeoutMs: 8e3 });
		const body = await response.arrayBuffer();
		const headers = new Headers();
		headers.set("content-type", response.headers.get("content-type") ?? "application/json");
		headers.set("cache-control", response.ok ? "public, max-age=120" : "no-store");
		return new Response(body, {
			status: response.status,
			headers
		});
	} catch {
		return Response.json({ error: "Open Library is unavailable." }, { status: 502 });
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	PrivacyRoute: Route$5.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$7
	}),
	ThankYouRoute: Route$4.update({
		id: "/thank-you",
		path: "/thank-you",
		getParentRoute: () => Route$7
	}),
	ApiDictionaryRoute: Route$3.update({
		id: "/api/dictionary",
		path: "/api/dictionary",
		getParentRoute: () => Route$7
	}),
	ApiGutenbergRoute: Route$2.update({
		id: "/api/gutenberg",
		path: "/api/gutenberg",
		getParentRoute: () => Route$7
	}),
	ApiGutendexSplatRoute: Route$1.update({
		id: "/api/gutendex/$",
		path: "/api/gutendex/$",
		getParentRoute: () => Route$7
	}),
	ApiOpenlibrarySplatRoute: Route.update({
		id: "/api/openlibrary/$",
		path: "/api/openlibrary/$",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function PublicLayout({ eyebrow, title, image, imageAlt = "", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "material sticky top-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 items-center justify-between px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						"aria-label": "NeuroLens home",
						className: "icon-group flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
							detail: true,
							className: "size-9 text-fg sm:size-10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "NeuroLens"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm font-medium hover:opacity-70",
						children: "Open reader"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				tabIndex: -1,
				className: "mx-auto max-w-2xl px-5 py-16 outline-none sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageEnter, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-enter": true,
						className: "font-serif text-base text-accent italic",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-enter": true,
						className: "mt-3 text-5xl",
						children: title
					}),
					image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-enter": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "mt-8 overflow-hidden p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
								src: image,
								alt: imageAlt,
								width: 1600,
								height: 900,
								className: "aspect-[16/8] w-full rounded-sm object-cover"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-enter": true,
						className: "mt-8 space-y-4 text-sm leading-relaxed text-muted",
						children
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-enter": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "mt-10 inline-flex text-sm font-medium text-fg",
							children: "Back to NeuroLens"
						})
					})
				] })
			})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicLayout, {
		eyebrow: "404",
		title: "This page is not here.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The page you requested does not exist, or it has moved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Return home"
			})
		})]
	});
}
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { useReducedMotion as $, ScrollScene as A, Card as B, TINT_CLASS as C, GsapStagger as D, GsapCount as E, fetchJson as F, PanelWell as G, Media as H, isAbortError as I, Skeleton as J, Progress as K, isRemoteError as L, useInView as M, RemoteError as N, Magnetic as O, asRemoteError as P, scrollToId as Q, remoteMessage as R, TABS as S, Mark as T, Panel as U, Kbd as V, PanelHeader as W, easeOut as X, cn as Y, registerGsap as Z, FONT_CLASS as _, isStaleChunkError as a, READING_PROFILES as b, fallbackGutendexSearch as c, pickGutendexCover as d, wordCount as et, searchGutendex as f, FONT_CHOICES as g, DARK_SCHEMES as h, friendlyViewError as i, StaggerBlock as j, PageEnter as k, fetchGutendexPage as l, COLOR_SCHEMES as m, PublicLayout as n, reloadView as o, Button as p, Separator as q, TabErrorBoundary as r, FEATURED_GUTENDEX_QUERIES as s, router_exports as t, fetchGutendexReaderText as u, FONT_GROUPS as v, __exportAll as w, RHYTHM_CHOICES as x, NAMED_PRESETS as y, Badge as z };
