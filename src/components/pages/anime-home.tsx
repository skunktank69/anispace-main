"use client";

import React, { useEffect, useState } from "react";
import { Slider, tp } from "../re/slider";
import { Skeleton } from "../ui/skeleton";
import TopAiring from "../re/top-airing-side";
import { CardGrid } from "../card-grid";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface Anime {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface AnimeHomeResponse {
  popular: Anime[];
  trending: Anime[];
  recent: Anime[];
}

export default function AnimeHomePage() {
  const [slides, setSlides] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [popularPage, setPopularPage] = useState(1);
  const [loadingPopular, setLoadingPopular] = useState(false);

  const getThemeGradient = (i: number) => {
    const gradients = [
      "linear-gradient(135deg, #667eea, #764ba2)",
      "linear-gradient(135deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #4facfe, #00f2fe)",
    ];
    return gradients[i % gradients.length];
  };

  const truncate = (txt: string, len: number) =>
    txt.length > len ? txt.slice(0, len).trim() + "…" : txt;

  useEffect(() => {
    async function fetchPopularAnime() {
      try {
        const res = await fetch("/api/anime/home?trendingPerPage=14");
        if (!res.ok) return;

        const data: AnimeHomeResponse = await res.json();
        setData(data);

        setSlides(
          data.trending.results.map((a, i) => ({
            id: a.id,
            title: truncate(a.title.romaji, 50),
            description: truncate(a.description ?? "", 150),
            image: a.cover,
            dominantColors: { gradient: a.color },
          })),
        );
      } catch (err) {
        console.error("Failed to fetch popular anime:", err);
      }
    }
    fetchPopularAnime();
  }, []);

  const fetchPopular = async (page: number) => {
    setLoadingPopular(true);
    try {
      const res = await fetch(
        `/api/anime/home?popularPage=${page}&popularPerPage=30`,
      );
      if (!res.ok) return;

      const next = await res.json();
      setData((prev: any) => ({
        ...prev,
        popular: next.popular,
      }));
      setPopularPage(page);
    } finally {
      setLoadingPopular(false);
    }
  };

  if (slides.length === 0) {
    return (
      <Skeleton className="relative w-full md:h-[20vh] min-h-[600px] h-[30vh] aspect-video sm:h-[50vh] max-h-[1200px] flex items-center justify-center lg:rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="animate-spin w-12 h-12 border-4 border-white/20 border-t-foreground rounded-full" />
      </Skeleton>
    );
  }

  return (
    <div>
      <Slider slides={slides} type={tp.anime} />

      <div className="grid lg:grid-cols-[2fr_auto] gap-4 pt-12 px-2 lg:px-4 lg:pl-15">
        {/* Left column */}
        <div className="space-y-12">
          {/* Ongoing Anime */}
          <section>
            <div className="py-2 font-black text-3xl rounded-xl my-4 mx-2 pr-4 flex items-center justify-between">
              <div className="flex items-center">
                <b className="bg-primary py-1 px-1 mr-2 rounded-full" />
                Trending Anime
              </div>
            </div>

            <CardGrid
              animeData={data.trending.results}
              hasNextPage={data.trending.hasNextPage}
            />
          </section>

          {/* Popular Anime */}
          <section>
            <div className="py-2 font-black text-3xl rounded-xl my-4 mx-2 pr-4 flex items-center justify-between">
              <div className="flex items-center">
                <b className="bg-primary py-1 px-1 mr-2 rounded-full" />
                Popular Anime
              </div>

              <div className="flex gap-2">
                {popularPage > 1 && (
                  <Button
                    onClick={() => fetchPopular(popularPage - 1)}
                    className="bg-sidebar/30 border border-foreground/10 rounded-xl p-2"
                  >
                    <ArrowLeft />
                  </Button>
                )}

                {data.popular?.hasNextPage && (
                  <Button
                    onClick={() => fetchPopular(popularPage + 1)}
                    className="bg-sidebar/30 border border-foreground/10 rounded-xl p-2"
                  >
                    <ArrowRight />
                  </Button>
                )}
              </div>
            </div>

            <CardGrid
              animeData={data.popular.results}
              hasNextPage={data.popular.hasNextPage}
            />
          </section>
        </div>

        {/* Right column */}
        <TopAiring data={data} className="mt-4" />
      </div>
    </div>
  );
}
