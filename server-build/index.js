/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/components/App/App.scss":
/*!********************************************!*\
  !*** ./src/client/components/App/App.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"_1y-EmQ4FZAwnJSeb3pGNky"});

/***/ }),

/***/ "./src/client/components/App/App.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/App/App.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Results_Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Results/Results */ "./src/client/components/Results/Results.tsx");
/* harmony import */ var _Detail_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Detail/Detail */ "./src/client/components/Detail/Detail.tsx");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SearchBar */ "./src/client/components/SearchBar/index.tsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/client/components/App/App.scss");




//import Home from '../Home/Home';


//import axios from 'axios';
var App = function (props) {
    var apiData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.apiResponse)[0]; //from now on, the data is managed on the react code
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _App_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _App_scss__WEBPACK_IMPORTED_MODULE_5__["default"].routeContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/items", component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Results_Results__WEBPACK_IMPORTED_MODULE_2__["default"], { items: apiData.results, pathFromRoot: apiData.pathFromRoot }); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/items/:id", component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Detail_Detail__WEBPACK_IMPORTED_MODULE_3__["default"], { detail: apiData.item, path: apiData.path_from_root }); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Not found"); } })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/client/components/BreadCrumb/BreadCrumb.scss":
/*!**********************************************************!*\
  !*** ./src/client/components/BreadCrumb/BreadCrumb.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"_3qLS_oADnfvMbfO9U-4gTA"});

/***/ }),

/***/ "./src/client/components/BreadCrumb/BreadCrumb.tsx":
/*!*********************************************************!*\
  !*** ./src/client/components/BreadCrumb/BreadCrumb.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BreadCrumb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadCrumb.scss */ "./src/client/components/BreadCrumb/BreadCrumb.scss");


var BreadCrumb = function (props) {
    var path = props.path;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _BreadCrumb_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container }, path.map(function (step, index) {
        return step.name + (index < path.length - 1 ? ' > ' : '');
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (BreadCrumb);


/***/ }),

/***/ "./src/client/components/Detail/Detail.scss":
/*!**************************************************!*\
  !*** ./src/client/components/Detail/Detail.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"_1pde6mqdRez3K8ONdmmK2R","info":"_1QeLM4LLT9iP_Cgdk9lVSy","detailInfo":"_1GxVz_yJ1zDWvpKg-vmKJd","button":"_1MUVV83xWB6pC2tPffFirM","description":"_3sMEsj4o1h7LevAlsYpuDl","productImage":"_1JMekWBAevEQSmKJd3JjlS","title":"_3JM_i6koqWHCpKrjGlbxGC","amount":"_2ECn6aYsQPmj7dAZNn4j8K","productDetails":"_1RrQi3uTFv8kWPpYPizkQ0","details":"_3VAyliKKSO0-QwXqhxRAzh"});

/***/ }),

/***/ "./src/client/components/Detail/Detail.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/Detail/Detail.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Detail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.scss */ "./src/client/components/Detail/Detail.scss");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BreadCrumb/BreadCrumb */ "./src/client/components/BreadCrumb/BreadCrumb.tsx");




var formatAmount = function (amount, decimal) {
    var integerPart = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    var decimalFormatted = decimal.toString().length > 2 ? decimal.toString().slice(0, 2) : decimal.toString();
    var decimalPart = decimalFormatted !== "0" ? (',' + decimalFormatted) : '';
    return integerPart + decimalPart;
};
var Detail = function (props) {
    var detail = props.detail, path = props.path;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"], { path: path }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], { className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], { className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].details },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, { detail: detail })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { xl: "8", className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Descripci\u00F3n del producto"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, detail.description))))));
};
var Info = function (props) {
    var detail = props.detail;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { xl: "6" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productImage, src: detail.picture })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { xl: "2" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { xl: "4", className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productDetails },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, detail.condition === 'new' ? 'nuevo' : 'usado'),
                    " - ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                        detail.sold_quantity,
                        " vendidos")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title }, detail.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].amount },
                    "$ ",
                    formatAmount(detail.price.amount, detail.price.decimal)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { size: "lg", className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button, variant: "primary" }, "Comprar")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Detail);


/***/ }),

/***/ "./src/client/components/Results/ItemCard/ItemCard.scss":
/*!**************************************************************!*\
  !*** ./src/client/components/Results/ItemCard/ItemCard.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"g29KinbkoQ7VBKOY1dy5z","container-fluid":"_2IZngBWefFJ9vjS9dtstHe","image":"_16h-cRfjrS3jwkBfySw91u","details":"_2dpT0IO6tx6PGZDNuSK4b_","location":"V-MhpvXjUhk7HrwB9oHMA"});

/***/ }),

