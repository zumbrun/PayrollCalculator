/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/events.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/events.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.eventdiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 6px;\r\n  gap: 2px;\r\n  padding: 6px;\r\n}\r\n.descdiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 6px;\r\n}\r\n#day {\r\n  min-width: 120px;\r\n  padding: 4px;\r\n  font-size: medium;\r\n}\r\ntextarea {\r\n  flex: 1;\r\n  background-color: white;\r\n  padding: 6px;\r\n  margin: 6px;\r\n  min-width: 300px;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://payrollcalculator/./src/events.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 4px;\r\n  background-color: #188f20;\r\n  font-family: \"Merriweather\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: smaller;\r\n  min-height: 100vh;\r\n}\r\n.footer {\r\n  display:flex;\r\n  flex-shrink: 0;\r\n  flex-wrap: wrap;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 4px;\r\n  padding: 4px;\r\n  max-width: 350px;\r\n}\r\n.title {\r\n  display:flex;\r\n  flex-shrink: 0;\r\n  flex-wrap: wrap;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 4px;\r\n  padding: 4px;\r\n  max-width: 350px;\r\n}\r\n.container {\r\n  display:flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  margin: 4px;\r\n  padding: 4px;\r\n  max-width: 350px;\r\n  gap: 16px;\r\n}\r\n.flexdiv {\r\n  display:flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-items: center;\r\n  min-height: 30px;\r\n  gap: 4px;\r\n}\r\n.flexrow {\r\n  display: flex;\r\n  align-items: left;\r\n  justify-content: space-between;\r\n  margin-bottom: 8px;\r\n}\r\ninput {\r\n  text-align: center;\r\n  min-width: 25px;\r\n  max-width: 70px;\r\n  font-size: smaller;\r\n  min-height: 14px;\r\n}\r\nselect {\r\n  font-size: medium;\r\n  padding:2px;\r\n}\r\nlabel{\r\n  padding-right: 3px;\r\n  vertical-align: middle;\r\n}\r\n#hrs {\r\n  display:none;\r\n}\r\n.rates {\r\n  display:flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  justify-content: space-around;\r\n  font-family: sans-serif;\r\n  gap: 8px;\r\n  border-radius: 8px;\r\n  padding: 5px 10px; \r\n  margin: 0;\r\n}\r\n.btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 12px;\r\n  font-family: \"Arial\";\r\n  font-size: medium;\r\n  gap: 20px;\r\n}\r\n#cancelbutton {\r\n  width: 70px;\r\n  color: white;\r\n  background-color: red;\r\n  border-color: red;\r\n  border-radius: 6px;\r\n  padding: 6px;\r\n}\r\n#submitbutton, #printbutton{\r\n  width: 70px;\r\n  background-color: blue;\r\n  color: white;\r\n  border-color: blue;\r\n  border-radius: 6px;\r\n  padding: 6px;\r\n}\r\ntable {\r\n  width: 100%;\r\n  border: 1px solid black;\r\n  border-collapse: collapse;\r\n}\r\nth, td{\r\n  padding: 8px;\r\n  border-collapse: collapse;\r\n  border: 1px solid black;\r\n}\r\ntr{\r\n  height: 14px;\r\n  border-collapse: collapse;\r\n}\r\n.printform {\r\n  display: none;\r\n}\r\n#outputtable{\r\n  background-color: lightgray;\r\n}\r\n#outputtable th:nth-child(1) {\r\n  border-right: none;\r\n}\r\n#outputtable td:nth-child(1) {\r\n  border-right: none;\r\n}\r\n#outputtable td:nth-child(2) {\r\n  text-align: right;\r\n  border-left: none;\r\n}\r\n#outputtable td:nth-child(3) {\r\n  text-align: left;\r\n}\r\n#summarytable {\r\n  break-inside: avoid;\r\n}\r\n#summarytable td:nth-child(1) {\r\n  border-right:none;\r\n}\r\n#summarytable td:nth-child(2) {\r\n  text-align: right;\r\n  border-left: none;\r\n}\r\n#summarytable td:nth-child(3) {\r\n  text-align: left;\r\n}\r\n#summarytable th:nth-child(1){\r\n  width: 4%;\r\n  border-right: none;\r\n}\r\n#summarytable th:nth-child(2){\r\n  width: 11%;\r\n  border-left: none;\r\n}\r\n#summarytable th:nth-child(3){\r\n  width: 20%;\r\n}\r\n#summarytable th:nth-child(4){\r\n  width: 18%;\r\n}\r\n#summarytable th:nth-child(5){\r\n  width: 18%;\r\n}\r\n#summarytable th:nth-child(6){\r\n  width: 18%;\r\n}\r\n#reftables {\r\n  display: flex;\r\n}\r\n#ratetable, #salarytable{\r\n  font-size: x-small;\r\n  font-style: italic;\r\n  color: gray;\r\n  width: fit-content;\r\n  margin-top: 8px;\r\n  break-inside: avoid;\r\n}\r\n#meetingtable th:nth-child(1) {\r\n  width: 5%;\r\n}\r\n#supervisors {\r\n  display: none;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0px;\r\n}\r\nul li {\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n}\r\n.threecols {\r\n  border-collapse: collapse;\r\n  border: 1px solid black;\r\n}\r\n.threecols tr {\r\n  max-height: 16px;\r\n}\r\n.threecols th:nth-child(1) {\r\n  width: 15%;\r\n  text-align: left;\r\n}\r\n.threecols th:nth-child(2) {\r\n  text-align: left;\r\n  width: 75%;\r\n}\r\n.threecols th:nth-child(3) {\r\n  text-align: right;\r\n  width: 10%;\r\n}\r\n.threecols td:nth-child(1) {\r\n  text-align: left;\r\n}\r\n.threecols td:nth-child(2) {\r\n  text-align: left;\r\n}\r\n.threecols td:nth-child(3) {\r\n  text-align: right;\r\n}\r\n.totalrow td:nth-child(1){\r\n  border-right: none;\r\n}\r\n.totalrow td:nth-child(2){\r\n  border-left: none;\r\n  text-align: right;\r\n}\r\n.totalrow td:nth-child(3){\r\n  text-align: right;\r\n}\r\n.twocols {\r\n  border-collapse: collapse;\r\n  border: 1px solid black;\r\n  text-align: left;\r\n}\r\n.twocols th:nth-child(1) {\r\n  width: 15%;\r\n}\r\n.twocols th:nth-child(2) {\r\n  width: 85%;\r\n}\r\n\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://payrollcalculator/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/events.css":
/*!************************!*\
  !*** ./src/events.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./events.css */ \"./node_modules/css-loader/dist/cjs.js!./src/events.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://payrollcalculator/./src/events.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://payrollcalculator/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://payrollcalculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   board: () => (/* binding */ board),\n/* harmony export */   rates: () => (/* binding */ rates),\n/* harmony export */   salaries: () => (/* binding */ salaries)\n/* harmony export */ });\nconst rates = {\r\n    pera: {unit: \"%\", rate:0.05},\r\n    medicare: {unit: \"%\", rate:0.0145},\r\n    meetings: {unit: \"/mtg\", rate:100},\r\n    mileage: {unit: \"/mile\", rate: 0.670},\r\n    phone: {unit: \"/qtr\", rate: 30},\r\n    internet: {unit: \"/qtr\", rate: 30},\r\n};\r\nconst salaries = {\r\n    supervisor: {unit:\"/hr\", rate: 30},\r\n    clerk: {unit:\"/qtr\", rate: 750},\r\n    deputyclerk: {unit:\"/qtr\", rate: 150},\r\n    treasurer: {unit:\"/qtr\", rate: 550},\r\n    deputytreasurer: {unit:\"/qtr\", rate: 0},\r\n};\r\nconst board = {\r\n    \"John Barlow\": \"Treasurer\",\r\n    \"Daryl Felt\": \"Supervisor\",\r\n    \"Ben Hane\": \"Supervisor\",\r\n    \"John Johnson\": \"Supervisor\",\r\n    \"Jerome Lawler\": \"Deputy Clerk\",\r\n    \"Joe Mahoney\": \"Clerk\",\r\n    \"Steve Pollack\": \"Supervisor\",\r\n    \"Paul Uecker\": \"Supervisor\",\r\n    \"Laura Zumbrunnen\": \"Deputy Treasurer\",\r\n};\r\n\n\n//# sourceURL=webpack://payrollcalculator/./src/constants.js?");

