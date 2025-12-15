"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { QualitySelector } from "./vidqc";
import { DownloadDropdown } from "./viddl";
import { updateLastWatched, getLastWatched } from "@/lib/last-watched";

const AUTOPLAY_KEY = "anime-autoplay-enabled";

export default function AnimePlayer({ data, id }: { data: any; id: number }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const router = useRouter();
  const params = useParams();

  const rawEpParam = String(params.ep);
  const episodeId = rawEpParam.split("luffy-of")[0];

  const [episodes, setEpisodes] = useState<any[]>([]);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);

  const [currentTimeText, setCurrentTimeText] = useState("0:00");
  const [durationText, setDurationText] = useState("0:00");

  const [autoplay, setAutoplay] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem(AUTOPLAY_KEY) !== "false";
  });

  /* ---------------- Fetch episode list from Consumet ---------------- */

  useEffect(() => {
    let cancelled = false;

    async function loadEpisodes() {
      try {
        setLoadingEpisodes(true);
        const res = await fetch(
          `https://consumet-woad-beta.vercel.app/anime/animepahe/info/${episodeId}`,
        );
        const json = await res.json();
        if (!cancelled) {
          setEpisodes(json.episodes ?? []);
        }
      } catch (e) {
        console.error("Failed to fetch episode list", e);
      } finally {
        if (!cancelled) setLoadingEpisodes(false);
      }
    }

    loadEpisodes();
    return () => {
      cancelled = true;
    };
  }, [episodeId]);

  /* ---------------- Video source ---------------- */

  const defaultSource = useMemo(() => {
    return [...data.sources].sort(
      (a, b) => Number(b.resolution) - Number(a.resolution),
    )[0];
  }, [data.sources]);

  const [currentSource, setCurrentSource] = useState(defaultSource);

  const iframeSrc = `/api/player?video=${encodeURIComponent(
    currentSource.url,
  )}&ep=${data.episode}&slug=${params.ep}`;

  /* ---------------- Navigation ---------------- */

  function goToNextEpisode() {
    if (!episodes.length) return;

    const nextEpNumber = Number(data.episode) + 1;
    const next = episodes.find((e) => e.number === nextEpNumber);
    if (!next) return;

    router.push(`/anime/${id}/watch/${next.id.split("/").join("luffy-of")}`);
  }

  /* ---------------- Restore progress ---------------- */

  useEffect(() => {
    const store = getLastWatched();
    const anime = store[data.ids.anilist_id];
    const ep = anime?.episodes?.[data.session];
    if (!ep || !iframeRef.current) return;

    const iframe = iframeRef.current;
    const onLoad = () => {
      iframe.contentWindow?.postMessage(
        { type: "seek", time: ep.watchedTill },
        "*",
      );
    };

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, [data]);

  /* ---------------- Player messages ---------------- */

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data?.type) return;

      if (e.data.type === "player-ready") {
        setDurationText(e.data.durationText);
        return;
      }

      if (e.data.type === "timeupdate") {
        setCurrentTimeText(e.data.currentTimeText);
        setDurationText(e.data.durationText);

        updateLastWatched({
          animeId: data.ids.anilist_id,
          epSession: rawEpParam,
          epTitle: `Episode ${data.episode}`,
          epNo: data.episode,
          watchedTill: e.data.currentTime,
          duration: e.data.duration,
          currentTimeText: e.data.currentTimeText,
          durationText: e.data.durationText,
        });
        return;
      }

      if (e.data.type === "next-episode") {
        if (autoplay && !loadingEpisodes) {
          goToNextEpisode();
        }
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [data, autoplay, episodes, loadingEpisodes]);

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-3">
      <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
        <iframe
          ref={iframeRef}
          key={currentSource.url}
          src={iframeSrc}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="no-referrer"
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-between text-sm bg-foreground/30 p-4 rounded-lg">
        <div className="flex gap-3 items-center">
          <span>Episode {data.episode}</span>
          <span className="opacity-70">
            {currentTimeText} / {durationText}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              checked={autoplay}
              onChange={(e) => {
                setAutoplay(e.target.checked);
                localStorage.setItem(AUTOPLAY_KEY, String(e.target.checked));
              }}
            />
            Autoplay
          </label>

          <DownloadDropdown downloads={data.downloads} />
        </div>
      </div>

      <QualitySelector
        sources={data.sources}
        currentSource={currentSource}
        onChange={setCurrentSource}
      />
    </div>
  );
}
