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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixpRUFBZSxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzFCLElBQUksSUFBNkIsRUFBRTtRQUNqQyx1QkFBdUI7UUFFdkIsT0FBT0QsbURBQVksQ0FBQztZQUNsQkcsT0FBTyxFQUNMLGlFQUFpRTtZQUNuRUMsT0FBTyxFQUFFSCxHQUFHLENBQUNHLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0osTUFBTSxFQUtOO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6XHJcbiAgICAgICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXHJcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFdlIG11c3QgYmUgb24gdGhlIGJyb3dzZXJcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst LandingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are sign in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yichu\\\\Desktop\\\\Microservice Learning\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 26\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are not sign in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yichu\\\\Desktop\\\\Microservice Learning\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 53\n    }, undefined);\n};\nLandingPage.getInitialProps = async ({ context  })=>{\n    const { data  } = await (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context).get(\"/api/users/currentuser\");\n    return data;\n// if(typeof window === 'undefined'){\n//     // we are on a window\n//     // request should be made to http://ingress-srv......\n//     const { data }=  await axios.get(\n//         'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', \n//         {\n//             headers: req.headers\n//         }\n//     );\n//     return data;\n// } else {\n//     // we are on the browser\n//     // request can be made with a base url of ''\n//     const { data } = await axios.get('/api/users/currentuser');\n//     return data;\n// }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNwQjtBQUcxQixNQUFNRSxXQUFXLEdBQUcsQ0FBRyxFQUFFQyxXQUFXLEdBQUUsR0FBTTtJQUV4QyxPQUFPQSxXQUFXLGlCQUFHLDhEQUFDQyxJQUFFO2tCQUFDLGlCQUFlOzs7OztpQkFBSyxpQkFBRyw4REFBQ0EsSUFBRTtrQkFBQyxxQkFBbUI7Ozs7O2lCQUFLLENBQUU7Q0FDakY7QUFFREYsV0FBVyxDQUFDRyxlQUFlLEdBQUcsT0FBUSxFQUFFQyxPQUFPLEdBQUUsR0FBSztJQUNsRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHLE1BQU1QLDZEQUFXLENBQUNNLE9BQU8sQ0FBQyxDQUFDRSxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDekUsT0FBT0QsSUFBSSxDQUFDO0FBRVoscUNBQXFDO0FBQ3JDLDRCQUE0QjtBQUM1Qiw0REFBNEQ7QUFDNUQsd0NBQXdDO0FBQ3hDLG9HQUFvRztBQUNwRyxZQUFZO0FBQ1osbUNBQW1DO0FBQ25DLFlBQVk7QUFDWixTQUFTO0FBQ1QsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCwrQkFBK0I7QUFDL0IsbURBQW1EO0FBQ25ELGtFQUFrRTtBQUNsRSxtQkFBbUI7QUFDbkIsSUFBSTtDQUNQLENBQUM7QUFFRixpRUFBZUwsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoICB7IGN1cnJlbnRVc2VyIH0gKSA9PiB7XHJcbiAgIFxyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyID8gPGgxPllvdSBhcmUgc2lnbiBpbjwvaDE+IDogPGgxPllvdSBhcmUgbm90IHNpZ24gaW48L2gxPiA7XHJcbn1cclxuXHJcbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICggeyBjb250ZXh0IH0gKSA9PntcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYnVpbGRDbGllbnQoY29udGV4dCkuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgICAvLyBpZih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICAvLyAgICAgLy8gd2UgYXJlIG9uIGEgd2luZG93XHJcbiAgICAvLyAgICAgLy8gcmVxdWVzdCBzaG91bGQgYmUgbWFkZSB0byBodHRwOi8vaW5ncmVzcy1zcnYuLi4uLi5cclxuICAgIC8vICAgICBjb25zdCB7IGRhdGEgfT0gIGF3YWl0IGF4aW9zLmdldChcclxuICAgIC8vICAgICAgICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbC9hcGkvdXNlcnMvY3VycmVudHVzZXInLCBcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAgIC8vIHdlIGFyZSBvbiB0aGUgYnJvd3NlclxyXG4gICAgLy8gICAgIC8vIHJlcXVlc3QgY2FuIGJlIG1hZGUgd2l0aCBhIGJhc2UgdXJsIG9mICcnXHJcbiAgICAvLyAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcclxuICAgIC8vICAgICByZXR1cm4gZGF0YTtcclxuICAgIC8vIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlOyJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsImF4aW9zIiwiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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