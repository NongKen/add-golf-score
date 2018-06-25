webpackHotUpdate(7,{

/***/ "./pages/hole123.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_baseComponents__ = __webpack_require__("./components/baseComponents/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
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

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var rootRef = __WEBPACK_IMPORTED_MODULE_5__libs_firebase__["a" /* default */].database().ref('golfscore');
var Modle = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject);
var ModleCard = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject2);
var TableWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject3);
var Table = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject4);
var TableHead = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject5);
var TableBody = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject6);
var TableRow = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject7, function (props) {
  return props.bgColor || 'transparent';
});
var TableItem = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject8, function (props) {
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
var HoleInput = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].input(_templateObject9);

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootRef, "rootRef", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(Modle, "Modle", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(ModleCard, "ModleCard", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(TableWrapper, "TableWrapper", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(Table, "Table", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(TableHead, "TableHead", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(TableBody, "TableBody", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(TableRow, "TableRow", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(TableItem, "TableItem", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(HoleInput, "HoleInput", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(getSumShot, "getSumShot", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(checkDiffUserCourt, "checkDiffUserCourt", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(tableConfig, "tableConfig", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(Home, "Home", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  reactHotLoader.register(_default, "default", "/Users/ken/Projects/add-golf-score/pages/hole123.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/hole123")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.0db87366f632822d74b9.hot-update.js.map