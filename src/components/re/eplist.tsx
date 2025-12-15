"use client";

// import { useRouter } from "next/navigation";
// import { Dot } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface Episode {
  number: number;
  image: string;
}

interface EpisodesResponse {
  id: string;
  session_id: string;
  ep_list: Episode[];
}

export default function Episodes(props: { animeId: string; per_page: number }) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const [jumpValue, setJumpValue] = useState("");
  const [highlightEp, setHighlightEp] = useState<number | null>(null);

  const episodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const EPISODES_PER_PAGE = props.per_page;
  const animeId = props.animeId;

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        setLoading(true);
        const res = await fetch(`/api/anime/${animeId}/episodes`);
        if (!res.ok) throw new Error("Failed to fetch episodes");

        const data: EpisodesResponse = await res.json();
        setEpisodes(data.ep_list);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (animeId) fetchEpisodes();
  }, [animeId]);

  const sortedEpisodes = [...episodes].sort((a, b) =>
    sortAsc ? a.number - b.number : b.number - a.number,
  );

  const totalPages = Math.ceil(sortedEpisodes.length / EPISODES_PER_PAGE);

  const paginatedEpisodes = sortedEpisodes.slice(
    (currentPage - 1) * EPISODES_PER_PAGE,
    currentPage * EPISODES_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const jumpToEpisode = () => {
    const epNum = Number(jumpValue);
    if (!epNum || epNum < 1) return;

    const index = sortedEpisodes.findIndex((ep) => ep.number === epNum);
    if (index === -1) return;

    const page = Math.floor(index / EPISODES_PER_PAGE) + 1;
    setCurrentPage(page);
    setHighlightEp(epNum);

    // wait for pagination render, then scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        episodeRefs.current[epNum]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    });

    // auto-clear highlight
    setTimeout(() => setHighlightEp(null), 2000);
  };

  if (loading) return <>Loading episodes...</>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex flex-col gap-3">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setSortAsc(!sortAsc)}
          className="px-3 py-1 border rounded-md hover:bg-secondary-foreground transition"
        >
          Sort: {sortAsc ? "Asc" : "Desc"}
        </button>

        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            placeholder="Episode #"
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && jumpToEpisode()}
            className="w-28 px-2 py-1 border rounded-md bg-background"
          />
          <button
            type="button"
            onClick={jumpToEpisode}
            className="px-3 py-1 border rounded-md hover:bg-foreground/40"
          >
            Go
          </button>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                type="button"
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-3 py-1 border rounded-md ${
                  pageNum === currentPage
                    ? "bg-sidebar-border text-foreground"
                    : ""
                }`}
              >
                {pageNum}
              </button>
            ),
          )}

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Episode Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {paginatedEpisodes.map((ep) => (
          <div
            key={ep.number}
            ref={(el) => {
              episodeRefs.current[ep.number] = el;
            }}
            className={`rounded-lg transition ring-offset-2 ${
              highlightEp === ep.number ? "ring-2 ring-primary" : ""
            }`}
          >
            <Link
              href={`/anime/${animeId}/watch/${ep.id.split("/").join("luffy-of")}`}
              scroll={false}
              className="relative group block rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={ep.image}
                  alt={`Episode ${ep.number}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-semibold px-1 py-0.5 rounded">
                ep {ep.number} · {ep.duration}
              </div>

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Episode {
  id: string;
  number: number;
  image: string;
}

interface EpisodesResponse {
  ep_list: Episode[];
}

export function CompactEpisodes({
  animeId,
  per_page,
  currentEpisode,
}: {
  animeId: string;
  per_page: number;
  currentEpisode: number;
}) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    async function fetchEpisodes() {
      try {
        setLoading(true);
        const res = await fetch(`/api/anime/${animeId}/episodes`);
        if (!res.ok) throw new Error("Failed to fetch episodes");
        const data: EpisodesResponse = await res.json();
        setEpisodes(data.ep_list);
      } catch (e: any) {
        setError(e.message ?? "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, [animeId]);

  const sortedEpisodes = useMemo(() => {
    return [...episodes].sort((a, b) =>
      sortAsc ? a.number - b.number : b.number - a.number,
    );
  }, [episodes, sortAsc]);

  const totalPages = Math.ceil(sortedEpisodes.length / per_page);

  const paginatedEpisodes = useMemo(() => {
    const start = (currentPage - 1) * per_page;
    return sortedEpisodes.slice(start, start + per_page);
  }, [sortedEpisodes, currentPage, per_page]);

  useEffect(() => {
    if (!episodes.length) return;

    const index = sortedEpisodes.findIndex((e) => e.number === currentEpisode);
    if (index === -1) return;

    const page = Math.floor(index / per_page) + 1;
    setCurrentPage(page);

    requestAnimationFrame(() => {
      activeRef.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
  }, [episodes, sortedEpisodes, currentEpisode, per_page]);

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (loading) return <p className="text-sm opacity-70">Loading episodes…</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex flex-col gap-2">
      {/* Controls */}
      <div className="flex justify-end">
        <button
          onClick={() => setSortAsc((v) => !v)}
          className="px-2 py-0.5 text-[11px] border rounded"
        >
          {sortAsc ? "↑ Asc" : "↓ Desc"}
        </button>
      </div>

      {/* Episodes */}
      <div
        ref={scrollRef}
        className="max-h-[60vh] xl:max-h-[78vh] overflow-y-auto pr-1"
      >
        <div className="grid grid-cols-4 sm:grid-cols-5 xl:grid-cols-4 gap-2">
          {paginatedEpisodes.map((ep) => {
            const isActive = ep.number === currentEpisode;

            return (
              <Link
                ref={isActive ? activeRef : null}
                key={ep.number}
                href={`/anime/${animeId}/watch/${ep.id
                  .split("/")
                  .join("luffy-of")}`}
                className={clsx(
                  "relative rounded overflow-hidden ring-2 transition",
                  isActive
                    ? "ring-primary scale-[1.02]"
                    : "ring-transparent hover:ring-muted",
                )}
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={ep.image}
                    alt={`Episode ${ep.number}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <span
                  className={clsx(
                    "absolute bottom-0.5 right-0.5 text-[10px] px-1.5 rounded",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-black/70 text-white",
                  )}
                >
                  Ep {ep.number}
                </span>

                {isActive && (
                  <span className="absolute top-0.5 left-0.5 bg-primary text-primary-foreground text-[10px] px-1.5 rounded">
                    Playing
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 text-xs">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="opacity-70">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
