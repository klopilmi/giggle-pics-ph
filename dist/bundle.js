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

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_data_bannerData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static-data/bannerData.js */ \"./static-data/bannerData.js\");\n/* harmony import */ var _static_data_categoriesData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static-data/categoriesData.js */ \"./static-data/categoriesData.js\");\n/* harmony import */ var _static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static-data/headerData.js */ \"./static-data/headerData.js\");\n/* harmony import */ var _static_data_qouteData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static-data/qouteData.js */ \"./static-data/qouteData.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./assets/js/utils.js\");\n\n\n\n\n\n\n// ================ Header Data =======================\n\nconst annnoucementEl = document.querySelector(\".header-announcement\");\nannnoucementEl.innerHTML = _static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__.annnoucement;\n\nconst logoEl = document.querySelector(\".header-logo-container\");\nconst a = document.createElement(\"a\");\na.href = _static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__.logo.href;\n\nconst img = document.createElement(\"img\");\nimg.alt = _static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__.logo.title;\nimg.src = _static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__.logo.logoUrl;\nimg.className = \"header-logo\";\n\na.appendChild(img);\nlogoEl.appendChild(a);\n\nconst headerSocials = document.getElementById(\"header-socials\");\n\n_static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__.socials.forEach((social) => {\n  const a = document.createElement(\"a\");\n  a.className = social.className;\n  a.href = \"#\";\n\n  const img = document.createElement(\"img\");\n  img.src = social.imgUrl;\n  img.alt = social.alt;\n  img.className = `icon`;\n\n  a.appendChild(img);\n  headerSocials.appendChild(a);\n});\n\nconst navigationBar = document.getElementById(\"navigation-bar\");\n_static_data_headerData_js__WEBPACK_IMPORTED_MODULE_2__.navigations.forEach((item) => {\n  const a = document.createElement(\"a\");\n  a.className = \"nav-item\";\n  a.href = item.url;\n  a.textContent = item.text;\n  navigationBar.appendChild(a);\n});\n\n// ================ Banner Data =======================\n\nconst bannerSection = document.getElementById(\"banner-section\");\nconst bannerContainer = document.createElement(\"div\");\nbannerContainer.className = \"banner-container\";\n\nconst imgContainer = document.createElement(\"div\");\nimgContainer.className = \"banner-img-container\";\nimgContainer.innerHTML = `<img\n            src=\"${_static_data_bannerData_js__WEBPACK_IMPORTED_MODULE_0__.banner.imgSrc}\"\n            alt=\"${_static_data_bannerData_js__WEBPACK_IMPORTED_MODULE_0__.banner.imgAlt}\"\n          />`;\n\nconst introContainer = document.createElement(\"div\");\nintroContainer.className = \"banner-intro\";\nintroContainer.innerHTML = `<h1 id=\"rainbow-heading\">${_static_data_bannerData_js__WEBPACK_IMPORTED_MODULE_0__.banner.title}</h1>\n          <p>${_static_data_bannerData_js__WEBPACK_IMPORTED_MODULE_0__.banner.tag}</p>\n          <button class=\"gp-button\" type=\"button\">Shop Now</button>\n`;\n\nbannerContainer.appendChild(imgContainer);\nbannerContainer.appendChild(introContainer);\nbannerSection.appendChild(bannerContainer);\n\n(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.applyRainbowHeading)();\n\n// ================ Categories Data =======================\n\nconst categorySection = document.getElementById(\"category-wrapper\");\n\n_static_data_categoriesData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((cat) => {\n  const card = document.createElement(\"div\");\n  card.className = \"category-card\";\n  card.style.backgroundColor = cat.color;\n  card.style.color = cat.color;\n\n  card.innerHTML = `\n  <img src=\"${cat.url}\" alt=\"${cat.title}\">\n  <div class=\"card-overlay\">\n  <h3><strong>${cat.title}</strong></h3>\n    <button class=\"shop-btn\">Shop >></button>\n </div> `;\n\n  categorySection.appendChild(card);\n\n  const btn = card.querySelector(\".shop-btn\");\n  btn.style.backgroundColor = cat.color;\n});\n\n// ================ Qoute Data =======================\n\nconst qouteSection = document.getElementById(\"qoute-section\");\n\nconst qouteContainer = document.createElement(\"div\");\nqouteContainer.className = \"qoute-container\";\n\nconst strongEl = document.createElement(\"strong\");\nstrongEl.innerText = _static_data_qouteData_js__WEBPACK_IMPORTED_MODULE_3__.qoute.question;\n\nconst pEl = document.createElement(\"p\");\npEl.innerText = _static_data_qouteData_js__WEBPACK_IMPORTED_MODULE_3__.qoute.text;\n\nconst btnEl = document.createElement(\"button\");\nbtnEl.innerText = _static_data_qouteData_js__WEBPACK_IMPORTED_MODULE_3__.qoute.buttonText;\nbtnEl.type = \"button\";\nbtnEl.className = \"qoute-btn gp-button\";\n\nqouteContainer.appendChild(strongEl);\nqouteContainer.appendChild(pEl);\nqouteContainer.appendChild(btnEl);\nqouteSection.appendChild(qouteContainer);\n\n// ================ New In Data =======================\n\n// const newinSection = document.getElementById(\"newin-section\");\n\n// const qouteContainer = document.createElement(\"div\");\n// qouteContainer.className = \"primary-container\";\n\n\n\n\n//# sourceURL=webpack://giggle-pics-ph/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/utils.js":
/*!****************************!*\
  !*** ./assets/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyRainbowHeading: () => (/* binding */ applyRainbowHeading)\n/* harmony export */ });\nfunction applyRainbowHeading() {\n  const heading = document.getElementById(\"rainbow-heading\");\n  if (!heading) return;\n\n  const text = heading.textContent;\n  heading.innerHTML = \"\";\n\n  for (let i = 0; i < text.length; i++) {\n    const span = document.createElement(\"span\");\n    span.textContent = text[i];\n    span.className = `char${i + 1}`;\n    heading.appendChild(span);\n  }\n}\n\n\n//# sourceURL=webpack://giggle-pics-ph/./assets/js/utils.js?");

/***/ }),

