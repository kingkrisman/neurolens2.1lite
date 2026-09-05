import { lazy, Suspense, useEffect, useRef, type ComponentType, type ReactNode } from "react";
import { Toaster } from "sonner";
import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { TABS } from "@/lib/types";
import { isDarkScheme } from "@/lib/scheme";
import { CVD_LABELS } from "@/lib/color-vision";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/surfaces";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Landing } from "@/components/landing";
import { Mark } from "@/components/mark";
import { Segmented } from "@/components/segmented";
import { LiveAnnouncer } from "@/components/live-announcer";
import { FontLoader } from "@/components/font-loader";
import { LensLoader } from "@/components/ui/loader";
import { friendlyViewError, isStaleChunkError, reloadView, TabErrorBoundary } from "@/lib/error-component";
import { cn } from "@/lib/utils";
import { Reader } from "@/components/reader";

function lazyView(load: () => Promise<Record<string, ComponentType<any>>>, exportName: string) {
  return lazy(async () => {
    const open = async () => {
      const mod = await load();
      const Comp = mod[exportName];
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
        return {
          default: function ViewLoadError() {
            return (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                <p className="max-w-sm text-sm text-pretty text-muted">{message}</p>
                <button
                  type="button"
                  className="h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
                  onClick={() => window.location.reload()}
                >
                  Reload
                </button>
              </div>
            );
          },
        };
      }
    }
  });
}

const Library = lazyView(() => import("@/components/library"), "Library");
const Insights = lazyView(() => import("@/components/insights"), "Insights");
const SettingsPanel = lazyView(() => import("@/components/settings-panel"), "SettingsPanel");
const CommandPalette = lazy(async () => {
  try {
    const mod = await import("@/components/command-palette");
    return { default: mod.CommandPalette };
  } catch {
    return { default: function PaletteUnavailable() {
      return null;
    } };
  }
});

const HAS_SCROLL_TIMELINE =
  typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");

function Pane({
  children,
  className,
  onProgress,
}: {
  children: ReactNode;
  className?: string;
  onProgress?: (value: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("pane-scroll h-full overflow-y-auto", className)}
      onScroll={() => {
        if (HAS_SCROLL_TIMELINE) return;
        const node = ref.current;
        if (!node || !onProgress) return;
        const remaining = node.scrollHeight - node.clientHeight;
        onProgress(remaining > 1 ? Math.min(1, node.scrollTop / remaining) : 1);
      }}
    >
      <div className="min-h-full pt-14 sm:pt-16">{children}</div>
    </div>
  );
}

function TabFallback() {
  return (
    <div className="flex h-full items-center justify-center pt-14">
      <LensLoader label="Loading" />
    </div>
  );
}

