/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"home":"home"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  data: () => ({\n    //\n  })\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-view\");\n  const _component_v_main = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"v-main\");\n  const _component_v_app = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"v-app\");\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_v_app, null, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_v_main, null, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_view)]),\n      _: 1 /* STABLE */\n    })]),\n    _: 1 /* STABLE */\n  });\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/main.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??ref--7-oneOf-3-2!./src/assets/main.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\"]);\n// Module\nexports.push([module.i, \"#app {\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.space {\\r\\n    padding-top: 5%;\\r\\n}\\r\\n\\r\\n.space-2 {\\r\\n    padding-top: 15%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ninput::-webkit-input-placeholder {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.text-primary-m {\\r\\n    color: #4046ff;\\r\\n}\\r\\n\\r\\n.btn-primary {\\r\\n    background-color: #4046ff;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n    font-weight: 900;\\r\\n    font-size: 3rem;\\r\\n}\\r\\n\\r\\n.heading-2 {\\r\\n    font-size: 2.6rem;\\r\\n}\\r\\n\\r\\n.sub-heading {\\r\\n    font-size: 1.1rem;\\r\\n    max-width: 80%;\\r\\n}\\r\\n\\r\\n.title {\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n.sub-title {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.text-me {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.sub-title-2 {\\r\\n    font-size: 16px;\\r\\n    font-weight: lighter;\\r\\n}\\r\\n\\r\\n.foto-heading {\\r\\n    position: relative;\\r\\n    max-width: 80%;\\r\\n    height: auto;\\r\\n    top: -16px;\\r\\n    left: 7%;\\r\\n}\\r\\n\\r\\nmark {\\r\\n    display: inline-block;\\r\\n    line-height: 0em;\\r\\n    padding-top: 0em;\\r\\n    padding-bottom: 0.3em;\\r\\n    background-color: #EFF4FF;\\r\\n}\\r\\n\\r\\n.brand {\\r\\n    color: #747474;\\r\\n}\\r\\n\\r\\n.vlh {\\r\\n    border-left: 4px solid #4FC033;\\r\\n    height: 500px;\\r\\n    margin-right: 1.5%;\\r\\n    /* opacity: 50%; */\\r\\n}\\r\\n\\r\\n.w-95 {\\r\\n    width: 95%;\\r\\n}\\r\\n\\r\\n.w-90 {\\r\\n    width: 90%;\\r\\n}\\r\\n\\r\\n.hover-card {\\r\\n    transition: all 0.8s;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.hover-card:hover {\\r\\n    box-shadow: 2px 14px 22px -2px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.border-none {\\r\\n    border: 0px;\\r\\n    border-radius: 5%;\\r\\n}\\r\\n\\r\\n.border-none-1 {\\r\\n    border: 0px;\\r\\n}\\r\\n\\r\\n.border-none-testi {\\r\\n    border: 0px;\\r\\n}\\r\\n\\r\\n.bg-wave {\\r\\n    position: relative;\\r\\n    background-image: url('/asset/bg/bg-wave.png');\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat;\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.box-team {\\r\\n    position: relative;\\r\\n    height: 20em;\\r\\n    max-width: 100%;\\r\\n}\\r\\n\\r\\n.box-aboutme {\\r\\n    margin-top: 12rem;\\r\\n}\\r\\n\\r\\n.bg-testi {\\r\\n    background-image: url('/asset/bg/bg-testi.png');\\r\\n    background-size: 85% 45%;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position-x: center;\\r\\n    background-position-y: center;\\r\\n    background-position: center;\\r\\n}\\r\\n\\r\\n.bg-portofolio {\\r\\n    width: 90%;\\r\\n}\\r\\n\\r\\n.vid-about-me {\\r\\n    width: 600px;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.bg-review {\\r\\n    width: 90%;\\r\\n}\\r\\n\\r\\n.box-footer {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.bg-footer {\\r\\n    width: 90%;\\r\\n}\\r\\n\\r\\n.bg-footer-1 {\\r\\n    position: absolute;\\r\\n    left: 30px;\\r\\n    top: 100px;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n.bg-footer-2 {\\r\\n    position: absolute;\\r\\n    right: 160px;\\r\\n    top: 460px;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n.bg-light-primary {\\r\\n    background-color: #ebf3ff;\\r\\n    color: #4c8dee;\\r\\n}\\r\\n\\r\\n.bg-footer {\\r\\n    background-color: #407BFF;\\r\\n}\\r\\n\\r\\n.text-green-me {\\r\\n    color: #AEFF9C;\\r\\n}\\r\\n\\r\\n.frame {\\r\\n    width: 60px;\\r\\n    height: 60px;\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n.frame-logo {\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover;\\r\\n    -o-object-position: center;\\r\\n       object-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n@media (min-width: 320px) and (max-width: 480px) {\\r\\n\\r\\n    .container{\\r\\n        max-width: 100%;\\r\\n        padding: 50px;\\r\\n    }\\r\\n\\r\\n    .resize-nav{\\r\\n       padding-bottom: 0em !important;\\r\\n       padding-top: 1.5em !important;\\r\\n    }\\r\\n\\r\\n    .heading {\\r\\n        font-weight: 900;\\r\\n        font-size: 1.9rem;\\r\\n        /* margin-top: -1em; */\\r\\n    }\\r\\n\\r\\n    .heading-2 {\\r\\n        font-size: 1.9rem;\\r\\n    }\\r\\n\\r\\n    .sub-heading {\\r\\n        font-size: 1.1rem;\\r\\n        max-width: 100%;\\r\\n    }\\r\\n\\r\\n    .sub-heading-resize{\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n\\r\\n    .text-guidlines {\\r\\n        font-size: 0.96rem;\\r\\n    }\\r\\n\\r\\n    .vlh {\\r\\n        border-left: 4px solid #4FC033;\\r\\n        height: 500px;\\r\\n        margin-right: 5%;\\r\\n        /* opacity: 50%; */\\r\\n    }\\r\\n\\r\\n    .text-mail {\\r\\n        padding-left: 3em;\\r\\n    }\\r\\n\\r\\n    .img-mail {\\r\\n        margin-left: 5.5em;\\r\\n    }\\r\\n\\r\\n    mark {\\r\\n        display: inline-block;\\r\\n        line-height: 0em;\\r\\n        padding-top: 0em;\\r\\n        padding-bottom: 0.3em;\\r\\n        background-color: #EFF4FF;\\r\\n    }\\r\\n\\r\\n    .foto-heading {\\r\\n        position: static;\\r\\n        max-width: 95%;\\r\\n        height: auto;\\r\\n        padding-top: 1em;\\r\\n    }\\r\\n\\r\\n    .sub-title {\\r\\n        font-size: 16px;\\r\\n    }\\r\\n\\r\\n    .text-size {\\r\\n        font-size: 15px;\\r\\n    }\\r\\n\\r\\n    .summary {\\r\\n        padding-left: 2em;\\r\\n    }\\r\\n\\r\\n    .connect-me {\\r\\n        margin-top: 1.5em;\\r\\n        margin-bottom: 2em;\\r\\n    }\\r\\n\\r\\n    .title-specialize {\\r\\n        font-size: 20px;\\r\\n\\r\\n    }\\r\\n\\r\\n    .guidelines {\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    .guidelines .text-end {\\r\\n        padding-right: 95px;\\r\\n    }\\r\\n    \\r\\n    .figma-resize{\\r\\n        padding-right: 8% !important;\\r\\n    }\\r\\n\\r\\n    .foto-specialize {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .hire-me {\\r\\n        padding-bottom: 20px;\\r\\n    }\\r\\n\\r\\n    .card-porto {\\r\\n        --bs-gutter-x: 0rem;\\r\\n    }\\r\\n\\r\\n    .avatar-porto {\\r\\n        margin-right: 1.5em !important;\\r\\n        margin-left: 0em !important;\\r\\n    }\\r\\n\\r\\n    .bg-wave {\\r\\n        position: relative;\\r\\n        background-image: url('/asset/bg/bg-wave.png');\\r\\n        background-size: cover;\\r\\n        background-repeat: no-repeat;\\r\\n        height: auto;\\r\\n    }\\r\\n\\r\\n    /* Visit My Team */\\r\\n\\r\\n\\r\\n    .box-team {\\r\\n        padding: 0rem;\\r\\n        margin: 0rem;\\r\\n            position: relative;\\r\\n            height: 20em;\\r\\n            max-width: 100%;\\r\\n            display: none;\\r\\n    }\\r\\n\\r\\n    .text-vt {\\r\\n        font-size: 12px;\\r\\n    }\\r\\n\\r\\n    .text-vt-2 {\\r\\n        font-size: 11px;\\r\\n    }\\r\\n\\r\\n    .bg-testi {\\r\\n        background-image: none;\\r\\n    }\\r\\n\\r\\n    .img-ava{\\r\\n        width: 9em;\\r\\n    }\\r\\n\\r\\n    .btn-resize{\\r\\n        padding: 0.25rem 0.5rem;\\r\\n        font-size: 0.875rem;\\r\\n        border-radius: 0.2rem;\\r\\n    }\\r\\n\\r\\n    .margin-resize{\\r\\n        margin-top: 15px !important;\\r\\n    }\\r\\n\\r\\n    .body-resize{\\r\\n        padding-top: 0% !important;\\r\\n        padding-bottom: 0% !important;\\r\\n    }\\r\\n\\r\\n    /* ---------------------- */\\r\\n\\r\\n    .box-aboutme {\\r\\n        margin-top: 1rem;\\r\\n    }\\r\\n\\r\\n    .vid-about-me {\\r\\n        max-width: 100%;\\r\\n        height: auto;\\r\\n    }\\r\\n\\r\\n    .text-me {\\r\\n        font-size: 16px;\\r\\n    }\\r\\n\\r\\n    .list-about-me {\\r\\n        margin-left: 0em !important;\\r\\n        margin-right: 0em !important;\\r\\n    }\\r\\n\\r\\n    .card-review {\\r\\n        margin-left: 0em !important;\\r\\n        margin-right: 0em !important;\\r\\n    }\\r\\n\\r\\n    .card-name-review {\\r\\n        margin-left: 1em !important;\\r\\n        margin-right: 0em !important;\\r\\n    }\\r\\n\\r\\n    .box-footer {\\r\\n        margin-top: 5em;\\r\\n        padding: 0em;\\r\\n    }\\r\\n\\r\\n    .bg-footer-1 {\\r\\n        position: absolute;\\r\\n        height: 8em;\\r\\n        left: -50px;\\r\\n        top: -35px;\\r\\n        z-index: 1;\\r\\n    }\\r\\n\\r\\n    .bg-footer-2 {\\r\\n        position: absolute;\\r\\n        height: 3.5em;\\r\\n        right: 10px;\\r\\n        top: 284px;\\r\\n        z-index: 1;\\r\\n    }\\r\\n\\r\\n    .text-have {\\r\\n        font-size: 1em;\\r\\n        padding-top: 1em;\\r\\n    }\\r\\n\\r\\n    .bg-footer {\\r\\n        width: 100%;\\r\\n        padding-top: 0em;\\r\\n    }\\r\\n\\r\\n    .bg-card-footer {\\r\\n        padding-top: 0em;\\r\\n        margin-top: 1em !important;\\r\\n        margin-bottom: 1em !important;\\r\\n    }\\r\\n\\r\\n    .text-sk {\\r\\n        font-size: 0.6em;\\r\\n    }\\r\\n\\r\\n    .footer {\\r\\n        padding-top: 5em;\\r\\n    }\\r\\n\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/main.css?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??ref--7-oneOf-3-2");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var C_Users_Acer_Documents_Mada_Macbook_New_folder_nabielmada_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Users_Acer_Documents_Mada_Macbook_New_folder_nabielmada_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Acer_Documents_Mada_Macbook_New_folder_nabielmada_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Users_Acer_Documents_Mada_Macbook_New_folder_nabielmada_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/main.css":
/*!*****************************!*\
  !*** ./src/assets/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-3-1!../../node_modules/postcss-loader/src??ref--7-oneOf-3-2!./main.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/main.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"55967a99\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/assets/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/vuetify */ \"./src/plugins/vuetify.js\");\n/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_store__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vue_kinesis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-kinesis */ \"./node_modules/vue-kinesis/dist/vue-kinesis.esm.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_assets_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! /src/assets/main.css */ \"./src/assets/main.css\");\n/* harmony import */ var _src_assets_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_assets_main_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar VueScrollTo = __webpack_require__(/*! vue-scrollto */ \"./node_modules/vue-scrollto/vue-scrollto.js\");\nObject(vue__WEBPACK_IMPORTED_MODULE_0__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(_store__WEBPACK_IMPORTED_MODULE_4___default.a).use(_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).use(vue_kinesis__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(VueScrollTo).use(_plugins_vuetify__WEBPACK_IMPORTED_MODULE_2___default.a).mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/plugins/vuetify.js":
/*!********************************!*\
  !*** ./src/plugins/vuetify.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import '@mdi/font/css/materialdesignicons.css'\n// import 'vuetify/lib/styles/main.sass'\n// import { createVuetify } from 'vuetify'\n// import * as components from 'vuetify/lib/components'\n// import * as directives from 'vuetify/lib/directives'\n\n// export default createVuetify({\n//   components,\n//   directives,\n// })\n\n//# sourceURL=webpack:///./src/plugins/vuetify.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\nconst routes = [{\n  path: '/',\n  name: 'Home',\n  component: () => __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./src/views/Home.vue\"))\n}];\nconst router = Object(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"createWebHistory\"])(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { createStore } from 'vuex'\n\n// export default createStore({\n//   state: {\n//   },\n//   mutations: {\n//   },\n//   actions: {\n//   },\n//   modules: {\n//   }\n// })\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });