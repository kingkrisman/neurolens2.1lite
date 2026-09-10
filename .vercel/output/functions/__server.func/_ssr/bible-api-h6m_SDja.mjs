import { F as fetchJson, I as isAbortError, N as RemoteError, P as asRemoteError } from "./router-BR13pP-z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bible-api-h6m_SDja.js
function b(name, testament, chapters) {
	return {
		name,
		testament,
		chapters
	};
}
/** World English Bible — public domain, fetched live from bible-api.com. */
var BIBLE_ATTRIBUTION = "World English Bible (WEB), public domain, via bible-api.com. Type a reference like John 3:16, or open a chapter.";
var BIBLE_BOOKS = [
	b("Genesis", "OT", 50),
	b("Exodus", "OT", 40),
	b("Leviticus", "OT", 27),
	b("Numbers", "OT", 36),
	b("Deuteronomy", "OT", 34),
	b("Joshua", "OT", 24),
	b("Judges", "OT", 21),
	b("Ruth", "OT", 4),
	b("1 Samuel", "OT", 31),
	b("2 Samuel", "OT", 24),
	b("1 Kings", "OT", 22),
	b("2 Kings", "OT", 25),
	b("1 Chronicles", "OT", 29),
	b("2 Chronicles", "OT", 36),
	b("Ezra", "OT", 10),
	b("Nehemiah", "OT", 13),
	b("Esther", "OT", 10),
	b("Job", "OT", 42),
	b("Psalms", "OT", 150),
	b("Proverbs", "OT", 31),
	b("Ecclesiastes", "OT", 12),
	b("Song of Solomon", "OT", 8),
	b("Isaiah", "OT", 66),
	b("Jeremiah", "OT", 52),
	b("Lamentations", "OT", 5),
	b("Ezekiel", "OT", 48),
	b("Daniel", "OT", 12),
	b("Hosea", "OT", 14),
	b("Joel", "OT", 3),
	b("Amos", "OT", 9),
	b("Obadiah", "OT", 1),
	b("Jonah", "OT", 4),
	b("Micah", "OT", 7),
	b("Nahum", "OT", 3),
	b("Habakkuk", "OT", 3),
	b("Zephaniah", "OT", 3),
	b("Haggai", "OT", 2),
	b("Zechariah", "OT", 14),
	b("Malachi", "OT", 4),
	b("Matthew", "NT", 28),
	b("Mark", "NT", 16),
	b("Luke", "NT", 24),
	b("John", "NT", 21),
	b("Acts", "NT", 28),
	b("Romans", "NT", 16),
	b("1 Corinthians", "NT", 16),
	b("2 Corinthians", "NT", 13),
	b("Galatians", "NT", 6),
	b("Ephesians", "NT", 6),
	b("Philippians", "NT", 4),
	b("Colossians", "NT", 4),
	b("1 Thessalonians", "NT", 5),
	b("2 Thessalonians", "NT", 3),
	b("1 Timothy", "NT", 6),
	b("2 Timothy", "NT", 4),
	b("Titus", "NT", 3),
	b("Philemon", "NT", 1),
	b("Hebrews", "NT", 13),
	b("James", "NT", 5),
	b("1 Peter", "NT", 5),
	b("2 Peter", "NT", 3),
	b("1 John", "NT", 5),
	b("2 John", "NT", 1),
	b("3 John", "NT", 1),
	b("Jude", "NT", 1),
	b("Revelation", "NT", 22)
];
var FEATURED_PASSAGES = [
	{
		id: "genesis-1",
		book: "Genesis",
		chapter: 1,
		label: "Genesis 1"
	},
	{
		id: "psalm-23",
		book: "Psalms",
		chapter: 23,
		label: "Psalm 23"
	},
	{
		id: "proverbs-3",
		book: "Proverbs",
		chapter: 3,
		label: "Proverbs 3"
	},
	{
		id: "isaiah-40",
		book: "Isaiah",
		chapter: 40,
		verse: "28-31",
		label: "Isaiah 40:28–31"
	},
	{
		id: "matthew-5",
		book: "Matthew",
		chapter: 5,
		label: "Matthew 5"
	},
	{
		id: "john-1",
		book: "John",
		chapter: 1,
		label: "John 1"
	},
	{
		id: "john-3-16",
		book: "John",
		chapter: 3,
		verse: "16",
		label: "John 3:16"
	},
	{
		id: "romans-8",
		book: "Romans",
		chapter: 8,
		label: "Romans 8"
	}
];
var BIBLE_PLANS = [
	{
		id: "gospels",
		name: "Gospels",
		description: "The Word, new birth, and the mountain teaching.",
		chapters: [
			"john-1",
			"john-3-16",
			"matthew-5"
		]
	},
	{
		id: "psalms",
		name: "Psalms",
		description: "A shepherd’s rest for a quieter page.",
		chapters: ["psalm-23"]
	},
	{
		id: "beginnings",
		name: "Beginnings",
		description: "Creation, wisdom, and a still water.",
		chapters: [
			"genesis-1",
			"proverbs-3",
			"psalm-23"
		]
	}
];
function findPassage(id) {
	return FEATURED_PASSAGES.find((item) => item.id === id);
}
var BIBLE_API_ORIGIN = "https://bible-api.com";
var HELLOAO_ORIGIN = "https://bible.helloao.org";
/** Public-domain / openly licensed English texts from bible-api.com, with HelloAO as fallback. */
var BIBLE_TRANSLATIONS = [
	{
		id: "web",
		name: "World English Bible",
		short: "WEB",
		bibleApi: "web",
		helloao: "ENGWEBP"
	},
	{
		id: "kjv",
		name: "King James Version",
		short: "KJV",
		bibleApi: "kjv"
	},
	{
		id: "asv",
		name: "American Standard Version",
		short: "ASV",
		bibleApi: "asv"
	},
	{
		id: "bbe",
		name: "Bible in Basic English",
		short: "BBE",
		bibleApi: "bbe"
	},
	{
		id: "dra",
		name: "Douay-Rheims",
		short: "DRA",
		bibleApi: "dra"
	},
	{
		id: "ylt",
		name: "Young's Literal",
		short: "YLT",
		bibleApi: "ylt"
	},
	{
		id: "oeb-us",
		name: "Open English Bible",
		short: "OEB",
		bibleApi: "oeb-us"
	},
	{
		id: "bsb",
		name: "Berean Standard Bible",
		short: "BSB",
		helloao: "BSB"
	}
];
var DEFAULT_TRANSLATION = BIBLE_TRANSLATIONS[0];
/** USFM-style ids used by bible.helloao.org/api/{id}/{Book}/{chapter}.json */
var HELLOAO_BOOK_IDS = {
	Genesis: "GEN",
	Exodus: "EXO",
	Leviticus: "LEV",
	Numbers: "NUM",
	Deuteronomy: "DEU",
	Joshua: "JOS",
	Judges: "JDG",
	Ruth: "RUT",
	"1 Samuel": "1SA",
	"2 Samuel": "2SA",
	"1 Kings": "1KI",
	"2 Kings": "2KI",
	"1 Chronicles": "1CH",
	"2 Chronicles": "2CH",
	Ezra: "EZR",
	Nehemiah: "NEH",
	Esther: "EST",
	Job: "JOB",
	Psalms: "PSA",
	Proverbs: "PRO",
	Ecclesiastes: "ECC",
	"Song of Solomon": "SNG",
	Isaiah: "ISA",
	Jeremiah: "JER",
	Lamentations: "LAM",
	Ezekiel: "EZK",
	Daniel: "DAN",
	Hosea: "HOS",
	Joel: "JOL",
	Amos: "AMO",
	Obadiah: "OBA",
	Jonah: "JON",
	Micah: "MIC",
	Nahum: "NAM",
	Habakkuk: "HAB",
	Zephaniah: "ZEP",
	Haggai: "HAG",
	Zechariah: "ZEC",
	Malachi: "MAL",
	Matthew: "MAT",
	Mark: "MRK",
	Luke: "LUK",
	John: "JHN",
	Acts: "ACT",
	Romans: "ROM",
	"1 Corinthians": "1CO",
	"2 Corinthians": "2CO",
	Galatians: "GAL",
	Ephesians: "EPH",
	Philippians: "PHP",
	Colossians: "COL",
	"1 Thessalonians": "1TH",
	"2 Thessalonians": "2TH",
	"1 Timothy": "1TI",
	"2 Timothy": "2TI",
	Titus: "TIT",
	Philemon: "PHM",
	Hebrews: "HEB",
	James: "JAS",
	"1 Peter": "1PE",
	"2 Peter": "2PE",
	"1 John": "1JN",
	"2 John": "2JN",
	"3 John": "3JN",
	Jude: "JUD",
	Revelation: "REV"
};
var cache = /* @__PURE__ */ new Map();
var ALIASES = {
	gn: "Genesis",
	gen: "Genesis",
	ex: "Exodus",
	exo: "Exodus",
	lev: "Leviticus",
	num: "Numbers",
	dt: "Deuteronomy",
	deut: "Deuteronomy",
	jos: "Joshua",
	jdg: "Judges",
	ru: "Ruth",
	"1sam": "1 Samuel",
	"2sam": "2 Samuel",
	"1kgs": "1 Kings",
	"2kgs": "2 Kings",
	"1chr": "1 Chronicles",
	"2chr": "2 Chronicles",
	ezr: "Ezra",
	neh: "Nehemiah",
	est: "Esther",
	job: "Job",
	ps: "Psalms",
	psa: "Psalms",
	psalm: "Psalms",
	pr: "Proverbs",
	prov: "Proverbs",
	ec: "Ecclesiastes",
	ecc: "Ecclesiastes",
	sos: "Song of Solomon",
	"song of songs": "Song of Solomon",
	"song of solomon": "Song of Solomon",
	is: "Isaiah",
	isa: "Isaiah",
	jer: "Jeremiah",
	lam: "Lamentations",
	eze: "Ezekiel",
	da: "Daniel",
	dan: "Daniel",
	hos: "Hosea",
	joe: "Joel",
	am: "Amos",
	ob: "Obadiah",
	jon: "Jonah",
	mic: "Micah",
	nah: "Nahum",
	hab: "Habakkuk",
	zep: "Zephaniah",
	hag: "Haggai",
	zec: "Zechariah",
	mal: "Malachi",
	mt: "Matthew",
	matt: "Matthew",
	mk: "Mark",
	lk: "Luke",
	jn: "John",
	ac: "Acts",
	ro: "Romans",
	rom: "Romans",
	"1cor": "1 Corinthians",
	"2cor": "2 Corinthians",
	gal: "Galatians",
	eph: "Ephesians",
	php: "Philippians",
	col: "Colossians",
	"1th": "1 Thessalonians",
	"1thess": "1 Thessalonians",
	"2th": "2 Thessalonians",
	"2thess": "2 Thessalonians",
	"1ti": "1 Timothy",
	"1tim": "1 Timothy",
	"2ti": "2 Timothy",
	"2tim": "2 Timothy",
	tit: "Titus",
	phm: "Philemon",
	heb: "Hebrews",
	jas: "James",
	"1pe": "1 Peter",
	"1pet": "1 Peter",
	"2pe": "2 Peter",
	"2pet": "2 Peter",
	"1jn": "1 John",
	"2jn": "2 John",
	"3jn": "3 John",
	jud: "Jude",
	rev: "Revelation"
};
function normalizeKey(value) {
	return value.trim().toLowerCase().replace(/\s+/g, " ").replace(/\./g, "");
}
function resolveBookName(input) {
	const key = normalizeKey(input);
	if (!key) return null;
	const alias = ALIASES[key.replace(/\s+/g, "")];
	if (alias) return alias;
	const aliasSpaced = ALIASES[key];
	if (aliasSpaced) return aliasSpaced;
	const exact = BIBLE_BOOKS.find((book) => normalizeKey(book.name) === key);
	if (exact) return exact.name;
	const starts = BIBLE_BOOKS.filter((book) => normalizeKey(book.name).startsWith(key));
	if (starts.length === 1) return starts[0].name;
	return null;
}
function findBook(name) {
	const resolved = resolveBookName(name);
	return BIBLE_BOOKS.find((book) => book.name === resolved);
}
function findTranslation(id) {
	return BIBLE_TRANSLATIONS.find((item) => item.id === id) ?? DEFAULT_TRANSLATION;
}
/** `https://bible-api.com/BOOK+CHAPTER:VERSE` — omit verse for a whole chapter. */
function bibleApiUrl(ref, translationId = "web") {
	const book = ref.book.trim().replace(/\s+/g, "+");
	const verse = ref.verse == null || ref.verse === "" ? "" : String(ref.verse);
	const path = verse ? `${book}+${ref.chapter}:${verse}` : `${book}+${ref.chapter}`;
	const spec = findTranslation(translationId);
	return `${BIBLE_API_ORIGIN}/${path}${spec.bibleApi && spec.bibleApi !== "web" ? `?translation=${spec.bibleApi}` : ""}`;
}
function helloaoUrl(ref, translationCode) {
	const id = HELLOAO_BOOK_IDS[ref.book] ?? ref.book;
	return `${HELLOAO_ORIGIN}/api/${encodeURIComponent(translationCode)}/${encodeURIComponent(id)}/${ref.chapter}.json`;
}
function parseReference(input) {
	const raw = input.trim().replace(/\s+/g, " ");
	if (!raw) return null;
	const match = raw.match(/^(.*?)\s+(\d+)(?::(\d+(?:\s*-\s*\d+)?))?$/);
	if (!match) return null;
	const book = resolveBookName(match[1] ?? "");
	const chapter = Number(match[2]);
	const verse = match[3]?.replace(/\s+/g, "");
	if (!book || !Number.isInteger(chapter) || chapter < 1) return null;
	const meta = findBook(book);
	if (meta && chapter > meta.chapters) return null;
	return verse ? {
		book,
		chapter,
		verse
	} : {
		book,
		chapter
	};
}
function cleanVerse(text) {
	return text.replace(/\s+/g, " ").trim();
}
function parseVerseRange(verse) {
	if (verse == null || verse === "") return {};
	const match = String(verse).match(/^(\d+)(?:-(\d+))?$/);
	if (!match) return {};
	return {
		start: Number(match[1]),
		end: Number(match[2] ?? match[1])
	};
}
function formatReference(ref) {
	const verse = ref.verse == null || ref.verse === "" ? "" : `:${ref.verse}`;
	return `${ref.book} ${ref.chapter}${verse}`;
}
function asPassage(data) {
	const verses = (data.verses ?? []).map((verse) => ({
		book: verse.book_name ?? "",
		chapter: verse.chapter ?? 0,
		verse: verse.verse ?? 0,
		text: cleanVerse(verse.text ?? "")
	})).filter((verse) => verse.text && verse.verse > 0);
	return {
		reference: data.reference ?? "",
		text: cleanVerse(data.text ?? ""),
		verses,
		translationId: data.translation_id ?? "web",
		translationName: data.translation_name ?? "World English Bible",
		source: "bible-api"
	};
}
function passageToReaderText(passage) {
	const body = passage.verses.map((verse) => `${verse.verse}  ${verse.text}`).join("\n\n");
	return `${passage.reference}\n${passage.translationName}\n\n${body}`.trim();
}
function flattenHelloaoContent(content) {
	if (typeof content === "string") return content;
	if (Array.isArray(content)) return content.map(flattenHelloaoContent).join("");
	if (content && typeof content === "object" && "text" in content) return String(content.text ?? "");
	return "";
}
function helloaoToPassage(data, ref, spec) {
	const range = parseVerseRange(ref.verse);
	const bookName = data.book?.name ?? ref.book;
	const chapter = data.chapter?.number ?? ref.chapter;
	const verses = (data.chapter?.content ?? []).filter((item) => item.type === "verse" && typeof item.number === "number").map((item) => ({
		book: bookName,
		chapter,
		verse: item.number ?? 0,
		text: cleanVerse(flattenHelloaoContent(item.content))
	})).filter((item) => {
		if (!item.text || item.verse < 1) return false;
		if (range.start != null && item.verse < range.start) return false;
		if (range.end != null && item.verse > range.end) return false;
		return true;
	});
	const name = data.translation?.englishName ?? data.translation?.name ?? spec.name;
	return {
		reference: formatReference(ref),
		text: verses.map((verse) => verse.text).join(" "),
		verses,
		translationId: spec.id,
		translationName: name,
		source: "helloao"
	};
}
async function fetchFromBibleApi(ref, spec, signal) {
	const url = bibleApiUrl(ref, spec.id);
	const data = await fetchJson(url, { signal });
	if (data.error || !data.verses?.length) throw new RemoteError("not-found", "That reference was not found.");
	return {
		...asPassage(data),
		translationId: spec.id,
		translationName: data.translation_name ?? spec.name
	};
}
async function fetchFromHelloao(ref, spec, signal) {
	if (!spec.helloao) throw new RemoteError("not-found", "That translation is not available here.");
	const url = helloaoUrl(ref, spec.helloao);
	const passage = helloaoToPassage(await fetchJson(url, { signal }), ref, spec);
	if (!passage.verses.length) throw new RemoteError("not-found", "That reference was not found.");
	return passage;
}
async function fetchPassage(ref, options = {}) {
	const opts = options instanceof AbortSignal ? { signal: options } : options;
	const spec = findTranslation(opts.translation);
	const cacheKey = `${spec.id}:${ref.book}:${ref.chapter}:${ref.verse ?? ""}`;
	const hit = cache.get(cacheKey);
	if (hit) return hit;
	const errors = [];
	if (spec.bibleApi) try {
		const passage = await fetchFromBibleApi(ref, spec, opts.signal);
		cache.set(cacheKey, passage);
		return passage;
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		const remote = asRemoteError(error, "Could not load that passage.");
		if (remote.kind === "not-found" && !spec.helloao) throw remote;
		errors.push(remote);
	}
	if (spec.helloao) try {
		const passage = await fetchFromHelloao(ref, spec, opts.signal);
		cache.set(cacheKey, passage);
		return passage;
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		errors.push(asRemoteError(error, "Could not load that passage."));
	}
	throw errors[errors.length - 1] ?? new RemoteError("http", "Could not load that passage.");
}
//#endregion
export { DEFAULT_TRANSLATION as a, findPassage as c, BIBLE_TRANSLATIONS as i, parseReference as l, BIBLE_BOOKS as n, FEATURED_PASSAGES as o, BIBLE_PLANS as r, fetchPassage as s, BIBLE_ATTRIBUTION as t, passageToReaderText as u };
