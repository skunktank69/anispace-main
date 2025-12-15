"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { getLastWatched } from "@/lib/last-watched";

interface LastWatchedEpisode {
  animeId: string;
  epTitle: string;
  epNo: number;
  watchedTill: number;
  duration?: number;
  poster?: string;
  epSession: string;
}

export default function ContinueWatching() {
  const [episodes, setEpisodes] = useState<LastWatchedEpisode[]>([]);

  useEffect(() => {
    const store = getLastWatched();
    const list: LastWatchedEpisode[] = [];

    Object.entries(store).forEach(([animeId, animeData]: any) => {
      const episodesObj = animeData.episodes || {};
      Object.values(episodesObj).forEach((ep: any) => {
        list.push({
          animeId,
          epTitle: ep.epTitle,
          epSession: ep.epSession,
          epNo: ep.epNo,
          watchedTill: ep.watchedTill,
          duration: ep.duration,
          poster: ep.poster,
        });
      });
    });

    // same logic, same behavior
    list.sort((a, b) => (b.duration || 0) - (a.duration || 0));
    setEpisodes(list);
  }, []);

  if (!episodes.length) return <div>No recent anime</div>;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Continue Watching</h3>

      <div className="flex gap-4 overflow-x-auto pb-1">
        {episodes.map((ep) => {
          const progress =
            ep.duration && ep.duration > 0
              ? Math.min((ep.watchedTill / ep.duration) * 100, 100)
              : 0;

          return (
            <Link
              key={ep.epSession}
              href={`/anime/${ep.animeId}/watch/${ep.epSession
                .split("luffy-of")
                .join("%2F")}`}
              className="group"
            >
              <div className="relative w-[220px] h-[124px] rounded-xl overflow-hidden bg-black flex-shrink-0">
                {/* poster as background */}
                {ep.poster && (
                  <Image
                    src={ep.poster}
                    alt={ep.epTitle}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <p className="text-xs opacity-75">Episode {ep.epNo}</p>
                  <h4 className="text-sm font-semibold leading-tight line-clamp-2">
                    {ep.epTitle}
                  </h4>

                  <div className="mt-2">
                    <Progress value={progress} className="h-1 bg-white/20" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
