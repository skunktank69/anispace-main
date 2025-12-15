const STORAGE_KEY = "last-watched-anime";

export function getLastWatched() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function saveLastWatched(store: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function updateLastWatched({
  animeId,
  epSession,
  epTitle,
  epNo,
  watchedTill,
  duration,
}: {
  animeId: string;
  epSession: string;
  epTitle: string;
  epNo: number;
  watchedTill: number;
  duration?: number;
}) {
  const store = getLastWatched();

  if (!store[animeId]) {
    store[animeId] = {
      updatedAt: Date.now(),
      episodes: {},
    };
  }

  store[animeId].updatedAt = Date.now();
  store[animeId].episodes[epSession] = {
    epSession,
    epTitle,
    epNo,
    watchedTill,
    duration,
  };

  saveLastWatched(store);
}

export function buildRecentItemsFromLocal() {
  if (typeof window === "undefined") return [];

  let store: any = {};
  try {
    store = JSON.parse(localStorage.getItem("last-watched-anime") || "{}");
  } catch {
    return [];
  }

  const items: any[] = [];

  for (const animeId of Object.keys(store)) {
    const anime = store[animeId];
    if (!anime?.episodes) continue;

    for (const epSession of Object.keys(anime.episodes)) {
      const ep = anime.episodes[epSession];

      items.push({
        provider: "animepahe",
        providerId: animeId, // 🔑 stable ID
        title: ep.epTitle,
        onEpisode: ep.epNo,
        timestamps: JSON.stringify({
          watchedTill: ep.watchedTill,
          duration: ep.duration,
        }),
        type: "anime",
        color: "#ffffff",
      });
    }
  }

  return items;
}
