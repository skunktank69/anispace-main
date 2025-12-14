"use client";

import Image from "next/image";
import Link from "next/link";

interface Anime {
  id: string;
  title: string;
  image: string;
  type: string;
  year: number;
  episodes: number;
  currentEpisode: number;
}

interface TopAiringProps {
  data: {
    popular: { results: Anime[] };
    trending: { results: Anime[] };
    recent: { results: Anime[] };
  };
}

export default function TopAiring({ data }: TopAiringProps) {
  // Choose trending for top airing
  const topAnime = data.trending.results;

  return (
    <div className="w-full md:w-80 p-4 bg-sidebar/20 border mt-6 border-border rounded-lg max-h-[67vh]">
      <h2 className="text-foreground font-bold mb-4 text-lg">Top Airing</h2>
      <ul className="space-y-3  overflow-scroll max-h-[60.5vh]">
        {topAnime.map((anime) => (
          <li
            key={anime.id}
            className="flex items-center gap-3 bg-background p-2 rounded-md hover:bg-sidebar/70 transition"
          >
            <Link href={`/anime/${anime.id}`} className="flex-shrink-0">
              <Image
                src={anime.image}
                alt={anime.title.romaji}
                width={50}
                height={70}
                className="rounded-sm"
              />
            </Link>
            <div className="flex-1">
              <Link
                href={`/anime/${anime.id}`}
                className=" font-semibold opacity-85"
                style={{ color: anime.color }}
              >
                {anime.title.romaji.length > 30
                  ? anime.title.romaji.slice(0, 20) + "..."
                  : anime.title.romaji}
              </Link>
              <div className="text-gray-400 text-xs mt-1">
                {anime.type} · {anime.releaseDate} ·{" "}
                <p className="">{anime.status.toUpperCase()}</p>
              </div>
            </div>
          </li>
        ))}

        {/*<div className=" bg-gradient-to-t from-background via-background/50 to-transparent" />*/}
      </ul>
    </div>
  );
}
