import { anilist } from "@/lib/anime-conf";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const source = await anilist.fetchAnimeInfo(id);

  return NextResponse.json(source.relations);
}
