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
var lib_1 = __webpack_require__(/*! ./lib */ /"./lib/index.ts/");
console.log(lib_1.lib.one, lib_1.lib.two, lib_1.lib.three);
/# sourceURL=webpack://./app.ts?");
/***/ }),
/***/ "./lib/foo.ts":
/*!**********!*/
  !*** ./lib/foo.ts ***!
  /**********/
/***/ ((__unused_webpack_module, exports) => {
eval("
Object.defineProperty(exports, /"__esModule/", ({ value: true }));
exports.foo = void 0;
exports.foo = 'foo';
/# sourceURL=webpack://./lib/foo.ts?");
/***/ }),
/***/ "./lib/index.ts":
/*!**********!*/
  !*** ./lib/index.ts ***!
  /**********/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {
eval("
Object.defineProperty(exports, /"__esModule/", ({ value: true }));
exports.lib = void 0;
var foo_1 = __webpack_require__(/*! ./foo */ /"./lib/foo.ts/");
exports.lib = {
    one: 1,
    two: 2,
    three: 3,
    foo: foo_1.foo
};
/# sourceURL=webpack://./lib/index.ts?");
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