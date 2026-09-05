import { useEffect, useState } from "react";
import { BookOpen, ChevronRight, Search } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/field";
import { Badge, Media, Skeleton } from "@/components/ui/surfaces";
import { Segmented } from "@/components/segmented";
import { BibleLibrary } from "@/components/bible-library";
import { PoetryLibrary } from "@/components/poetry-library";
import { FileDrop } from "@/components/file-drop";
import { LensLoader } from "@/components/ui/loader";
import { RemoteErrorView } from "@/components/remote-state";
import { FEATURED_GUTENDEX_QUERIES, fallbackGutendexSearch, fetchGutendexPage, fetchGutendexReaderText, pickGutendexCover, searchGutendex, type GutendexBook } from "@/lib/gutendex";
import { announce } from "@/lib/announce";
import { isAbortError, isRemoteError } from "@/lib/remote";
import { processDocument } from "@/lib/document-processor";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { ContentKind } from "@/lib/types";
import { PageEnter, GsapStagger, ScrollScene } from "@/components/gsap-motion";

function kindLabel(kind?: ContentKind) {
  if (kind === "bible") return "Bible";
  if (kind === "pdf") return "Document";
  if (kind === "poem") return "Poem";
  return "Reading";
}

function Catalog() {
  const startReading = useAppStore((s) => s.startReading);
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [books, setBooks] = useState<GutendexBook[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [source, setSource] = useState<"gutendex" | "fallback">("gutendex");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<unknown>(null);
  const [retryTick, setRetryTick] = useState(0);
  const [openingId, setOpeningId] = useState<number | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fallback = fallbackGutendexSearch(submitted);
    setBooks(fallback.results);
    setNextUrl(null);
    setTotal(fallback.count);
    setSource("fallback");
    setError(null);
    setStatus("ready");
    searchGutendex(submitted, controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return;
        setBooks(result.results);
        setNextUrl(result.next);
        setTotal(result.count);
        setSource(result.source);
        setStatus("ready");
        announce(
          result.results.length
            ? `${result.results.length} Gutenberg titles${submitted ? ` for ${submitted}` : ""}`
            : `No Gutenberg titles${submitted ? ` for ${submitted}` : ""}`,
        );
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted || isAbortError(err)) return;
        announce("Could not load the Gutenberg catalog");
      });
    return () => controller.abort();
  }, [submitted, retryTick]);

  async function openBook(book: GutendexBook) {
    setOpeningId(book.id);
    try {
      const text = await fetchGutendexReaderText(book);
      startReading(text, { title: book.title, kind: "text", sourceId: `gutenberg-${book.id}` });
    } catch (err) {
      if (!isAbortError(err)) {
        toast.error(err instanceof Error ? err.message : "Could not open that book");
      }
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
      if (!isAbortError(err)) {
        toast.error(err instanceof Error ? err.message : "Could not load more titles");
      }
    } finally {
      setLoadingMore(false);
    }
  }

  const emptyMiss =
    status === "error" && isRemoteError(error) && (error.kind === "empty" || error.kind === "not-found");

  return (
    <>
      <form
        className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          const next = query.trim();
          setSubmitted(next);
        }}
      >
        <label className="relative flex-1">
          <span className="sr-only">Search Project Gutenberg</span>
          <Search size={16} className="absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Austen, Darwin, Frankenstein"
            className="pl-10"
          />
        </label>
        <Button type="submit" disabled={status === "loading"} className="sm:w-32">
          {status === "loading" ? <LensLoader label="Searching" /> : "Search"}
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {FEATURED_GUTENDEX_QUERIES.map((item) => {
          const active = submitted.toLowerCase() === item.toLowerCase();
          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setQuery(item);
                setSubmitted(item);
              }}
              className={cn(
                "h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]",
                active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6",
              )}
            >
              {item}
            </button>
          );
        })}
      </div>

      <section className="mt-10 pb-16">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xs font-medium tracking-wide text-muted uppercase">
            Catalog · {submitted ? `“${submitted}”` : "Popular"}
          </h2>
          <span className="text-xs tabular-nums text-subtle">{status === "ready" ? total.toLocaleString() : ""}</span>
        </div>

        {status === "loading" ? (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-xl bg-surface p-2 shadow-border">
                <Skeleton className="mb-3 aspect-[3/4] rounded-lg" />
                <Skeleton className="mb-2 h-3 w-20" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            ))}
          </div>
        ) : status === "error" && !emptyMiss ? (
          <div className="rounded-xl bg-surface p-2 shadow-border">
            <div className="rounded-lg bg-bg px-4 py-5">
              <RemoteErrorView
                error={error}
                onRetry={() => setRetryTick((n) => n + 1)}
                hint="Titles come from Gutendex, a Project Gutenberg catalog. The readable text is fetched from Gutenberg through a same-origin proxy."
              />
            </div>
          </div>
        ) : books.length === 0 || emptyMiss ? (
          <div className="overflow-hidden rounded-xl bg-surface p-2 shadow-border">
            <Media
              src="/images/feature-books.jpg"
              alt="A stack of clothbound books on a linen table"
              width={1200}
              height={900}
              className="aspect-[16/9] w-full rounded-lg object-cover"
            />
            <div className="px-6 py-8 text-center">
              <BookOpen size={22} className="mx-auto mb-3 text-muted" />
              <p className="font-medium">No catalog records</p>
              <p className="mt-1 text-sm text-muted">Try Austen, Darwin, or Frankenstein.</p>
              <Button className="mt-4" variant="outline" onClick={() => setRetryTick((n) => n + 1)}>
                Retry
              </Button>
            </div>
          </div>
        ) : (
          <>
            <GsapStagger replayKey={`${submitted}-${books.length}`} className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => {
                const cover = pickGutendexCover(book.formats);
                const author = book.authors.map((person) => person.name).join(", ");
                return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => void openBook(book)}
                  disabled={openingId === book.id}
                  className="library-card group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.97] disabled:opacity-70"
                >
                  <div className="overflow-hidden rounded-lg bg-bg">
                    {cover ? (
                      <Media
                        src={cover}
                        alt=""
                        width={400}
                        height={533}
                        zoom
                        className="aspect-[3/4] w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[3/4] items-center justify-center">
                        <BookOpen size={28} className="text-subtle" />
                      </div>
                    )}
                  </div>
                  <div className="px-3 pt-3 pb-3">
                    <p className="text-xs font-medium text-muted">
                      {book.authors[0]?.birth_year ?? book.subjects[0] ?? "Gutenberg"}
                    </p>
                    <h3 className="mt-1 line-clamp-2 font-medium">{book.title}</h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted">
                      {author || "Author unrecorded"}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Badge>Gutenberg</Badge>
                      <span className="text-xs tabular-nums text-subtle">
                        {book.download_count.toLocaleString()} reads
                      </span>
                    </div>
                    <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                      {openingId === book.id ? "Opening" : "Start reading"}
                      <ChevronRight
                        size={14}
                        className="transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
                      />
                    </p>
                  </div>
                </button>
                );
              })}
            </GsapStagger>
            {nextUrl ? (
              <div className="mt-6 flex justify-center">
                <Button variant="outline" onClick={() => void loadMore()} disabled={loadingMore}>
                  {loadingMore ? <LensLoader label="Loading" /> : "More titles"}
                </Button>
              </div>
            ) : null}
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-subtle">
              {source === "fallback"
                ? "Gutendex is taking a moment, so this is a local Gutenberg shelf. Full text still opens from Project Gutenberg."
                : "Catalog from Gutendex. Full text from Project Gutenberg. Public-domain works only."}
            </p>
          </>
        )}
      </section>
    </>
  );
}

