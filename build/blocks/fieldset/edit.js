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

/***/ "./src/blocks/fieldset/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/fieldset/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Edit)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\nvar _excluded = [\"children\"];\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }\n\n\n\nfunction Edit(_ref) {\n  var attributes = _ref.attributes,\n    className = _ref.className,\n    setAttributes = _ref.setAttributes;\n  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();\n  var _useInnerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {\n      templateLock: false\n    }),\n    children = _useInnerBlocksProps.children,\n    innerBlocksProps = _objectWithoutProperties(_useInnerBlocksProps, _excluded);\n  return /*#__PURE__*/React.createElement(\"fieldset\", innerBlocksProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {\n    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Options', 'formiflex'),\n    initialOpen: true\n  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Legend', 'formiflex'),\n    checked: attributes.showLegend,\n    onChange: function onChange(newval) {\n      return setAttributes({\n        showLegend: newval\n      });\n    },\n    __nextHasNoMarginBottom: true\n  }))), attributes.showLegend && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {\n    tagName: \"legend\",\n    className: className,\n    value: attributes.legend,\n    onChange: function onChange(legend) {\n      return setAttributes({\n        legend: legend\n      });\n    },\n    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter legend…', 'formiflex'),\n    allowedFormats: []\n  }), children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2ZpZWxkc2V0L2VkaXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxQztBQUU0QjtBQU1oQztBQUVsQixTQUFTTyxJQUFJQSxDQUFBQyxJQUFBLEVBQTZDO0VBQUEsSUFBekNDLFVBQVUsR0FBQUQsSUFBQSxDQUFWQyxVQUFVO0lBQUVDLFNBQVMsR0FBQUYsSUFBQSxDQUFURSxTQUFTO0lBQUVDLGFBQWEsR0FBQUgsSUFBQSxDQUFiRyxhQUFhO0VBQ25FLElBQU1DLFVBQVUsR0FBR04sc0VBQWEsQ0FBQyxDQUFDO0VBRWxDLElBQUFPLG9CQUFBLEdBQTBDUiw0RUFBbUIsQ0FBRU8sVUFBVSxFQUFFO01BQzFFRSxZQUFZLEVBQUU7SUFDZixDQUFFLENBQUM7SUFGS0MsUUFBUSxHQUFBRixvQkFBQSxDQUFSRSxRQUFRO0lBQUtDLGdCQUFnQixHQUFBQyx3QkFBQSxDQUFBSixvQkFBQSxFQUFBSyxTQUFBO0VBSXJDLG9CQUNDQyxLQUFBLENBQUFDLGFBQUEsYUFBZUosZ0JBQWdCLGVBQzlCRyxLQUFBLENBQUFDLGFBQUEsQ0FBQ2pCLHNFQUFpQixxQkFDakJnQixLQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLDREQUFTO0lBQ1RtQixLQUFLLEVBQUdyQixtREFBRSxDQUFFLFNBQVMsRUFBRSxXQUFZLENBQUc7SUFDdENzQixXQUFXLEVBQUc7RUFBTSxnQkFFcEJILEtBQUEsQ0FBQUMsYUFBQSxDQUFDbkIsZ0VBQWE7SUFDYnNCLEtBQUssRUFBR3ZCLG1EQUFFLENBQUUsYUFBYSxFQUFFLFdBQVksQ0FBRztJQUMxQ3dCLE9BQU8sRUFBR2YsVUFBVSxDQUFDZ0IsVUFBWTtJQUNqQ0MsUUFBUSxFQUFHLFNBQVhBLFFBQVFBLENBQUtDLE1BQU07TUFBQSxPQUNsQmhCLGFBQWEsQ0FBRTtRQUFFYyxVQUFVLEVBQUVFO01BQU8sQ0FBRSxDQUFDO0lBQUEsQ0FDdkM7SUFDREMsdUJBQXVCO0VBQUEsQ0FDdkIsQ0FDUyxDQUNPLENBQUMsRUFDbEJuQixVQUFVLENBQUNnQixVQUFVLGlCQUN0Qk4sS0FBQSxDQUFBQyxhQUFBLENBQUNoQiw2REFBUTtJQUNSeUIsT0FBTyxFQUFDLFFBQVE7SUFDaEJuQixTQUFTLEVBQUdBLFNBQVc7SUFDdkJvQixLQUFLLEVBQUdyQixVQUFVLENBQUNzQixNQUFRO0lBQzNCTCxRQUFRLEVBQUcsU0FBWEEsUUFBUUEsQ0FBS0ssTUFBTTtNQUFBLE9BQU1wQixhQUFhLENBQUU7UUFBRW9CLE1BQU0sRUFBTkE7TUFBTyxDQUFFLENBQUM7SUFBQSxDQUFFO0lBQ3REQyxXQUFXLEVBQUdoQyxtREFBRSxDQUFFLGVBQWUsRUFBRSxXQUFZLENBQUc7SUFDbERpQyxjQUFjLEVBQUc7RUFBSSxDQUNyQixDQUNELEVBRUNsQixRQUNPLENBQUM7QUFFYiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1pZmxleC8uL3NyYy9ibG9ja3MvZmllbGRzZXQvZWRpdC5qcz8wYTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgVG9nZ2xlQ29udHJvbCwgUGFuZWxCb2R5IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRSaWNoVGV4dCxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IHsgY2hpbGRyZW4sIC4uLmlubmVyQmxvY2tzUHJvcHMgfSA9IHVzZUlubmVyQmxvY2tzUHJvcHMoIGJsb2NrUHJvcHMsIHtcblx0XHR0ZW1wbGF0ZUxvY2s6IGZhbHNlLFxuXHR9ICk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZmllbGRzZXQgeyAuLi5pbm5lckJsb2Nrc1Byb3BzIH0+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnT3B0aW9ucycsICdmb3JtaWZsZXgnICkgfVxuXHRcdFx0XHRcdGluaXRpYWxPcGVuPXsgdHJ1ZSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgTGVnZW5kJywgJ2Zvcm1pZmxleCcgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zaG93TGVnZW5kIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXd2YWwgKSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHNob3dMZWdlbmQ6IG5ld3ZhbCB9IClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0eyBhdHRyaWJ1dGVzLnNob3dMZWdlbmQgJiYgKFxuXHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHR0YWdOYW1lPVwibGVnZW5kXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5sZWdlbmQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBsZWdlbmQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxlZ2VuZCB9ICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdFbnRlciBsZWdlbmTigKYnLCAnZm9ybWlmbGV4JyApIH1cblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0Lz5cblx0XHRcdCkgfVxuXG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L2ZpZWxkc2V0PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIl9fIiwiVG9nZ2xlQ29udHJvbCIsIlBhbmVsQm9keSIsIkluc3BlY3RvckNvbnRyb2xzIiwiUmljaFRleHQiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwidXNlQmxvY2tQcm9wcyIsIkVkaXQiLCJfcmVmIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZXMiLCJibG9ja1Byb3BzIiwiX3VzZUlubmVyQmxvY2tzUHJvcHMiLCJ0ZW1wbGF0ZUxvY2siLCJjaGlsZHJlbiIsImlubmVyQmxvY2tzUHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsImluaXRpYWxPcGVuIiwibGFiZWwiLCJjaGVja2VkIiwic2hvd0xlZ2VuZCIsIm9uQ2hhbmdlIiwibmV3dmFsIiwiX19uZXh0SGFzTm9NYXJnaW5Cb3R0b20iLCJ0YWdOYW1lIiwidmFsdWUiLCJsZWdlbmQiLCJwbGFjZWhvbGRlciIsImFsbG93ZWRGb3JtYXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/fieldset/edit.js\n\n}");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/blocks/fieldset/edit.js");
/******/ 	
/******/ })()
;