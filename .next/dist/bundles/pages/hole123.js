module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseComponents__ = __webpack_require__("./components/baseComponents/index.js");
var _jsxFileName = "/Users/ken/Projects/add-golf-score/components/Navbar.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;  \n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  max-width: 1196px;\n  background-color: #f3ffe6;\n  margin: auto;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  \n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  list-style: none;\n  padding-left: 12px;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  float: left;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var NavbarContext = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject);
var NavbarContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject2);
var FlexWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject3);
var TabContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject4);
var TabItem = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject5);

var Navbar = function Navbar(props) {
  var tabList = [{
    text: 'Day 1',
    color: 'white',
    link: '1'
  }, {
    text: 'Day 2',
    color: 'white',
    link: '2'
  }, {
    text: 'Day 3',
    color: 'white',
    link: '3'
  }];

  if (props.selectedDay) {
    tabList[+props.selectedDay - 1].color = '#d2d2d2';
  } else if (props.defaultDay) {
    tabList[+props.defaultDay - 1].color = '#d2d2d2';
  } else {
    tabList[0].color = '#d2d2d2';
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavbarContext, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavbarContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__baseComponents__["e" /* Image */], {
    src: "/static/logo/logo_spga.png",
    width: "56px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexWrapper, {
    style: {
      'flex-direction': "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      paddingLeft: '12px',
      fontSize: '24px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      paddingLeft: '12px',
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, props.subTitle), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, tabList.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__baseComponents__["a" /* Button */], {
      color: item.color,
      onClick: function onClick() {
        return props.selectDay(index + 1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    }, item.text));
  }))))));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Navbar);

/***/ }),

/***/ "./components/baseComponents/Base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  padding: 12px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Base = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(_templateObject);
/* unused harmony default export */ var _unused_webpack_default_export = (Base);

/***/ }),

/***/ "./components/baseComponents/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  padding: 8px 16px;\n  border-radius: 16px;\n  background: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var button = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button(_templateObject, function (props) {
  return props.color || 'white';
});
/* harmony default export */ __webpack_exports__["a"] = (button);

/***/ }),

/***/ "./components/baseComponents/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  margin: auto;\n\n  @media (min-width: 700px) {\n    width: 100%;\n  }\n\n  @media (min-width: 1024px) {\n    width: 1024px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 1440px;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./components/baseComponents/Context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background: #cecece;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Context = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Context);

/***/ }),

/***/ "./components/baseComponents/FullBackground.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ken/Projects/add-golf-score/components/baseComponents/FullBackground.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 //provides full height background color paint

var FullBackground =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FullBackground, _React$Component);

  function FullBackground() {
    _classCallCheck(this, FullBackground);

    return _possibleConstructorReturn(this, (FullBackground.__proto__ || Object.getPrototypeOf(FullBackground)).apply(this, arguments));
  }

  _createClass(FullBackground, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setup({
        color: this.props.color,
        height: '100%',
        image: this.props.image
      });
    } // componentWillUnmount() { this.setup({ color: 'initial', height: 'initial', image: 'initial' }) }

  }, {
    key: "setup",
    value: function setup(styles) {
      var color = styles.color,
          height = styles.height,
          image = styles.image;

      try {
        document.getElementsByTagName('html')[0].style.backgroundColor = color;
        document.getElementsByTagName('html')[0].style.backgroundImage = image;
        document.getElementsByTagName('html')[0].style.height = height;
      } catch (e) {}
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children === undefined ? null : Array.isArray(children) ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, children) : children;
    }
  }]);

  return FullBackground;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

FullBackground.propTypes = {
  color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  image: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};
FullBackground.defaultProps = {
  color: 'white',
  image: ''
};
/* harmony default export */ __webpack_exports__["a"] = (FullBackground);

/***/ }),

/***/ "./components/baseComponents/Image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Image = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.img(_templateObject, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.height || 'auto';
});
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "./components/baseComponents/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__("./components/baseComponents/Base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./components/baseComponents/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Context__ = __webpack_require__("./components/baseComponents/Context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__("./components/baseComponents/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Image__ = __webpack_require__("./components/baseComponents/Image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FullBackground__ = __webpack_require__("./components/baseComponents/FullBackground.js");
/* unused harmony reexport Base */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Context__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__Container__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__Image__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__FullBackground__["a"]; });








/***/ }),

/***/ "./config.js":
/***/ (function(module, exports) {

module.exports = {
  firebaseConfig: {
    apiKey: "AIzaSyDYEFF_LOG85XJlxoP40pGMq4eKB4o-MmE",
    authDomain: "add-golf-score.firebaseapp.com",
    databaseURL: "https://add-golf-score.firebaseio.com",
    projectId: "add-golf-score",
    storageBucket: "add-golf-score.appspot.com",
    messagingSenderId: "1034549522633"
  }
};

/***/ }),