/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupHours: () => (/* binding */ setupHours)\n/* harmony export */ });\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/inputs.js\");\n\r\n\r\nfunction setupHours (userinputs, datatables) {\r\n  \r\n  const cancelbtn = document.getElementById('cancelbutton');\r\n  const donebtn = document.getElementById('submitbutton');\r\n  const addbtn = document.getElementById('printbutton');\r\n \r\n  cancelbtn.addEventListener('click', () => {\r\n    clear();\r\n    (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n  });\r\n  donebtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) { \r\n      save(userinputs, datatables);\r\n      assignData(userinputs, datatables);\r\n      (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n    }\r\n  });\r\n  addbtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) { \r\n      save(userinputs, datatables);\r\n      clear();\r\n    }\r\n  });\r\n}\r\nfunction validateForm(e) {\r\n  const myform = document.getElementById('hoursform');\r\n    if(!myform.checkValidity()) {\r\n      return false;\r\n    }\r\n    e.preventDefault();\r\n    return true;\r\n}\r\nfunction save(userinputs, datatables)  {\r\n  const day = document.getElementById(\"day\");\r\n  const desc = document.getElementById(\"description\");\r\n  let myarray = [];\r\n  myarray[0] = day.value;\r\n  myarray[1] = desc.value;\r\n  myarray[2] = calculateHours();\r\n  datatables.hours.push(myarray);\r\n  assignData(userinputs, datatables);\r\n  clear();\r\n}\r\nfunction clear () {\r\n  document.getElementById(\"day\").value = \"\";\r\n  document.getElementById(\"description\").value = \"\";\r\n  document.getElementById(\"hr\").value = 0;\r\n  document.getElementById(\"min\").value = 0;\r\n}\r\nfunction assignData (userinputs, datatables ) {userinputs.mtgs\r\n  userinputs.hours = calculateTotals(datatables.hours);\r\n}\r\nfunction calculateHours() {\r\n\r\n  const hrs = Number(document.getElementById('hr').value);\r\n  const mins = Number(document.getElementById('min').value);\r\n  return (hrs + mins).toFixed(2);\r\n}\r\nfunction calculateTotals(array) {\r\n  let total = 0;\r\n  for (let i=0; i < array.length; i++) {\r\n    total = total + Number(array[i][2]);\r\n  }\r\n  return total.toFixed(2);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://payrollcalculator/./src/hours.js?");

