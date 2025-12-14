"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const [session, setSession] = useState("");
  // const { per_page } = useRouter();

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
        setSession(data.session_id);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <>Loading episodes...</>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex flex-col gap-2">
      {/* Sort Toggle */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-3 py-1 border rounded-md hover:bg-secondary-foreground transition"
        >
          Sort: {sortAsc ? "Asc" : "Desc"}
        </button>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
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
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      {/* Episode Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {paginatedEpisodes.map((ep) => (
          <Link
            key={ep.number}
            className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform"
            href={`/anime/${animeId}/watch/${ep.id.split(`/`).join("luffy-of")}`}
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
              {ep.duration}
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity rounded-lg"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CompactEpisodes({
  animeId,
  per_page,
}: {
  animeId: string;
  per_page: number;
}) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

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

    if (animeId) fetchEpisodes();
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

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    // Scroll episode list to top, not the whole page
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (loading) return <>Loading…</>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex flex-col gap-2">
      {/* Controls */}
      <div className="flex justify-end">
        <button
          onClick={() => setSortAsc((v) => !v)}
          className="px-2 py-0.5 text-[11px] lg:text-xs border rounded"
        >
          {sortAsc ? "↑ Asc" : "↓ Desc"}
        </button>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[60vh] lg:max-h-[100vh] xl:max-h-[78vh] overflow-y-auto pr-1"
      >
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4 gap-2">
          {paginatedEpisodes.map((ep) => (
            <Link
              key={ep.number}
              href={`/anime/${animeId}/watch/${ep.id
                .split("/")
                .join("luffy-of")}`}
              className="relative rounded overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={ep.image}
                  alt={`Episode ${ep.number}`}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-[10px] lg:text-xs px-1.5 rounded">
                Ep {ep.number}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 text-xs lg:text-sm">
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
