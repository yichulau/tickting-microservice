"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst buildClient = ({ req  })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxHQUFHLEdBQUUsR0FBSztJQUMvQixJQUFJLElBQTZCLEVBQUU7UUFDakMsdUJBQXVCO1FBRXZCLE9BQU9GLG1EQUFZLENBQUM7WUFDbEJJLE9BQU8sRUFDTCxpRUFBaUU7WUFDbkVDLE9BQU8sRUFBRUgsR0FBRyxDQUFDRyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztLQUNKLE1BQU0sRUFLTjtDQUNGO0FBRUQsaUVBQWVKLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGJ1aWxkQ2xpZW50ID0gKHsgcmVxIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlclxuXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOlxuICAgICAgICBcImh0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbFwiLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVybDogXCIvXCIsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiYnVpbGRDbGllbnQiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst LandingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are signed in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yichu\\\\Desktop\\\\Microservice Learning\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are NOT signed in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yichu\\\\Desktop\\\\Microservice Learning\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nLandingPage.getInitialProps = async (context)=>{\n    console.log(\"LANDING PAGE!\");\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    const { data  } = await client.get(\"/api/users/currentuser\"); // this is the problem\n    console.log(data, \"sadsadsa\");\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBOEM7QUFFOUMsTUFBTUMsV0FBVyxHQUFHLENBQUMsRUFBRUMsV0FBVyxHQUFFLEdBQUs7SUFDdkMsT0FBT0EsV0FBVyxpQkFDaEIsOERBQUNDLElBQUU7a0JBQUMsbUJBQWlCOzs7OztpQkFBSyxpQkFFMUIsOERBQUNBLElBQUU7a0JBQUMsdUJBQXFCOzs7OztpQkFBSyxDQUM5QjtDQUNIO0FBRURGLFdBQVcsQ0FBQ0csZUFBZSxHQUFHLE9BQU1DLE9BQU8sR0FBSTtJQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0IsTUFBTUMsTUFBTSxHQUFHUiw2REFBVyxDQUFDSyxPQUFPLENBQUM7SUFFbkMsTUFBTSxFQUFFSSxJQUFJLEdBQUUsR0FBRyxNQUFNRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLHNCQUFzQjtJQUNuRkosT0FBTyxDQUFDQyxHQUFHLENBQUNFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5QixPQUFPQSxJQUFJLENBQUM7Q0FDYixDQUFDO0FBRUYsaUVBQWVSLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgcmV0dXJuIGN1cnJlbnRVc2VyID8gKFxuICAgIDxoMT5Zb3UgYXJlIHNpZ25lZCBpbjwvaDE+XG4gICkgOiAoXG4gICAgPGgxPllvdSBhcmUgTk9UIHNpZ25lZCBpbjwvaDE+XG4gICk7XG59O1xuXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcbiAgY29uc29sZS5sb2coJ0xBTkRJTkcgUEFHRSEnKTtcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoY29udGV4dCk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7IC8vIHRoaXMgaXMgdGhlIHByb2JsZW1cbiAgY29uc29sZS5sb2coZGF0YSwgXCJzYWRzYWRzYVwiKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiZGF0YSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();