/***/ "./static-data/bannerData.js":
/*!***********************************!*\
  !*** ./static-data/bannerData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   banner: () => (/* binding */ banner)\n/* harmony export */ });\nconst banner = {\n  imgSrc: \"../assets/images/banner-featured-pic.webp\",\n  imgAlt: \"GigglePics - Photostrip\",\n\n  title: \"Welcome!\",\n  tag: \"Giggles. Snaps. Good Times.\",\n};\n\n\n//# sourceURL=webpack://giggle-pics-ph/./static-data/bannerData.js?");

/***/ }),

/***/ "./static-data/categoriesData.js":
/*!***************************************!*\
  !*** ./static-data/categoriesData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst categories = [\n  {\n    title: \"What's New\",\n    color: \"#FACC15\", // yellow\n    url: \"../assets/images/banner-featured-pic.webp\",\n  },\n  {\n    title: \"Top Seller\",\n    color: \"#FBCFE8\", // pink\n    url: \"../assets/images/banner-featured-pic.webp\",\n  },\n  {\n    title: \"Gift Ideas\",\n    color: \"#99F6E4\", // teal\n    url: \"../assets/images/banner-featured-pic.webp\",\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categories);\n\n\n//# sourceURL=webpack://giggle-pics-ph/./static-data/categoriesData.js?");

/***/ }),

/***/ "./static-data/headerData.js":
/*!***********************************!*\
  !*** ./static-data/headerData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   annnoucement: () => (/* binding */ annnoucement),\n/* harmony export */   logo: () => (/* binding */ logo),\n/* harmony export */   navigations: () => (/* binding */ navigations),\n/* harmony export */   socials: () => (/* binding */ socials)\n/* harmony export */ });\nconst annnoucement = \"New Sale is on the way\";\n\nconst logo = {\n  title: \"Giggle Pics\",\n  logoUrl: \"../assets/images/giggle-pics-logo.png\",\n  href: \"index.html\",\n};\n\nconst socials = [\n  {\n    imgUrl: \"../assets/images/facebook.png\",\n    alt: \"Facebook\",\n    className: \"facebook\",\n  },\n  {\n    imgUrl: \"../assets/images/instagram.png\",\n    alt: \"Instagram\",\n    className: \"instragram\",\n  },\n  {\n    imgUrl: \"../assets/images/tiktok.png\",\n    alt: \"TikTok\",\n    className: \"tiktok\",\n  },\n];\n\nconst navigations = [\n  {\n    text: \"About\",\n    url: \"#\",\n  },\n  {\n    text: \"Blogs\",\n    url: \"#\",\n  },\n  {\n    text: \"Shop\",\n    url: \"#\",\n  },\n  {\n    text: \"Contact Us\",\n    url: \"#\",\n  },\n];\n\n\n\n\n//# sourceURL=webpack://giggle-pics-ph/./static-data/headerData.js?");

/***/ }),

/***/ "./static-data/qouteData.js":
/*!**********************************!*\
  !*** ./static-data/qouteData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   qoute: () => (/* binding */ qoute)\n/* harmony export */ });\nconst qoute = {\n  question: \"Got questions or ready to make memories?\",\n  text: \"Send us a message — we’re happy to help!\",\n  buttonText: \"Contact Us\",\n};\n\n\n//# sourceURL=webpack://giggle-pics-ph/./static-data/qouteData.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;