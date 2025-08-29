/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/icons/output-field.svg":
/*!***************************************!*\
  !*** ./assets/icons/output-field.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg \n    xmlns:x=\"http://ns.adobe.com/Extensibility/1.0/\" \n    xmlns:i=\"http://ns.adobe.com/AdobeIllustrator/10.0/\" \n    xmlns:graph=\"http://ns.adobe.com/Graphs/1.0/\" \n    xmlns=\"http://www.w3.org/2000/svg\" \n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n    version=\"1.1\" x=\"0px\" y=\"0px\" \n    viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n    <switch>\n    <g i:extraneous=\"self\"><g><path d=\"M63.2,23.9c-1.4-1.4-3.6-1.4-5,0c-1.4,1.4-1.4,3.6,0,5l5,5H28.3c-1.9,0-3.5,1.6-3.5,3.5c0,1.9,1.6,3.5,3.5,3.5h34.9l-5,5     c-1.4,1.4-1.4,3.6,0,5c0.7,0.7,1.6,1,2.5,1s1.8-0.3,2.5-1l11-11c0.7-0.7,1-1.6,1-2.5c0-0.9-0.4-1.8-1-2.5L63.2,23.9z\"/>\n    <path d=\"M71.7,59.1H36.8l5-5c1.4-1.4,1.4-3.6,0-5c-1.4-1.4-3.6-1.4-5,0l-11,11c-1.4,1.4-1.4,3.6,0,5l11,11c0.7,0.7,1.6,1,2.5,1     c0.9,0,1.8-0.3,2.5-1c1.4-1.4,1.4-3.6,0-5l-5-5h34.9c1.9,0,3.5-1.6,3.5-3.5C75.2,60.7,73.7,59.1,71.7,59.1z\"/>\n    <path d=\"M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5S97.5,76.2,97.5,50S76.2,2.5,50,2.5z M50,90.5     C27.7,90.5,9.5,72.3,9.5,50S27.7,9.5,50,9.5S90.5,27.7,90.5,50S72.3,90.5,50,90.5z\"/>\n    </g>\n    </g>\n    </switch>\n</svg>";

/***/ }),