/***/ "./src/client/components/Results/ItemCard/ItemCard.tsx":
/*!*************************************************************!*\
  !*** ./src/client/components/Results/ItemCard/ItemCard.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemCard.scss */ "./src/client/components/Results/ItemCard/ItemCard.scss");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



var redirectToItem = function (id) {
    window.location.href = ('/items/' + id);
};
var formatAmount = function (amount, decimal) {
    var integerPart = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    var decimalFormatted = decimal.toString().length > 2 ? decimal.toString().slice(0, 2) : decimal.toString();
    var decimalPart = decimalFormatted !== "0" ? (',' + decimalFormatted) : '';
    return integerPart + decimalPart;
};
var Item = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], { fluid: true, className: "p-0" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: function () { return redirectToItem(props.item.id); }, className: _ItemCard_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { md: "2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: _ItemCard_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image, src: props.item.picture })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { md: "8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ItemCard_scss__WEBPACK_IMPORTED_MODULE_1__["default"].details },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null,
                            "$ ",
                            formatAmount(props.item.price.amount, props.item.price.decimal)),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.item.title))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { md: "2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: _ItemCard_scss__WEBPACK_IMPORTED_MODULE_1__["default"].location }, "Capital federal"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Item);


/***/ }),

/***/ "./src/client/components/Results/Results.scss":
/*!****************************************************!*\
  !*** ./src/client/components/Results/Results.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"gvS43wKyiI5J3KqLX8nXI"});

/***/ }),

/***/ "./src/client/components/Results/Results.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/Results/Results.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemCard/ItemCard */ "./src/client/components/Results/ItemCard/ItemCard.tsx");
/* harmony import */ var _Results_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results.scss */ "./src/client/components/Results/Results.scss");
/* harmony import */ var _BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BreadCrumb/BreadCrumb */ "./src/client/components/BreadCrumb/BreadCrumb.tsx");




var Results = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"], { path: props.pathFromRoot }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Results_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.items ? props.items.map(function (result, key) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemCard_ItemCard__WEBPACK_IMPORTED_MODULE_1__["default"], { key: key, item: result });
            }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No results")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Results);


/***/ }),

/***/ "./src/client/components/SearchBar/SearchInput/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/SearchBar/SearchInput/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/client/components/SearchBar/SearchInput/styles.scss");



var SearchInput = function SearchInput(onEnter) {
  var handleInput = function handleInput(event) {
    if (event.key === 'Enter') {
      window.location.href = '/items?search=' + event.target.value;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchInputContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchInput,
    onKeyDown: handleInput
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./src/client/components/SearchBar/SearchInput/styles.scss":
/*!*****************************************************************!*\
  !*** ./src/client/components/SearchBar/SearchInput/styles.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"searchInputContainer":"qAN2NEDuhuJnfc8oL3Y8t","searchInput":"_2fJOjBP8Imhc_BqXdKMLCS"});

/***/ }),

/***/ "./src/client/components/SearchBar/index.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/SearchBar/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/client/components/SearchBar/styles.scss");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ "./src/client/components/SearchBar/SearchInput/index.js");



var SearchBar = function (props) {
    var goHome = function () {
        window.location.href = '/';
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topBar },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchBarContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { onClick: goHome, className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image, src: "/static/logo.png" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchInput__WEBPACK_IMPORTED_MODULE_2__["default"], { onEnter: props.onEnter }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);


/***/ }),

/***/ "./src/client/components/SearchBar/styles.scss":
/*!*****************************************************!*\
  !*** ./src/client/components/SearchBar/styles.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"topBar":"_2l-vrF9te8WePkvFkv-jGN","searchBarContainer":"_2kL9xG4R2p6aBYR5D3qT1c","image":"_1-FJ0t3IFzrT4uUaJ7sweu"});

/***/ }),