/***/ }),

/***/ "./src/hourspage.js":
/*!**************************!*\
  !*** ./src/hourspage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showHourspage: () => (/* binding */ showHourspage)\n/* harmony export */ });\nfunction showHourspage() {\n    const hourscontent = `\n    <form id=\"hoursform\">\n    <div class=\"title\">\n        <div>Enter Hours</div>\n    </div>\n    <div class=\"eventdiv\">Date\n        <label for=\"day\"></label>\n        <input type=\"date\" id=\"day\" name=\"day\" required>\n    </div>\n    <div class=\"descdiv\">\n        <textarea id=\"description\" placeholder=\"Description of Work\" required></textarea>\n    </div>\n    <div class=\"eventdiv\">\n        <label for=\"hr\">Enter hours:</label>\n        <select name=\"hours\" id=\"hr\" required>\n            <option value=\"0\" selected>0</option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n            <option value=\"5\">5</option>\n            <option value=\"6\">6</option>\n            <option value=\"7\">7</option>\n            <option value=\"8\">8</option>\n        </select>\n        <label for=\"min\">Enter minutes:</label>\n        <select name=\"mins\" id=\"min\" required>\n            <option value=\"0\">00</option>\n            <option value=\"0.25\">15</option>\n            <option value=\"0.50\">30</option>\n            <option value=\"0.75\">45</option>\n        </select> \n    </div>\n    <div class=\"btn\">\n        <button id=\"cancelbutton\">Cancel</button>\n        <button id=\"submitbutton\">Done</button>\n        <button id=\"printbutton\">Add</button>\n    </div>\n    </form>\n    `;\n    return hourscontent;\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/hourspage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _events_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.css */ \"./src/events.css\");\n/* harmony import */ var _inputs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs.js */ \"./src/inputs.js\");\n\n\n\n\n\nif (true) {\n  console.log(\"looks like we are in dev mode!\");\n};\n\nconst userinputs = {\n    name: null,\n    title: null,\n    hours: 0,\n    bmtgs: null,\n    omtgs: 0,\n    mtgs: 0,\n    pera: null,\n    phone: null,\n    internet: null,\n    miles: 0,\n    misc:0,\n  }\n  const datatables = {\n    hours: [],\n    miles: [],\n    misc:  [],\n    omtgs: [],\n  }\n\n;(0,_inputs_js__WEBPACK_IMPORTED_MODULE_2__.setupInputs)(userinputs, datatables);\n\n\n\n\n\n//# sourceURL=webpack://payrollcalculator/./src/index.js?");

/***/ }),

