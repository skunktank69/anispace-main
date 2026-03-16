module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/anime/home/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
/**
 * Simple in-memory cache
 * Lives as long as the server instance lives
 */ const cache = new Map();
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes
async function GET(request) {
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
            const res = await fetch(`${base}/popular?page=${popularPage}&perPage=${popularPerPage}`, {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Popular fetch failed");
            popular = await res.json();
            cache.set(popularKey, {
                data: popular,
                expiresAt: now + CACHE_TTL
            });
        }
        // ---- TRENDING ----
        const cachedTrending = cache.get(trendingKey);
        if (cachedTrending && cachedTrending.expiresAt > now) {
            trending = cachedTrending.data;
        } else {
            const res = await fetch(`${base}/trending?page=${trendingPage}&perPage=${trendingPerPage}`, {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Trending fetch failed");
            trending = await res.json();
            cache.set(trendingKey, {
                data: trending,
                expiresAt: now + CACHE_TTL
            });
        }
        // ---- RECENT ----
        const cachedRecent = cache.get(recentKey);
        if (cachedRecent && cachedRecent.expiresAt > now) {
            recent = cachedRecent.data;
        } else {
            const res = await fetch(`${base}/recent?page=${recentPage}&perPage=${recentPerPage}`, {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Recent fetch failed");
            recent = await res.json();
            cache.set(recentKey, {
                data: recent,
                expiresAt: now + CACHE_TTL
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            popular,
            trending,
            recent
        });
    } catch (error) {
        console.error("Meta API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27455890._.js.map