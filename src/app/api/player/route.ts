export const runtime = "edge";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const video = url.searchParams.get("video") || "";
  const ep = Number(url.searchParams.get("ep"));
  const episodeSlug = url.searchParams.get("slug") || "";

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Artplayer</title>

<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />

<style>
.art-video-player {
  --art-progress-height: 12px !important;
  --art-border-radius: 1.5vh !important;
  --art-theme: #fff !important;
  --art-hover-color: #fff !important;
  --art-control-background: rgba(255,255,255,.15) !important;
  --art-control-hover-background: rgba(255,255,255,.3) !important;
}

.art-progress-hover,
.art-control-progress-inner,
.art-progress-played {
  border-radius: 50vh !important;
}

html,body {
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  background:#000;
  overflow:hidden;
}

.artplayer-app {
  width:100vw;
  height:100vh;
}

.next-btn {
  position:absolute;
  right:24px;
  bottom:72px;
  background:rgba(0,0,0,.85);
  color:#fff;
  padding:10px 16px;
  border-radius:10px;
  font-size:14px;
  cursor:pointer;
  display:none;
  z-index:9999;
  backdrop-filter: blur(6px);
}
</style>
</head>

<body>
<div class="artplayer-app"></div>
<div class="next-btn">▶ Next Episode</div>

<script src="https://cdn.jsdelivr.net/npm/artplayer/dist/artplayer.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.5.17/hls.min.js"></script>

<script>
const video = decodeURIComponent("${encodeURIComponent(video)}");
const currentEp = ${ep};
const episodeSlug = "${episodeSlug}";
const nextBtn = document.querySelector(".next-btn");

let epList = [];

async function loadEpisodes() {
  try {
    const baseId = episodeSlug.split("luffy-of")[0];
    const res = await fetch(
      "https://consumet-woad-beta.vercel.app/anime/animepahe/info/" + baseId
    );
    const json = await res.json();
    epList = json.episodes || [];
  } catch (e) {
    console.error("Failed to load episode list", e);
  }
}

loadEpisodes();

function formatTime(sec) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2,"0");
}

function playM3u8(videoEl, url, art) {
  if (Hls.isSupported()) {
    if (art.hls) art.hls.destroy();
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoEl);
    art.hls = hls;
    art.once("destroy", () => hls.destroy());
  } else {
    videoEl.src = url;
  }
}

const art = new Artplayer({
  container: document.querySelector(".artplayer-app"),
  url: video,
  type: "m3u8",
  customType: { m3u8: playM3u8 },
  fullscreen: true,
  playbackRate: true,
  setting: true,
  hotkey: true,
  autoSize: true,
  fastForward: true,
});

let lastSent = 0;
let firedNext = false;

art.on("video:timeupdate", () => {
  const now = Date.now();

  if (now - lastSent > 1000) {
    lastSent = now;
    window.parent.postMessage({
      type: "timeupdate",
      currentTime: art.currentTime,
      duration: art.duration,
      currentTimeText: formatTime(art.currentTime),
      durationText: formatTime(art.duration),
    }, "*");
  }

  if (!art.duration || !epList.length) return;

  const remaining = art.duration - art.currentTime;
  const hasNext = epList.find(e => e.number === currentEp + 1);

  if (hasNext && remaining <= 15) {
    nextBtn.style.display = "block";
  }

  if (hasNext && remaining <= 1 && !firedNext) {
    firedNext = true;
    window.parent.postMessage({
      type: "next-episode",
      episode: currentEp + 1,
    }, "*");
  }
});

nextBtn.onclick = () => {
  const next = epList.find(e => e.number === currentEp + 1);
  if (!next) return;

  window.parent.postMessage({
    type: "next-episode",
    episode: next.number,
  }, "*");
};

window.addEventListener("message", e => {
  if (e.data?.type === "seek") {
    art.seek = e.data.time;
  }
});

art.on("video:loadedmetadata", () => {
  window.parent.postMessage({
    type: "player-ready",
    duration: art.duration,
    durationText: formatTime(art.duration),
  }, "*");
});
</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
