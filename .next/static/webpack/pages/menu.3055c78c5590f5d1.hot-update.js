"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./components/Option.js":
/*!******************************!*\
  !*** ./components/Option.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Option = function(param) {\n    var text = param.text, callback = param.callback, black = param.black, url = param.url, page = param.page;\n    var onClicked = function onClicked() {\n        console.log(url);\n        if (url) {\n            window.location.href = url;\n        } else if (page) {\n            console.log(\"yeah\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovering = ref[0], setIsHovering = ref[1];\n    var handleMouseEnter = function() {\n        setIsHovering(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHovering(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            alignItems: \"center\",\n            color: black ? \"rgba(0, 0, 0, 1)\" : \"rgba(255, 255, 255, 1)\",\n            fontSize: \"26px\",\n            cursor: \"pointer\",\n            fontStyle: \"Regular\",\n            fontFamily: \"Pixeloid Mono\",\n            fontWeight: 400,\n            textDecoration: isHovering ? \"underline\" : \"none\"\n        },\n        onMouseEnter: handleMouseEnter,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClicked: onClicked,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: black ? \"/playground_assets/mask_group2.png\" : \"/playground_assets/mask_group.png\",\n                    style: {\n                        height: \"28px\",\n                        opacity: isHovering ? 1 : 0\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bkyritz/Code/me/PersonalWebsite/components/Option.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Option, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Option;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Option);\nvar _c;\n$RefreshReg$(_c, \"Option\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFBd0M7QUFFeEMsSUFBTUUsTUFBTSxHQUFHLGdCQUEwQztRQUF2Q0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLElBQUksU0FBSkEsSUFBSTtRQVd2Q0MsU0FBUyxHQUFsQixTQUFTQSxTQUFTLEdBQUc7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJQSxHQUFHLEVBQUU7WUFDUEssTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBR1AsR0FBRyxDQUFDO1FBQzdCLE9BQU8sSUFBSUMsSUFBSSxFQUFFO1lBQ2ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDOztJQWpCRCxJQUFvQ1QsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q2EsVUFBVSxHQUFtQmIsR0FBZSxHQUFsQyxFQUFFYyxhQUFhLEdBQUlkLEdBQWUsR0FBbkI7SUFFaEMsSUFBTWUsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkQsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFNRSxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCRixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQVdELHFCQUNFLDhEQUFDRyxLQUFHO1FBQ0ZDLEtBQUssRUFBRTtZQUNMQyxPQUFPLEVBQUUsTUFBTTtZQUNmQyxhQUFhLEVBQUUsS0FBSztZQUNwQkMsVUFBVSxFQUFFLFFBQVE7WUFDcEJDLEtBQUssRUFBRWxCLEtBQUssR0FBRyxrQkFBa0IsR0FBRyx3QkFBd0I7WUFDNURtQixRQUFRLEVBQUUsTUFBTTtZQUNoQkMsTUFBTSxFQUFFLFNBQVM7WUFDakJDLFNBQVMsRUFBRSxTQUFTO1lBQ3BCQyxVQUFVLEVBQUUsZUFBZTtZQUMzQkMsVUFBVSxFQUFFLEdBQUc7WUFDZkMsY0FBYyxFQUFFZixVQUFVLEdBQUcsV0FBVyxHQUFHLE1BQU07U0FDbEQ7UUFDRGdCLFlBQVksRUFBRWQsZ0JBQWdCO1FBQzlCZSxZQUFZLEVBQUVkLGdCQUFnQjs7MEJBRTlCLDhEQUFDQyxLQUFHO2dCQUFDVixTQUFTLEVBQUVBLFNBQVM7MEJBQ3ZCLDRFQUFDd0IsS0FBRztvQkFDRkMsR0FBRyxFQUNENUIsS0FBSyxHQUNELG9DQUFvQyxHQUNwQyxtQ0FBbUM7b0JBRXpDYyxLQUFLLEVBQUU7d0JBQUVlLE1BQU0sRUFBRSxNQUFNO3dCQUFFQyxPQUFPLEVBQUVyQixVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7cUJBQUU7Ozs7O3lCQUN0RDs7Ozs7cUJBQ0U7MEJBRU4sOERBQUNJLEtBQUc7MEJBQUVmLElBQUk7Ozs7O3FCQUFPOzs7Ozs7YUFDYixDQUNOO0FBQ0osQ0FBQztHQW5ES0QsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBcURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcHRpb24uanM/NTg0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgT3B0aW9uID0gKHsgdGV4dCwgY2FsbGJhY2ssIGJsYWNrLCB1cmwsIHBhZ2UgfSkgPT4ge1xuICBjb25zdCBbaXNIb3ZlcmluZywgc2V0SXNIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXRJc0hvdmVyaW5nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0SXNIb3ZlcmluZyhmYWxzZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gb25DbGlja2VkKCkge1xuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgaWYgKHVybCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSBlbHNlIGlmIChwYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInllYWhcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgY29sb3I6IGJsYWNrID8gXCJyZ2JhKDAsIDAsIDAsIDEpXCIgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIixcbiAgICAgICAgZm9udFNpemU6IFwiMjZweFwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICBmb250U3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICBmb250RmFtaWx5OiBcIlBpeGVsb2lkIE1vbm9cIixcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogaXNIb3ZlcmluZyA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgPlxuICAgICAgPGRpdiBvbkNsaWNrZWQ9e29uQ2xpY2tlZH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgYmxhY2tcbiAgICAgICAgICAgICAgPyBcIi9wbGF5Z3JvdW5kX2Fzc2V0cy9tYXNrX2dyb3VwMi5wbmdcIlxuICAgICAgICAgICAgICA6IFwiL3BsYXlncm91bmRfYXNzZXRzL21hc2tfZ3JvdXAucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjI4cHhcIiwgb3BhY2l0eTogaXNIb3ZlcmluZyA/IDEgOiAwIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj57dGV4dH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3B0aW9uIiwidGV4dCIsImNhbGxiYWNrIiwiYmxhY2siLCJ1cmwiLCJwYWdlIiwib25DbGlja2VkIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImlzSG92ZXJpbmciLCJzZXRJc0hvdmVyaW5nIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZm9udFNpemUiLCJjdXJzb3IiLCJmb250U3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInRleHREZWNvcmF0aW9uIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1nIiwic3JjIiwiaGVpZ2h0Iiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Option.js\n"));

/***/ })

});