/***/ "./src/inputs.js":
/*!***********************!*\
  !*** ./src/inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupInputs: () => (/* binding */ setupInputs)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _inputspage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputspage.js */ \"./src/inputspage.js\");\n/* harmony import */ var _milespage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./milespage.js */ \"./src/milespage.js\");\n/* harmony import */ var _hourspage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hourspage.js */ \"./src/hourspage.js\");\n/* harmony import */ var _miscpage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscpage.js */ \"./src/miscpage.js\");\n/* harmony import */ var _omtgspage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./omtgspage.js */ \"./src/omtgspage.js\");\n/* harmony import */ var _outputspage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outputspage.js */ \"./src/outputspage.js\");\n/* harmony import */ var _miles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./miles.js */ \"./src/miles.js\");\n/* harmony import */ var _hours_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hours.js */ \"./src/hours.js\");\n/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./misc.js */ \"./src/misc.js\");\n/* harmony import */ var _omtgs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./omtgs.js */ \"./src/omtgs.js\");\n/* harmony import */ var _outputs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./outputs.js */ \"./src/outputs.js\");\n/* harmony import */ var _outputs_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_outputs_js__WEBPACK_IMPORTED_MODULE_11__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction setupInputs(userinputs, datatables) {\r\n  const container = document.querySelector(\".container\");\r\n  container.innerHTML = (0,_inputspage_js__WEBPACK_IMPORTED_MODULE_1__.showInputspage)();\r\n  \r\n  // add event listeners to all the inputs so can update userinputs\r\n  const usernames = document.getElementById('name');\r\n  usernames.addEventListener('click', () => {\r\n    // populate hours if default name on dropdown is a supervisor\r\n    viewHours(usernames.value);\r\n    userinputs.name = usernames.value;\r\n    userinputs.title = _constants_js__WEBPACK_IMPORTED_MODULE_0__.board[userinputs.name];\r\n  });\r\n  const hoursEntry = document.getElementById('hours');\r\n  hoursEntry.addEventListener('click', () => {\r\n    container.innerHTML = (0,_hourspage_js__WEBPACK_IMPORTED_MODULE_3__.showHourspage)();\r\n    (0,_hours_js__WEBPACK_IMPORTED_MODULE_8__.setupHours)(userinputs, datatables);\r\n  });\r\n  const miscEntry = document.getElementById('misc');\r\n  miscEntry.addEventListener('click', () => {\r\n    container.innerHTML = (0,_miscpage_js__WEBPACK_IMPORTED_MODULE_4__.showMiscpage)();\r\n    (0,_misc_js__WEBPACK_IMPORTED_MODULE_9__.setupMisc)(userinputs, datatables)\r\n  });\r\n  const milesEntry = document.getElementById('miles');\r\n  milesEntry.addEventListener('click', () => {\r\n    container.innerHTML = (0,_milespage_js__WEBPACK_IMPORTED_MODULE_2__.showMilespage)();\r\n    (0,_miles_js__WEBPACK_IMPORTED_MODULE_7__.setupMiles)(userinputs, datatables)\r\n  });\r\n  const omtgsEntry = document.getElementById('omtgs');\r\n  omtgsEntry.addEventListener('click', () => {\r\n    container.innerHTML = (0,_omtgspage_js__WEBPACK_IMPORTED_MODULE_5__.showOmtgspage)();\r\n    (0,_omtgs_js__WEBPACK_IMPORTED_MODULE_10__.setupOmtgs)(userinputs, datatables)\r\n  });  \r\n  const radiobmtgs = document.forms[\"inputform\"].elements['bmtgs'];\r\n  for (let i = 0; i < radiobmtgs.length; i++) {\r\n    radiobmtgs[i].addEventListener(\"click\", () => {\r\n      userinputs.bmtgs = radiobmtgs[i].value;\r\n      userinputs.mtgs = Number(userinputs.bmtgs) + Number(userinputs.omtgs);\r\n    });\r\n  }\r\n  const radiophone = document.forms[\"inputform\"].elements['phone'];\r\n  for (let i = 0; i < radiophone.length; i++) {\r\n    radiophone[i].addEventListener(\"click\", () => {\r\n      userinputs.phone = radiophone[i].value;\r\n    });\r\n  }\r\n  const radiointernet = document.forms[\"inputform\"].elements['internet'];\r\n  for (let i = 0; i < radiointernet.length; i++) {\r\n    radiointernet[i].addEventListener(\"click\", () => {\r\n      userinputs.internet = radiointernet[i].value;\r\n    });\r\n  }\r\n  const radiopera = document.forms[\"inputform\"].elements['pera'];\r\n  for (let i = 0; i < radiopera.length; i++) {\r\n    radiopera[i].addEventListener(\"click\", () => {\r\n      userinputs.pera = radiopera[i].value;\r\n    });\r\n  }\r\n  // add event listener to when submit button is clicked\r\n  const submitbtn = document.getElementById(\"submitbutton\");\r\n  submitbtn.addEventListener(\"click\", (e) => {\r\n    const inputform = document.getElementById('inputform');\r\n    if(!inputform.checkValidity()) {\r\n      return false;\r\n    }\r\n    e.preventDefault();\r\n    (0,_outputspage_js__WEBPACK_IMPORTED_MODULE_6__.showOutputspage)(userinputs);\r\n    (0,_outputs_js__WEBPACK_IMPORTED_MODULE_11__.setupOutputs)(userinputs, datatables);\r\n  });\r\n  // set up the dropdown of names \r\n  dropDownItems(usernames);\r\n  // show the selected name\r\n  setDropdownName(userinputs, usernames);\r\n  // show hours\r\n  viewHours(userinputs.name);\r\n\r\n  // assign inputs from userinputs\r\n  hoursEntry.value = Number(userinputs.hours).toFixed(2);\r\n  milesEntry.value = Number(userinputs.miles).toFixed(1);\r\n  miscEntry.value = \"$ \" + Number(userinputs.misc).toFixed(2);\r\n  omtgsEntry.value = userinputs.omtgs;\r\n  radiobmtgs.value = userinputs.bmtgs;\r\n  radiointernet.value = userinputs.internet;\r\n  radiophone.value = userinputs.phone;\r\n  radiopera.value = userinputs.pera;\r\n}\r\nfunction dropDownItems(usernames) {\r\n  for (const [key, value] of Object.entries(_constants_js__WEBPACK_IMPORTED_MODULE_0__.board)) {\r\n    let opt = document.createElement(\"option\");\r\n    opt.textContent = key;\r\n    usernames.add(opt);\r\n  }\r\n}\r\nfunction setDropdownName(userinputs, usernames) {\r\n  if (userinputs.name === null) {\r\n    usernames.selectedIndex = 0;\r\n    userinputs.name = usernames.value;\r\n  }\r\n  else {\r\n    for (const [key, value] of Object.entries(_constants_js__WEBPACK_IMPORTED_MODULE_0__.board)) {\r\n      if (userinputs.name === key) {usernames.value = key;}\r\n    }\r\n  }\r\n  userinputs.title = _constants_js__WEBPACK_IMPORTED_MODULE_0__.board[userinputs.name];\r\n}\r\nfunction viewHours(username) {\r\n  if (_constants_js__WEBPACK_IMPORTED_MODULE_0__.board[username] === \"Supervisor\") {\r\n    document.getElementById(\"hrs\").style.display = \"flex\";\r\n  }\r\n  else {\r\n    document.getElementById(\"hrs\").style.display = \"none\";\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://payrollcalculator/./src/inputs.js?");

