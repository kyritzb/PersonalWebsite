"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/story",{

/***/ "./components/ChatBubble.js":
/*!**********************************!*\
  !*** ./components/ChatBubble.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ChatBubble = function(messages, onDone) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"text\"), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //start counter\n        if (index < fullText.length) {\n            setTimeout(function() {\n                console.log(\"set text:\", text + fullText[index]);\n                setText(text + fullText[index]);\n                setIndex(index + 1);\n            }, 500);\n        }\n    }, [\n        index\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"358px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17.06793785095215,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"V4vAUQsbTAZM2JAgT/AhcrAA/4E=\");\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCO29CQUMxQkMsSUFBSSxFQUFFLGtCQUFrQjtpQkFDekI7Ozs7O3FCQUNEOzs7Ozs7YUFDRSxDQUNOO0FBQ0osQ0FBQztHQW5IS3ZCLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXFIaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRCdWJibGUuanM/MWQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDaGF0QnViYmxlID0gKG1lc3NhZ2VzLCBvbkRvbmUpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmdWxsVGV4dCwgc2V0RnVsbFRleHRdID0gdXNlU3RhdGUoXCJ0ZXh0XCIpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9zdGFydCBjb3VudGVyXG4gICAgaWYgKGluZGV4IDwgZnVsbFRleHQubGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgdGV4dDpcIiwgdGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICAgIHNldFRleHQodGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICAgIHNldEluZGV4KGluZGV4ICsgMSk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfSwgW2luZGV4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIzNThweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTI2LjcyOTQzODc4MTczODI4cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiBcIjM1MnB4XCIsXG4gICAgICAgIGxlZnQ6IFwiMzA0cHhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEyNi43Mjk0Mzg3ODE3MzgyOHB4XCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgZmxleFNocmluazogMSxcbiAgICAgICAgICBhbGlnblNlbGY6IFwiYXV0b1wiLFxuICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweCAwcHggMHB4IDBweFwiLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjBcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIGJvcmRlclN0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCIwcHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL3JlY3RhbmdsZTIxOTk4LWVpNjgtMjAwaC5wbmdcIlxuICAgICAgICAgIGFsdD1cIlJlY3RhbmdsZTIxOTk4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzIzcHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI5NnB4XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCIxOS4yMDE0MTYwMTU2MjVweFwiLFxuICAgICAgICAgICAgbGVmdDogXCIxNy4wNjc4NzEwOTM3NXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9pbWFnZTYwMDYwMDI2Mzlwb2tlbW9uZGlhbG9nYm94cG9rZW1vbnRleHRib3hwbmd0cjE5OTgtY3g4bC0yMDBoLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiSU1BR0U2MDA2MDAyNjM5cG9rZW1vbmRpYWxvZ2JveHBva2Vtb250ZXh0Ym94cG5ndHIxOTk4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMjdweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE2Mi4wMjk0MDk0MDg1NjkzNCVcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICAgICAgICBhbGlnblNlbGY6IFwiYXV0b1wiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiAzOS4yNTYyNTYxMDM1MTU2MjUsXG4gICAgICAgICAgbGVmdDogMzcuMTIzMDQ2ODc1LFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUGl4ZWxvaWQgTW9ub1wiLFxuICAgICAgICAgIGZvbnRTaXplOiAxNy4wNjc5Mzc4NTA5NTIxNSxcbiAgICAgICAgICBmb250U3RyZXRjaDogXCJub3JtYWxcIixcbiAgICAgICAgICBmb250U3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL2ltYWdlNzE5OTgtdGJudC0yMDB3LnBuZ1wiXG4gICAgICAgIGFsdD1cImltYWdlNzE5OThcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjIzcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMjZweFwiLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNzAuNDA1MjQyOTE5OTIxODhweFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMzAxLjI0OTAyMzQzNzVweFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRCdWJibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXRCdWJibGUiLCJtZXNzYWdlcyIsIm9uRG9uZSIsInRleHQiLCJzZXRUZXh0IiwiZnVsbFRleHQiLCJzZXRGdWxsVGV4dCIsImluZGV4Iiwic2V0SW5kZXgiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImFsaWduU2VsZiIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFN0cmV0Y2giLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});