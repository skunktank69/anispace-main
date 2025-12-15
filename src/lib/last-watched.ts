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
  poster,
}: {
  animeId: string;
  epSession: string;
  epTitle: string;
  epNo: number;
  watchedTill: number;
  duration?: number;
  poster: string;
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
    poster: poster || "",
  };

  saveLastWatched(store);
}
