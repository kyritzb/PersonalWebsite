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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ChatBubble = function(param) {\n    var messages = param.messages, onDone = param.onDone;\n    var enterIsClicked = function enterIsClicked() {\n        // your logic here\n        console.log(\"done:\", done);\n        if (done) {\n            setText(\"\");\n            setIndex(0);\n            setFullText(messages[messageIndex++]);\n            setMessageIndex(messageIndex++);\n            console.log(\"done\");\n        } else {\n            console.log(\"not done\");\n            setText(messages[messageIndex]);\n            setDone(true);\n            setIndex(messageIndex++);\n            setFullText(messages[messageIndex++]);\n        }\n        console.log(\"pressed Enter ✅\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), fullText = ref1[0], setFullText = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref2[0], setIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), messageIndex = ref3[0], setMessageIndex = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), done = ref4[0], setDone = ref4[1];\n    (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent)(\"Enter\", enterIsClicked);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(messages, messageIndex);\n        if (messages.length > 0 && messageIndex == 0) {\n            setFullText(messages[0]);\n        }\n        //start counter\n        if (index < fullText.length) {\n            setTimeout(function() {\n                setText(text + fullText[index]);\n                setIndex(index + 1);\n                var doneWithWord = index + 1 == fullText.length;\n                if (doneWithWord && messages.length > messageIndex) {\n                    var newIndex = messageIndex++;\n                    setFullText(messages[newIndex]);\n                    setDone(true);\n                }\n            }, 150);\n        }\n    }, [\n        index,\n        messageIndex,\n        fullText.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"300px\",\n            height: \"126.72943878173828px\",\n            display: \"flex\",\n            alignItems: \"flex-start\",\n            flexShrink: \"0\",\n            borderColor: \"transparent\",\n            position: \"absolute\",\n            top: \"352px\",\n            left: \"304px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"transparent\",\n                    width: \"358px\",\n                    height: \"126.72943878173828px\",\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    padding: \"0\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    flexShrink: 1,\n                    alignSelf: \"auto\",\n                    boxSizing: \"border-box\",\n                    borderRadius: \"0px 0px 0px 0px\",\n                    borderWidth: \"0\",\n                    borderColor: \"transparent\",\n                    borderStyle: \"none\",\n                    position: \"absolute\",\n                    top: \"0px\",\n                    left: \"0px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/rectangle21998-ei68-200h.png\",\n                        alt: \"Rectangle21998\",\n                        style: {\n                            width: \"323px\",\n                            height: \"96px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"19.201416015625px\",\n                            left: \"17.06787109375px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png\",\n                        alt: \"IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998\",\n                        style: {\n                            width: \"358px\",\n                            height: \"127px\",\n                            borderColor: \"transparent\",\n                            position: \"absolute\",\n                            top: \"0px\",\n                            left: \"0px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                style: {\n                    color: \"rgba(0, 0, 0, 1)\",\n                    height: \"auto\",\n                    textAlign: \"left\",\n                    width: \"auto\",\n                    lineHeight: \"162.02940940856934%\",\n                    marginRight: \"0\",\n                    marginBottom: \"0\",\n                    alignSelf: \"auto\",\n                    position: \"absolute\",\n                    top: 39.256256103515625,\n                    left: 37.123046875,\n                    fontFamily: \"Pixeloid Mono\",\n                    fontSize: 17,\n                    fontStretch: \"normal\",\n                    fontStyle: \"Regular\",\n                    fontWeight: 400,\n                    textDecoration: \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        text,\n                        \" \",\n                        done ? \"[Enter]\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/playground_assets/image71998-tbnt-200w.png\",\n                alt: \"image71998\",\n                style: {\n                    width: \"23px\",\n                    height: \"26px\",\n                    borderColor: \"transparent\",\n                    position: \"absolute\",\n                    top: \"70.40524291992188px\",\n                    left: \"301.2490234375px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/ChatBubble.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(ChatBubble, \"j8/MZCzcGmypOqje2TE2rAijiPM=\", false, function() {\n    return [\n        react_use__WEBPACK_IMPORTED_MODULE_2__.useKeyPressEvent\n    ];\n});\n_c = ChatBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBubble);\nvar _c;\n$RefreshReg$(_c, \"ChatBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUNsQm1CLFVBQVUsRUFBRSxlQUFlO29CQUMzQkMsUUFBUSxFQUFFLEVBQUU7b0JBQ1pDLFdBQVcsRUFBRSxRQUFRO29CQUNyQkMsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCQyxVQUFVLEVBQUUsR0FBRztvQkFDZkMsY0FBYyxFQUFFLE1BQU07aUJBQ3ZCOzBCQUVELDRFQUFDVCxNQUFJOzt3QkFDRmhDLElBQUk7d0JBQUMsR0FBQzt3QkFBQ1AsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFOzs7Ozs7eUJBQ3hCOzs7OztxQkFDRjswQkFDUCw4REFBQ29DLEtBQUc7Z0JBQ0ZDLEdBQUcsRUFBQyw2Q0FBNkM7Z0JBQ2pEQyxHQUFHLEVBQUMsWUFBWTtnQkFDaEJ2QixLQUFLLEVBQUU7b0JBQ0xDLEtBQUssRUFBRSxNQUFNO29CQUNiQyxNQUFNLEVBQUUsTUFBTTtvQkFDZEksV0FBVyxFQUFFLGFBQWE7b0JBQzFCQyxRQUFRLEVBQUUsVUFBVTtvQkFDcEJDLEdBQUcsRUFBRSxxQkFBcUI7b0JBQzFCQyxJQUFJLEVBQUUsa0JBQWtCO2lCQUN6Qjs7Ozs7cUJBQ0Q7Ozs7OzthQUNFLENBQ047QUFDSixDQUFDO0dBM0pLOUIsVUFBVTs7UUFPZEQsdURBQWdCOzs7QUFQWkMsS0FBQUEsVUFBVTtBQTZKaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRCdWJibGUuanM/MWQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlS2V5UHJlc3NFdmVudCB9IGZyb20gXCJyZWFjdC11c2VcIjtcblxuY29uc3QgQ2hhdEJ1YmJsZSA9ICh7IG1lc3NhZ2VzLCBvbkRvbmUgfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Z1bGxUZXh0LCBzZXRGdWxsVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21lc3NhZ2VJbmRleCwgc2V0TWVzc2FnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlS2V5UHJlc3NFdmVudChcIkVudGVyXCIsIGVudGVySXNDbGlja2VkKTtcblxuICBmdW5jdGlvbiBlbnRlcklzQ2xpY2tlZCgpIHtcbiAgICAvLyB5b3VyIGxvZ2ljIGhlcmVcbiAgICBjb25zb2xlLmxvZyhcImRvbmU6XCIsIGRvbmUpO1xuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICBzZXRJbmRleCgwKTtcbiAgICAgIHNldEZ1bGxUZXh0KG1lc3NhZ2VzW21lc3NhZ2VJbmRleCsrXSk7XG4gICAgICBzZXRNZXNzYWdlSW5kZXgobWVzc2FnZUluZGV4KyspO1xuICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBkb25lXCIpO1xuICAgICAgc2V0VGV4dChtZXNzYWdlc1ttZXNzYWdlSW5kZXhdKTtcbiAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICBzZXRJbmRleChtZXNzYWdlSW5kZXgrKyk7XG4gICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1ttZXNzYWdlSW5kZXgrK10pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwicHJlc3NlZCBFbnRlciDinIVcIik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBtZXNzYWdlSW5kZXgpO1xuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VJbmRleCA9PSAwKSB7XG4gICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1swXSk7XG4gICAgfVxuICAgIC8vc3RhcnQgY291bnRlclxuICAgIGlmIChpbmRleCA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRleHQodGV4dCArIGZ1bGxUZXh0W2luZGV4XSk7XG4gICAgICAgIHNldEluZGV4KGluZGV4ICsgMSk7XG5cbiAgICAgICAgbGV0IGRvbmVXaXRoV29yZCA9IGluZGV4ICsgMSA9PSBmdWxsVGV4dC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGRvbmVXaXRoV29yZCAmJiBtZXNzYWdlcy5sZW5ndGggPiBtZXNzYWdlSW5kZXgpIHtcbiAgICAgICAgICBsZXQgbmV3SW5kZXggPSBtZXNzYWdlSW5kZXgrKztcbiAgICAgICAgICBzZXRGdWxsVGV4dChtZXNzYWdlc1tuZXdJbmRleF0pO1xuICAgICAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9LCBbaW5kZXgsIG1lc3NhZ2VJbmRleCwgZnVsbFRleHQubGVuZ3RoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTI2LjcyOTQzODc4MTczODI4cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiBcIjM1MnB4XCIsXG4gICAgICAgIGxlZnQ6IFwiMzA0cHhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEyNi43Mjk0Mzg3ODE3MzgyOHB4XCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgZmxleFNocmluazogMSxcbiAgICAgICAgICBhbGlnblNlbGY6IFwiYXV0b1wiLFxuICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweCAwcHggMHB4IDBweFwiLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjBcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIGJvcmRlclN0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCIwcHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL3JlY3RhbmdsZTIxOTk4LWVpNjgtMjAwaC5wbmdcIlxuICAgICAgICAgIGFsdD1cIlJlY3RhbmdsZTIxOTk4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzIzcHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI5NnB4XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCIxOS4yMDE0MTYwMTU2MjVweFwiLFxuICAgICAgICAgICAgbGVmdDogXCIxNy4wNjc4NzEwOTM3NXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9wbGF5Z3JvdW5kX2Fzc2V0cy9pbWFnZTYwMDYwMDI2Mzlwb2tlbW9uZGlhbG9nYm94cG9rZW1vbnRleHRib3hwbmd0cjE5OTgtY3g4bC0yMDBoLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiSU1BR0U2MDA2MDAyNjM5cG9rZW1vbmRpYWxvZ2JveHBva2Vtb250ZXh0Ym94cG5ndHIxOTk4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMjdweFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiMHB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuXG4gICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE2Mi4wMjk0MDk0MDg1NjkzNCVcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIwXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbiAgICAgICAgICBhbGlnblNlbGY6IFwiYXV0b1wiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiAzOS4yNTYyNTYxMDM1MTU2MjUsXG4gICAgICAgICAgbGVmdDogMzcuMTIzMDQ2ODc1LFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUGl4ZWxvaWQgTW9ub1wiLFxuICAgICAgICAgIGZvbnRTaXplOiAxNyxcbiAgICAgICAgICBmb250U3RyZXRjaDogXCJub3JtYWxcIixcbiAgICAgICAgICBmb250U3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt0ZXh0fSB7ZG9uZSA/IFwiW0VudGVyXVwiIDogXCJcIn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvcGxheWdyb3VuZF9hc3NldHMvaW1hZ2U3MTk5OC10Ym50LTIwMHcucG5nXCJcbiAgICAgICAgYWx0PVwiaW1hZ2U3MTk5OFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMjNweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIyNnB4XCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI3MC40MDUyNDI5MTk5MjE4OHB4XCIsXG4gICAgICAgICAgbGVmdDogXCIzMDEuMjQ5MDIzNDM3NXB4XCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJ1YmJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlS2V5UHJlc3NFdmVudCIsIkNoYXRCdWJibGUiLCJtZXNzYWdlcyIsIm9uRG9uZSIsImVudGVySXNDbGlja2VkIiwiY29uc29sZSIsImxvZyIsImRvbmUiLCJzZXRUZXh0Iiwic2V0SW5kZXgiLCJzZXRGdWxsVGV4dCIsIm1lc3NhZ2VJbmRleCIsInNldE1lc3NhZ2VJbmRleCIsInNldERvbmUiLCJ0ZXh0IiwiZnVsbFRleHQiLCJpbmRleCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJkb25lV2l0aFdvcmQiLCJuZXdJbmRleCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImFsaWduU2VsZiIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFN0cmV0Y2giLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChatBubble.js\n"));

/***/ })

});