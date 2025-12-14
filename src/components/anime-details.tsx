"use client";

import { useState, useEffect } from "react";
import { Play, Heart, AlertCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TabContent from "./tab-content";
import AiringBanner from "./re/next-air";

interface AnimeData {
  id: string;
  title: {
    romaji?: string;
    english?: string;
    native?: string;
  };
  image?: string;
  cover?: string;
  description?: string;
  episodes?: number;
  type?: string;
  color?: string;
  nextAiringEpisode?: any;
  [x: string]: any;
}

async function getAnime(id: string) {
  const res = await fetch(`/api/anime/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return data.anime ?? data;
}

export default function AnimeDetail({ id }: { id: string }) {
  const [anime, setAnime] = useState<AnimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    (async () => {
      const data = await getAnime(id);
      setAnime(data);
      setLoading(false);
    })();
  }, [id]);

  async function handleAddToList() {
    if (!anime) return;

    const endpoint = anime.episodes ? "/api/watchList" : "/api/readList";
    const title =
      anime.title?.romaji ||
      anime.title?.english ||
      anime.title?.native ||
      "Untitled";

    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "anilist",
        providerId: anime.id,
        title,
        poster: anime.image ?? null,
        type: anime.type ?? null,
        color: anime.color ?? null,
      }),
    });
  }

  if (loading) {
    return (
      <main className="px-6 py-12 space-y-6">
        <Skeleton className="h-[45vh] w-full rounded-xl" />
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-6 w-1/3" />
      </main>
    );
  }

  if (!anime) {
    return (
      <main className="px-6 py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Failed to load anime data.</AlertDescription>
        </Alert>
      </main>
    );
  }

  const title =
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src={anime.cover}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* CONTENT */}
      <section className="relative -mt-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Poster */}
          <div className="shrink-0">
            <Image
              src={anime.image}
              alt={title}
              width={220}
              height={330}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2">
                <Play size={18} />
                Watch Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={handleAddToList}
              >
                <Heart size={18} />
                Add to List
              </Button>
            </div>

            {anime.nextAiringEpisode && (
              <AiringBanner
                nextAiringEpisode={anime.nextAiringEpisode}
                className="mt-4"
              />
            )}
          </div>
        </div>

        {/* TABS */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className=" justify-start w-full rounded p-0 ">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="relations">Relations</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <TabContent activeTab={activeTab} animeData={anime} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
