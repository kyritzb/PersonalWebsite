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

/***/ "./components/Option.js":
/*!******************************!*\
  !*** ./components/Option.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar LoadingState = function(param) {\n    var text = param.text, callback = param.callback;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovering = ref[0], setIsHovering = ref[1];\n    var handleMouseEnter = function() {\n        setIsHovering(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHovering(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            color: \"rgba(255, 255, 255, 1)\",\n            fontSize: \"26px\",\n            fontStyle: \"Regular\",\n            fontFamily: \"Pixeloid Mono\",\n            fontWeight: 400,\n            textDecoration: isHovering ? \"underline\" : \"none\"\n        },\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/playground_assets/mask_group.png\"\n                }, void 0, false, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(LoadingState, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = LoadingState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingState);\nvar _c;\n$RefreshReg$(_c, \"LoadingState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFBd0M7QUFFeEMsSUFBTUUsWUFBWSxHQUFHLGdCQUF3QjtRQUFyQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7SUFDcEMsSUFBb0NILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNJLFVBQVUsR0FBbUJKLEdBQWUsR0FBbEMsRUFBRUssYUFBYSxHQUFJTCxHQUFlLEdBQW5CO0lBRWhDLElBQU1NLGdCQUFnQixHQUFHLFdBQU07UUFDN0JELGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBTUUsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkYsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQkFDRSw4REFBQ0csS0FBRztRQUNGQyxLQUFLLEVBQUU7WUFDTEMsT0FBTyxFQUFFLE1BQU07WUFDZkMsYUFBYSxFQUFFLEtBQUs7WUFDcEJDLEtBQUssRUFBRSx3QkFBd0I7WUFDL0JDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxTQUFTLEVBQUUsU0FBUztZQUNwQkMsVUFBVSxFQUFFLGVBQWU7WUFDM0JDLFVBQVUsRUFBRSxHQUFHO1lBQ2ZDLGNBQWMsRUFBRWIsVUFBVSxHQUFHLFdBQVcsR0FBRyxNQUFNO1NBQ2xEO1FBQ0RjLFlBQVksRUFBRVosZ0JBQWdCO1FBQzlCYSxZQUFZLEVBQUVaLGdCQUFnQjs7MEJBRTlCLDhEQUFDQyxLQUFHOzBCQUNGLDRFQUFDWSxLQUFHO29CQUFDQyxHQUFHLEVBQUMsbUNBQW1DOzs7Ozt5QkFBRzs7Ozs7cUJBQzNDOzBCQUNOLDhEQUFDYixLQUFHOzBCQUFFTixJQUFJOzs7OztxQkFBTzs7Ozs7O2FBQ2IsQ0FDTjtBQUNKLENBQUM7R0FoQ0tELFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWtDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09wdGlvbi5qcz81ODRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMb2FkaW5nU3RhdGUgPSAoeyB0ZXh0LCBjYWxsYmFjayB9KSA9PiB7XG4gIGNvbnN0IFtpc0hvdmVyaW5nLCBzZXRJc0hvdmVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldElzSG92ZXJpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRJc0hvdmVyaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjI2cHhcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgZm9udEZhbWlseTogXCJQaXhlbG9pZCBNb25vXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgdGV4dERlY29yYXRpb246IGlzSG92ZXJpbmcgPyBcInVuZGVybGluZVwiIDogXCJub25lXCIsXG4gICAgICB9fVxuICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlncm91bmRfYXNzZXRzL21hc2tfZ3JvdXAucG5nXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj57dGV4dH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTdGF0ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9hZGluZ1N0YXRlIiwidGV4dCIsImNhbGxiYWNrIiwiaXNIb3ZlcmluZyIsInNldElzSG92ZXJpbmciLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Option.js\n"));

/***/ })

});