export function AppShell() {
  const hydrate = useAppStore((s) => s.hydrate);
  const tab = useAppStore((s) => s.tab);
  const direction = useAppStore((s) => s.direction);
  const setTab = useAppStore((s) => s.setTab);
  const text = useAppStore((s) => s.text);
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const theme = useAppStore((s) => s.profile.theme);
  const dimChrome = useAppStore((s) => s.profile.dimChrome);
  const cvdPreview = useAppStore((s) => s.cvdPreview);
  const setCvdPreview = useAppStore((s) => s.setCvdPreview);
  const progressRef = useRef(0);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const stopNav = (event: DragEvent) => {
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

  useEffect(() => {
    const label = TABS.find((item) => item.id === tab)?.label ?? "Explore";
    document.title = tab === "explore" ? "NeuroLens" : `${label} · NeuroLens`;
  }, [tab]);

  useEffect(() => {
    progressRef.current = 0;
    document.documentElement.style.setProperty("--scroll-progress", "0");
  }, [tab]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(!useAppStore.getState().commandOpen);
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [setCommandOpen]);

  const toastTheme = isDarkScheme(theme) ? "dark" : "light";

  function setProgress(value: number) {
    progressRef.current = value;
    if (HAS_SCROLL_TIMELINE) return;
    document.documentElement.style.setProperty("--scroll-progress", String(value));
  }

  const reading = tab === "read";

  return (
    <TooltipProvider>
      <div
        className={cn(
          "nl-shell relative flex h-dvh flex-col overflow-hidden bg-bg text-fg",
          reading && "is-reading",
          reading && dimChrome && "is-reading-dim",
        )}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <header className="nl-chrome-in material pointer-events-none absolute inset-x-0 top-0 z-40">
          <div className="pointer-events-auto flex h-14 items-center gap-1.5 px-2 sm:h-16 sm:gap-2 sm:px-6">
            <button
              type="button"
              aria-label="NeuroLens home"
              className="flex shrink-0 items-center gap-2.5 text-fg"
              onClick={() => setTab("explore")}
            >
              <Mark className="size-7 text-fg" />
              <span className="hidden text-sm font-medium tracking-tight sm:inline">NeuroLens</span>
            </button>
            <nav
              aria-label="Primary"
              className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <Segmented
                tone="nav"
                value={tab}
                onChange={setTab}
                options={TABS.map((item) => ({
                  id: item.id,
                  label: item.label,
                  disabled: item.id === "read" && !text,
                }))}
                className="mx-auto h-10 w-max max-w-full"
              />
            </nav>
            {cvdPreview !== "none" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex"
                aria-label={`Turn off ${CVD_LABELS[cvdPreview]} simulation`}
                onClick={() => setCvdPreview("none")}
              >
                {CVD_LABELS[cvdPreview]}
              </Button>
            )}
            {reading ? null : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex"
                  onClick={() => setCommandOpen(true)}
                >
                  <Search size={14} />
                  Search
                  <Kbd>⌘K</Kbd>
                </Button>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="sm:hidden"
                  aria-label="Search"
                  onClick={() => setCommandOpen(true)}
                >
                  <Search size={16} />
                </Button>
              </>
            )}
          </div>
          <div aria-hidden className="scroll-progress pointer-events-none h-0.5 bg-fg/35" />
          <div
            aria-hidden
            className="pointer-events-none h-6 bg-gradient-to-b from-bg/80 to-transparent"
          />
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          aria-label={TABS.find((item) => item.id === tab)?.label ?? "Explore"}
          className="relative min-h-0 flex-1 outline-none"
        >
          <div
            key={tab}
            className="nl-stage-in absolute inset-0 overflow-hidden"
            data-dir={direction >= 0 ? "1" : "-1"}
          >
            {tab === "explore" && (
              <Pane onProgress={setProgress}>
                <Landing />
              </Pane>
            )}
            {tab === "read" && (
              <TabErrorBoundary slot="reader">
                <Reader />
              </TabErrorBoundary>
            )}
            {tab === "library" && (
              <Pane onProgress={setProgress}>
                <TabErrorBoundary slot="library">
                  <Suspense fallback={<TabFallback />}>
                    <Library />
                  </Suspense>
                </TabErrorBoundary>
              </Pane>
            )}
            {tab === "insights" && (
              <Pane onProgress={setProgress}>
                <TabErrorBoundary slot="insights">
                  <Suspense fallback={<TabFallback />}>
                    <Insights />
                  </Suspense>
                </TabErrorBoundary>
              </Pane>
            )}
            {tab === "settings" && (
              <Pane onProgress={setProgress}>
                <TabErrorBoundary slot="settings">
                  <Suspense fallback={<TabFallback />}>
                    <SettingsPanel />
                  </Suspense>
                </TabErrorBoundary>
              </Pane>
            )}
          </div>
        </main>

        {reading ? null : (
          <footer className="nl-footer-in flex min-h-12 shrink-0 flex-col items-center justify-center gap-2 px-4 py-3 text-center text-xs text-muted sm:flex-row sm:gap-4">
            <span>NeuroLens · Crafted for neurodivergent minds</span>
            <span className="hidden opacity-40 sm:inline" aria-hidden>
              ·
            </span>
            <nav aria-label="Legal" className="flex items-center gap-3">
              <Link to="/privacy" className="hover:text-fg">
                Privacy
              </Link>
              <Link to="/thank-you" className="hover:text-fg">
                Thank you
              </Link>
            </nav>
          </footer>
        )}
        <LiveAnnouncer />
        <FontLoader />
        <Suspense fallback={null}>
          <CommandPalette />
        </Suspense>
        <Toaster
          theme={toastTheme}
          position="bottom-right"
          offset={24}
          mobileOffset={16}
          visibleToasts={3}
          gap={10}
          toastOptions={{
            classNames: {
              toast: "!bg-surface !text-fg !border-0 !shadow-[var(--shadow-float)] !rounded-[16px]",
              title: "!text-sm !font-medium !text-fg",
              description: "!text-sm !text-muted",
            },
          }}
        />
      </div>
    </TooltipProvider>
  );
}
