"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Episodes from "./re/eplist";
import RelatedAnime from "./re/relations";
import RelatedCharacters from "./re/characters";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TabContent({
  activeTab,
  animeData,
}: {
  activeTab: string;
  /*eslint-disable */
  animeData: any;
}) {
  if (!animeData) return null;

  // Utility to clean description
  const cleanDescription =
    animeData.description
      ?.replace(/<[^>]*>|^\s*[-*]\s*|\s*\n\s*/gm, " ")
      .trim() || "No description available.";

  // Overview Tab
  if (activeTab === "overview") {
    return (
      <div className="space-y-8">
        {/* Poster + description */}
        <div className="flex flex-col md:flex-row gap-8">
          <p className="text-foreground leading-relaxed text-base max-h-[50vh] overflow-auto bg-[rgba(112,112,112,.1)] p-4 rounded">
            {cleanDescription}
          </p>
        </div>

        {/* Genres */}
        {animeData.genres?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {animeData.genres.map((genre: string) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent/20"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Information Cards */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {animeData.type && (
              <Card className="p-4 bg-card/50">
                <div className="text-xs text-muted-foreground font-semibold mb-1">
                  Type
                </div>
                <div className="text-sm font-medium">{animeData.type}</div>
              </Card>
            )}
            {animeData.episodes && (
              <Card className="p-4 bg-card/50">
                <div className="text-xs text-muted-foreground font-semibold mb-1">
                  Episodes
                </div>
                <div className="text-sm font-medium">{animeData.episodes}</div>
              </Card>
            )}
            {animeData.rating && (
              <Card className="p-4 bg-card/50">
                <div className="text-xs text-muted-foreground font-semibold mb-1">
                  Rating
                </div>
                <div className="text-sm font-medium">
                  {animeData.rating.toFixed(1)}/10
                </div>
              </Card>
            )}
            {animeData.duration && (
              <Card className="p-4 bg-card/50">
                <div className="text-xs text-muted-foreground font-semibold mb-1">
                  Duration
                </div>
                <div className="text-sm font-medium">{animeData.duration}m</div>
              </Card>
            )}
            {animeData.season && (
              <Card className="p-4 bg-card/50">
                <div className="text-xs text-muted-foreground font-semibold mb-1">
                  Season
                </div>
                <div className="text-sm font-medium">{animeData.season}</div>
              </Card>
            )}
            {animeData.status && (
              <Card className="p-4 bg-card/50">
                <div className="text-xs text-muted-foreground font-semibold mb-1">
                  Status
                </div>
                <div className="text-sm font-medium">{animeData.status}</div>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Episodes Tab
  if (activeTab === "episodes") {
    return (
      <Card className="p-6 bg-card/50">
        <Episodes animeId={animeData.id} per_page={20} />
      </Card>
    );
  }

  // Characters Tab
  if (activeTab === "characters") {
    return (
      <Card className="p-6 bg-card/50">
        <RelatedCharacters animeId={animeData.id} />
      </Card>
    );
  }

  // Relations Tab
  if (activeTab === "relations") {
    return (
      <Card className="p-6 bg-card/50">
        <RelatedAnime animeId={animeData.id} />
      </Card>
    );
  }

  return null;
}
