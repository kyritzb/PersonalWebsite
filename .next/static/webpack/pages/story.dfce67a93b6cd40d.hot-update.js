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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ChatBubble = function(param) {\n    var messages = param.messages, onDone = param.onDone;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), messageIndex = ref3[0], setMessageIndex = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //select message number\n        console.log(messages);\n        if (messages.length > 0 && messageIndex == 0) {\n            console.log(\"set\");\n            setFullText(messages[0]);\n        }\n        //start counter\n        if (index < fullText.length) {\n            setTimeout(function() {\n                console.log(\"set text:\", text + fullText[index]);\n                setText(text + fullText[index]);\n                setIndex(index + 1);\n                if (messages.length > messageIndex) {\n                    var newIndex = messageIndex++;\n                    setFullText(messages[newIndex]);\n                    console.log(\"set new word\");\n                }\n            }, 250);\n        }\n    }, [\n        index,\n        messageIndex,\n        fullText.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"358px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17.06793785095215,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"YdO8nkwrtPR0B1Xb2hKR8d1Oshs=\");\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBTTtvQkFDakJDLFVBQVUsRUFBRSxxQkFBcUI7b0JBQ2pDYixXQUFXLEVBQUUsR0FBRztvQkFDaEJDLFlBQVksRUFBRSxHQUFHO29CQUNqQkMsU0FBUyxFQUFFLE1BQU07b0JBQ2pCVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEJDLEdBQUcsRUFBRSxrQkFBa0I7b0JBQ3ZCQyxJQUFJLEVBQUUsWUFBWTtvQkFDbEJtQixVQUFVLEVBQUUsZUFBZTtvQkFDM0JDLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCQyxXQUFXLEVBQUUsUUFBUTtvQkFDckJDLFNBQVMsRUFBRSxTQUFTO29CQUNwQkMsVUFBVSxFQUFFLEdBQUc7b0JBQ2ZDLGNBQWMsRUFBRSxNQUFNO2lCQUN2QjswQkFFRCw0RUFBQ1QsTUFBSTs4QkFBRXRDLElBQUk7Ozs7O3lCQUFROzs7OztxQkFDZDswQkFDUCw4REFBQ21DLEtBQUc7Z0JBQ0ZDLEdBQUcsRUFBQyw2Q0FBNkM7Z0JBQ2pEQyxHQUFHLEVBQUMsWUFBWTtnQkFDaEJ2QixLQUFLLEVBQUU7b0JBQ0xDLEtBQUssRUFBRSxNQUFNO29CQUNiQyxNQUFNLEVBQUUsTUFBTTtvQkFDZEksV0FBVyxFQUFFLGFBQWE7b0JBQzFCQyxRQUFRLEVBQUUsVUFBVTtvQkFDcEJDLEdBQUcsRUFBRSxxQkFBcUI7b0JBQzFCQyxJQUFJLEVBQUUsa0JBQWtCO2lCQUN6Qjs7Ozs7cUJBQ0Q7Ozs7OzthQUNFLENBQ047QUFDSixDQUFDO0dBL0hLMUIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBaUloQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdEJ1YmJsZS5qcz8xZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENoYXRCdWJibGUgPSAoeyBtZXNzYWdlcywgb25Eb25lIH0pID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmdWxsVGV4dCwgc2V0RnVsbFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttZXNzYWdlSW5kZXgsIHNldE1lc3NhZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vc2VsZWN0IG1lc3NhZ2UgbnVtYmVyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VJbmRleCA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNldFwiKTtcbiAgICAgIHNldEZ1bGxUZXh0KG1lc3NhZ2VzWzBdKTtcbiAgICB9XG4gICAgLy9zdGFydCBjb3VudGVyXG4gICAgaWYgKGluZGV4IDwgZnVsbFRleHQubGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgdGV4dDpcIiwgdGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICAgIHNldFRleHQodGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICAgIHNldEluZGV4KGluZGV4ICsgMSk7XG4gICAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiBtZXNzYWdlSW5kZXgpIHtcbiAgICAgICAgICBsZXQgbmV3SW5kZXggPSBtZXNzYWdlSW5kZXgrKztcbiAgICAgICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1tuZXdJbmRleF0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0IG5ldyB3b3JkXCIpO1xuICAgICAgICB9XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfSwgW2luZGV4LCBtZXNzYWdlSW5kZXgsIGZ1bGxUZXh0Lmxlbmd0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEyNi43Mjk0Mzg3ODE3MzgyOHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgZmxleFNocmluazogXCIwXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogXCIzNTJweFwiLFxuICAgICAgICBsZWZ0OiBcIjMwNHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICB3aWR0aDogXCIzNThweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMjYuNzI5NDM4NzgxNzM4MjhweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgICAgICAgIGZsZXhTaHJpbms6IDEsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImF1dG9cIixcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHggMHB4IDBweCAwcHhcIixcbiAgICAgICAgICBib3JkZXJXaWR0aDogXCIwXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBib3JkZXJTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9yZWN0YW5nbGUyMTk5OC1laTY4LTIwMGgucG5nXCJcbiAgICAgICAgICBhbHQ9XCJSZWN0YW5nbGUyMTk5OFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjMyM3B4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiOTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMTkuMjAxNDE2MDE1NjI1cHhcIixcbiAgICAgICAgICAgIGxlZnQ6IFwiMTcuMDY3ODcxMDkzNzVweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvcGxheWdyb3VuZF9hc3NldHMvaW1hZ2U2MDA2MDAyNjM5cG9rZW1vbmRpYWxvZ2JveHBva2Vtb250ZXh0Ym94cG5ndHIxOTk4LWN4OGwtMjAwaC5wbmdcIlxuICAgICAgICAgIGFsdD1cIklNQUdFNjAwNjAwMjYzOXBva2Vtb25kaWFsb2dib3hwb2tlbW9udGV4dGJveHBuZ3RyMTk5OFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTI3cHhcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgbGluZUhlaWdodDogXCIxNjIuMDI5NDA5NDA4NTY5MzQlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImF1dG9cIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMzkuMjU2MjU2MTAzNTE1NjI1LFxuICAgICAgICAgIGxlZnQ6IDM3LjEyMzA0Njg3NSxcbiAgICAgICAgICBmb250RmFtaWx5OiBcIlBpeGVsb2lkIE1vbm9cIixcbiAgICAgICAgICBmb250U2l6ZTogMTcuMDY3OTM3ODUwOTUyMTUsXG4gICAgICAgICAgZm9udFN0cmV0Y2g6IFwibm9ybWFsXCIsXG4gICAgICAgICAgZm9udFN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj57dGV4dH08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9pbWFnZTcxOTk4LXRibnQtMjAwdy5wbmdcIlxuICAgICAgICBhbHQ9XCJpbWFnZTcxOTk4XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIyM3B4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjI2cHhcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjcwLjQwNTI0MjkxOTkyMTg4cHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjMwMS4yNDkwMjM0Mzc1cHhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0QnViYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGF0QnViYmxlIiwibWVzc2FnZXMiLCJvbkRvbmUiLCJ0ZXh0Iiwic2V0VGV4dCIsImZ1bGxUZXh0Iiwic2V0RnVsbFRleHQiLCJpbmRleCIsInNldEluZGV4IiwibWVzc2FnZUluZGV4Iiwic2V0TWVzc2FnZUluZGV4IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJuZXdJbmRleCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImFsaWduU2VsZiIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFN0cmV0Y2giLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});