/***/ "./libs/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var config = {
  apiKey: "AIzaSyDYEFF_LOG85XJlxoP40pGMq4eKB4o-MmE",
  authDomain: "add-golf-score.firebaseapp.com",
  databaseURL: "https://add-golf-score.firebaseio.com",
  projectId: "add-golf-score",
  storageBucket: "add-golf-score.appspot.com",
  messagingSenderId: "1034549522633"
};
/* harmony default export */ __webpack_exports__["a"] = (!__WEBPACK_IMPORTED_MODULE_0_firebase__["apps"].length ? __WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](config) : __WEBPACK_IMPORTED_MODULE_0_firebase__["app"]());

/***/ }),

/***/ "./pages/hole123.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_baseComponents__ = __webpack_require__("./components/baseComponents/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_firebase__ = __webpack_require__("./libs/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config__);
var _jsxFileName = "/Users/ken/Projects/add-golf-score/pages/hole123.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #000000cc;\n  :after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  background: white;\n  max-width: 400px;\n  min-height: 400px;\n  margin: auto;\n  margin-top: 20px;\n  border-radius: 16px;\n  padding: 24px;\n\n  pointer-events: none;\n\n  :before {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: 100vh;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: fit-content;\n  margin: auto;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  overflow-y: scroll;\n  height: 91vh;\n  width: fit-content;\n  margin: auto;\n  ::-webkit-scrollbar { \n    display: none; \n  }\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  background: ", ";  \n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral([" \n  padding: 6px 8px;\n  border: 1px solid black;\n  overflow: hidden;\n  width: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  background-color: ", ";\n  color: ", ";\n"]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100%;\n  background: transparent;\n  border: none;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var rootRef = __WEBPACK_IMPORTED_MODULE_5__libs_firebase__["a" /* default */].database().ref('golfscore');
var Modle = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject);
var ModleCard = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject2);
var TableWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject3);
var Table = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject4);
var TableHead = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject5);
var TableBody = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject6);
var TableRow = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject7, function (props) {
  return props.bgColor || 'transparent';
});
var TableItem = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject8, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.align || 'center';
}, function (props) {
  return props.bold ? 'bold' : 'normal';
}, function (props) {
  return props.bgColor || 'transparent';
}, function (props) {
  return props.color || 'black';
});
var HoleInput = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.input(_templateObject9);

var getSumShot = function getSumShot(data) {
  var sum = 0;
  data.forEach(function (shot) {
    return sum += +shot;
  });
  return sum;
};

var checkDiffUserCourt = function checkDiffUserCourt(userRaw, courtRaw) {
  var userData = userRaw.filter(function (data) {
    return data;
  });
  var userLength = userData.length;
  var courtWithUserlength = courtRaw.slice(0, userLength);
  var sumCourt = getSumShot(courtWithUserlength);
  var sumShot = getSumShot(userData);
  return {
    sumCourt: sumCourt,
    sumShot: sumShot
  };
};

var tableConfig = ['25px', '25px', '200px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '25px', '75px'];

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    _this.state = {
      formData: null,
      showModle: false,
      modleRow: null,
      modleHole: null
    };
    rootRef.child('formData').on('value', function (snapshot) {
      var data = snapshot.val();
      var updatedTime = Date.now();

      _this.setState({
        formData: data,
        updatedTime: updatedTime
      });
    });
    return _this;
  }

  _createClass(Home, [{
    key: "onChangeHoleData",
    value: function onChangeHoleData(rowIndex, holeIndex, value) {
      var formData = this.state.formData;
      formData[rowIndex][3][holeIndex] = value;
      rootRef.child('/formData/').set(formData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.formData) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_baseComponents__["d" /* FullBackground */], {
        color: "#cecece",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_baseComponents__["c" /* Context */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_baseComponents__["b" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableHead, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
        width: tableConfig[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Group"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
        width: tableConfig[1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Ball"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
        width: tableConfig[2],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
        width: tableConfig[3],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
        width: tableConfig[4],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
        width: tableConfig[5],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "3"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, this.state.formData.map(function (rowData, rowIndex) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableRow, {
          bgColor: +rowData[0] % 2 === 0 ? '#ffffff' : '#dadada',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
          width: tableConfig[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }, rowData[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
          width: tableConfig[1],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, rowData[1]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
          width: tableConfig[2],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }, rowData[2]), rowData[3].map(function (hole, holeIndex) {
          if ([1, 2, 3].includes(holeIndex + 1)) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableItem, {
              width: tableConfig[3 + holeIndex],
              style: {
                cursor: 'pointer',
                borderLeft: "1px solid ".concat(holeIndex === 9 ? 'white' : 'black '),
                borderRight: "1px solid ".concat(holeIndex === 8 ? 'white' : 'black ')
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HoleInput, {
              type: "number",
              value: hole === 'empty' ? null : hole,
              onChange: function onChange(e) {
                return _this2.onChangeHoleData(rowIndex, holeIndex, e.target.value);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            }));
          }

          return null;
        }));
      })))))));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/hole123.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=hole123.js.map