/***/ }),

/***/ "./src/inputspage.js":
/*!***************************!*\
  !*** ./src/inputspage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showInputspage: () => (/* binding */ showInputspage)\n/* harmony export */ });\nfunction showInputspage() {\r\n    const inputcontent = `\r\n    <form id=\"inputform\">\r\n        <div class=\"title\">Quarterly Payroll Input</div> \r\n        <div class=\"flexdiv\">\r\n            <label for=\"name\">Name:</label>\r\n            <select autocomplete = \"off\" id=\"name\"></select>\r\n        </div>\r\n        <div class=\"flexdiv\" id=\"hrs\">\r\n            <label for=\"hours\">Enter hours:</label>\r\n            <input autocomplete=\"off\" type=\"text\" step=\"any\" id=\"hours\" name=\"hours\" value=\"0\">\r\n        </div>\r\n        <div class=\"flexdiv\">\r\n            <legend>Haverhill board mtgs attended:</legend> \r\n            <input id = \"bmtgs3\" type=\"radio\" name=\"bmtgs\" value=\"3\" required>\r\n            <label for=\"bmtgs3\">3</label>\r\n            <input id = \"bmtgs2\" type=\"radio\" name=\"bmtgs\" value=\"2\">\r\n            <label for=\"bmtgs2\">2</label>\r\n            <input id = \"bmtgs1\" type=\"radio\" name=\"bmtgs\" value=\"1\">\r\n            <label for=\"bmtgs1\">1</label>\r\n            <input id = \"bmtgs0\" type=\"radio\" name=\"bmtgs\" value=\"0\">\r\n            <label for=\"bmtgs0\">0</label>\r\n        </div>\r\n        <div class=\"flexdiv\">\r\n            <label for=\"omtgs\">Other official meetings attended:</label>\r\n            <input type=\"number\" id=\"omtgs\" name=\"omtgs\" value=\"0\">\r\n        </div>\r\n        <div class=\"flexdiv\">\r\n            <legend>Cell phone reimbursement?</legend>\r\n            <input autocomplete=\"off\" id = \"phone1\" type=\"radio\" name=\"phone\" value=\"1\" required/>\r\n            <label for = \"phone1\">Yes</label>\r\n            <input autocomplete=\"off\" id = \"phone0\" type=\"radio\" name=\"phone\" value=\"0\"/>\r\n            <label for = \"phone0\">No</label>\r\n        </div>\r\n        <div class=\"flexdiv\">\r\n            <legend>Internet reimbursement?</legend> \r\n            <input id = \"internet1\" type=\"radio\" name=\"internet\" value=\"1\" required>\r\n            <label for = \"internet1\">Yes</label>\r\n            <input id = \"internet0\" type=\"radio\" name=\"internet\" value=\"0\">\r\n            <label for = \"internet0\">No</label>\r\n        </div>\r\n\r\n        <div class=\"flexdiv\">\r\n            <label for=\"miles\">Enter reimbursement miles:</label>\r\n            <input type=\"number\" step=\"any\" id=\"miles\" name=\"miles\" min=\"0\" value=\"0\">\r\n        </div>\r\n        <div class=\"flexdiv\">\r\n            <label for=\"misc\">Enter other expenses:</label>\r\n            <input type=\"text\" step=\"any\" id=\"misc\" name=\"misc\" value=\"0\">\r\n        </div>\r\n        <div class=\"flexdiv\">\r\n            <legend>Participant in PERA?</legend>\r\n            <input type=\"radio\" id=\"pera1\" name=\"pera\" value=\"1\" required>\r\n            <label for=\"pera1\">Yes</label>\r\n            <input type=\"radio\" id=\"pera0\" name=\"pera\" value=\"0\" >\r\n            <label for=\"pera0\">No</label>\r\n        </div>\r\n        <div class=\"btn\">\r\n            <button id=\"submitbutton\">Submit</button>\r\n        </div>\r\n    </form>\r\n        `;\r\n    return inputcontent;\r\n}\r\n\n\n//# sourceURL=webpack://payrollcalculator/./src/inputspage.js?");

