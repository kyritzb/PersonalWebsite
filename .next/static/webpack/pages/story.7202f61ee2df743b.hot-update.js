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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ChatBubble = function(param) {\n    var messages = param.messages, onDone = param.onDone;\n    var enterIsClicked = function enterIsClicked() {\n        // your logic here\n        console.log(\"done:\", done);\n        if (done) {\n            setText(\"\");\n            setIndex(0);\n            setFullText(messages[messageIndex++]);\n            setMessageIndex(messageIndex++);\n            console.log(\"done\");\n            setDone(false);\n        } else {\n            console.log(\"not done\");\n            setText(messages[messageIndex]);\n            setDone(true);\n            setIndex(messageIndex++);\n            setFullText(messages[messageIndex++]);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), messageIndex = ref3[0], setMessageIndex = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), done = ref4[0], setDone = ref4[1];\n    (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent)(\"Enter\", enterIsClicked);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(messages, messageIndex);\n        if (messages.length > 0 && messageIndex == 0) {\n            setFullText(messages[0]);\n        }\n        //start counter\n        if (index < fullText.length) {\n            setTimeout(function() {\n                setText(text + fullText[index]);\n                setIndex(index + 1);\n                var doneWithWord = index + 1 == fullText.length;\n                if (doneWithWord && messages.length > messageIndex) {\n                    var newIndex = messageIndex++;\n                    setFullText(messages[newIndex]);\n                    setDone(true);\n                }\n            }, 150);\n        }\n    }, [\n        index,\n        messageIndex,\n        fullText.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"300px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    width: \"auto\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        text,\n                        \" \",\n                        done ? \"[Enter]\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 140,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"j8/MZCzcGmypOqje2TE2rAijiPM=\", false, function() {\n    return [\n        react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent\n    ];\n});\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxFQUFFLGVBQWU7b0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtvQkFDWkMsV0FBVyxFQUFFLFFBQVE7b0JBQ3JCQyxTQUFTLEVBQUUsU0FBUztvQkFDcEJDLFVBQVUsRUFBRSxHQUFHO29CQUNmQyxjQUFjLEVBQUUsTUFBTTtpQkFDdkI7MEJBRUQsNEVBQUNULE1BQUk7O3dCQUNGaEMsSUFBSTt3QkFBQyxHQUFDO3dCQUFDUCxJQUFJLEdBQUcsU0FBUyxHQUFHLEVBQUU7Ozs7Ozt5QkFDeEI7Ozs7O3FCQUNGOzBCQUNQLDhEQUFDb0MsS0FBRztnQkFDRkMsR0FBRyxFQUFDLDZDQUE2QztnQkFDakRDLEdBQUcsRUFBQyxZQUFZO2dCQUNoQnZCLEtBQUssRUFBRTtvQkFDTEMsS0FBSyxFQUFFLE1BQU07b0JBQ2JDLE1BQU0sRUFBRSxNQUFNO29CQUNkSSxXQUFXLEVBQUUsYUFBYTtvQkFDMUJDLFFBQVEsRUFBRSxVQUFVO29CQUNwQkMsR0FBRyxFQUFFLHFCQUFxQjtvQkFDMUJDLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOzs7OztxQkFDRDs7Ozs7O2FBQ0UsQ0FDTjtBQUNKLENBQUM7R0ExSks5QixVQUFVOztRQU9kRCx1REFBZ0I7OztBQVBaQyxLQUFBQSxVQUFVO0FBNEpoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdEJ1YmJsZS5qcz8xZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VLZXlQcmVzc0V2ZW50IH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5jb25zdCBDaGF0QnViYmxlID0gKHsgbWVzc2FnZXMsIG9uRG9uZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZnVsbFRleHQsIHNldEZ1bGxUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVzc2FnZUluZGV4LCBzZXRNZXNzYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkb25lLCBzZXREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VLZXlQcmVzc0V2ZW50KFwiRW50ZXJcIiwgZW50ZXJJc0NsaWNrZWQpO1xuXG4gIGZ1bmN0aW9uIGVudGVySXNDbGlja2VkKCkge1xuICAgIC8vIHlvdXIgbG9naWMgaGVyZVxuICAgIGNvbnNvbGUubG9nKFwiZG9uZTpcIiwgZG9uZSk7XG5cbiAgICBpZiAoZG9uZSkge1xuICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgIHNldEluZGV4KDApO1xuICAgICAgc2V0RnVsbFRleHQobWVzc2FnZXNbbWVzc2FnZUluZGV4KytdKTtcbiAgICAgIHNldE1lc3NhZ2VJbmRleChtZXNzYWdlSW5kZXgrKyk7XG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgICBzZXREb25lKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3QgZG9uZVwiKTtcbiAgICAgIHNldFRleHQobWVzc2FnZXNbbWVzc2FnZUluZGV4XSk7XG4gICAgICBzZXREb25lKHRydWUpO1xuICAgICAgc2V0SW5kZXgobWVzc2FnZUluZGV4KyspO1xuICAgICAgc2V0RnVsbFRleHQobWVzc2FnZXNbbWVzc2FnZUluZGV4KytdKTtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBtZXNzYWdlSW5kZXgpO1xuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VJbmRleCA9PSAwKSB7XG4gICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1swXSk7XG4gICAgfVxuICAgIC8vc3RhcnQgY291bnRlclxuICAgIGlmIChpbmRleCA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRleHQodGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICAgIHNldEluZGV4KGluZGV4ICsgMSk7XG5cbiAgICAgICAgbGV0IGRvbmVXaXRoV29yZCA9IGluZGV4ICsgMSA9PSBmdWxsVGV4dC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGRvbmVXaXRoV29yZCAmJiBtZXNzYWdlcy5sZW5ndGggPiBtZXNzYWdlSW5kZXgpIHtcbiAgICAgICAgICBsZXQgbmV3SW5kZXggPSBtZXNzYWdlSW5kZXgrKztcbiAgICAgICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1tuZXdJbmRleF0pO1xuICAgICAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9LCBbaW5kZXgsIG1lc3NhZ2VJbmRleCwgZnVsbFRleHQubGVuZ3RoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTI2LjcyOTQzODc4MTczODI4cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiBcIjM1MnB4XCIsXG4gICAgICAgIGxlZnQ6IFwiMzA0cHhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEyNi43Mjk0Mzg3ODE3MzgyOHB4XCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgZmxleFNocmluazogMSxcbiAgICAgICAgICBhbGlnblNlbGY6IFwiYXV0b1wiLFxuICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweCAwcHggMHB4IDBweFwiLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjBcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIGJvcmRlclN0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCIwcHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL3JlY3RhbmdsZTIxOTk4LWVpNjgtMjAwaC5wbmdcIlxuICAgICAgICAgIGFsdD1cIlJlY3RhbmdsZTIxOTk4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzIzcHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI5NnB4XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCIxOS4yMDE0MTYwMTU2MjVweFwiLFxuICAgICAgICAgICAgbGVmdDogXCIxNy4wNjc4NzEwOTM3NXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9pbWFnZTYwMDYwMDI2Mzlwb2tlbW9uZGlhbG9nYm94cG9rZW1vbnRleHRib3hwbmd0cjE5OTgtY3g4bC0yMDBoLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiSU1BR0U2MDA2MDAyNjM5cG9rZW1vbmRpYWxvZ2JveHBva2Vtb250ZXh0Ym94cG5ndHIxOTk4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMjdweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuXG4gICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE2Mi4wMjk0MDk0MDg1NjkzNCVcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICAgICAgICBhbGlnblNlbGY6IFwiYXV0b1wiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiAzOS4yNTYyNTYxMDM1MTU2MjUsXG4gICAgICAgICAgbGVmdDogMzcuMTIzMDQ2ODc1LFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUGl4ZWxvaWQgTW9ub1wiLFxuICAgICAgICAgIGZvbnRTaXplOiAxNyxcbiAgICAgICAgICBmb250U3RyZXRjaDogXCJub3JtYWxcIixcbiAgICAgICAgICBmb250U3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt0ZXh0fSB7ZG9uZSA/IFwiW0VudGVyXVwiIDogXCJcIn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvcGxheWdyb3VuZF9hc3NldHMvaW1hZ2U3MTk5OC10Ym50LTIwMHcucG5nXCJcbiAgICAgICAgYWx0PVwiaW1hZ2U3MTk5OFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMjNweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIyNnB4XCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI3MC40MDUyNDI5MTk5MjE4OHB4XCIsXG4gICAgICAgICAgbGVmdDogXCIzMDEuMjQ5MDIzNDM3NXB4XCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJ1YmJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlS2V5UHJlc3NFdmVudCIsIkNoYXRCdWJibGUiLCJtZXNzYWdlcyIsIm9uRG9uZSIsImVudGVySXNDbGlja2VkIiwiY29uc29sZSIsImxvZyIsImRvbmUiLCJzZXRUZXh0Iiwic2V0SW5kZXgiLCJzZXRGdWxsVGV4dCIsIm1lc3NhZ2VJbmRleCIsInNldE1lc3NhZ2VJbmRleCIsInNldERvbmUiLCJ0ZXh0IiwiZnVsbFRleHQiLCJpbmRleCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJkb25lV2l0aFdvcmQiLCJuZXdJbmRleCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImFsaWduU2VsZiIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFN0cmV0Y2giLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});