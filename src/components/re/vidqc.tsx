"use client";

import { Button } from "../ui/button";

interface PlayerSource {
  url: string;
  resolution: number | string;
  isDub: boolean;
  fanSub?: string;
}

interface PlayerDownload {
  download: string;
  quality: string;
  filesize: string;
}

interface PlayerData {
  episode: number;
  provider: string;
  sources: PlayerSource[];
  downloads: PlayerDownload[];
}

interface QualitySelectorProps {
  sources: PlayerSource[];
  currentSource: PlayerSource;
  onChange: (source: PlayerSource) => void;
}

interface QualitySelectorProps {
  sources: PlayerSource[];
  currentSource: PlayerSource;
  onChange: (source: PlayerSource) => void;
}

export function QualitySelector({
  sources,
  currentSource,
  onChange,
}: QualitySelectorProps) {
  const subSources = sources.filter((s) => !s.isDub);
  const dubSources = sources.filter((s) => s.isDub);

  const renderGroup = (label: string, list: PlayerSource[]) => {
    if (list.length === 0) return null;

    return (
      <div className="flex items-center w-full  bg-foreground/5 rounded-xl">
        <span className=" font-medium uppercase  m-0 p-0 text-foreground pl-4 pr-1">
          {label}
        </span>
        <div className="flex gap-2 px-4 py-2">
          {list.map((source) => {
            const active = source.url === currentSource.url;

            return (
              <Button
                variant="outline"
                key={source.url}
                onClick={() => onChange(source)}
                className={` rounded-lg text-sm font-medium transition
                  ${
                    active
                      ? "bg-black hover:bg-gray-950 text-white"
                      : "bg-sidebar text-card-foreground/50"
                  }`}
              >
                {source.resolution}p
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-sidebar-accent p-2">
      <center className="bg-sidebar-border rounded-xl uppercase text-xs py-2 font-black">
        Streams
      </center>
      {renderGroup("Sub", subSources)}
      {renderGroup("Dub", dubSources)}
    </div>
  );
}
