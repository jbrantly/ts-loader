/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https:/webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https:/webpack.js.org/configuration/mode/).
 */
/******/ (() => { / webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({
/***/ "./app.ts":
/*!**********!*/
  !*** ./app.ts ***!
  /**********/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {
eval("
Object.defineProperty(exports, /"__esModule/", ({ value: true }));
var dep = __webpack_require__(/*! ./dep */ /"./dep.ts/");
dep('');
/# sourceURL=webpack://./app.ts?");
/***/ }),
/***/ "./deeperDep.ts":
/*!**********!*/
  !*** ./deeperDep.ts ***!
  /**********/
/***/ ((module) => {
eval("
function doSomething(input) {
}
module.exports = doSomething;
/# sourceURL=webpack://./deeperDep.ts?");
/***/ }),
/***/ "./dep.ts":
/*!**********!*/
  !*** ./dep.ts ***!
  /**********/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {
eval("
var dep = __webpack_require__(/*! ./deeperDep */ /"./deeperDep.ts/");
module.exports = dep;
/# sourceURL=webpack://./dep.ts?");
/***/ })
/******/ 	});
/**********/
/******/ 	/ The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	/ The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		/ Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		/ Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			/ no module.id needed
/******/ 			/ no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		/ Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		/ Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/**********/
/******/ 	
/******/ 	/ startup
/******/ 	/ Load entry module and return exports
/******/ 	/ This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ })()
;