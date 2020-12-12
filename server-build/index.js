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
    //const [searchText, changeSearchText] = useState('')
    //const [results] = useState(props.fetchResult.results)
    /*const handleKeyDown = (event:any) => {
      if (event.key === 'Enter') {
        axios.get('http://localhost:3000/api/items?q=' + event.target.value).then(
          res => {
              changeResults(res.data.results);
          }
      )
      }
    }*/
    /*useEffect(() => {
      axios.get('http://localhost:3000/api/items?q=' + searchText).then(
          res => {
              changeResults(res.data.results);
          }
      )
    , [searchText]})*/
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _App_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], { onEnter: function () { return console.log("manu"); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _App_scss__WEBPACK_IMPORTED_MODULE_5__["default"].routeContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home"); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/items", component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Results_Results__WEBPACK_IMPORTED_MODULE_2__["default"], { items: props.fetchResult.results }); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/detail", component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Detail_Detail__WEBPACK_IMPORTED_MODULE_3__["default"], { detalle: 'Manu' }); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Not found"); } })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


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
/* harmony default export */ __webpack_exports__["default"] = ({"container":"_1pde6mqdRez3K8ONdmmK2R"});

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


var Detail = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Detail_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.detalle),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "this is an example paragraph")));
};
/* harmony default export */ __webpack_exports__["default"] = (Detail);


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

//import axios from 'axios';
var Results = function (props) {
    //const [results, setResults] = useState([])
    /*useEffect(() => {
            axios.get("http://localhost:3000/api/items?q=etios").then(
                res => {
                    setResults(res.data.results)º
                }
            )
        , []})*/
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.items ? props.items.map(function (result, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: index }, result.title);
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No results"))));
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
  console.log(onEnter);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchInputContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchInput
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topBar },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchBarContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Logo"),
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
/* harmony default export */ __webpack_exports__["default"] = ({"topBar":"_2l-vrF9te8WePkvFkv-jGN","searchBarContainer":"_2kL9xG4R2p6aBYR5D3qT1c"});

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
                console.log('param', req.query.q);
                axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q, {
                  timeout: 5000
                }).then(function (result) {
                  console.log(result);
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
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_4___default.a.join('server-build', 'css')));

Object(_api__WEBPACK_IMPORTED_MODULE_8__["default"])(app);
app.get('*', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var response, result, html;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:3000' + Object(_utils__WEBPACK_IMPORTED_MODULE_6__["routeQuerySwitch"])(req));

          case 2:
            response = _context.sent;
            result = response.data;
            html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              charSet: "UTF-8"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
              rel: "stylesheet",
              href: "./static/main.css"
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              id: "app"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
              location: req.url
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_components_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
              fetchResult: result
            }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
              dangerouslySetInnerHTML: {
                __html: "window.__data__ = ".concat(JSON.stringify(result), ";")
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
              src: "./static/bundle.js"
            })));
            res.send(react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(html));

          case 6:
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
app.listen(3000, function () {
  return console.log("server started at http://localhost:3000");
});

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: routeQuerySwitch, formatItem, formatResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeQuerySwitch", function() { return routeQuerySwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatItem", function() { return formatItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatResults", function() { return formatResults; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var routeQuerySwitch = function routeQuerySwitch(req) {
  console.log(req.url, /results\?search=/.test(req.url));

  switch (true) {
    case /items\?search=/.test(req.url):
      console.log('/api/items?q=' + req.query.search);
      return '/api/items?q=' + req.query.search;
      break;

    case /items/.test(req.url):
      return '/api/item/' + req.params.id;
      break;

    default:
      break;
  }
};

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
      amount: Math.floor(item.price),
      decimal: (item.price % 1 + '').split('.')[1] ? (item.price % 1 + '').split('.')[1] : 0
    },
    picture: item.pictures ? item.pictures[0].url : item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
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
var formatResults = function formatResults(response) {
  try {
    var searchInfo = {
      author: authorCreator()
    };
    var searchResults = [];

    if (response.results && response.results.length > 0) {
      var resultsLengthIndex = response.results.length > 4 ? 4 : response.results.length - 1;
      searchResults = response.results.slice(0, resultsLengthIndex).map(function (item) {
        console.log(item.title);
        return getItemData(item);
      });
    }

    return _objectSpread(_objectSpread({}, searchInfo), {
      results: searchResults
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