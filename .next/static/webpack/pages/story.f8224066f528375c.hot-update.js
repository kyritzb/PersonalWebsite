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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ChatBubble = function(param) {\n    var messages = param.messages, onDone = param.onDone;\n    var enterIsClicked = function enterIsClicked() {\n        // your logic here\n        if (done) {\n            setText(\"\");\n            setIndex(0);\n            console.log(\"messageIndex\", messageIndex);\n            var newMessageIndex = messageIndex + 1;\n            console.log(\"newMessageIndex\", newMessageIndex);\n            setFullText(messages[newMessageIndex]);\n            setMessageIndex(newMessageIndex);\n            setDone(false);\n        } else {\n            setDone(true);\n            setText(messages[messageIndex]);\n            var newMessageIndex1 = messageIndex++;\n            setIndex(newMessageIndex1);\n            setFullText(messages[newMessageIndex1]);\n            console.log(\"stopped..\");\n        }\n    };\n    var timeout = function timeout(delay) {\n        return new Promise(function(res) {\n            return setTimeout(res, delay);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), messageIndex = ref3[0], setMessageIndex = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), done = ref4[0], setDone = ref4[1];\n    (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent)(\"Enter\", enterIsClicked);\n    function run() {\n        return _run.apply(this, arguments);\n    }\n    function _run() {\n        _run = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var doneWithWord, newIndex;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(messages, messageIndex, fullText, text);\n                        if (!!done) return [\n                            3,\n                            3\n                        ];\n                        if (messages.length > 0 && messageIndex == 0) {\n                            setFullText(messages[0]);\n                        }\n                        if (!(index < fullText.length)) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            timeout(100)\n                        ];\n                    case 1:\n                        _state.sent(); //for 1 sec delay\n                        setText(text + fullText[index]);\n                        setIndex(index + 1);\n                        doneWithWord = index + 1 == fullText.length;\n                        if (doneWithWord && messages.length > messageIndex) {\n                            newIndex = messageIndex++;\n                            setFullText(messages[newIndex]);\n                            setDone(true);\n                        }\n                        _state.label = 2;\n                    case 2:\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        setText(messages[messageIndex]);\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _run.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        run();\n    }, [\n        index,\n        messageIndex,\n        fullText.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"300px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    width: \"auto\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        text,\n                        \" \",\n                        done ? \"[Enter]\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"j8/MZCzcGmypOqje2TE2rAijiPM=\", false, function() {\n    return [\n        react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent\n    ];\n});\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQkMsR0FBRyxFQUFFLHFCQUFxQjtvQkFDMUJDLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOzs7OztxQkFDRDs7Ozs7O2FBQ0UsQ0FDTjtBQUNKLENBQUM7R0F6S0twQyxVQUFVOztRQU9kRCx1REFBZ0I7OztBQVBaQyxLQUFBQSxVQUFVO0FBMktoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdEJ1YmJsZS5qcz8xZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VLZXlQcmVzc0V2ZW50IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBDaGF0QnViYmxlID0gKHsgbWVzc2FnZXMsIG9uRG9uZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZnVsbFRleHQsIHNldEZ1bGxUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVzc2FnZUluZGV4LCBzZXRNZXNzYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkb25lLCBzZXREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VLZXlQcmVzc0V2ZW50KFwiRW50ZXJcIiwgZW50ZXJJc0NsaWNrZWQpO1xuXG4gIGZ1bmN0aW9uIGVudGVySXNDbGlja2VkKCkge1xuICAgIC8vIHlvdXIgbG9naWMgaGVyZVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICBzZXRJbmRleCgwKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZUluZGV4XCIsIG1lc3NhZ2VJbmRleCk7XG4gICAgICBsZXQgbmV3TWVzc2FnZUluZGV4ID0gbWVzc2FnZUluZGV4ICsgMTtcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3TWVzc2FnZUluZGV4XCIsIG5ld01lc3NhZ2VJbmRleCk7XG4gICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1tuZXdNZXNzYWdlSW5kZXhdKTtcbiAgICAgIHNldE1lc3NhZ2VJbmRleChuZXdNZXNzYWdlSW5kZXgpO1xuICAgICAgc2V0RG9uZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICBzZXRUZXh0KG1lc3NhZ2VzW21lc3NhZ2VJbmRleF0pO1xuICAgICAgbGV0IG5ld01lc3NhZ2VJbmRleCA9IG1lc3NhZ2VJbmRleCsrO1xuICAgICAgc2V0SW5kZXgobmV3TWVzc2FnZUluZGV4KTtcbiAgICAgIHNldEZ1bGxUZXh0KG1lc3NhZ2VzW25ld01lc3NhZ2VJbmRleF0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInN0b3BwZWQuLlwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lb3V0KGRlbGF5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCBkZWxheSkpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBtZXNzYWdlSW5kZXgsIGZ1bGxUZXh0LCB0ZXh0KTtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VJbmRleCA9PSAwKSB7XG4gICAgICAgIHNldEZ1bGxUZXh0KG1lc3NhZ2VzWzBdKTtcbiAgICAgIH1cbiAgICAgIC8vc3RhcnQgY291bnRlclxuICAgICAgaWYgKGluZGV4IDwgZnVsbFRleHQubGVuZ3RoKSB7XG4gICAgICAgIGF3YWl0IHRpbWVvdXQoMTAwKTsgLy9mb3IgMSBzZWMgZGVsYXlcblxuICAgICAgICBzZXRUZXh0KHRleHQgKyBmdWxsVGV4dFtpbmRleF0pO1xuICAgICAgICBzZXRJbmRleChpbmRleCArIDEpO1xuXG4gICAgICAgIGxldCBkb25lV2l0aFdvcmQgPSBpbmRleCArIDEgPT0gZnVsbFRleHQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChkb25lV2l0aFdvcmQgJiYgbWVzc2FnZXMubGVuZ3RoID4gbWVzc2FnZUluZGV4KSB7XG4gICAgICAgICAgbGV0IG5ld0luZGV4ID0gbWVzc2FnZUluZGV4Kys7XG4gICAgICAgICAgc2V0RnVsbFRleHQobWVzc2FnZXNbbmV3SW5kZXhdKTtcbiAgICAgICAgICBzZXREb25lKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRleHQobWVzc2FnZXNbbWVzc2FnZUluZGV4XSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBydW4oKTtcbiAgfSwgW2luZGV4LCBtZXNzYWdlSW5kZXgsIGZ1bGxUZXh0Lmxlbmd0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEyNi43Mjk0Mzg3ODE3MzgyOHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgZmxleFNocmluazogXCIwXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogXCIzNTJweFwiLFxuICAgICAgICBsZWZ0OiBcIjMwNHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICB3aWR0aDogXCIzNThweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMjYuNzI5NDM4NzgxNzM4MjhweFwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgICAgICAgIGZsZXhTaHJpbms6IDEsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImF1dG9cIixcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHggMHB4IDBweCAwcHhcIixcbiAgICAgICAgICBib3JkZXJXaWR0aDogXCIwXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBib3JkZXJTdHlsZTogXCJub25lXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9yZWN0YW5nbGUyMTk5OC1laTY4LTIwMGgucG5nXCJcbiAgICAgICAgICBhbHQ9XCJSZWN0YW5nbGUyMTk5OFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjMyM3B4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiOTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMTkuMjAxNDE2MDE1NjI1cHhcIixcbiAgICAgICAgICAgIGxlZnQ6IFwiMTcuMDY3ODcxMDkzNzVweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvcGxheWdyb3VuZF9hc3NldHMvaW1hZ2U2MDA2MDAyNjM5cG9rZW1vbmRpYWxvZ2JveHBva2Vtb250ZXh0Ym94cG5ndHIxOTk4LWN4OGwtMjAwaC5wbmdcIlxuICAgICAgICAgIGFsdD1cIklNQUdFNjAwNjAwMjYzOXBva2Vtb25kaWFsb2dib3hwb2tlbW9udGV4dGJveHBuZ3RyMTk5OFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTI3cHhcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcblxuICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICAgICAgbGluZUhlaWdodDogXCIxNjIuMDI5NDA5NDA4NTY5MzQlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImF1dG9cIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMzkuMjU2MjU2MTAzNTE1NjI1LFxuICAgICAgICAgIGxlZnQ6IDM3LjEyMzA0Njg3NSxcbiAgICAgICAgICBmb250RmFtaWx5OiBcIlBpeGVsb2lkIE1vbm9cIixcbiAgICAgICAgICBmb250U2l6ZTogMTcsXG4gICAgICAgICAgZm9udFN0cmV0Y2g6IFwibm9ybWFsXCIsXG4gICAgICAgICAgZm9udFN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7dGV4dH0ge2RvbmUgPyBcIltFbnRlcl1cIiA6IFwiXCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL2ltYWdlNzE5OTgtdGJudC0yMDB3LnBuZ1wiXG4gICAgICAgIGFsdD1cImltYWdlNzE5OThcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjIzcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMjZweFwiLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNzAuNDA1MjQyOTE5OTIxODhweFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMzAxLjI0OTAyMzQzNzVweFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRCdWJibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUtleVByZXNzRXZlbnQiLCJDaGF0QnViYmxlIiwibWVzc2FnZXMiLCJvbkRvbmUiLCJlbnRlcklzQ2xpY2tlZCIsImRvbmUiLCJzZXRUZXh0Iiwic2V0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZUluZGV4IiwibmV3TWVzc2FnZUluZGV4Iiwic2V0RnVsbFRleHQiLCJzZXRNZXNzYWdlSW5kZXgiLCJzZXREb25lIiwidGltZW91dCIsImRlbGF5IiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJ0ZXh0IiwiZnVsbFRleHQiLCJpbmRleCIsInJ1biIsImRvbmVXaXRoV29yZCIsIm5ld0luZGV4IiwibGVuZ3RoIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsImJvcmRlckNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwiYWxpZ25TZWxmIiwiYm94U2l6aW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJjb2xvciIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250U3RyZXRjaCIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});