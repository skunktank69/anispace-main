"use client";

import { useMemo, useState } from "react";
import { QualitySelector } from "./vidqc";
import { DownloadDropdown } from "./viddl";

interface AnimePlayerProps {
  data: any;
}

export default function AnimePlayer({ data }: AnimePlayerProps) {
  const defaultSource = useMemo(() => {
    return [...data.sources].sort(
      (a, b) => Number(b.resolution) - Number(a.resolution),
    )[0];
  }, [data.sources]);

  const [currentSource, setCurrentSource] = useState(defaultSource);

  const iframeSrc = useMemo(() => {
    return `/api/player?video=${encodeURIComponent(currentSource.url)}`;
  }, [currentSource.url]);

  return (
    <div className="space-y-3">
      {/* PLAYER */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          backgroundColor: "black",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <iframe
          key={currentSource.url}
          src={iframeSrc}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>

      {/* INFO BAR */}
      <div className="flex flex-wrap  text-sm opacity-80 justify-between align-middle bg-foreground/30 opacity-40 p-4 rounded-lg">
        <div className="flex flex-wrap gap-2 p-2">
          <span>Episode {data.episode}</span>
          <span>Provider: {data.provider}</span>
          {currentSource.fanSub && <span>Fansub: {currentSource.fanSub}</span>}
        </div>
        <DownloadDropdown downloads={data.downloads} />
      </div>

      {/* CONTROLS */}
      <div className="items-start gap-4">
        <QualitySelector
          sources={data.sources}
          currentSource={currentSource}
          onChange={setCurrentSource}
        />
      </div>
    </div>
  );
}
