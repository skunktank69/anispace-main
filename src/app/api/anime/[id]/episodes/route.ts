import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: number }> },
) {
  const { id } = await context.params;

  try {
    const mapRes = await fetch(
      `https://anilist-to-animepahe-delta.vercel.app/api/${id}`,
      {
        next: { revalidate: 24 * 60 * 60 },
      },
    );

    if (!mapRes.ok) {
      return NextResponse.json({ error: "Mapping failed" }, { status: 502 });
    }

    const map = await mapRes.json();
    const first = map?.episodes?.[0];

    if (!first?.id) {
      return NextResponse.json({ error: "No episodes" }, { status: 404 });
    }

    const session_id = first.id.slice(0, first.id.indexOf("/"));

    const infoRes = await fetch(
      `https://consumet-woad-beta.vercel.app/anime/animepahe/info/${session_id}`,
      {
        next: { revalidate: 15 * 60 },
      },
    );

    if (!infoRes.ok) {
      return NextResponse.json(
        { error: "Episode list failed" },
        { status: 502 },
      );
    }

    const info = await infoRes.json();

    return NextResponse.json(
      {
        id,
        session_id,
        ep_list: info.episodes ?? [],
      },
      {
        headers: {
          "Cache-Control": "public, max-age=900",
        },
      },
    );
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
