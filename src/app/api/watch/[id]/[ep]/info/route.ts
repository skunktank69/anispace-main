import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Episode = {
  id: string;
  number: number;
  title?: string;
  image?: string;
  duration?: string;
  url?: string;
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string; ep: string }> },
) {
  const { id, ep } = await context.params;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);

  try {
    const res = await fetch(
      `https://consumet-woad-beta.vercel.app/anime/animepahe/info/${id}`,
      {
        signal: controller.signal,
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch anime info" },
        { status: 502 },
      );
    }

    const { episodes } = await res.json();

    if (!Array.isArray(episodes)) {
      return NextResponse.json(
        { error: "Episodes not found" },
        { status: 404 },
      );
    }

    // stop as soon as we find it
    for (const e of episodes as Episode[]) {
      if (e.id.includes(`${id}/${ep}`)) {
        clearTimeout(timeout);
        return NextResponse.json(
          {
            animeId: id,
            episode: {
              number: e.number,
              title: e.title ?? "",
              image: e.image ?? "",
              duration: e.duration ?? "",
            },
          },
          {
            headers: {
              "Cache-Control": "public, max-age=300",
            },
          },
        );
      }
    }

    return NextResponse.json({ error: "Episode not found" }, { status: 404 });
  } catch (err: any) {
    const aborted = err?.name === "AbortError";

    return NextResponse.json(
      { error: aborted ? "Upstream timeout" : "Internal server error" },
      { status: aborted ? 504 : 500 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
