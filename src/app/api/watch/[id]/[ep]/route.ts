import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ ep: string }> },
) {
  const { ep } = await context.params;

  const id = ep.split("%2F");
  const res = await fetch(
    `https://aph-alpha.vercel.app/api/play/${id[0]}?episodeId=${id[1]}`,
    {
      next: { revalidate: 300 },
    },
  );
  console.log(
    `https://aph-alpha.vercel.app/api/play/${id[0]}?episodeId=${id[1]}`,
  );
  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch episode data" },
      { status: 502 },
    );
  }

  const data = await res.json();
  return NextResponse.json({ data });
}

// const aall = new Anilist();

// const epx = await aall.fetchEpisodesListById(id);

// const ep_title = epx[ep - 1];

// console.log(
//   `https://aph-alpha.vercel.app/api/play/${pahe_id}?episodeId=${pahe_epid}`,
// );

//

// const data = await axios.get(
//   `https://consumet-woad-beta.vercel.app/anime/animepahe/watch`,
//   {
//     params: {
//       episodeId: pahe_id,
//     },
//   },
// );
// const d = await data.json();
// console.log(d);
// const ap = new ANIME.AnimePahe();
// const data = await ap.fetchAnimeInfo(pahe_id);

// const d = await data.json();

// const d = await data.json()

// const res = await fetch(
//   `https://consumet-woad-beta.vercel.app/anime/animepahe/watch/${idd}$episode$${eid}`,
// );
// const data = await res.json();

// // Extract the first source and subtitle
// const source = data.sources[0]?.url;
// const subtitle = data.subtitles?.[0]?.url ?? "";

// const kaa_ep_image = (await kaa.fetchAnimeInfo(entrykaa)).episodes[ep - 1]
// .image;

// console.log(kaa_eplist);
// const kaa_ep_needed = kaa_eplist;
// console.log({ ep: ep, kaa_ep });
// const ex = await kaa.fetchEpisodeSources(kaa_ep);
// const kaa_source = await ex.json();
// console.log(ex.json());
//   return NextResponse.json({
//     // source,
//     // title: kaa_ep_title || "",
//     // image: kaa_ep_image,
//     // subtitle: ex.subtitles,
//     data,
//     // title: ep_title,
//     dat: idd_x.episodes[ep - 1],
//   });
// }
