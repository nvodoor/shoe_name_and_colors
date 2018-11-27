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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_components_App_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/App.jsx */ \"./src/components/App.jsx\");\n// require('newrelic');\n\n\n\n\n\n\n\n\n\nprocess.env.UV_THREADPOOL_SIZE = 10; // const Shoe = require('../db/shoeTitle');\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Client = _require.Client,\n    Pool = _require.Pool;\n\nvar client = new Client({\n  user: 'neilvodoor',\n  database: 'nike',\n  password: 'charizard',\n  host: 'localhost',\n  port: \"5432\"\n});\nclient.connect();\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(path__WEBPACK_IMPORTED_MODULE_7___default.a.join(__dirname, '../public')));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\napp.use(compression__WEBPACK_IMPORTED_MODULE_6___default()()); // SERVER REQUEST METHODS\n\napp.get('/*', function (req, res) {\n  var application = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_App_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve('./public/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.log('Error here: ', err);\n      res.status(500).send('Bad Request.');\n    } else {\n      res.send(data.replace(\"<div id='colors-container'></div>\", \"<div id='colors-container'>\".concat(application, \"</div>\")));\n    }\n  });\n});\napp.get('/:shoeID/colors', function (_ref, res) {\n  var params = _ref.params;\n  var id = params.shoeID.slice(1);\n  var query = {\n    text: 'SELECT * FROM shoes WHERE shoeID = $1',\n    values: [id]\n  };\n  client.query(query).then(function (resp) {\n    res.send(resp.rows[0]);\n  }).catch(function (e) {\n    res.send(e);\n  });\n});\napp.get('/:shoeID/colors/:style', function (_ref2, res) {\n  var params = _ref2.params;\n  var style = params.style.slice(1);\n  var query = {\n    text: 'SELECT * FROM shoes where type = $1',\n    values: [style]\n  };\n  client.query(query).then(function (resp) {\n    res.send(resp.rows);\n  }).catch(function (e) {\n    console.log(e);\n    res.send(e);\n  });\n});\napp.post('/new/shoe', function (req, res) {\n  var values = req.body;\n  var shoe = new Shoe({\n    shoeName: values.name,\n    shoeColors: values.color,\n    price: values.price,\n    shoeLine: values.shoeline,\n    image: values.image,\n    shoeType: values.shoetype\n  });\n  shoe.save(function (err, data) {\n    if (err) {\n      res.send(err);\n    } else {\n      res.send(data);\n    }\n  });\n});\napp.delete('/:shoeID', function (_ref3, res) {\n  var params = _ref3.params;\n  Shoe.findByIdAndDelete(params.shoeID.slice(1), function (err, resp) {\n    if (err) {\n      res.send(err);\n    } else {\n      res.send(resp);\n    }\n  });\n});\napp.put('/:shoeID', function (res, req) {\n  var shoeID = req.params.shoeID.slice(1);\n  var values = req.body;\n  Shoe.findByIdAndUpdate(shoeID, {\n    shoeName: values.name,\n    shoeColors: values.color,\n    price: values.price,\n    shoeLine: values.shoeLine,\n    image: values.image,\n    shoeType: values.shoetype\n  }, function (err, result) {\n    if (err) {\n      res.send(err);\n    } else {\n      res.send(result);\n    }\n  });\n}); // APP LISTENING PROTOCOL\n\nvar PORT = 3006;\napp.listen(PORT, function (error) {\n  if (error) {\n    console.log(error);\n  }\n\n  console.log(\">>>>> Express server listening on port \".concat(PORT, \"...\"));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Name_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Name.jsx */ \"./src/components/Name.jsx\");\n/* harmony import */ var _ColorsGrid_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorsGrid.jsx */ \"./src/components/ColorsGrid.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.changeShoe = _this.changeShoe.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.state = {\n      shoeID: props.shoeID,\n      name: 'Air Jordan Retro V2',\n      colors: [],\n      price: '$200',\n      shoeType: \"Men's Shoe\"\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var shoeID = this.state.shoeID;\n      this.findShoeInformation(shoeID);\n    }\n  }, {\n    key: \"changeShoe\",\n    value: function changeShoe(shoeID) {\n      this.findShoeInformation(shoeID);\n    }\n  }, {\n    key: \"findShoeInformation\",\n    value: function () {\n      var _findShoeInformation = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(shoeID) {\n        var info, newState;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('here');\n                _context.next = 3;\n                return axios.get(\"/:\".concat(shoeID, \"/colors\"));\n\n              case 3:\n                info = _context.sent;\n                info = info.data;\n                newState = {};\n                newState.shoeID = shoeID;\n                newState.name = info.shoename;\n                newState.colors = info.shoecolors;\n                newState.price = info.price;\n                newState.shoeType = info.productline;\n                this.setState(newState);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function findShoeInformation(_x) {\n        return _findShoeInformation.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          name = _this$state.name,\n          colors = _this$state.colors,\n          shoeID = _this$state.shoeID,\n          price = _this$state.price,\n          shoeType = _this$state.shoeType;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"module\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"shoeType\"\n      }, shoeType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"price\"\n      }, price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Name_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: name,\n        shoeID: shoeID\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"color_grid\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorsGrid_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ids: colors,\n        changeShoe: this.changeShoe,\n        curShoe: shoeID\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nApp.propTypes = {\n  shoeID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nApp.defaultProps = {\n  shoeID: '310805-408'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.jsx?");

/***/ }),

