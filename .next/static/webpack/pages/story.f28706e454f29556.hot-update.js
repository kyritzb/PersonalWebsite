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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ChatBubble = function(param) {\n    var messages = param.messages, onDone = param.onDone;\n    var enterIsClicked = function enterIsClicked() {\n        // your logic here\n        if (done) {\n            setText(\"\");\n            setIndex(0);\n            console.log(\"messageIndex\", messageIndex);\n            var newMessageIndex = messageIndex + 1;\n            console.log(\"newMessageIndex\", newMessageIndex);\n            setFullText(messages[newMessageIndex]);\n            setMessageIndex(newMessageIndex);\n            setDone(false);\n        } else {\n            /*\n      setText(messages[messageIndex]);\n      let newMessageIndex = messageIndex++;\n      setIndex(newMessageIndex);\n      setFullText(messages[newMessageIndex]);\n\t  */ setDone(true);\n            console.log(\"stopped..\");\n        }\n    };\n    var timeout = function timeout(delay) {\n        return new Promise(function(res) {\n            return setTimeout(res, delay);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), messageIndex = ref3[0], setMessageIndex = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), done = ref4[0], setDone = ref4[1];\n    (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent)(\"Enter\", enterIsClicked);\n    function run() {\n        return _run.apply(this, arguments);\n    }\n    function _run() {\n        _run = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var doneWithWord, newIndex;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"run...\");\n                        console.log(messages, messageIndex, fullText, text);\n                        if (!!done) return [\n                            3,\n                            2\n                        ];\n                        if (messages.length > 0 && messageIndex == 0) {\n                            setFullText(messages[0]);\n                        }\n                        if (!(index < fullText.length)) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            timeout(100)\n                        ];\n                    case 1:\n                        _state.sent(); //for 1 sec delay\n                        setText(text + fullText[index]);\n                        setIndex(index + 1);\n                        doneWithWord = index + 1 == fullText.length;\n                        if (doneWithWord && messages.length > messageIndex) {\n                            newIndex = messageIndex++;\n                            setFullText(messages[newIndex]);\n                            setDone(true);\n                        }\n                        _state.label = 2;\n                    case 2:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _run.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        run();\n    }, [\n        index,\n        messageIndex,\n        fullText.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"300px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    width: \"auto\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        text,\n                        \" \",\n                        done ? \"[Enter]\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"j8/MZCzcGmypOqje2TE2rAijiPM=\", false, function() {\n    return [\n        react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent\n    ];\n});\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdEJ1YmJsZS5qcz8xZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VLZXlQcmVzc0V2ZW50IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBDaGF0QnViYmxlID0gKHsgbWVzc2FnZXMsIG9uRG9uZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZnVsbFRleHQsIHNldEZ1bGxUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVzc2FnZUluZGV4LCBzZXRNZXNzYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkb25lLCBzZXREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VLZXlQcmVzc0V2ZW50KFwiRW50ZXJcIiwgZW50ZXJJc0NsaWNrZWQpO1xuXG4gIGZ1bmN0aW9uIGVudGVySXNDbGlja2VkKCkge1xuICAgIC8vIHlvdXIgbG9naWMgaGVyZVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICBzZXRJbmRleCgwKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZUluZGV4XCIsIG1lc3NhZ2VJbmRleCk7XG4gICAgICBsZXQgbmV3TWVzc2FnZUluZGV4ID0gbWVzc2FnZUluZGV4ICsgMTtcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3TWVzc2FnZUluZGV4XCIsIG5ld01lc3NhZ2VJbmRleCk7XG4gICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1tuZXdNZXNzYWdlSW5kZXhdKTtcbiAgICAgIHNldE1lc3NhZ2VJbmRleChuZXdNZXNzYWdlSW5kZXgpO1xuICAgICAgc2V0RG9uZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qXG4gICAgICBzZXRUZXh0KG1lc3NhZ2VzW21lc3NhZ2VJbmRleF0pO1xuICAgICAgbGV0IG5ld01lc3NhZ2VJbmRleCA9IG1lc3NhZ2VJbmRleCsrO1xuICAgICAgc2V0SW5kZXgobmV3TWVzc2FnZUluZGV4KTtcbiAgICAgIHNldEZ1bGxUZXh0KG1lc3NhZ2VzW25ld01lc3NhZ2VJbmRleF0pO1xuXHQgICovXG4gICAgICBzZXREb25lKHRydWUpO1xuICAgICAgY29uc29sZS5sb2coXCJzdG9wcGVkLi5cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGltZW91dChkZWxheSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgZGVsYXkpKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICBjb25zb2xlLmxvZyhcInJ1bi4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlcywgbWVzc2FnZUluZGV4LCBmdWxsVGV4dCwgdGV4dCk7XG4gICAgaWYgKCFkb25lKSB7XG4gICAgICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMCAmJiBtZXNzYWdlSW5kZXggPT0gMCkge1xuICAgICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1swXSk7XG4gICAgICB9XG4gICAgICAvL3N0YXJ0IGNvdW50ZXJcbiAgICAgIGlmIChpbmRleCA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgICBhd2FpdCB0aW1lb3V0KDEwMCk7IC8vZm9yIDEgc2VjIGRlbGF5XG5cbiAgICAgICAgc2V0VGV4dCh0ZXh0ICsgZnVsbFRleHRbaW5kZXhdKTtcbiAgICAgICAgc2V0SW5kZXgoaW5kZXggKyAxKTtcblxuICAgICAgICBsZXQgZG9uZVdpdGhXb3JkID0gaW5kZXggKyAxID09IGZ1bGxUZXh0Lmxlbmd0aDtcblxuICAgICAgICBpZiAoZG9uZVdpdGhXb3JkICYmIG1lc3NhZ2VzLmxlbmd0aCA+IG1lc3NhZ2VJbmRleCkge1xuICAgICAgICAgIGxldCBuZXdJbmRleCA9IG1lc3NhZ2VJbmRleCsrO1xuICAgICAgICAgIHNldEZ1bGxUZXh0KG1lc3NhZ2VzW25ld0luZGV4XSk7XG4gICAgICAgICAgc2V0RG9uZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcnVuKCk7XG4gIH0sIFtpbmRleCwgbWVzc2FnZUluZGV4LCBmdWxsVGV4dC5sZW5ndGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMjYuNzI5NDM4NzgxNzM4MjhweFwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgIGZsZXhTaHJpbms6IFwiMFwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB0b3A6IFwiMzUycHhcIixcbiAgICAgICAgbGVmdDogXCIzMDRweFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTI2LjcyOTQzODc4MTczODI4cHhcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICAgICAgICBmbGV4U2hyaW5rOiAxLFxuICAgICAgICAgIGFsaWduU2VsZjogXCJhdXRvXCIsXG4gICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4IDBweCAwcHggMHB4XCIsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMFwiLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgYm9yZGVyU3R5bGU6IFwibm9uZVwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjBweFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvcGxheWdyb3VuZF9hc3NldHMvcmVjdGFuZ2xlMjE5OTgtZWk2OC0yMDBoLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiUmVjdGFuZ2xlMjE5OThcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCIzMjNweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjk2cHhcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiBcIjE5LjIwMTQxNjAxNTYyNXB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjE3LjA2Nzg3MTA5Mzc1cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL2ltYWdlNjAwNjAwMjYzOXBva2Vtb25kaWFsb2dib3hwb2tlbW9udGV4dGJveHBuZ3RyMTk5OC1jeDhsLTIwMGgucG5nXCJcbiAgICAgICAgICBhbHQ9XCJJTUFHRTYwMDYwMDI2Mzlwb2tlbW9uZGlhbG9nYm94cG9rZW1vbnRleHRib3hwbmd0cjE5OThcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCIzNThweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEyN3B4XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCIwcHhcIixcbiAgICAgICAgICAgIGxlZnQ6IFwiMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG5cbiAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTYyLjAyOTQwOTQwODU2OTM0JVwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgICAgICAgIGFsaWduU2VsZjogXCJhdXRvXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDM5LjI1NjI1NjEwMzUxNTYyNSxcbiAgICAgICAgICBsZWZ0OiAzNy4xMjMwNDY4NzUsXG4gICAgICAgICAgZm9udEZhbWlseTogXCJQaXhlbG9pZCBNb25vXCIsXG4gICAgICAgICAgZm9udFNpemU6IDE3LFxuICAgICAgICAgIGZvbnRTdHJldGNoOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGZvbnRTdHlsZTogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3RleHR9IHtkb25lID8gXCJbRW50ZXJdXCIgOiBcIlwifVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9pbWFnZTcxOTk4LXRibnQtMjAwdy5wbmdcIlxuICAgICAgICBhbHQ9XCJpbWFnZTcxOTk4XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIyM3B4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjI2cHhcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjcwLjQwNTI0MjkxOTkyMTg4cHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjMwMS4yNDkwMjM0Mzc1cHhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0QnViYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VLZXlQcmVzc0V2ZW50IiwiQ2hhdEJ1YmJsZSIsIm1lc3NhZ2VzIiwib25Eb25lIiwiZW50ZXJJc0NsaWNrZWQiLCJkb25lIiwic2V0VGV4dCIsInNldEluZGV4IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VJbmRleCIsIm5ld01lc3NhZ2VJbmRleCIsInNldEZ1bGxUZXh0Iiwic2V0TWVzc2FnZUluZGV4Iiwic2V0RG9uZSIsInRpbWVvdXQiLCJkZWxheSIsIlByb21pc2UiLCJyZXMiLCJzZXRUaW1lb3V0IiwidGV4dCIsImZ1bGxUZXh0IiwiaW5kZXgiLCJydW4iLCJkb25lV2l0aFdvcmQiLCJuZXdJbmRleCIsImxlbmd0aCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImFsaWduU2VsZiIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFN0cmV0Y2giLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});