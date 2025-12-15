"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Player from "@/components/re/player";
import Episodes, { CompactEpisodes } from "@/components/re/eplist";

export default function WatchPage(req) {
  const { id, ep } = useParams();
  const [data, setData] = useState<any>(null);
  const [episodes, setEpisodes] = useState<any>(null);

  const [currentSource, setCurrentSource] = useState<string>("");
  const url = typeof window !== "undefined" ? window.location.origin : null;
  // console.log(url);
  useEffect(() => {
    fetch(
      `https://consumet-woad-beta.vercel.app/anime/animepahe/info/${ep.split("luffy-of")[0]}`,
    )
      .then((r) => r.json())
      .then((d) => setEpisodes(d.episodes));
    fetch(
      `${`${url}` || `http://localhost:3000`}/api/watch/${id}/${encodeURIComponent(ep.split("luffy-of").join("%2F"))}`,
    )
      .then((r) => r.json())
      .then((j) => {
        setData(j.data);
        // setTitle(j.title);

        if (j.data.sources?.length) {
          setCurrentSource(j.data.sources[0].url);
        }
      });
  }, [id, ep, episodes]);

  // useEffect(() => {

  // }, []);
  // console.log(episodes);

  if (!data) return <div>Loading episode…</div>;

  // --- Split sources into sub/dub ---
  const subSources = data.sources.filter((s: any) => !s.isDub);
  const dubSources = data.sources.filter((s: any) => s.isDub);

  return (
    <div
      style={{
        //   maxWidth: "90000x",
        margin: "0 auto",
        //   padding: "20px",
        //   fontFamily: "sans-serif",
      }}
      className=" flex flex-col xl:flex-row gap-6 p-6 max-w-[16000px] mx-auto"
    >
      <div className="w-full xl:w-[70%] shrink-0">
        <Player data={data} id={id} />
      </div>

      <div className="w-full min-w-[280px] p-2 bg-sidebar rounded">
        <div className="text-sm font-semibold mb-2 opacity-80">Episodes</div>
        <CompactEpisodes animeId={id} per_page={100} />
      </div>
    </div>
  );
}
