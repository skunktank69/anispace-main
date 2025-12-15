"use client";

import { useEffect, useState } from "react";

/*eslint-disable */
export default function AiringBanner({ nextAiringEpisode }: any) {
  // Hooks must always run, even if data is missing
  const [remaining, setRemaining] = useState(
    nextAiringEpisode?.timeUntilAiring ?? 0,
  );

  // Update countdown
  useEffect(() => {
    if (!nextAiringEpisode) return;

    const interval = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [nextAiringEpisode]);

  if (!nextAiringEpisode) {
    return null;
  }

  const { airingTime, episode } = nextAiringEpisode;

  function formatCountdown(seconds: number) {
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return `${d}d ${h}h ${m}m`;
  }

  const formattedDate = new Date(airingTime * 1000).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full bg-linear-to-r dark:bg-white/30 bg-black/30  text-white p-2 rounded-lg shadow-md backdrop-blur-md">
      <h2 className="text-lg font-bold">
        Episode {episode} airs in {formatCountdown(remaining)}
      </h2>
      <p className="text-sm opacity-90">Airing on: {formattedDate}</p>
    </div>
  );
}