/***/ "./src/blocks/output/block.json":
/*!**************************************!*\
  !*** ./src/blocks/output/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"formiflex/output","title":"Output","description":"A block to display number output.","category":"formiflex","ancestor":["formiflex/form"],"icon":"number","textdomain":"formiflex","attributes":{"text":{"type":"string","source":"text","selector":"span","default":""}},"supports":{"html":false,"lock":false,"reusable":false,"inserter":true,"color":{"background":true,"text":true},"spacing":{"padding":["left","right"],"margin":["left","right"]},"__experimentalBorder":{"radius":true,"width":true,"color":true,"style":true},"typography":{"fontSize":true}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/blocks/output/index.js":
/*!************************************!*\
  !*** ./src/blocks/output/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ \"./src/blocks/output/block.json\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_output_field_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/output-field.svg */ \"./assets/icons/output-field.svg\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ \"./src/blocks/output/style.scss\");\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n\n\n\n\n\n\n/**\n * Every block starts by registering a new block type definition.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {\n  icon: /* non-default import from non-esm module */undefined,\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();\n    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, _extends({}, blockProps, {\n      tagName: \"output\",\n      value: attributes.text,\n      onChange: function onChange(val) {\n        return setAttributes({\n          text: val\n        });\n      },\n      placeholder: '55',\n      allowedFormats: []\n    }));\n  },\n  save: function save(_ref2) {\n    var attributes = _ref2.attributes;\n    return /*#__PURE__*/React.createElement(\"output\", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), attributes.text);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL291dHB1dC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0Q7QUFDbEI7QUFDOEI7QUFDZ0I7QUFFNUQ7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsb0VBQWlCLENBQUVDLHdDQUFRLEVBQUU7RUFDNUJLLElBQUksRUFBRUQscURBQU07RUFFWkUsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUFDLElBQUEsRUFBdUM7SUFBQSxJQUFqQ0MsVUFBVSxHQUFBRCxJQUFBLENBQVZDLFVBQVU7TUFBRUMsYUFBYSxHQUFBRixJQUFBLENBQWJFLGFBQWE7SUFDbEMsSUFBTUMsVUFBVSxHQUFHVCxzRUFBYSxDQUFDLENBQUM7SUFFbEMsb0JBQ0NVLEtBQUEsQ0FBQUMsYUFBQSxDQUFDViw2REFBUSxFQUFBVyxRQUFBLEtBQ0hILFVBQVU7TUFDZkksT0FBTyxFQUFDLFFBQVE7TUFDaEJDLEtBQUssRUFBR1AsVUFBVSxDQUFDUSxJQUFNO01BQ3pCQyxRQUFRLEVBQUcsU0FBWEEsUUFBUUEsQ0FBS0MsR0FBRztRQUFBLE9BQU1ULGFBQWEsQ0FBRTtVQUFFTyxJQUFJLEVBQUVFO1FBQUksQ0FBRSxDQUFDO01BQUEsQ0FBRTtNQUN0REMsV0FBVyxFQUFHLElBQU07TUFDcEJDLGNBQWMsRUFBRztJQUFJLEVBQ3JCLENBQUM7RUFFSixDQUFDO0VBRURDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBQyxLQUFBO0lBQUEsSUFBTWQsVUFBVSxHQUFBYyxLQUFBLENBQVZkLFVBQVU7SUFBQSxvQkFDbkJHLEtBQUEsQ0FBQUMsYUFBQSxXQUFhWCxrRUFBYSxDQUFDb0IsSUFBSSxDQUFDLENBQUMsRUFBS2IsVUFBVSxDQUFDUSxJQUFjLENBQUM7RUFBQTtBQUVsRSxDQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtaWZsZXgvLi9zcmMvYmxvY2tzL291dHB1dC9pbmRleC5qcz83NDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgeyB1c2VCbG9ja1Byb3BzLCBSaWNoVGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIE91dHB1dCB9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9vdXRwdXQtZmllbGQuc3ZnJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEV2ZXJ5IGJsb2NrIHN0YXJ0cyBieSByZWdpc3RlcmluZyBhIG5ldyBibG9jayB0eXBlIGRlZmluaXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL2Jsb2NrLWVkaXRvci9yZWZlcmVuY2UtZ3VpZGVzL2Jsb2NrLWFwaS9ibG9jay1yZWdpc3RyYXRpb24vXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCBtZXRhZGF0YSwge1xuXHRpY29uOiBPdXRwdXQsXG5cblx0ZWRpdDogKCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApID0+IHtcblx0XHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHR7IC4uLmJsb2NrUHJvcHMgfVxuXHRcdFx0XHR0YWdOYW1lPVwib3V0cHV0XCJcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnRleHQgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggdmFsICkgPT4gc2V0QXR0cmlidXRlcyggeyB0ZXh0OiB2YWwgfSApIH1cblx0XHRcdFx0cGxhY2Vob2xkZXI9eyAnNTUnIH1cblx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogKCB7IGF0dHJpYnV0ZXMgfSApID0+IChcblx0XHQ8b3V0cHV0IHsgLi4udXNlQmxvY2tQcm9wcy5zYXZlKCkgfT57IGF0dHJpYnV0ZXMudGV4dCB9PC9vdXRwdXQ+XG5cdCksXG59ICk7XG4iXSwibmFtZXMiOlsicmVnaXN0ZXJCbG9ja1R5cGUiLCJtZXRhZGF0YSIsInVzZUJsb2NrUHJvcHMiLCJSaWNoVGV4dCIsIlJlYWN0Q29tcG9uZW50IiwiT3V0cHV0IiwiaWNvbiIsImVkaXQiLCJfcmVmIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZXMiLCJibG9ja1Byb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJ0YWdOYW1lIiwidmFsdWUiLCJ0ZXh0Iiwib25DaGFuZ2UiLCJ2YWwiLCJwbGFjZWhvbGRlciIsImFsbG93ZWRGb3JtYXRzIiwic2F2ZSIsIl9yZWYyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/output/index.js\n\n}");

/***/ }),

/***/ "./src/blocks/output/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/output/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL291dHB1dC9zdHlsZS5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1pZmxleC8uL3NyYy9ibG9ja3Mvb3V0cHV0L3N0eWxlLnNjc3M/OTU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/output/style.scss\n\n}");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/blocks/output/index.js");
/******/ 	
/******/ })()
;