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

/***/ "./src/blocks/message/edit.js":
/*!************************************!*\
  !*** ./src/blocks/message/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Edit)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ \"@wordpress/core-data\");\n/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);\nvar _excluded = [\"children\"];\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }\n\n\n\n\n\nfunction Edit(_ref) {\n  var attributes = _ref.attributes,\n    clientId = _ref.clientId,\n    setAttributes = _ref.setAttributes;\n  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({\n    className: 'success'\n  });\n  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {\n      var _select = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store),\n        getBlock = _select.getBlock;\n      var block = getBlock(clientId);\n      return {\n        hasInnerBlocks: !!(block && block.innerBlocks.length)\n      };\n    }, [clientId]),\n    hasInnerBlocks = _useSelect.hasInnerBlocks;\n  var _useInnerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {\n      templateLock: false,\n      renderAppender: hasInnerBlocks ? null : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.DefaultBlockAppender\n    }),\n    children = _useInnerBlocksProps.children,\n    innerBlocksProps = _objectWithoutProperties(_useInnerBlocksProps, _excluded);\n  var _useEntityProp = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('root', 'site', 'formiflex'),\n    _useEntityProp2 = _slicedToArray(_useEntityProp, 1),\n    formiflex = _useEntityProp2[0];\n  return /*#__PURE__*/React.createElement(\"div\", innerBlocksProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {\n    tagName: \"p\",\n    value: attributes.text,\n    onChange: function onChange(val) {\n      return setAttributes({\n        text: val\n      });\n    },\n    placeholder: formiflex === null || formiflex === void 0 ? void 0 : formiflex.messages.form.success\n  }), children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21lc3NhZ2UvZWRpdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUU0QjtBQVFoQztBQUNXO0FBQ1M7QUFFdEMsU0FBU1ksSUFBSUEsQ0FBQUMsSUFBQSxFQUE0QztFQUFBLElBQXhDQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtJQUFFQyxhQUFhLEdBQUFILElBQUEsQ0FBYkcsYUFBYTtFQUNsRSxJQUFNQyxVQUFVLEdBQUdWLHNFQUFhLENBQUU7SUFDakNXLFNBQVMsRUFBRTtFQUNaLENBQUUsQ0FBQztFQUVILElBQUFDLFVBQUEsR0FBMkJULDBEQUFTLENBQ25DLFVBQUVVLE1BQU0sRUFBTTtNQUNiLElBQUFDLE9BQUEsR0FBcUJELE1BQU0sQ0FBRWYsMERBQWlCLENBQUM7UUFBdkNpQixRQUFRLEdBQUFELE9BQUEsQ0FBUkMsUUFBUTtNQUNoQixJQUFNQyxLQUFLLEdBQUdELFFBQVEsQ0FBRVAsUUFBUyxDQUFDO01BQ2xDLE9BQU87UUFDTlMsY0FBYyxFQUFFLENBQUMsRUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLFdBQVcsQ0FBQ0MsTUFBTTtNQUN2RCxDQUFDO0lBQ0YsQ0FBQyxFQUNELENBQUVYLFFBQVEsQ0FDWCxDQUFDO0lBVE9TLGNBQWMsR0FBQUwsVUFBQSxDQUFkSyxjQUFjO0VBV3RCLElBQUFHLG9CQUFBLEdBQTBDckIsNEVBQW1CLENBQUVXLFVBQVUsRUFBRTtNQUMxRVcsWUFBWSxFQUFFLEtBQUs7TUFDbkJDLGNBQWMsRUFBRUwsY0FBYyxHQUMzQixJQUFJLEdBQ0poQixnRUFBVyxDQUFDc0I7SUFDaEIsQ0FBRSxDQUFDO0lBTEtDLFFBQVEsR0FBQUosb0JBQUEsQ0FBUkksUUFBUTtJQUFLQyxnQkFBZ0IsR0FBQUMsd0JBQUEsQ0FBQU4sb0JBQUEsRUFBQU8sU0FBQTtFQU9yQyxJQUFBQyxjQUFBLEdBQXNCeEIsbUVBQWEsQ0FBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVksQ0FBQztJQUFBeUIsZUFBQSxHQUFBQyxjQUFBLENBQUFGLGNBQUE7SUFBMURHLFNBQVMsR0FBQUYsZUFBQTtFQUVqQixvQkFDQ0csS0FBQSxDQUFBQyxhQUFBLFFBQVVSLGdCQUFnQixlQUN6Qk8sS0FBQSxDQUFBQyxhQUFBLENBQUMvQiw2REFBUTtJQUNSZ0MsT0FBTyxFQUFDLEdBQUc7SUFDWEMsS0FBSyxFQUFHNUIsVUFBVSxDQUFDNkIsSUFBTTtJQUN6QkMsUUFBUSxFQUFHLFNBQVhBLFFBQVFBLENBQUtDLEdBQUc7TUFBQSxPQUFNN0IsYUFBYSxDQUFFO1FBQUUyQixJQUFJLEVBQUVFO01BQUksQ0FBRSxDQUFDO0lBQUEsQ0FBRTtJQUN0REMsV0FBVyxFQUFHUixTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBRVMsUUFBUSxDQUFDQyxJQUFJLENBQUNDO0VBQVMsQ0FDaEQsQ0FBQyxFQUNBbEIsUUFDRSxDQUFDO0FBRVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtaWZsZXgvLi9zcmMvYmxvY2tzL21lc3NhZ2UvZWRpdC5qcz8xNmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgVG9nZ2xlQ29udHJvbCwgUGFuZWxCb2R5IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHRJbm5lckJsb2Nrcyxcblx0UmljaFRleHQsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1c2VFbnRpdHlQcm9wIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCB7IGF0dHJpYnV0ZXMsIGNsaWVudElkLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7XG5cdFx0Y2xhc3NOYW1lOiAnc3VjY2VzcycsXG5cdH0gKTtcblxuXHRjb25zdCB7IGhhc0lubmVyQmxvY2tzIH0gPSB1c2VTZWxlY3QoXG5cdFx0KCBzZWxlY3QgKSA9PiB7XG5cdFx0XHRjb25zdCB7IGdldEJsb2NrIH0gPSBzZWxlY3QoIGJsb2NrRWRpdG9yU3RvcmUgKTtcblx0XHRcdGNvbnN0IGJsb2NrID0gZ2V0QmxvY2soIGNsaWVudElkICk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoYXNJbm5lckJsb2NrczogISEgKCBibG9jayAmJiBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRbIGNsaWVudElkIF1cblx0KTtcblxuXHRjb25zdCB7IGNoaWxkcmVuLCAuLi5pbm5lckJsb2Nrc1Byb3BzIH0gPSB1c2VJbm5lckJsb2Nrc1Byb3BzKCBibG9ja1Byb3BzLCB7XG5cdFx0dGVtcGxhdGVMb2NrOiBmYWxzZSxcblx0XHRyZW5kZXJBcHBlbmRlcjogaGFzSW5uZXJCbG9ja3Ncblx0XHRcdD8gbnVsbFxuXHRcdFx0OiBJbm5lckJsb2Nrcy5EZWZhdWx0QmxvY2tBcHBlbmRlcixcblx0fSApO1xuXG5cdGNvbnN0IFsgZm9ybWlmbGV4IF0gPSB1c2VFbnRpdHlQcm9wKCAncm9vdCcsICdzaXRlJywgJ2Zvcm1pZmxleCcgKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgeyAuLi5pbm5lckJsb2Nrc1Byb3BzIH0+XG5cdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0dGFnTmFtZT1cInBcIlxuXHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGV4dCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWwgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRleHQ6IHZhbCB9ICkgfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IGZvcm1pZmxleD8ubWVzc2FnZXMuZm9ybS5zdWNjZXNzIH1cblx0XHRcdC8+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJfXyIsIlRvZ2dsZUNvbnRyb2wiLCJQYW5lbEJvZHkiLCJJbnNwZWN0b3JDb250cm9scyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsInVzZUlubmVyQmxvY2tzUHJvcHMiLCJ1c2VCbG9ja1Byb3BzIiwiSW5uZXJCbG9ja3MiLCJSaWNoVGV4dCIsInVzZVNlbGVjdCIsInVzZUVudGl0eVByb3AiLCJFZGl0IiwiX3JlZiIsImF0dHJpYnV0ZXMiLCJjbGllbnRJZCIsInNldEF0dHJpYnV0ZXMiLCJibG9ja1Byb3BzIiwiY2xhc3NOYW1lIiwiX3VzZVNlbGVjdCIsInNlbGVjdCIsIl9zZWxlY3QiLCJnZXRCbG9jayIsImJsb2NrIiwiaGFzSW5uZXJCbG9ja3MiLCJpbm5lckJsb2NrcyIsImxlbmd0aCIsIl91c2VJbm5lckJsb2Nrc1Byb3BzIiwidGVtcGxhdGVMb2NrIiwicmVuZGVyQXBwZW5kZXIiLCJEZWZhdWx0QmxvY2tBcHBlbmRlciIsImNoaWxkcmVuIiwiaW5uZXJCbG9ja3NQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl91c2VFbnRpdHlQcm9wIiwiX3VzZUVudGl0eVByb3AyIiwiX3NsaWNlZFRvQXJyYXkiLCJmb3JtaWZsZXgiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwidmFsdWUiLCJ0ZXh0Iiwib25DaGFuZ2UiLCJ2YWwiLCJwbGFjZWhvbGRlciIsIm1lc3NhZ2VzIiwiZm9ybSIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/message/edit.js\n\n}");

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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/blocks/message/edit.js");
/******/ 	
/******/ })()
;