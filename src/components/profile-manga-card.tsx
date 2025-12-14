"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Play } from "lucide-react";

export default function ProfileMangaCard({ anime }) {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayTitle =
    anime?.title?.english || anime?.title?.romaji || anime?.title || "No Title";

  async function handleRemove() {
    try {
      setLoading(true);

      await fetch("/api/readList", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: "anilist",
          providerId: String(anime.providerId),
        }),
      });

      console.log("Removed from read list");
    } catch (err) {
      console.error("Remove error:", err);
    } finally {
      setLoading(false);
    }
  }

  const aT = ["TV", "TV_SHORT", "MOVIE", "SPECIAL", "OVA", "ONA", "MUSIC"];
  let ax = anime.type;
  ax = anime.onEpisode || aT.includes(ax) ? "anime" : "manga";

  return (
    <Link
      href={`/${ax}/${anime.providerId}`}
      className="block text-white animate-in fade-in duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={cn(
          "w-full cursor-pointer transition-transform duration-200",
          hover ? "md:-translate-y-2 z-10" : "",
        )}
      >
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-neutral-900">
          <div className="pt-[138%] relative">
            <Image
              src={anime.poster}
              alt={displayTitle}
              fill
              unoptimized
              className={cn(
                "object-cover transition-all duration-300",
                hover ? "brightness-[0.55]" : "brightness-100",
              )}
            />

            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                hover ? "opacity-100" : "opacity-0",
              )}
            >
              <Play size={38} className="text-white drop-shadow-lg" />
            </div>

            {/* Remove menu */}
            <div className="absolute top-1 right-1 z-20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full bg-black/40 hover:bg-black/70 border border-white/20 p-2"
                  >
                    <MoreVertical size={8} />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="bottom"
                  align="end"
                  className="bg-neutral-900 text-white border-neutral-700"
                >
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove();
                    }}
                  >
                    {loading ? "Removing…" : "Remove"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {hover && (
              <div
                className="absolute bottom-1 left-1 backdrop-blur-md px-2 py-1 text-xs font-semibold rounded bg-black/50"
                style={{ color: anime.color }}
              >
                {/*{anime ? "ANIME" : "MANGA"}*/}
              </div>
            )}
          </div>
        </div>

        <div
          className={cn(
            "flex items-center gap-2 px-1 py-2 rounded-lg mt-2 transition-colors duration-200",
            hover ? "bg-white/5" : "",
          )}
        >
          <div
            className="font-medium truncate"
            style={{ color: hover ? anime.color : "var(--title-color)" }}
          >
            {displayTitle.length > 35
              ? displayTitle.slice(0, 35) + "…"
              : displayTitle}
          </div>
        </div>

        <div className="flex items-center px-1 gap-3 text-xs text-neutral-400 mt-0.5">
          {anime.releaseDate && <span>{anime.releaseDate}</span>}
          {anime.rating && <span>{anime.rating / 10}★</span>}
        </div>
      </div>
    </Link>
  );
}