/***/ }),

/***/ "./src/miles.js":
/*!**********************!*\
  !*** ./src/miles.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupMiles: () => (/* binding */ setupMiles)\n/* harmony export */ });\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/inputs.js\");\n\r\n\r\nfunction setupMiles (userinputs, datatables) {\r\n  \r\n  const cancelbtn = document.getElementById('cancelbutton');\r\n  const donebtn = document.getElementById('submitbutton');\r\n  const addbtn = document.getElementById('printbutton');\r\n \r\n  cancelbtn.addEventListener('click', () => {\r\n    clear();\r\n    (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n  });\r\n  donebtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) {\r\n      save(userinputs, datatables);\r\n      assignData(userinputs, datatables)\r\n      ;(0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n    }\r\n  });\r\n  addbtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) {\r\n      save(userinputs, datatables);\r\n      clear();\r\n    }\r\n  });\r\n}\r\nfunction validateForm(e) {\r\n  const myform = document.getElementById('milesform');\r\n    if(!myform.checkValidity()) {\r\n      return false;\r\n    }\r\n    e.preventDefault();\r\n    return true;\r\n}\r\nfunction clear () {\r\n  document.getElementById(\"day\").value = \"\";\r\n  document.getElementById(\"description\").value = \"\";\r\n  document.getElementById(\"bmiles\").value = \"\";\r\n}\r\nfunction save(userinputs, datatables)  {\r\n  let myarray = [];\r\n  myarray[0] = document.getElementById(\"day\").value;\r\n  myarray[1] = document.getElementById(\"description\").value;\r\n  myarray[2] = Number(document.getElementById(\"bmiles\").value).toFixed(1);\r\n  datatables.miles.push(myarray);\r\n  assignData(userinputs, datatables);\r\n  clear();\r\n}\r\nfunction assignData (userinputs, datatables ) {\r\n  userinputs.miles = calculateTotals(datatables.miles);\r\n}\r\nfunction calculateTotals(array) {\r\n  let total = 0;\r\n  for (let i=0; i < array.length; i++) {\r\n    total = total + Number(array[i][2]);\r\n  }\r\n  return total.toFixed(1);\r\n}\r\n\n\n//# sourceURL=webpack://payrollcalculator/./src/miles.js?");

/***/ }),

