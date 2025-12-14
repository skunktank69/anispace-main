"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "../re/slider";
import { Skeleton } from "../ui/skeleton";

export default function MangaHomePage() {
  interface MangaApiResponse {
    results: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
      latestChapter: string;
    }>;
  }
  const getThemeGradient = (i: number) => {
    const gradients = [
      "linear-gradient(135deg, #667eea, #764ba2)",
      "linear-gradient(135deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #4facfe, #00f2fe)",
    ];
    return gradients[i % gradients.length];
  };

  const truncate = (txt: string, len: number) =>
    txt.length > len ? txt.slice(0, len).trim() + "..." : txt;
  /*eslint-disable */
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    const fetchManga = async () => {
      const res = await fetch(
        "https://anispace-api.vercel.app/api/manga/popular",
      );
      const data: MangaApiResponse = await res.json();
      setSlides(
        data.results.slice(0, 10).map((m, i) => ({
          id: m.id,
          title: truncate(m.title, 50),
          description: truncate(m.description, 150),
          image: m.image,
          latestChapter: m.latestChapter,
          dominantColors: { gradient: getThemeGradient(i) },
        })),
      );
    };
    fetchManga();
  }, []);
  if (slides.length === 0)
    return (
      <Skeleton className="relative w-full md:h-[70vh] min-h-[200px] h-[30vh] aspect-video sm:h-[50vh]  max-h-[800px]  flex items-center justify-center lg:rounded-lg overflow-hidden">
        <div className="animate-spin w-12 h-12 border-4 border-white/20 border-t-foreground rounded-full"></div>
      </Skeleton>
    );

  return (
    <div className="p-4">
      <Slider
        slides={slides}
        primaryActionLabel={"Read Now"}
        secondaryActionLabel={"Details"}
      />
    </div>
  );
}