/***/ "./src/server/api.js":
/*!***************************!*\
  !*** ./src/server/api.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/server/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  //search for items
  app.get('/api/items', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q, {
                  timeout: 5000
                }).then(function (result) {
                  var formattedResults = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatResults"])(result.data);
                  res.send(formattedResults);
                });
              } catch (error) {
                res.status(500).send({
                  message: 'There was an error while fetching the data'
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()); //single item endpoint. Needs two endpoints to gather all the information. They need to be triggered at the same time and will succeed if both calls succeed

  app.get('/api/items/:id', function (req, res) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.all([axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.mercadolibre.com/items/' + req.params.id, {
        timeout: 5000
      }), axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.mercadolibre.com/items/' + req.params.id + '/description', {
        timeout: 5000
      })]).then(function (result) {
        var formattedResult = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatItem"])(_objectSpread(_objectSpread({}, result[0].data), result[1].data));
        res.send(formattedResult);
      });
    } catch (error) {
      res.status(500).send({
        message: error.message
      });
    }

    ;
  });
  app.get('/api/path_from_root/:category_id/', function (req, res) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.mercadolibre.com/categories/' + req.params.category_id, {
        timeout: 5000
      }).then(function (result) {
        res.send(result.data.path_from_root);
      });
    } catch (error) {
      res.status(500).send({
        message: error.message
      });
    }
  });
});

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_components_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App/App */ "./src/client/components/App/App.tsx");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/server/utils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api */ "./src/server/api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

var cors = __webpack_require__(/*! cors */ "cors"); //get assets for JS hydate and CSS


app.use(cors());
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('dist'));
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_4___default.a.join('public', 'assets')));
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_4___default.a.join('server-build', 'css')));
Object(_api__WEBPACK_IMPORTED_MODULE_8__["default"])(app);

var html = function html(req, apiResponse) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/main.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    location: req.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_components_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    apiResponse: apiResponse
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__data__ = ".concat(JSON.stringify(apiResponse), ";")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "/static/bundle.js"
  })));
};

app.get('/items', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var response, responseData, pathFromRoot;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:3000/api/items?q=' + req.query.search);

          case 2:
            response = _context.sent;
            responseData = response.data;
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:3000/api/path_from_root/' + responseData.category);

          case 6:
            pathFromRoot = _context.sent;
            res.send(react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(html(req, {
              results: responseData.results,
              pathFromRoot: pathFromRoot.data
            })));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/items/:id', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var response, responseData, pathFromRoot;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:3000/api/items/' + req.params.id);

          case 2:
            response = _context2.sent;
            responseData = response.data;
            _context2.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:3000/api/path_from_root/' + responseData.item.category);

          case 6:
            pathFromRoot = _context2.sent;
            res.send(react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(html(req, {
              item: responseData.item,
              path_from_root: pathFromRoot.data
            })));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //other routes handled by react-router staticRouter

app.get('*', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.send(react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(html(req, [])));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.listen(3000, function () {
  return console.log("server started at http://localhost:3000");
});

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: formatItem, formatResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatItem", function() { return formatItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatResults", function() { return formatResults; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authorCreator = function authorCreator() {
  return {
    name: 'Manuel',
    lastName: 'Torre'
  };
};

var getItemData = function getItemData(item) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.trunc(item.price),
      decimal: parseInt((item.price % 1 + '').split('.')[1] ? (item.price % 1 + '').split('.')[1] : 0)
    },
    picture: item.pictures ? item.pictures[0].url : item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    category: item.category_id
  };
};

var formatItem = function formatItem(item) {
  try {
    return {
      author: authorCreator(),
      item: _objectSpread(_objectSpread({}, getItemData(item)), {
        sold_quantity: item.sold_quantity,
        description: item.text ? item.text : item.plain_text
      })
    };
  } catch (error) {
    return error;
  }
};

var mostOccurrences = function mostOccurrences(categories) {
  try {
    var map = categories.map(function (a) {
      return categories.filter(function (b) {
        return a === b;
      }).length;
    });
    return categories[map.indexOf(Math.max.apply(null, map))];
  } catch (error) {
    return error;
  }
};

var formatResults = function formatResults(response) {
  try {
    var searchInfo = {
      author: authorCreator()
    };
    var searchResults = [];
    var categories = [];

    if (response.results && response.results.length > 0) {
      var resultsLengthIndex = response.results.length > 4 ? 4 : response.results.length - 1;
      searchResults = response.results.slice(0, resultsLengthIndex).map(function (item) {
        categories.push(item.category_id);
        return getItemData(item);
      });
    }

    var breadCrumbCategory = mostOccurrences(categories);
    return _objectSpread(_objectSpread(_objectSpread({}, searchInfo), {
      results: searchResults
    }), {
      category: breadCrumbCategory
    });
  } catch (error) {
    return error;
  }
};

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./src/server/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./src/server/index.js */"./src/server/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map