/***/ "./src/milespage.js":
/*!**************************!*\
  !*** ./src/milespage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMilespage: () => (/* binding */ showMilespage)\n/* harmony export */ });\nfunction showMilespage() {\n    const milescontent = `\n    <form id=\"milesform\"\n    <div class=\"title\">\n        <div>Enter Miles</div>\n    </div>\n    <div class=\"eventdiv\">Date\n        <label for=\"day\"></label>\n        <input type=\"date\" id=\"day\" name=\"day\" required>\n    </div>\n    <div class=\"descdiv\">\n        <textarea id=\"description\" placeholder=\"Description of Work\" required></textarea>\n    </div>\n    <div class=\"eventdiv\">\n        <label for=\"bmiles\">Enter miles:</label>\n        <input type=\"number\" step=\"0.01\" id=\"bmiles\" name=\"bmiles\" required>\n    </div>\n    <div class=\"btn\">\n        <button id=\"cancelbutton\">Cancel</button>\n        <button id=\"submitbutton\">Done</button>\n        <button id=\"printbutton\">Add</button>\n    </div>\n    </form>\n    `;\n    return milescontent;\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/milespage.js?");

/***/ }),

/***/ "./src/misc.js":
/*!*********************!*\
  !*** ./src/misc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupMisc: () => (/* binding */ setupMisc)\n/* harmony export */ });\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/inputs.js\");\n\r\n\r\nfunction setupMisc (userinputs, datatables) {\r\n  \r\n  const cancelbtn = document.getElementById('cancelbutton');\r\n  const donebtn = document.getElementById('submitbutton');\r\n  const addbtn = document.getElementById('printbutton');\r\n \r\n  cancelbtn.addEventListener('click', () => {\r\n    clear();\r\n    (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n  });\r\n  donebtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) {\r\n      save(userinputs, datatables);\r\n      assignData(userinputs, datatables)\r\n      ;(0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n    }\r\n  });\r\n  addbtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) {\r\n      save(userinputs, datatables);\r\n      clear();\r\n    }\r\n  });\r\n}\r\nfunction validateForm(e) {\r\n  const myform = document.getElementById('miscform');\r\n    if(!myform.checkValidity()) {\r\n      return false;\r\n    }\r\n    e.preventDefault();\r\n    return true;\r\n}\r\nfunction save(userinputs, datatables)  {\r\n  let myarray = [];\r\n  myarray[0] = document.getElementById(\"day\").value;\r\n  myarray[1] = document.getElementById(\"description\").value;\r\n  let result = document.getElementById(\"bmisc\").value;\r\n  if (result.startsWith(\"$\")) {\r\n    result = result.slice(1);\r\n  }\r\n  myarray[2] = Number(result).toFixed(2);\r\n  datatables.misc.push(myarray);\r\n  assignData(userinputs, datatables);\r\n  clear();\r\n}\r\nfunction clear () {\r\n  document.getElementById(\"day\").value = \"\";\r\n  document.getElementById(\"description\").value = \"\";\r\n  document.getElementById(\"bmisc\").value = \"\";\r\n}\r\nfunction assignData (userinputs, datatables ) {\r\n  userinputs.misc = calculateTotals(datatables.misc);\r\n}\r\nfunction calculateTotals(array) {\r\n  let total = 0;\r\n  for (let i=0; i < array.length; i++) {\r\n    total = total + Number(array[i][2]);\r\n  }\r\n  return total.toFixed(2);\r\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/misc.js?");

/***/ }),

/***/ "./src/miscpage.js":
/*!*************************!*\
  !*** ./src/miscpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMiscpage: () => (/* binding */ showMiscpage)\n/* harmony export */ });\nfunction showMiscpage() {\n    const misccontent = `\n    <form id=\"miscform\">\n    <div class=\"title\">\n        <div>Enter Hours</div>\n    </div>\n    <div class=\"eventdiv\">Date\n        <label for=\"day\"></label>\n        <input type=\"date\" id=\"day\" name=\"day\" required>\n    </div>\n    <div class=\"descdiv\">\n        <textarea id=\"description\" placeholder=\"Description of Work\" required></textarea>\n    </div>\n    <div class=\"eventdiv\">\n        <label for=\"bmisc\">Enter misc expense:</label>\n        <input type=\"number\" min=\"0\" step=\"0.01\" id=\"bmisc\" name=\"bmisc\" required>\n    </div>\n    <div class=\"btn\">\n        <button id=\"cancelbutton\">Cancel</button>\n        <button id=\"submitbutton\">Done</button>\n        <button id=\"printbutton\">Add</button>\n    </div>\n    </form>\n    `;\n    return misccontent;\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/miscpage.js?");

/***/ }),