export function Library() {
  const startReading = useAppStore((s) => s.startReading);
  const sessions = useAppStore((s) => s.sessions);
  const bookmarks = useAppStore((s) => s.bookmarks);
  const removeBookmark = useAppStore((s) => s.removeBookmark);
  const [section, setSection] = useState<"catalog" | "bible" | "poems" | "yours">("catalog");
  const [uploading, setUploading] = useState(false);

  return (
    <PageEnter className="mx-auto h-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14" replayKey={section}>
      <h1 data-enter className="text-5xl">Library</h1>
      <p data-enter className="mt-3 text-muted">
        Project Gutenberg via Gutendex, a live Bible, PoetryDB, and what you’ve kept.
      </p>
      <div data-enter className="mt-8 overflow-x-auto">
        <Segmented
          value={section}
          onChange={setSection}
          label="Library sections"
          options={[
            { id: "catalog", label: "Catalog" },
            { id: "bible", label: "Bible" },
            { id: "poems", label: "Poems" },
            { id: "yours", label: "Yours" },
          ]}
        />
      </div>

      <ScrollScene replayKey={section}>

      {section === "bible" && (
        <div data-enter className="mt-8 pb-16">
          <BibleLibrary />
        </div>
      )}

      {section === "poems" && (
        <div data-enter className="mt-8 pb-16">
          <PoetryLibrary />
        </div>
      )}

      {section === "yours" && (
        <div className="mt-8 space-y-10 pb-16">
          <section>
            <h2 className="mb-4 text-xs font-medium tracking-wide text-muted uppercase">Upload</h2>
            <div className="rounded-xl bg-surface p-2 shadow-border">
              <FileDrop
                busy={uploading}
                onFile={(file) => {
                  void (async () => {
                    setUploading(true);
                    try {
                      const doc = await processDocument(file);
                      startReading(doc.content, {
                        title: doc.title,
                        kind: doc.metadata.format === "PDF" ? "pdf" : "text",
                      });
                      toast.success("Opened in the reader");
                    } catch (err) {
                      toast.error(err instanceof Error ? err.message : "Could not read that file");
                    } finally {
                      setUploading(false);
                    }
                  })();
                }}
              />
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xs font-medium tracking-wide text-muted uppercase">Bookmarks</h2>
            {bookmarks.length === 0 ? (
              <p className="text-sm text-muted">Nothing bookmarked yet. Save a place while you read.</p>
            ) : (
              <div className="grid gap-3">
                {bookmarks.map((item) => (
                  <div key={item.id} className="flex items-stretch gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        startReading(item.content, {
                          title: item.title,
                          kind: item.kind,
                          sourceId: item.sourceId,
                          pdfPage: item.pdfPage,
                          chapter: item.chapter,
                          progress: item.progress,
                        })
                      }
                      className="group flex min-w-0 flex-1 items-center justify-between rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]"
                    >
                      <span className="flex w-full items-center justify-between rounded-lg bg-bg px-4 py-4">
                        <span className="min-w-0">
                          <span className="block font-medium">{item.title}</span>
                          {item.excerpt ? (
                            <span className="mt-1 block truncate text-sm text-muted">{item.excerpt}</span>
                          ) : null}
                          <span className="mt-1 block text-xs text-muted">{Math.round(item.progress * 100)}% through</span>
                        </span>
                        <ChevronRight size={16} className="shrink-0 text-muted transition-transform duration-[150ms] group-hover:translate-x-0.5" />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="min-h-11 shrink-0 self-center rounded-md px-3 text-sm text-muted hover:text-fg"
                      onClick={() => removeBookmark(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section>
            <h2 className="mb-4 text-xs font-medium tracking-wide text-muted uppercase">Recently read</h2>
            {sessions.length === 0 ? (
              <p className="text-sm text-muted">Open a passage and it will land here.</p>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
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
                    className="rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]"
                  >
                    <span className="block rounded-lg bg-bg px-4 py-4">
                      <p className="text-xs text-muted">{kindLabel(session.kind)}</p>
                      <h3 className="mt-2 font-medium">{session.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{session.content}</p>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {section === "catalog" && <Catalog />}
      </ScrollScene>
    </PageEnter>
  );
}
