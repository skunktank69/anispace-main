(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/re/vidqc.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QualitySelector",
    ()=>QualitySelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function QualitySelector({ sources, currentSource, onChange }) {
    const subSources = sources.filter((s)=>!s.isDub);
    const dubSources = sources.filter((s)=>s.isDub);
    const renderGroup = (label, list)=>{
        if (list.length === 0) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center w-full  bg-foreground/5 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: " font-medium uppercase  m-0 p-0 text-foreground pl-4 pr-1",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/re/vidqc.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 px-4 py-2",
                    children: list.map((source)=>{
                        const active = source.url === currentSource.url;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onChange(source),
                            className: ` rounded-lg text-sm font-medium transition
                  ${active ? "bg-black hover:bg-gray-950 text-white" : "bg-sidebar text-card-foreground/50"}`,
                            children: [
                                source.resolution,
                                "p"
                            ]
                        }, source.url, true, {
                            fileName: "[project]/src/components/re/vidqc.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/re/vidqc.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/re/vidqc.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 rounded-xl bg-sidebar-accent p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("center", {
                className: "bg-sidebar-border rounded-xl uppercase text-xs py-2 font-black",
                children: "Streams"
            }, void 0, false, {
                fileName: "[project]/src/components/re/vidqc.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            renderGroup("Sub", subSources),
            renderGroup("Dub", dubSources)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/re/vidqc.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c = QualitySelector;
var _c;
__turbopack_context__.k.register(_c, "QualitySelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/re/viddl.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadDropdown",
    ()=>DownloadDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DownloadDropdown({ downloads }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (downloads.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-50 max-w-sm text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((v)=>!v),
                className: "flex items-center justify-between w-full px-3 py-2 rounded-md border transition text-sm  bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/re/viddl.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            "Download"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/re/viddl.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        className: `transition-transform ${open ? "rotate-180" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/re/viddl.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/re/viddl.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-20 mt-2 w-full rounded-md border shadow-lg  bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col divide-y",
                    children: downloads.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: d.download,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "flex justify-between items-center px-3 py-2 text-sm hover:bg-sidebar transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: d.quality.indexOf("eng") < 0 ? `${d.quality.match(/\d+p/)?.[0] || "unknown"} sub` : `${d.quality.match(/\d+p/)?.[0] || "unknown"} dub`
                            }, void 0, false, {
                                fileName: "[project]/src/components/re/viddl.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this)
                        }, d.download, false, {
                            fileName: "[project]/src/components/re/viddl.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/re/viddl.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/re/viddl.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/re/viddl.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(DownloadDropdown, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = DownloadDropdown;
var _c;
__turbopack_context__.k.register(_c, "DownloadDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/last-watched.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLastWatched",
    ()=>getLastWatched,
    "saveLastWatched",
    ()=>saveLastWatched,
    "updateLastWatched",
    ()=>updateLastWatched
]);
const STORAGE_KEY = "last-watched-anime";
function getLastWatched() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch  {
        return {};
    }
}
function saveLastWatched(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
function updateLastWatched({ animeId, epSession, epTitle, epNo, watchedTill, duration, poster }) {
    const store = getLastWatched();
    if (!store[animeId]) {
        store[animeId] = {
            updatedAt: Date.now(),
            episodes: {}
        };
    }
    store[animeId].updatedAt = Date.now();
    store[animeId].episodes[epSession] = {
        epSession,
        epTitle,
        epNo,
        watchedTill,
        duration,
        poster: poster || ""
    };
    saveLastWatched(store);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/re/player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$vidqc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/re/vidqc.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$viddl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/re/viddl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$last$2d$watched$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/last-watched.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AUTOPLAY_KEY = "anime-autoplay-enabled";
function AnimePlayer({ data, id, image }) {
    _s();
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const rawEpParam = String(params.ep);
    const episodeId = rawEpParam.split("luffy-of")[0];
    const [episodes, setEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingEpisodes, setLoadingEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentTimeText, setCurrentTimeText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0:00");
    const [durationText, setDurationText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0:00");
    const [autoplay, setAutoplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AnimePlayer.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return localStorage.getItem(AUTOPLAY_KEY) !== "false";
        }
    }["AnimePlayer.useState"]);
    /* ---------------- Fetch episode list from Consumet ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimePlayer.useEffect": ()=>{
            let cancelled = false;
            async function loadEpisodes() {
                try {
                    setLoadingEpisodes(true);
                    const res = await fetch(`https://consumet-woad-beta.vercel.app/anime/animepahe/info/${episodeId}`);
                    const json = await res.json();
                    if (!cancelled) {
                        setEpisodes(json.episodes ?? []);
                    }
                } catch (e) {
                    console.error("Failed to fetch episode list", e);
                } finally{
                    if (!cancelled) setLoadingEpisodes(false);
                }
            }
            loadEpisodes();
            return ({
                "AnimePlayer.useEffect": ()=>{
                    cancelled = true;
                }
            })["AnimePlayer.useEffect"];
        }
    }["AnimePlayer.useEffect"], [
        episodeId
    ]);
    /* ---------------- Video source ---------------- */ const defaultSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimePlayer.useMemo[defaultSource]": ()=>{
            return [
                ...data.sources
            ].sort({
                "AnimePlayer.useMemo[defaultSource]": (a, b)=>Number(b.resolution) - Number(a.resolution)
            }["AnimePlayer.useMemo[defaultSource]"])[0];
        }
    }["AnimePlayer.useMemo[defaultSource]"], [
        data.sources
    ]);
    const [currentSource, setCurrentSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSource);
    const iframeSrc = `/api/player?video=${encodeURIComponent("https://cinderbyte-hls.anispace.workers.dev/proxy?url=" + currentSource.url)}&ep=${data.episode}&slug=${params.ep}`;
    /* ---------------- Navigation ---------------- */ function goToNextEpisode() {
        if (!episodes.length) return;
        const nextEpNumber = Number(data.episode) + 1;
        const next = episodes.find((e)=>e.number === nextEpNumber);
        if (!next) return;
        router.push(`/anime/${id}/watch/${next.id.split("/").join("luffy-of")}`);
    }
    /* ---------------- Restore progress ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimePlayer.useEffect": ()=>{
            const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$last$2d$watched$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastWatched"])();
            const anime = store[data.ids.anilist_id];
            const ep = anime?.episodes?.[data.session];
            if (!ep || !iframeRef.current) return;
            const iframe = iframeRef.current;
            const onLoad = {
                "AnimePlayer.useEffect.onLoad": ()=>{
                    iframe.contentWindow?.postMessage({
                        type: "seek",
                        time: ep.watchedTill
                    }, "*");
                }
            }["AnimePlayer.useEffect.onLoad"];
            iframe.addEventListener("load", onLoad);
            return ({
                "AnimePlayer.useEffect": ()=>iframe.removeEventListener("load", onLoad)
            })["AnimePlayer.useEffect"];
        }
    }["AnimePlayer.useEffect"], [
        data
    ]);
    /* ---------------- Player messages ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimePlayer.useEffect": ()=>{
            function onMessage(e) {
                if (!e.data?.type) return;
                if (e.data.type === "player-ready") {
                    setDurationText(e.data.durationText);
                    return;
                }
                if (e.data.type === "timeupdate") {
                    setCurrentTimeText(e.data.currentTimeText);
                    setDurationText(e.data.durationText);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$last$2d$watched$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLastWatched"])({
                        animeId: data.ids.anilist_id,
                        epSession: rawEpParam,
                        epTitle: `Episode ${data.episode}`,
                        epNo: data.episode,
                        watchedTill: e.data.currentTime,
                        duration: e.data.duration,
                        currentTimeText: e.data.currentTimeText,
                        durationText: e.data.durationText,
                        poster: image.cover || ""
                    });
                    console.log(image.cover);
                    return;
                }
                if (e.data.type === "next-episode") {
                    if (autoplay && !loadingEpisodes) {
                        goToNextEpisode();
                    }
                }
            }
            window.addEventListener("message", onMessage);
            return ({
                "AnimePlayer.useEffect": ()=>window.removeEventListener("message", onMessage)
            })["AnimePlayer.useEffect"];
        }
    }["AnimePlayer.useEffect"], [
        data,
        autoplay,
        episodes,
        loadingEpisodes
    ]);
    /* ---------------- UI ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl overflow-hidden bg-black aspect-video",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    ref: iframeRef,
                    src: iframeSrc,
                    allow: "autoplay; fullscreen; picture-in-picture",
                    allowFullScreen: true,
                    referrerPolicy: "no-referrer",
                    className: "w-full h-full"
                }, currentSource.url, false, {
                    fileName: "[project]/src/components/re/player.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/re/player.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " text-sm bg-foreground/30 p-2 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-1 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: autoplay,
                                    onChange: (e)=>{
                                        setAutoplay(e.target.checked);
                                        localStorage.setItem(AUTOPLAY_KEY, String(e.target.checked));
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/re/player.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                "Autoplay"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/re/player.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$viddl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadDropdown"], {
                            downloads: data.downloads
                        }, void 0, false, {
                            fileName: "[project]/src/components/re/player.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/re/player.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/re/player.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$vidqc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QualitySelector"], {
                sources: data.sources,
                currentSource: currentSource,
                onChange: setCurrentSource
            }, void 0, false, {
                fileName: "[project]/src/components/re/player.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/re/player.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(AnimePlayer, "VjMLJ/e0vVMWHKX/exANKT6f4fw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = AnimePlayer;
var _c;
__turbopack_context__.k.register(_c, "AnimePlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/re/eplist.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactEpisodes",
    ()=>CompactEpisodes,
    "default",
    ()=>Episodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { useRouter } from "next/navigation";
// import { Dot } from "lucide-react";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Episodes(props) {
    _s();
    const [episodes, setEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [sortAsc, setSortAsc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [jumpValue, setJumpValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [highlightEp, setHighlightEp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const episodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const EPISODES_PER_PAGE = props.per_page;
    const animeId = props.animeId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Episodes.useEffect": ()=>{
            async function fetchEpisodes() {
                try {
                    setLoading(true);
                    const res = await fetch(`/api/anime/${animeId}/episodes`);
                    if (!res.ok) throw new Error("Failed to fetch episodes");
                    const data = await res.json();
                    setEpisodes(data.ep_list);
                } catch (err) {
                    setError(err.message || "Something went wrong");
                } finally{
                    setLoading(false);
                }
            }
            if (animeId) fetchEpisodes();
        }
    }["Episodes.useEffect"], [
        animeId
    ]);
    const sortedEpisodes = [
        ...episodes
    ].sort((a, b)=>sortAsc ? a.number - b.number : b.number - a.number);
    const totalPages = Math.ceil(sortedEpisodes.length / EPISODES_PER_PAGE);
    const paginatedEpisodes = sortedEpisodes.slice((currentPage - 1) * EPISODES_PER_PAGE, currentPage * EPISODES_PER_PAGE);
    const handlePageChange = (page)=>{
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };
    const jumpToEpisode = ()=>{
        const epNum = Number(jumpValue);
        if (!epNum || epNum < 1) return;
        const index = sortedEpisodes.findIndex((ep)=>ep.number === epNum);
        if (index === -1) return;
        const page = Math.floor(index / EPISODES_PER_PAGE) + 1;
        setCurrentPage(page);
        setHighlightEp(epNum);
        // wait for pagination render, then scroll
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                episodeRefs.current[epNum]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            });
        });
        // auto-clear highlight
        setTimeout(()=>setHighlightEp(null), 2000);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "Loading episodes..."
    }, void 0, false);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-600",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/components/re/eplist.tsx",
        lineNumber: 96,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSortAsc(!sortAsc),
                        className: "px-3 py-1 border rounded-md hover:bg-secondary-foreground transition",
                        children: [
                            "Sort: ",
                            sortAsc ? "Asc" : "Desc"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                placeholder: "Episode #",
                                value: jumpValue,
                                onChange: (e)=>setJumpValue(e.target.value),
                                onKeyDown: (e)=>e.key === "Enter" && jumpToEpisode(),
                                className: "w-28 px-2 py-1 border rounded-md bg-background"
                            }, void 0, false, {
                                fileName: "[project]/src/components/re/eplist.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: jumpToEpisode,
                                className: "px-3 py-1 border rounded-md hover:bg-foreground/40",
                                children: "Go"
                            }, void 0, false, {
                                fileName: "[project]/src/components/re/eplist.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/re/eplist.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 mt-2 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handlePageChange(currentPage - 1),
                        disabled: currentPage === 1,
                        className: "px-3 py-1 border rounded-md disabled:opacity-50",
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, i)=>i + 1).map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>handlePageChange(pageNum),
                            className: `px-3 py-1 border rounded-md ${pageNum === currentPage ? "bg-sidebar-border text-foreground" : ""}`,
                            children: pageNum
                        }, pageNum, false, {
                            fileName: "[project]/src/components/re/eplist.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handlePageChange(currentPage + 1),
                        disabled: currentPage === totalPages,
                        className: "px-3 py-1 border rounded-md disabled:opacity-50",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/re/eplist.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2",
                children: paginatedEpisodes.map((ep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            episodeRefs.current[ep.number] = el;
                        },
                        className: `rounded-lg transition ring-offset-2 ${highlightEp === ep.number ? "ring-2 ring-primary" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/anime/${animeId}/watch/${ep.id.split("/").join("luffy-of")}`,
                            scroll: false,
                            className: "relative group block rounded-lg overflow-hidden shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-[16/9]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: ep.image,
                                        alt: `Episode ${ep.number}`,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/re/eplist.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/re/eplist.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-2 right-2 bg-black/60 text-white text-xs font-semibold px-1 py-0.5 rounded",
                                    children: [
                                        "ep ",
                                        ep.number,
                                        " · ",
                                        ep.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/re/eplist.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/re/eplist.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/re/eplist.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    }, ep.number, false, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/re/eplist.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/re/eplist.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Episodes, "7umsFldkldqm3nUIwvmkOhieuKI=");
_c = Episodes;
function CompactEpisodes({ animeId, per_page, currentEpisode }) {
    _s1();
    const [episodes, setEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [sortAsc, setSortAsc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactEpisodes.useEffect": ()=>{
            async function fetchEpisodes() {
                try {
                    setLoading(true);
                    const res = await fetch(`/api/anime/${animeId}/episodes`);
                    if (!res.ok) throw new Error("Failed to fetch episodes");
                    const data = await res.json();
                    setEpisodes(data.ep_list);
                } catch (e) {
                    setError(e.message ?? "Something went wrong");
                } finally{
                    setLoading(false);
                }
            }
            fetchEpisodes();
        }
    }["CompactEpisodes.useEffect"], [
        animeId
    ]);
    const sortedEpisodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompactEpisodes.useMemo[sortedEpisodes]": ()=>{
            return [
                ...episodes
            ].sort({
                "CompactEpisodes.useMemo[sortedEpisodes]": (a, b)=>sortAsc ? a.number - b.number : b.number - a.number
            }["CompactEpisodes.useMemo[sortedEpisodes]"]);
        }
    }["CompactEpisodes.useMemo[sortedEpisodes]"], [
        episodes,
        sortAsc
    ]);
    const totalPages = Math.ceil(sortedEpisodes.length / per_page);
    const paginatedEpisodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompactEpisodes.useMemo[paginatedEpisodes]": ()=>{
            const start = (currentPage - 1) * per_page;
            return sortedEpisodes.slice(start, start + per_page);
        }
    }["CompactEpisodes.useMemo[paginatedEpisodes]"], [
        sortedEpisodes,
        currentPage,
        per_page
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactEpisodes.useEffect": ()=>{
            if (!episodes.length) return;
            const index = sortedEpisodes.findIndex({
                "CompactEpisodes.useEffect.index": (e)=>e.number === currentEpisode
            }["CompactEpisodes.useEffect.index"]);
            if (index === -1) return;
            const page = Math.floor(index / per_page) + 1;
            setCurrentPage(page);
            requestAnimationFrame({
                "CompactEpisodes.useEffect": ()=>{
                    activeRef.current?.scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    });
                }
            }["CompactEpisodes.useEffect"]);
        }
    }["CompactEpisodes.useEffect"], [
        episodes,
        sortedEpisodes,
        currentEpisode,
        per_page
    ]);
    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        requestAnimationFrame(()=>{
            scrollRef.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm opacity-70",
        children: "Loading episodes…"
    }, void 0, false, {
        fileName: "[project]/src/components/re/eplist.tsx",
        lineNumber: 293,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-600",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/components/re/eplist.tsx",
        lineNumber: 294,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSortAsc((v)=>!v),
                    className: "px-2 py-0.5 text-[11px] border rounded",
                    children: sortAsc ? "↑ Asc" : "↓ Desc"
                }, void 0, false, {
                    fileName: "[project]/src/components/re/eplist.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/re/eplist.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "max-h-[60vh] xl:max-h-[78vh] overflow-y-auto pr-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 sm:grid-cols-5 xl:grid-cols-4 gap-2",
                    children: paginatedEpisodes.map((ep)=>{
                        const isActive = ep.number === currentEpisode;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ref: isActive ? activeRef : null,
                            href: `/anime/${animeId}/watch/${ep.id.split("/").join("luffy-of")}`,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative rounded overflow-hidden ring-2 transition", isActive ? "ring-primary scale-[1.02]" : "ring-transparent hover:ring-muted"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-[16/9]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: ep.image,
                                        alt: `Episode ${ep.number}`,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/re/eplist.tsx",
                                        lineNumber: 332,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/re/eplist.tsx",
                                    lineNumber: 331,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute bottom-0.5 right-0.5 text-[10px] px-1.5 rounded", isActive ? "bg-primary text-primary-foreground" : "bg-black/70 text-white"),
                                    children: [
                                        "Ep ",
                                        ep.number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/re/eplist.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-0.5 left-0.5 bg-primary text-primary-foreground text-[10px] px-1.5 rounded",
                                    children: "Playing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/re/eplist.tsx",
                                    lineNumber: 352,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, ep.number, true, {
                            fileName: "[project]/src/components/re/eplist.tsx",
                            lineNumber: 318,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/re/eplist.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/re/eplist.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handlePageChange(currentPage - 1),
                        disabled: currentPage === 1,
                        className: "px-2 py-1 border rounded disabled:opacity-50",
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "opacity-70",
                        children: [
                            currentPage,
                            " / ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handlePageChange(currentPage + 1),
                        disabled: currentPage === totalPages,
                        className: "px-2 py-1 border rounded disabled:opacity-50",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/re/eplist.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/re/eplist.tsx",
                lineNumber: 364,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/re/eplist.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
_s1(CompactEpisodes, "cgI7O+8/nekMX4NnKI6OSe2CfN4=");
_c1 = CompactEpisodes;
var _c, _c1;
__turbopack_context__.k.register(_c, "Episodes");
__turbopack_context__.k.register(_c1, "CompactEpisodes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/anime/[id]/watch/[ep]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WatchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/re/player.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$eplist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/re/eplist.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WatchPage(req) {
    _s();
    const { id, ep } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [episodes, setEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSource, setCurrentSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const url = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
    // console.log(url);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchPage.useEffect": ()=>{
            fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_META_API}/info/${id}`).then({
                "WatchPage.useEffect": (r)=>r.json()
            }["WatchPage.useEffect"]).then({
                "WatchPage.useEffect": (d)=>setImage(d)
            }["WatchPage.useEffect"]);
            fetch(`https://consumet-woad-beta.vercel.app/anime/animepahe/info/${ep.split("luffy-of")[0]}`).then({
                "WatchPage.useEffect": (r)=>r.json()
            }["WatchPage.useEffect"]).then({
                "WatchPage.useEffect": (d)=>setEpisodes(d.episodes)
            }["WatchPage.useEffect"]);
            fetch(`${`${url}` || `http://localhost:3000`}/api/watch/${id}/${encodeURIComponent(ep.split("luffy-of").join("%2F"))}`).then({
                "WatchPage.useEffect": (r)=>r.json()
            }["WatchPage.useEffect"]).then({
                "WatchPage.useEffect": (j)=>{
                    setData(j.data);
                    // setTitle(j.title);
                    if (j.data.sources?.length) {
                        setCurrentSource(j.data.sources[0].url);
                    }
                }
            }["WatchPage.useEffect"]);
        }
    }["WatchPage.useEffect"], [
        id,
        ep,
        episodes
    ]);
    // useEffect(() => {
    // }, []);
    // console.log(episodes);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading episode…"
    }, void 0, false, {
        fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
        lineNumber: 45,
        columnNumber: 21
    }, this);
    // --- Split sources into sub/dub ---
    const subSources = data.sources.filter((s)=>!s.isDub);
    const dubSources = data.sources.filter((s)=>s.isDub);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            //   maxWidth: "90000x",
            margin: "0 auto"
        },
        className: " flex flex-col xl:flex-row gap-6 p-6 max-w-[16000px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full xl:w-[70%] shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: data,
                    id: id,
                    image: image
                }, void 0, false, {
                    fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full min-w-[280px] p-2 bg-sidebar rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold mb-2 opacity-80",
                        children: "Episodes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$re$2f$eplist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompactEpisodes"], {
                        animeId: id,
                        per_page: 100
                    }, void 0, false, {
                        fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/anime/[id]/watch/[ep]/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(WatchPage, "mtn6C0QVxpn3hxJUVmk/PvUpviY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = WatchPage;
var _c;
__turbopack_context__.k.register(_c, "WatchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a89f0b5c._.js.map