/***/ "./src/omtgs.js":
/*!**********************!*\
  !*** ./src/omtgs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupOmtgs: () => (/* binding */ setupOmtgs)\n/* harmony export */ });\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/inputs.js\");\n\r\n\r\nfunction setupOmtgs (userinputs, datatables) {\r\n  \r\n  const cancelbtn = document.getElementById('cancelbutton');\r\n  const donebtn = document.getElementById('submitbutton');\r\n  const addbtn = document.getElementById('printbutton');\r\n \r\n  cancelbtn.addEventListener('click', () => {\r\n    clear();\r\n    (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n  });\r\n  donebtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) {\r\n      save(userinputs, datatables);\r\n      assignData(userinputs, datatables);\r\n      (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.setupInputs)(userinputs, datatables);\r\n    }\r\n  });\r\n  addbtn.addEventListener('click', (e) => {\r\n    if (validateForm(e)) {\r\n      save(userinputs, datatables);\r\n      clear();\r\n    }\r\n  });\r\n}\r\nfunction validateForm(e) {\r\n  const myform = document.getElementById('omtgsform');\r\n    if(!myform.checkValidity()) {\r\n      return false;\r\n    }\r\n    e.preventDefault();\r\n    return true;\r\n}\r\nfunction save(userinputs, datatables)  {\r\n  let myarray = [];\r\n  myarray[0] = document.getElementById(\"day\").value;\r\n  myarray[1] = document.getElementById(\"description\").value;\r\n  datatables.omtgs.push(myarray);\r\n  assignData(userinputs, datatables)\r\n  clear();\r\n}\r\nfunction assignData (userinputs, datatables ) {\r\n  userinputs.omtgs = datatables.omtgs.length;\r\n  userinputs.mtgs = Number(userinputs.bmtgs) + Number(userinputs.omtgs);\r\n}\r\nfunction clear () {\r\n  document.getElementById(\"day\").value = \"\";\r\n  document.getElementById(\"description\").value = \"\";\r\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/omtgs.js?");

/***/ }),

/***/ "./src/omtgspage.js":
/*!**************************!*\
  !*** ./src/omtgspage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showOmtgspage: () => (/* binding */ showOmtgspage)\n/* harmony export */ });\nfunction showOmtgspage() {\n    const omtgscontent = `\n    <form id=\"omtgsform\">\n    <div class=\"title\">Enter other official meetings</div>\n    <div class=\"eventdiv\">Date\n        <label for=\"day\"></label>\n        <input type=\"date\" id=\"day\" name=\"day\" required>\n    </div>\n    <div class=\"descdiv\">\n        <textarea id=\"description\" placeholder=\"Description of Work\" required></textarea>\n    </div>\n    <div class=\"btn\">\n        <button id=\"cancelbutton\">Cancel</button>\n        <button id=\"submitbutton\">Done</button>\n        <button id=\"printbutton\">Add</button>\n    </div>\n    </form>\n    `;\n    return omtgscontent;\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/omtgspage.js?");

/***/ }),

/***/ "./src/outputs.js":
/*!************************!*\
  !*** ./src/outputs.js ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (61:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|       element.textContent = Number(value).toFixed(2);\\n|     };\\n>     else {\\n|       console.log({myString});\\n|     }\");\n\n//# sourceURL=webpack://payrollcalculator/./src/outputs.js?");

/***/ }),

/***/ "./src/outputspage.js":
/*!****************************!*\
  !*** ./src/outputspage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showOutputspage: () => (/* binding */ showOutputspage)\n/* harmony export */ });\n\r\nfunction showOutputspage () {\r\n    const outputcontent = `\r\n        <div class=\"flexdiv\">\r\n           <table id=\"outputtable\">\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opsalary\"></td>\r\n                <td> + Salary or Hourly</tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opmtgs\"></td>\r\n                <td> + Meetings</tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"optotalwage\"></td>\r\n                <td> = Total Wages</tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"oppera\"></td>\r\n                <td> - Pera</tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opmedicare\"></td>\r\n                <td> - Medicare</tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opnet\"></td>\r\n                <td> = NET Wage </tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opmiles\"></td>\r\n                <td> + Mileage</tdh>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opphone\"></td>\r\n                <td> + Phone</td>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opinternet\"></td>\r\n                <td> + Internet</td>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"opmisc\"></td>\r\n                <td> + Misc expenses</td>\r\n            </tr>\r\n            <tr>\r\n                <td>$</td>\r\n                <td id=\"optotalpay\"></td>\r\n                <td> = Total Payment</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"btn\">\r\n        <button id=\"cancelbutton\">Cancel</button>\r\n        <button id=\"printbutton\">Print</button>\r\n    </div>\r\n    `;\r\n    return outputcontent;\r\n}\n\n//# sourceURL=webpack://payrollcalculator/./src/outputspage.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;