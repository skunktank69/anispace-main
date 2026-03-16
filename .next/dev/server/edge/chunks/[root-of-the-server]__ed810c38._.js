(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__ed810c38._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/app/api/watch/[id]/[ep]/route.ts [app-edge-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [app-edge-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [app-edge-route] (ecmascript)");
;
const runtime = "edge";
async function GET(req, context) {
    const { ep } = await context.params;
    const id = ep.split("%2F");
    const res = await fetch(`https://aph-alpha.vercel.app/api/play/${id[0]}?episodeId=${id[1]}`, {
        next: {
            revalidate: 300
        }
    });
    // console.log(
    //   `https://aph-alpha.vercel.app/api/play/${id[0]}?episodeId=${id[1]}`,
    // );
    if (!res.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch episode data"
        }, {
            status: 502
        });
    }
    const data = await res.json();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        data
    });
} // const aall = new Anilist();
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
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ed810c38._.js.map