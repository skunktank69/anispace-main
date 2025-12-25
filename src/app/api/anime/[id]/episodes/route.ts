import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: number }> },
) {
  const { id } = await context.params;

  try {
    const infoRes = await fetch(
      `${process.env.NEXT_PUBLIC_MAPPER_API_ALT}/api/${id}`,
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
        id: info.aniListId,
        session_id: info.session,
        internal_id: info.animePaheId, //not exactly animepahe id,
        title: info.title,
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
