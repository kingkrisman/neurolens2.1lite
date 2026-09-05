import { t as buildLocalRecap } from "./reconnect-DdBhzL0O.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reconnect-ai-B_pTt6Q5.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var lastCall = 0;
function parseRecap(raw, fallback) {
	const match = raw.match(/\{[\s\S]*\}/);
	if (!match) return fallback;
	try {
		const body = JSON.parse(match[0]);
		const recap = typeof body.recap === "string" ? body.recap.trim() : "";
		const idea = typeof body.idea === "string" ? body.idea.trim() : "";
		const next = typeof body.next === "string" ? body.next.trim() : "";
		if (!recap || !idea) return fallback;
		return {
			recap: recap.slice(0, 320),
			idea: idea.slice(0, 160),
			next: (next || fallback.next).slice(0, 200),
			resumeAt: fallback.resumeAt
		};
	} catch {
		return fallback;
	}
}
var shapeRecap_createServerFn_handler = createServerRpc({
	id: "5d2f684ffb1e01f066fae9f45c56e7e9fabc7a84bc9a894683d3b8bbe7023f19",
	name: "shapeRecap",
	filename: "src/lib/reconnect-ai.ts"
}, (opts) => shapeRecap.__executeServer(opts));
var shapeRecap = createServerFn({ method: "POST" }).validator((input) => ({
	covered: String(input.covered ?? "").slice(0, 1200),
	next: String(input.next ?? "").slice(0, 500),
	progress: Number(input.progress) || 0,
	text: String(input.text ?? "").slice(0, 4e3)
})).handler(shapeRecap_createServerFn_handler, async ({ data }) => {
	const fallback = buildLocalRecap(data.text, data.progress);
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey || !data.covered.trim()) return {
		ok: false,
		recap: fallback
	};
	const now = Date.now();
	if (now - lastCall < 3e3) return {
		ok: false,
		recap: fallback
	};
	lastCall = now;
	try {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				temperature: .3,
				max_tokens: 220,
				messages: [{
					role: "system",
					content: "You help a reader who lost the thread. Never say they are distracted, lazy, or failing. Write plain English. Reply with JSON only: {\"recap\":\"1-2 sentences of what they already passed\",\"idea\":\"one short main idea\",\"next\":\"one sentence of what comes now\"}."
				}, {
					role: "user",
					content: `Already passed:\n"""${data.covered}"""\n\nWhat comes next:\n"""${data.next}"""`
				}]
			})
		});
		if (!res.ok) return {
			ok: false,
			recap: fallback
		};
		return {
			ok: true,
			recap: parseRecap((await res.json()).choices?.[0]?.message?.content ?? "", fallback)
		};
	} catch {
		return {
			ok: false,
			recap: fallback
		};
	}
});
//#endregion
export { shapeRecap_createServerFn_handler };
