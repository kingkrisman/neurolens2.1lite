//#region node_modules/.nitro/vite/services/ssr/assets/reconnect-DdBhzL0O.js
/**
* Punkt-inspired sentence boundary detection.
*
* Naive splits on `.!?` break on Dr., U.S., e.g., 3.14, initials, and ellipsis.
* These rules follow Kiss & Strunk (2006): candidate terminator, abbreviation
* lists, initials, decimals, and next-token case / sentence starters.
*/
var TITLES = /* @__PURE__ */ new Set([
	"mr",
	"mrs",
	"ms",
	"mx",
	"dr",
	"prof",
	"sr",
	"jr",
	"st",
	"mt",
	"rev",
	"hon",
	"gen",
	"col",
	"lt",
	"sgt",
	"capt",
	"cmdr",
	"adm",
	"pres",
	"gov",
	"sen",
	"rep",
	"amb"
]);
var NEVER_END = /* @__PURE__ */ new Set([
	...TITLES,
	"vs",
	"v",
	"fig",
	"vol",
	"no",
	"nos",
	"pp",
	"p",
	"ch",
	"sec",
	"eq",
	"approx",
	"ca",
	"cf",
	"viz",
	"dept",
	"univ",
	"assn",
	"inc",
	"ltd",
	"corp",
	"co",
	"jan",
	"feb",
	"mar",
	"apr",
	"jun",
	"jul",
	"aug",
	"sep",
	"sept",
	"oct",
	"nov",
	"dec",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat",
	"sun",
	"est",
	"edt",
	"pst",
	"cst",
	"gmt",
	"utc",
	"am",
	"pm",
	"eg",
	"ie",
	"nb"
]);
var MAY_END = /* @__PURE__ */ new Set([
	"etc",
	"al",
	"us",
	"uk",
	"un",
	"eu",
	"usa",
	"phd",
	"md",
	"ba"
]);
var MULTI_PERIOD = /* @__PURE__ */ new Set([
	"e.g",
	"i.e",
	"u.s",
	"u.k",
	"u.n",
	"e.u",
	"ph.d",
	"m.d",
	"b.a",
	"a.m",
	"p.m",
	"n.b",
	"et.al"
]);
var SENTENCE_STARTERS = /* @__PURE__ */ new Set([
	"the",
	"this",
	"that",
	"these",
	"those",
	"it",
	"its",
	"he",
	"she",
	"we",
	"they",
	"i",
	"you",
	"a",
	"an",
	"in",
	"on",
	"at",
	"for",
	"but",
	"and",
	"or",
	"if",
	"when",
	"while",
	"after",
	"before",
	"although",
	"however",
	"therefore",
	"thus",
	"moreover",
	"furthermore",
	"meanwhile",
	"what",
	"why",
	"how",
	"where",
	"who",
	"which",
	"then",
	"next",
	"later",
	"finally",
	"still",
	"yet",
	"so",
	"because",
	"since",
	"here",
	"there",
	"today",
	"tomorrow",
	"yesterday"
]);
var TRAILING_CLOSERS = /[\]"'”’)\]]+$/;
function parseToken(token) {
	const trimmed = token.trim();
	const closers = trimmed.match(TRAILING_CLOSERS)?.[0] ?? "";
	const core = closers ? trimmed.slice(0, -closers.length) : trimmed;
	const punctMatch = core.match(/^(.*?)([.!?…]+)$/u);
	if (!punctMatch) return {
		word: core,
		punct: "",
		closers
	};
	return {
		word: punctMatch[1] ?? "",
		punct: punctMatch[2] ?? "",
		closers
	};
}
function abbrevKey(word) {
	return word.replace(/[.]/g, "").toLowerCase();
}
function multiKey(word) {
	return word.replace(/\.$/, "").toLowerCase();
}
function isTitleOrNeverEnd(word) {
	const key = abbrevKey(word);
	const dotted = multiKey(word);
	if (MAY_END.has(key)) return false;
	return NEVER_END.has(key) || MULTI_PERIOD.has(dotted) || TITLES.has(key);
}
function isMayEndAbbrev(word) {
	const key = abbrevKey(word);
	const dotted = multiKey(word);
	return MAY_END.has(key) || MULTI_PERIOD.has(dotted) && MAY_END.has(key);
}
function isInitial(word, punct) {
	if (!punct.startsWith(".")) return false;
	return /^[A-Za-z]$/.test(word);
}
function nextLooksLikeName(next) {
	const parsed = parseToken(next);
	if (isInitial(parsed.word, parsed.punct || ".")) return true;
	if (!/^[A-Z]/.test(next)) return false;
	return !isSentenceStarter(next);
}
function isSentenceStarter(next) {
	const letters = (parseToken(next).word || next).replace(/[^A-Za-z]/g, "");
	if (!letters) return false;
	return SENTENCE_STARTERS.has(letters.toLowerCase());
}
function startsLower(next) {
	const letter = next.match(/[A-Za-z]/);
	return Boolean(letter && letter[0] === letter[0].toLowerCase() && letter[0] !== letter[0].toUpperCase());
}
function isDecimalToken(token) {
	return /^\d+[.,]\d+[.,]?\d*$/.test(token.replace(TRAILING_CLOSERS, ""));
}
function nextWordFrom(tokens, index) {
	for (let i = index + 1; i < tokens.length; i += 1) if (!tokens[i]?.space) return tokens[i]?.value ?? "";
	return "";
}
/**
* True when `token` is a real sentence end, not Dr. / U.S. / 3.14 / J. K.
* `next` is the following word (empty at end of text).
*/
function isSentenceBoundary(token, next = "") {
	if (isDecimalToken(token)) return false;
	if (/@|https?:\/\//i.test(token)) return false;
	const { word, punct } = parseToken(token);
	if (!punct) return false;
	if (/[!?]/u.test(punct)) {
		if (next && startsLower(next)) return false;
		return true;
	}
	if (isTitleOrNeverEnd(word) && !isMayEndAbbrev(word)) return false;
	if (isInitial(word, punct)) {
		if (!next) return true;
		if (nextLooksLikeName(next)) return false;
		return isSentenceStarter(next);
	}
	if (isMayEndAbbrev(word)) {
		if (!next) return true;
		if (startsLower(next)) return false;
		return isSentenceStarter(next);
	}
	if (next && startsLower(next)) return false;
	return true;
}
function tokenize(text) {
	const tokens = [];
	let index = 0;
	while (index < text.length) {
		const space = /\s/.test(text[index] ?? "");
		let end = index + 1;
		while (end < text.length && /\s/.test(text[end] ?? "") === space) end += 1;
		tokens.push({
			start: index,
			end,
			value: text.slice(index, end),
			space
		});
		index = end;
	}
	return tokens;
}
/** Original slices, including trailing space after a boundary, so spans join back to the source. */
function splitSentenceSpans(text) {
	if (!text.trim()) return [];
	const tokens = tokenize(text);
	const spans = [];
	let spanStart = 0;
	for (let i = 0; i < tokens.length; i += 1) {
		const token = tokens[i];
		if (token.space) continue;
		const next = nextWordFrom(tokens, i);
		if (!isSentenceBoundary(token.value, next)) continue;
		let end = token.end;
		const following = tokens[i + 1];
		if (following?.space) end = following.end;
		const slice = text.slice(spanStart, end);
		if (slice.trim()) spans.push(slice);
		spanStart = end;
	}
	const rest = text.slice(spanStart);
	if (rest.trim()) spans.push(rest);
	return spans.length > 0 ? spans : [text];
}
function splitSentences(text) {
	return splitSentenceSpans(text.replace(/\s+/g, " ").trim()).map((span) => span.trim()).filter(Boolean);
}
var RECONNECT_COPY = {
	1: "Still with this page?",
	2: "Here’s what you just covered.",
	3: "This stretch may not have registered. A short recap can catch you up."
};
var RECONNECT_DISMISS_KEY = "neurolens-reconnect-dismiss";
var RECONNECT_COOLDOWN_MS = 15e4;
var WINDOW_MS = 9e4;
var SKIP_WINDOW_MS = 45e3;
function detectDisengagement(signal) {
	if (signal.autoScrolling) return null;
	const sitting = signal.startedAt != null ? signal.now - signal.startedAt : signal.elapsedActiveMs;
	if (signal.progress < .14 || sitting < 14e3) return null;
	const pauses = signal.pauses.filter((pause) => signal.now - pause.startedAt <= WINDOW_MS);
	const rereads = signal.rereads.filter((item) => signal.now - item.at <= WINDOW_MS);
	const skips = (signal.skips ?? []).filter((item) => signal.now - item.at <= SKIP_WINDOW_MS && item.to - item.from >= .16);
	const livePause = (signal.idleMs ?? 0) >= 1e4;
	const longPauses = pauses.filter((pause) => pause.durationMs >= 1e4).length + (livePause ? 1 : 0);
	const clustered = rereads.filter((item) => Math.abs(item.from - item.to) <= .22);
	const switching = rereads.length >= 2 && skips.length >= 1;
	let level = 0;
	let reason = "pause";
	if (switching || skips.length >= 1 && longPauses >= 1 || clustered.length >= 3) {
		level = 3;
		reason = switching ? "switch" : skips.length ? "skip" : "reread";
	} else if (skips.length >= 1 || rereads.length >= 2 || longPauses >= 2) {
		level = 2;
		reason = skips.length ? "skip" : rereads.length >= 2 ? "reread" : "dwell";
	} else if (longPauses >= 1 || rereads.length >= 1) {
		level = 1;
		reason = rereads.length ? "reread" : "pause";
	}
	if (!level) return null;
	return {
		level,
		reason,
		prompt: RECONNECT_COPY[level]
	};
}
function isSkipJump(from, to, durationMs) {
	const delta = to - from;
	if (delta < .16 || durationMs < 0) return false;
	if (delta >= .28) return durationMs <= 4e3;
	return durationMs <= 1600;
}
function reconnectDismissed(now = Date.now()) {
	try {
		return Number(sessionStorage.getItem("neurolens-reconnect-dismiss") || 0) > now;
	} catch {
		return false;
	}
}
function dismissReconnect(now = Date.now()) {
	try {
		sessionStorage.setItem(RECONNECT_DISMISS_KEY, String(now + RECONNECT_COOLDOWN_MS));
	} catch {}
}
function recapCacheKey(text, progress) {
	return `${text.trim().slice(0, 48)}:${Math.round(progress * 20) / 20}`;
}
function clip(sentence, max = 180) {
	const trimmed = sentence.replace(/\s+/g, " ").trim();
	if (trimmed.length <= max) return trimmed;
	return `${trimmed.slice(0, max).trim()}…`;
}
function pickIdea(sentences) {
	const ranked = [...sentences].sort((a, b) => a.length - b.length);
	return clip(ranked.find((item) => item.length >= 36) ?? ranked[0] ?? "The last stretch of the page.");
}
function buildLocalRecap(text, progress) {
	const sentences = splitSentences(text).filter((sentence) => sentence.split(/\s+/).length >= 5);
	if (!sentences.length) return {
		recap: "You’re still at the start of this page.",
		idea: "Nothing solid to recap yet.",
		next: "Read a little further, then reconnect.",
		resumeAt: 0
	};
	const at = Math.min(1, Math.max(0, progress));
	const idx = Math.min(sentences.length - 1, Math.max(0, Math.round(at * (sentences.length - 1))));
	const from = Math.max(0, idx - 3);
	const covered = sentences.slice(from, idx + 1);
	const upcoming = sentences.slice(idx + 1, idx + 3);
	return {
		recap: covered.slice(-2).map((item) => clip(item, 160)).join(" "),
		idea: pickIdea(covered),
		next: upcoming[0] ? clip(upcoming[0], 160) : "You’re at the end of this page.",
		resumeAt: sentences.length <= 1 ? 0 : from / (sentences.length - 1)
	};
}
function windowForModel(text, progress) {
	const recap = buildLocalRecap(text, progress);
	const sentences = splitSentences(text);
	const at = Math.min(1, Math.max(0, progress));
	const idx = Math.min(sentences.length - 1, Math.max(0, Math.round(at * Math.max(sentences.length - 1, 1))));
	const covered = sentences.slice(Math.max(0, idx - 6), idx + 1).join(" ").slice(-1200);
	const next = sentences.slice(idx + 1, idx + 4).join(" ").slice(0, 500);
	return {
		covered: covered || recap.recap,
		next: next || recap.next
	};
}
//#endregion
export { isSkipJump as a, splitSentenceSpans as c, isSentenceBoundary as i, splitSentences as l, detectDisengagement as n, recapCacheKey as o, dismissReconnect as r, reconnectDismissed as s, buildLocalRecap as t, windowForModel as u };
