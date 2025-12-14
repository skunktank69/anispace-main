import { NextResponse } from "next/server";

/**
 * Simple in-memory cache
 * Lives as long as the server instance lives
 */
const cache = new Map<string, { data: any; expiresAt: number }>();

const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ---- POPULAR PARAMS ----
    const popularPage = Number(searchParams.get("popularPage") ?? 1);
    const popularPerPage = Number(searchParams.get("popularPerPage") ?? 20);

    // ---- TRENDING PARAMS ----
    const trendingPage = Number(searchParams.get("trendingPage") ?? 1);
    const trendingPerPage = Number(searchParams.get("trendingPerPage") ?? 10);

    // ---- RECENT PARAMS ----
    const recentPage = Number(searchParams.get("recentPage") ?? 1);
    const recentPerPage = Number(searchParams.get("recentPerPage") ?? 20);

    const base = process.env.NEXT_PUBLIC_META_API;
    const now = Date.now();

    // ---- CACHE KEYS ----
    const popularKey = `popular:${popularPage}:${popularPerPage}`;
    const trendingKey = `trending:${trendingPage}:${trendingPerPage}`;
    const recentKey = `recent:${recentPage}:${recentPerPage}`;

    let popular;
    let trending;
    let recent;

    // ---- POPULAR ----
    const cachedPopular = cache.get(popularKey);
    if (cachedPopular && cachedPopular.expiresAt > now) {
      popular = cachedPopular.data;
    } else {
      const res = await fetch(
        `${base}/popular?page=${popularPage}&perPage=${popularPerPage}`,
        { cache: "no-store" },
      );
      if (!res.ok) throw new Error("Popular fetch failed");
      popular = await res.json();
      cache.set(popularKey, {
        data: popular,
        expiresAt: now + CACHE_TTL,
      });
    }

    // ---- TRENDING ----
    const cachedTrending = cache.get(trendingKey);
    if (cachedTrending && cachedTrending.expiresAt > now) {
      trending = cachedTrending.data;
    } else {
      const res = await fetch(
        `${base}/trending?page=${trendingPage}&perPage=${trendingPerPage}`,
        { cache: "no-store" },
      );
      if (!res.ok) throw new Error("Trending fetch failed");
      trending = await res.json();
      cache.set(trendingKey, {
        data: trending,
        expiresAt: now + CACHE_TTL,
      });
    }

    // ---- RECENT ----
    const cachedRecent = cache.get(recentKey);
    if (cachedRecent && cachedRecent.expiresAt > now) {
      recent = cachedRecent.data;
    } else {
      const res = await fetch(
        `${base}/recent?page=${recentPage}&perPage=${recentPerPage}`,
        { cache: "no-store" },
      );
      if (!res.ok) throw new Error("Recent fetch failed");
      recent = await res.json();
      cache.set(recentKey, {
        data: recent,
        expiresAt: now + CACHE_TTL,
      });
    }

    return NextResponse.json({
      popular,
      trending,
      recent,
    });
  } catch (error) {
    console.error("Meta API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
