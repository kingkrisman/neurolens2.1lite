import { useMemo } from "react";
import NumberFlow from "@number-flow/react";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Media, Panel, PanelHeader, PanelWell } from "@/components/ui/surfaces";
import { evaluateScheme, formatContrastRatio, bestContrastTheme } from "@/lib/contrast";
import { PatternPanel } from "@/components/pattern-panel";
import { PATTERN_META } from "@/lib/reading-patterns";
import { SAMPLE_TEXTS } from "@/lib/samples";
import { wordCount } from "@/lib/utils";
import { PageEnter, GsapStagger, ScrollScene } from "@/components/gsap-motion";
import {
  average,
  buildSuggestions,
  formatDuration,
  type InsightKind,
} from "@/lib/insights";

export function Insights() {
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

  const words = sessions.reduce((sum, session) => sum + wordCount(session.content), 0);
  const sessionCount = sessions.length;
  const progressPct = Math.round(reading.progress * 100);
  const focusScore = Math.max(0, 100 - reading.pauses.length * 12 - reading.rereads.length * 8);
  const feelScore = readingFeel === "right" ? 100 : readingFeel === "slow" || readingFeel === "fast" ? 70 : null;
  const quality =
    progressPct === 0 && feelScore == null
      ? null
      : feelScore == null
        ? Math.round(progressPct * 0.7 + focusScore * 0.3)
        : Math.round(progressPct * 0.4 + feelScore * 0.35 + focusScore * 0.25);
  const wpmSeries = sessions
    .slice(0, 8)
    .reverse()
    .map((session, index) => ({
      d: String(index + 1),
      v: session.currentWpm ?? Math.round((session.progress ?? 0) * 100),
    }));
  const chartData = wpmSeries.length > 0 ? wpmSeries : [{ d: "1", v: reading.currentWpm ?? progressPct }];
  const meanWpm = average(sessions.map((session) => session.currentWpm ?? 0).filter(Boolean));
  const totalTime = sessions.reduce((sum, session) => sum + (session.elapsedMs ?? 0), 0) + reading.elapsedActiveMs;
  const contrast = evaluateScheme(profile.theme, profile.fontSize);
  const suggestions = useMemo(
    () =>
      buildSuggestions({
        sessions,
        reading,
        profile,
        mode,
        targetWpm,
        feel: readingFeel,
      }),
    [sessions, reading, profile, mode, targetWpm, readingFeel],
  );

  const insight =
    readingFeel === "slow"
      ? "You marked this page as too fast. A lower target may help the next pass."
      : readingFeel === "fast"
        ? "You marked this page as too slow. You can raise the target if you want."
        : reading.rereads.length >= 2
          ? "You moved back through the page more than once."
          : reading.pauses.length >= 2
            ? "Long pauses showed up in this session."
            : text
              ? "Keep reading. Pace, pauses, and rereads fill this log as you go."
              : "Open a passage to start a live reading log.";

  const feelLabel =
    readingFeel === "slow" ? "Too fast" : readingFeel === "fast" ? "Too slow" : readingFeel === "right" ? "Just right" : "—";

  function apply(id: InsightKind) {
    try {
      if (id === "sample") {
        startReading(SAMPLE_TEXTS[0].text, { title: SAMPLE_TEXTS[0].title });
        return;
      }
      if (id === "plain") {
        setProfile({ ...profile, plainLanguage: true });
        toast.success("Plain words on");
        return;
      }
      if (id === "lexend") {
        setProfile({ ...profile, fontFamily: "lexend" });
        toast.success("Lexend is on");
        return;
      }
      if (id === "contrast") {
        const next = bestContrastTheme(profile.theme);
        setProfile({ ...profile, theme: next });
        toast.success("Contrast raised");
        return;
      }
      if (id === "scan") {
        setProfile({ ...profile, wordGuide: true });
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

  return (
    <PageEnter className="mx-auto h-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <h1 data-enter className="text-5xl">Insights</h1>
      <p data-enter className="mt-3 max-w-lg text-muted">
        How this sitting moves: fixations, saccades, rereads. Inferred from the page — no camera.
      </p>

      <ScrollScene>

      <div data-enter>
        <Panel className="mt-8">
          <div className="relative overflow-hidden rounded-lg">
            <Media
              src="/images/reading-room.jpg"
              alt="Window light in a university reading room"
              width={1600}
              height={900}
              data-scrub
              className="aspect-[16/8] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-primary-fg sm:p-8">
              <p className="text-xs tracking-wide text-primary-fg/70 uppercase">Session score</p>
              <p className="mt-1 font-serif text-6xl tracking-tight tabular-nums">
                {quality == null ? "—" : <NumberFlow value={quality} />}
              </p>
              <p className="mt-2 max-w-sm text-sm text-primary-fg/75">{insight}</p>
            </div>
          </div>
        </Panel>
      </div>

      <div data-enter className="mt-4">
        <PatternPanel />
      </div>

      {suggestions.length > 0 ? (
        <section data-enter className="mt-4">
          <h2 className="mb-3 text-lg font-medium">What to try</h2>
          <GsapStagger className="grid gap-3 md:grid-cols-3">
            {suggestions.map((item) => (
              <Panel key={item.id}>
                <PanelHeader title={item.title} description={item.body} />
                <PanelWell className="px-3 pb-3">
                  <Button className="w-full" onClick={() => apply(item.id)}>
                    {item.cta}
                  </Button>
                </PanelWell>
              </Panel>
            ))}
          </GsapStagger>
        </section>
      ) : null}

      <GsapStagger className="mt-4 grid gap-3 md:grid-cols-3">
        <Panel>
          <PanelWell className="bg-primary px-5 py-5 text-primary-fg">
            <p className="text-xs font-medium tracking-wide uppercase opacity-70">
              {meanWpm ? "Pace across sittings" : "Recent progress"}
            </p>
            <div className="mt-5 h-24 w-full min-w-0">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={96} minWidth={0}>
                  <BarChart data={chartData} barCategoryGap={8}>
                    <XAxis dataKey="d" hide />
                    <Bar dataKey="v" fill="color-mix(in oklab, var(--color-primary-fg) 45%, transparent)" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : null}
            </div>
          </PanelWell>
        </Panel>
        <StatCard label="How it felt" value={feelLabel} hint="Pace, pauses, rereads, and how the page felt" />
        <StatCard
          label="Current WPM"
          value={reading.currentWpm == null ? "—" : reading.currentWpm}
          hint={meanWpm ? `Average ${meanWpm} · target ${targetWpm}` : `Target ${targetWpm}`}
          numeric={typeof reading.currentWpm === "number"}
        />
      </GsapStagger>

      <GsapStagger className="mt-3 grid gap-3 md:grid-cols-3">
        <StatCard
          label="Words processed"
          value={words}
          hint={`Across ${sessionCount} session${sessionCount === 1 ? "" : "s"}`}
          numeric
        />
        <StatCard
          label="Time reading"
          value={totalTime > 0 ? formatDuration(totalTime) : "—"}
          hint={`${reading.pauses.length} pause${reading.pauses.length === 1 ? "" : "s"} · ${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}`}
        />
        <StatCard
          label="Contrast"
          value={formatContrastRatio(contrast.body)}
          hint={`${profile.name} · WCAG ${contrast.bodyLevel} · ${mode}`}
        />
      </GsapStagger>

      {sessions.length > 0 ? (
        <section className="mt-10 pb-8">
          <h2 className="mb-4 text-lg font-medium">History</h2>
          <div className="grid gap-3 md:grid-cols-2" data-batch-children>
            {sessions.map((session) => (
              <button
                key={session.openedAt}
                type="button"
                onClick={() =>
                  startReading(session.content, {
                    title: session.title,
                    kind: session.kind,
                    sourceId: session.sourceId,
                  })
                }
                className="group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]"
              >
                <span className="flex items-center justify-between gap-3 rounded-lg bg-bg px-4 py-4">
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{session.title}</span>
                    <span className="mt-1 block text-xs text-muted">
                      {new Date(session.openedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      {" · "}
                      {wordCount(session.content)} words
                      {session.progress != null ? ` · ${Math.round(session.progress * 100)}%` : ""}
                      {session.currentWpm ? ` · ${session.currentWpm} WPM` : ""}
                      {session.elapsedMs ? ` · ${formatDuration(session.elapsedMs)}` : ""}
                      {session.pattern && PATTERN_META[session.pattern]
                        ? ` · ${PATTERN_META[session.pattern].label.toLowerCase()}`
                        : ""}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted">
                    Resume
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-10 pb-8 text-sm text-muted">No sittings yet. A sample or a pasted page will start the log.</p>
      )}
      </ScrollScene>
    </PageEnter>
  );
}

function StatCard({
  label,
  value,
  hint,
  numeric,
}: {
  label: string;
  value: string | number;
  hint: string;
  numeric?: boolean;
}) {
  return (
    <Panel>
      <PanelWell className="px-5 py-5">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">{label}</p>
        <p className={`mt-3 font-serif tracking-tight ${numeric ? "text-4xl tabular-nums" : "text-3xl"}`}>
          {typeof value === "number" ? <NumberFlow value={value} /> : value}
        </p>
        <p className="mt-4 text-sm text-muted">{hint}</p>
      </PanelWell>
    </Panel>
  );
}
