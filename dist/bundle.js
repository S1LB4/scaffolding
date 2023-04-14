/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/export/SWAPI/swapi.css":
/*!***********************************************!*\
  !*** ./src/components/export/SWAPI/swapi.css ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"section{\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    border: solid 5px rgb(8, 0, 255);\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export/SWAPI/swapi.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"traer_api\": () => (/* binding */ traer_api)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction traer_api() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const arrayStars = [];\n            for (let i = 1; i < 10; i++) {\n                const starw = yield (yield fetch(\"https://swapi.dev/api/people/\" + i)).json();\n                arrayStars.push(starw);\n            }\n            console.log(arrayStars);\n            return arrayStars;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/data.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyCard\": () => (/* reexport safe */ _export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export/SWAPI/swapi */ \"./src/components/export/SWAPI/swapi.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/export/SWAPI/swapi.ts":
/*!**********************************************!*\
  !*** ./src/components/export/SWAPI/swapi.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swapi_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swapi.css */ \"./src/components/export/SWAPI/swapi.css\");\n\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"name\"] = \"name\";\n    Attribute[\"height\"] = \"height\";\n    Attribute[\"mass\"] = \"mass\";\n    Attribute[\"hair_color\"] = \"hair_color\";\n    Attribute[\"skin_color\"] = \"skin_color\";\n    Attribute[\"eye_color\"] = \"eye_color\";\n    Attribute[\"birth_year\"] = \"birth_year\";\n    Attribute[\"gender\"] = \"gender\";\n    Attribute[\"homeworld\"] = \"homeworld\";\n})(Attribute || (Attribute = {}));\nclass MyCard extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            height: null,\n            mass: null,\n            hair_color: null,\n            skin_color: null,\n            eye_color: null,\n            birth_year: null,\n            gender: null,\n            homeworld: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const css = this.ownerDocument.createElement(\"style\");\n            css.innerHTML = _swapi_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n            this.shadowRoot.innerHTML += `\n                <section class=\"card\">\n                <h1>Name: ${this.name}</h1>\n                <h1>Height: ${this.height}cm</h1>\n                <h1>Mass: ${this.mass}kg</h1>\n                <h1>Hair color: ${this.hair_color}</h1>\n                <h1>Skin color: ${this.skin_color}</h1>\n                <h1>Eye color: ${this.eye_color}</h1>\n                <h1>Birth year: ${this.birth_year}</h1>\n                <h1>Gender: ${this.gender}</h1>\n                </section>\n                `;\n        }\n    }\n}\ncustomElements.define(\"my-card\", MyCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export/SWAPI/swapi.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/data */ \"./src/components/data.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/export/SWAPI/swapi */ \"./src/components/export/SWAPI/swapi.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.StarwarsList = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const dataStarwars = yield (0,_components_data__WEBPACK_IMPORTED_MODULE_0__.traer_api)();\n            console.log(_components_data__WEBPACK_IMPORTED_MODULE_0__.traer_api);\n            dataStarwars === null || dataStarwars === void 0 ? void 0 : dataStarwars.forEach((data) => {\n                const StarwarsCard = this.ownerDocument.createElement(\"my-card\");\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.name, data.name);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.height, data.height);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.mass, data.mass);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.hair_color, data.hair_color);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.skin_color, data.skin_color);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.eye_color, data.eye_color);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.birth_year, data.birth_year);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.gender, data.gender);\n                StarwarsCard.setAttribute(_components_export_SWAPI_swapi__WEBPACK_IMPORTED_MODULE_2__.Attribute.homeworld, data.homeworld);\n                this.StarwarsList.push(StarwarsCard);\n            });\n            this.render(this.StarwarsList);\n        });\n    }\n    ;\n    render(StarwarsList) {\n        var _a;\n        const StarwarsCard = this.ownerDocument.createElement(\"section\");\n        StarwarsCard.className = \"StarSection\";\n        this.StarwarsList.forEach((s) => {\n            StarwarsCard.appendChild(s);\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(StarwarsCard);\n    }\n}\ncustomElements.define(\"app-container\", AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;