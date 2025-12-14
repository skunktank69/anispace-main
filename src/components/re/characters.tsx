"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface VoiceActor {
  id: number;
  language: string;
  name: { full: string; userPreferred: string };
  image: string;
}

interface Character {
  id: number;
  role: string;
  name: { full: string; userPreferred: string };
  image: string;
  voiceActors: VoiceActor[];
}

interface CharactersProps {
  animeId: string | number;
}

export default function Characters({ animeId }: CharactersProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);

  const pageSize = 25;

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/anime/${animeId}/characters`);
        if (!res.ok) throw new Error("Failed to fetch characters");

        const data: Character[] = await res.json();
        setCharacters(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [animeId]);

  if (loading) return <div>Loading characters...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!characters.length) return <div>No characters found.</div>;

  // Sorting
  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortAsc)
      return a.name.userPreferred.localeCompare(b.name.userPreferred);
    return b.name.userPreferred.localeCompare(a.name.userPreferred);
  });

  const totalPages = Math.ceil(sortedCharacters.length / pageSize);
  const pagedCharacters = sortedCharacters.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Characters</h2>
        <Button size="sm" onClick={() => setSortAsc((s) => !s)}>
          Sort {sortAsc ? "↓" : "↑"}
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pagedCharacters.map((char) => (
          <div
            key={char.id}
            className="rounded-lg overflow-hidden shadow-lg p-2 flex flex-col items-center text-center"
          >
            <div className="relative w-full pt-[100%] rounded-lg overflow-hidden mb-2">
              <Image
                src={char.image}
                alt={char.name.userPreferred}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="font-semibold text-sm truncate">
              {char.name.userPreferred}
            </div>
            <div className="text-xs text-neutral-400 mb-1">{char.role}</div>

            {char.voiceActors && char.voiceActors.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {char.voiceActors.slice(0, 2).map((va) => (
                  <div
                    key={va.id}
                    className="flex flex-col items-center text-xs"
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mb-1">
                      <Image
                        src={va.image}
                        alt={va.name.userPreferred}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
                {char.voiceActors.length > 2 && (
                  <span className="text-xs text-neutral-400 self-center">
                    +{char.voiceActors.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <Button
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </Button>

          <Button className="px-2 py-1 rounded bg-sidebar text-foreground border hover:bg-sidebar">
            {currentPage} / {totalPages}
          </Button>

          <Button
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