/***/ "./src/components/ColorsGrid.jsx":
/*!***************************************!*\
  !*** ./src/components/ColorsGrid.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ColorsRow_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorsRow.jsx */ \"./src/components/ColorsRow.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar ColorsGrid =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ColorsGrid, _React$Component);\n\n  function ColorsGrid(props) {\n    var _this;\n\n    _classCallCheck(this, ColorsGrid);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorsGrid).call(this, props));\n    _this.state = {\n      images: [],\n      curShoe: -1\n    };\n    return _this;\n  }\n\n  _createClass(ColorsGrid, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var ids = this.props.ids;\n\n      if (ids !== prevProps.ids) {\n        this.getImageLinks(ids);\n      }\n    }\n  }, {\n    key: \"getImageLinks\",\n    value: function () {\n      var _getImageLinks = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(ids) {\n        var newState, i, _curShoe, curShoe, id, data;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                newState = {};\n\n                for (i = 0; i < ids.length; i += 1) {\n                  _curShoe = this.props.curShoe;\n\n                  if (ids[i] === _curShoe) {\n                    newState.curShoe = i;\n                  }\n                }\n\n                curShoe = this.props.curShoe;\n                id = ids.split('-');\n                _context.next = 6;\n                return axios.get(\"/:\".concat(curShoe, \"/colors/:\").concat(id[0]));\n\n              case 6:\n                data = _context.sent;\n                newState.images = _.chunk(data.data, 5);\n                this.setState(newState);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function getImageLinks(_x) {\n        return _getImageLinks.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          images = _this$state.images,\n          curShoe = _this$state.curShoe;\n      var changeShoe = this.props.changeShoe;\n      console.log('line 44 of images', images);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"shoe_colors_grid\"\n      }, images.map(function (row, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorsRow_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          key: \"row_\".concat(i + 1),\n          changeShoe: changeShoe,\n          curShoe: curShoe - i * 5,\n          images: row,\n          row: i.toString()\n        });\n      }));\n    }\n  }]);\n\n  return ColorsGrid;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nColorsGrid.propTypes = {\n  ids: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),\n  curShoe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  changeShoe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nColorsGrid.defaultProps = {\n  ids: ['no colors'],\n  curShoe: '',\n  changeShoe: function changeShoe() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorsGrid);\n\n//# sourceURL=webpack:///./src/components/ColorsGrid.jsx?");

/***/ }),

/***/ "./src/components/ColorsRow.jsx":
/*!**************************************!*\
  !*** ./src/components/ColorsRow.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ColorsRow = function ColorsRow(_ref) {\n  var images = _ref.images,\n      row = _ref.row,\n      curShoe = _ref.curShoe,\n      changeShoe = _ref.changeShoe;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"color_row\",\n    id: \"row_\".concat(row)\n  }, images.map(function (image, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      role: \"presentation\",\n      className: \"shoe_color_option col_\".concat(i, \" \").concat(curShoe === i ? 'curShoe' : ''),\n      key: \"row_\".concat(i + 1),\n      onClick: function onClick() {\n        changeShoe(image.shoeid);\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: image.image,\n      alt: \"Not found\",\n      className: \"shoe_color_image \".concat(curShoe === i ? 'curShoe_img' : '')\n    }));\n  }));\n};\n\nColorsRow.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)),\n  row: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  curShoe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  changeShoe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nColorsRow.defaultProps = {\n  images: [['none', 'none']],\n  row: '0',\n  curShoe: -1,\n  changeShoe: function changeShoe() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorsRow);\n\n//# sourceURL=webpack:///./src/components/ColorsRow.jsx?");

/***/ }),

/***/ "./src/components/Name.jsx":
/*!*********************************!*\
  !*** ./src/components/Name.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Name = function Name(_ref) {\n  var name = _ref.name;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"shoe_name\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, name));\n};\n\nName.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nName.defaultProps = {\n  name: 'PLACEHOLDER NAME'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Name);\n\n//# sourceURL=webpack:///./src/components/Name.jsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ })

/******/ });