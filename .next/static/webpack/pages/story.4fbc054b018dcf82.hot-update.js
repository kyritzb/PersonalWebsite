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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ChatBubble = function(messages, onDone) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(messages[0]), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //start counter\n        if (index < fullText.length) {\n            setTimeout(function() {\n                console.log(\"set text:\", text + fullText[index]);\n                setText(text + fullText[index]);\n                setIndex(index + 1);\n            }, 500);\n        }\n    }, [\n        index\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"358px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17.06793785095215,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"III3rL9LUtTmW+/C+oNent5dz5w=\");\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQkMsR0FBRyxFQUFFLHFCQUFxQjtvQkFDMUJDLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOzs7OztxQkFDRDs7Ozs7O2FBQ0UsQ0FDTjtBQUNKLENBQUM7R0FuSEt2QixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFxSGhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0QnViYmxlLmpzPzFkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ2hhdEJ1YmJsZSA9IChtZXNzYWdlcywgb25Eb25lKSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZnVsbFRleHQsIHNldEZ1bGxUZXh0XSA9IHVzZVN0YXRlKG1lc3NhZ2VzWzBdKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vc3RhcnQgY291bnRlclxuICAgIGlmIChpbmRleCA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0IHRleHQ6XCIsIHRleHQgKyBmdWxsVGV4dFtpbmRleF0pO1xuICAgICAgICBzZXRUZXh0KHRleHQgKyBmdWxsVGV4dFtpbmRleF0pO1xuICAgICAgICBzZXRJbmRleChpbmRleCArIDEpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH0sIFtpbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEyNi43Mjk0Mzg3ODE3MzgyOHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgZmxleFNocmluazogXCIwXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogXCIzNTJweFwiLFxuICAgICAgICBsZWZ0OiBcIjMwNHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICB3aWR0aDogXCIzNThweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMjYuNzI5NDM4NzgxNzM4MjhweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgICAgICAgIGZsZXhTaHJpbms6IDEsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImF1dG9cIixcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHggMHB4IDBweCAwcHhcIixcbiAgICAgICAgICBib3JkZXJXaWR0aDogXCIwXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBib3JkZXJTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9yZWN0YW5nbGUyMTk5OC1laTY4LTIwMGgucG5nXCJcbiAgICAgICAgICBhbHQ9XCJSZWN0YW5nbGUyMTk5OFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjMyM3B4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiOTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMTkuMjAxNDE2MDE1NjI1cHhcIixcbiAgICAgICAgICAgIGxlZnQ6IFwiMTcuMDY3ODcxMDkzNzVweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvcGxheWdyb3VuZF9hc3NldHMvaW1hZ2U2MDA2MDAyNjM5cG9rZW1vbmRpYWxvZ2JveHBva2Vtb250ZXh0Ym94cG5ndHIxOTk4LWN4OGwtMjAwaC5wbmdcIlxuICAgICAgICAgIGFsdD1cIklNQUdFNjAwNjAwMjYzOXBva2Vtb25kaWFsb2dib3hwb2tlbW9udGV4dGJveHBuZ3RyMTk5OFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTI3cHhcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgbGluZUhlaWdodDogXCIxNjIuMDI5NDA5NDA4NTY5MzQlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImF1dG9cIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMzkuMjU2MjU2MTAzNTE1NjI1LFxuICAgICAgICAgIGxlZnQ6IDM3LjEyMzA0Njg3NSxcbiAgICAgICAgICBmb250RmFtaWx5OiBcIlBpeGVsb2lkIE1vbm9cIixcbiAgICAgICAgICBmb250U2l6ZTogMTcuMDY3OTM3ODUwOTUyMTUsXG4gICAgICAgICAgZm9udFN0cmV0Y2g6IFwibm9ybWFsXCIsXG4gICAgICAgICAgZm9udFN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj57dGV4dH08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9pbWFnZTcxOTk4LXRibnQtMjAwdy5wbmdcIlxuICAgICAgICBhbHQ9XCJpbWFnZTcxOTk4XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIyM3B4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjI2cHhcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjcwLjQwNTI0MjkxOTkyMTg4cHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjMwMS4yNDkwMjM0Mzc1cHhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0QnViYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGF0QnViYmxlIiwibWVzc2FnZXMiLCJvbkRvbmUiLCJ0ZXh0Iiwic2V0VGV4dCIsImZ1bGxUZXh0Iiwic2V0RnVsbFRleHQiLCJpbmRleCIsInNldEluZGV4IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4U2hyaW5rIiwiYm9yZGVyQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJhbGlnblNlbGYiLCJib3hTaXppbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsImNvbG9yIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRTdHJldGNoIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});