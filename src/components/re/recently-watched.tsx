"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getLastWatched } from "@/lib/last-watched";
import Link from "next/link";

interface LastWatchedEpisode {
  animeId: string;
  epTitle: string;
  epNo: number;
  watchedTill: number;
  duration?: number;
  poster?: string;
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
          poster: ep.poster, // optional, can be added when saving
        });
      });
    });

    // Sort by most recently watched
    list.sort((a, b) => (b.duration || 0) - (a.duration || 0));
    setEpisodes(list);
  }, []);

  if (!episodes.length) return <div>No recent anime</div>;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Continue Watching</h3>
      <div className="flex gap-3">
        {episodes.map((ep) => {
          // console.log(ep.epSession);
          const progress =
            ep.duration && ep.duration > 0
              ? Math.min((ep.watchedTill / ep.duration) * 100, 100)
              : 0;
          return (
            <Link
              href={`/anime/${ep.animeId}/watch/${ep.epSession.split("luffy-of").join("%2F")}`}
              key={ep.epSession}
            >
              <Card
                key={`${ep.animeId}-${ep.epNo}`}
                className="flex flex-row gap-3"
              >
                <div className="relative w-24 h-36 flex-shrink-0">
                  {ep.poster ? (
                    <Image
                      src={ep.poster}
                      alt={ep.epTitle}
                      fill
                      className="object-cover rounded"
                    />
                  ) : (
                    <div className="bg-gray-800 w-full h-full rounded" />
                  )}
                </div>
                <CardContent className="flex flex-col justify-between py-2 pr-2">
                  <div>
                    <h4 className="font-semibold text-sm">{ep.epTitle}</h4>
                    <p className="text-xs opacity-70">Episode {ep.epNo}</p>
                  </div>
                  <CardFooter className="py-1">
                    <Progress value={progress} className="h-2 rounded" />
                  </CardFooter>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
