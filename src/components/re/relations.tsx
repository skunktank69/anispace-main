"use client";

import { useEffect, useState } from "react";
import Card from "../card";
import { Button } from "@/components/ui/button";

interface RelatedItem {
  id: number;
  relationType: string;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  status: string;
  episodes: number | null;
  image: string;
  color?: string;
  type: string; // "TV", "MOVIE", "MANGA", etc
  cover: string;
  rating?: number;
}

export default function RelatedAnime({ animeId }: { animeId: string }) {
  const [relatedAnime, setRelatedAnime] = useState<RelatedItem[]>([]);
  const [relatedManga, setRelatedManga] = useState<RelatedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPageAnime, setCurrentPageAnime] = useState(1);
  const [currentPageManga, setCurrentPageManga] = useState(1);
  const [sortAscAnime, setSortAscAnime] = useState(true);
  const [sortAscManga, setSortAscManga] = useState(true);

  const perPage = 10;

  useEffect(() => {
    async function fetchRelations() {
      try {
        setLoading(true);
        const res = await fetch(`/api/anime/${animeId}/relations`);
        if (!res.ok) throw new Error("Failed to fetch related anime");

        const data: RelatedItem[] = await res.json();

        setRelatedAnime(data.filter((r) => r.type !== "MANGA"));
        setRelatedManga(data.filter((r) => r.type === "MANGA"));
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (animeId) fetchRelations();
  }, [animeId]);

  const getPageData = (
    items: RelatedItem[],
    currentPage: number,
    sortAsc: boolean,
  ) => {
    const sorted = sortAsc
      ? [...items].sort((a, b) => a.id - b.id)
      : [...items].sort((a, b) => b.id - a.id);
    const totalPages = Math.ceil(sorted.length / perPage);
    const displayed = sorted.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage,
    );
    return { displayed, totalPages };
  };

  const animePageData = getPageData(
    relatedAnime,
    currentPageAnime,
    sortAscAnime,
  );
  const mangaPageData = getPageData(
    relatedManga,
    currentPageManga,
    sortAscManga,
  );

  if (loading) return <p>Loading related content...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!relatedAnime.length && !relatedManga.length)
    return <p>No related content found.</p>;

  return (
    <div className="flex flex-col gap-8">
      {/* Related Anime */}
      {relatedAnime.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Related Anime</h2>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSortAscAnime(!sortAscAnime)}
            >
              {sortAscAnime ? "Sort Desc" : "Sort Asc"}
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {animePageData.displayed.map((item) => (
              <Card key={item.id} anime={item} />
            ))}
          </div>

          {animePageData.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button
                size="sm"
                onClick={() => setCurrentPageAnime((p) => Math.max(1, p - 1))}
                disabled={currentPageAnime === 1}
              >
                Prev
              </Button>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                {currentPageAnime} / {animePageData.totalPages}
              </span>
              <Button
                size="sm"
                onClick={() =>
                  setCurrentPageAnime((p) =>
                    Math.min(animePageData.totalPages, p + 1),
                  )
                }
                disabled={currentPageAnime === animePageData.totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Related Manga */}
      {relatedManga.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Related Manga</h2>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSortAscManga(!sortAscManga)}
            >
              {sortAscManga ? "Sort Desc" : "Sort Asc"}
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mangaPageData.displayed.map((item) => (
              <Card key={item.id} anime={item} />
            ))}
          </div>

          {mangaPageData.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button
                size="sm"
                onClick={() => setCurrentPageManga((p) => Math.max(1, p - 1))}
                disabled={currentPageManga === 1}
              >
                Prev
              </Button>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                {currentPageManga} / {mangaPageData.totalPages}
              </span>
              <Button
                size="sm"
                onClick={() =>
                  setCurrentPageManga((p) =>
                    Math.min(mangaPageData.totalPages, p + 1),
                  )
                }
                disabled={currentPageManga === mangaPageData.totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
