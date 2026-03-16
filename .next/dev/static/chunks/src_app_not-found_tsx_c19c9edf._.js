(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/not-found.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Slow rotating ring behind the 404
const rotate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
// Fade-in animation
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 3rem 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, ##2f2f39, #272731, #0e0e14);
  color: #e6e6e6;
  text-align: center;
  position: relative;
  overflow: hidden;
`;
_c = Wrapper;
const Number = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1`
  font-size: 9rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0;
  z-index: 2;
  animation: ${fadeIn} 0.7s ease-out forwards;
  text-shadow:
    0 0 40px rgba(255, 255, 255, 0.12),
    0 0 80px rgba(255, 255, 255, 0.05);

  @media (max-width: 600px) {
    font-size: 6rem;
  }
`;
_c1 = Number;
const Ring = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;

  /*border: 2px solid rgba(255, 255, 255, 0.06);*/
  /*top: 50%;
  left: 50%;*/
  /*transform: translate(-5%, -5%);*/
  z-index: 1;
  backdrop-filter: blur(4px);
  animation: ${rotate} 18s linear infinite;
  /*border-top: 10px solid ;*/

  @media (max-width: 600px) {
    width: 290px;
    height: 290px;
  }
`;
_c2 = Ring;
const Subtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 1.25rem;
  max-width: 500px;
  margin-top: 1rem;
  opacity: 0;
  animation: ${fadeIn} 0.9s ease-out forwards;
  animation-delay: 0.2s;
`;
_c3 = Subtitle;
const HomeButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a`
  margin-top: 2.8rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;
  text-decoration: none;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-3px);
  }
`;
_c4 = HomeButton;
function NotFound() {
    _s();
    //@ts-expect-error lol
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotFound.useEffect": ()=>{
            const prev = document.title;
            document.title = "404 | Page Not Found";
            return ({
                "NotFound.useEffect": ()=>document.title = prev
            })["NotFound.useEffect"];
        }
    }["NotFound.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ring, {
                className: "border-t-2 border-foreground"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-999",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Subtitle, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-md",
                                children: [
                                    "The page you’re looking for doesn’t exist anymore",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "font-extralight text-sm",
                                children: "or never did"
                            }, void 0, false, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            ".",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "font-black",
                                children: "or did it"
                            }, void 0, false, {
                                fileName: "[project]/src/app/not-found.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            "🤨"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/not-found.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/not-found.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Number, {
                children: "404"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeButton, {
                href: "/",
                children: "Return Home"
            }, void 0, false, {
                fileName: "[project]/src/app/not-found.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/not-found.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
} // export default NotFound;
_s(NotFound, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c5 = NotFound;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "Number");
__turbopack_context__.k.register(_c2, "Ring");
__turbopack_context__.k.register(_c3, "Subtitle");
__turbopack_context__.k.register(_c4, "HomeButton");
__turbopack_context__.k.register(_c5, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_not-found_tsx_c19c9edf._.js.map