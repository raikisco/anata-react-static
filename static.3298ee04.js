(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "https://saibotx.github.io/anata-react-static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.SectionContent = exports.Section = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  min-height: 50vh;\n  text-align: center;\n  color: grey;\n"], ["\n  position: relative;\n  background-color: ", ";\n  min-height: 50vh;\n  text-align: center;\n  color: grey;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  max-width: 800px;\n  padding: 30px;\n  margin: auto;\n"], ["\n  max-width: 800px;\n  padding: 30px;\n  margin: auto;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  border: 2px solid ", ";\n  background-color: rgba(0, 171, 0, 0);\n  border-radius: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  min-width: ", ";\n  @media (max-width: 750px) {\n    font-size: 1.2em;\n    min-width: 180px;\n    margin: 2px;\n  }\n  &:hover {\n    background-color: rgba(0, 171, 0, 0.2);\n  }\n  &:active {\n    background-color: rgba(0, 171, 0, 0.4);\n  }\n  transition: all 0.3s;\n"], ["\n  cursor: pointer;\n  color: ", ";\n  border: 2px solid ", ";\n  background-color: rgba(0, 171, 0, 0);\n  border-radius: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  min-width: ", ";\n  @media (max-width: 750px) {\n    font-size: 1.2em;\n    min-width: 180px;\n    margin: 2px;\n  }\n  &:hover {\n    background-color: rgba(0, 171, 0, 0.2);\n  }\n  &:active {\n    background-color: rgba(0, 171, 0, 0.4);\n  }\n  transition: all 0.3s;\n"]);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = exports.Section = (0, _reactEmotion2.default)("div")(_templateObject, function (props) {
  return props.green ? "#f4ffc5" : "white";
});
var SectionContent = exports.SectionContent = (0, _reactEmotion2.default)("div")(_templateObject2);

var Button = exports.Button = (0, _reactEmotion2.default)("button")(_templateObject3, function (props) {
  return props.color || 'white';
}, function (props) {
  return props.color || 'white';
}, function (props) {
  return props.small ? '5px' : '10px';
}, function (props) {
  return props.small ? '5px 10px 5px 10px' : '10px 20px 10px 20px';
}, function (props) {
  return !props.small && '0px 5px';
}, function (props) {
  return props.small ? '1em' : '1.7em';
}, function (props) {
  return props.small ? '120px' : '230px';
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactHotLoader = __webpack_require__(7);

__webpack_require__(8);

var _Hero = __webpack_require__(9);

var _Hero2 = _interopRequireDefault(_Hero);

var _Profile = __webpack_require__(11);

var _Profile2 = _interopRequireDefault(_Profile);

var _Qualifications = __webpack_require__(13);

var _Qualifications2 = _interopRequireDefault(_Qualifications);

var _Services = __webpack_require__(18);

var _Services2 = _interopRequireDefault(_Services);

var _Contact = __webpack_require__(25);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Import Components


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "App" },
        _react2.default.createElement(_Hero2.default, null),
        _react2.default.createElement(_Profile2.default, null),
        _react2.default.createElement(_Qualifications2.default, null),
        _react2.default.createElement(_Services2.default, null),
        _react2.default.createElement(_Contact2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  height: 75vh;\n  position: relative;\n  width: 100vw;\n  background-image: url(", ");\n"], ["\n  height: 75vh;\n  position: relative;\n  width: 100vw;\n  background-image: url(", ");\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n  max-width: 800px;\n  padding: 30px;\n  text-shadow: 2px 2px 10px #000;\n  text-align: center;\n"], ["\n  position: relative;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n  max-width: 800px;\n  padding: 30px;\n  text-shadow: 2px 2px 10px #000;\n  text-align: center;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"], ["\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);

exports.default = Hero;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

var _leaves = __webpack_require__(10);

var _leaves2 = _interopRequireDefault(_leaves);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import Core

//Import assets


var SectionBG = (0, _reactEmotion2.default)("header")(_templateObject, _leaves2.default);

var Content = (0, _reactEmotion2.default)("div")(_templateObject2);

var ButtonRow = (0, _reactEmotion2.default)("div")(_templateObject3);

function Hero(props) {
  return _react2.default.createElement(
    SectionBG,
    null,
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        "h1",
        null,
        "Anata Massage"
      ),
      _react2.default.createElement(
        "h3",
        null,
        "On demand relaxation and healing. ",
        _react2.default.createElement("br", null),
        " Delivered right to your home."
      ),
      _react2.default.createElement(
        ButtonRow,
        null,
        _react2.default.createElement(
          _core.Button,
          null,
          " Book Now "
        ),
        _react2.default.createElement(
          _core.Button,
          null,
          " View Services "
        )
      ),
      _react2.default.createElement(
        "h4",
        null,
        "Mobile massage treatments ",
        _react2.default.createElement("br", null),
        " in Squamish and Whistler, BC."
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/leaves.6beffe8c.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  top: 0%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  background: url(", ");\n  background-size: cover;\n  width: 250px;\n  padding-bottom: 250px;\n  @media (max-width: 750px) {\n    width: 40%;\n    padding-bottom: 40%;\n  }\n"], ["\n  position: relative;\n  top: 0%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  background: url(", ");\n  background-size: cover;\n  width: 250px;\n  padding-bottom: 250px;\n  @media (max-width: 750px) {\n    width: 40%;\n    padding-bottom: 40%;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin-top: -100px;\n"], ["\n  margin-top: -100px;\n"]);

exports.default = ProfileSection;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

var _raikoProfile = __webpack_require__(12);

var _raikoProfile2 = _interopRequireDefault(_raikoProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import core


//Import assets


var ProfilePic = (0, _reactEmotion2.default)("img")(_templateObject, _raikoProfile2.default);

var ProfileDesc = (0, _reactEmotion2.default)(_core.SectionContent)(_templateObject2);

function ProfileSection(props) {
  return _react2.default.createElement(
    _core.Section,
    null,
    _react2.default.createElement(ProfilePic, null),
    _react2.default.createElement(
      ProfileDesc,
      null,
      _react2.default.createElement(
        "h2",
        null,
        "Hi, I'm Raiko!"
      ),
      _react2.default.createElement(
        "h5",
        null,
        "I am from Estonia!"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "h5",
        null,
        "I have extensively travelled different countries and chose to make Canada my new home. I did my training and graduated at the Vancouver School of Bodywork and Massage."
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "h5",
        null,
        "I enjoy connecting with people and helping them feel their best. Massages are like brain hugs - we all need one from time to time. I would love to be part of your wellneess and self-care."
      )
    )
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/raiko-profile.319c10e3.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  justify-content: space-evenly;\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: space-evenly;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: inline;\n  padding: 15px;\n  max-width: 150px;\n"], ["\n  display: inline;\n  padding: 15px;\n  max-width: 150px;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  width: 150px;\n  @media (max-width: 550px){\n    width:100px;\n  }\n  display: block;\n  margin: auto;\n"], ["\n  width: 150px;\n  @media (max-width: 550px){\n    width:100px;\n  }\n  display: block;\n  margin: auto;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 800;\n"], ["\n  font-weight: 800;\n"]);

exports.default = ProfileSection;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

var _reiki = __webpack_require__(14);

var _reiki2 = _interopRequireDefault(_reiki);

var _firstplace = __webpack_require__(15);

var _firstplace2 = _interopRequireDefault(_firstplace);

var _certGreen = __webpack_require__(16);

var _certGreen2 = _interopRequireDefault(_certGreen);

var _certPurp = __webpack_require__(17);

var _certPurp2 = _interopRequireDefault(_certPurp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import core


//Import assets


var IconRow = (0, _reactEmotion2.default)("div")(_templateObject);
var IconGroup = (0, _reactEmotion2.default)("div")(_templateObject2);
var Qualification = (0, _reactEmotion2.default)("div")(_templateObject3);
var Icon = (0, _reactEmotion2.default)("img")(_templateObject4);
var BoldHeading = (0, _reactEmotion2.default)('h4')(_templateObject5);

function ProfileSection(props) {
  return _react2.default.createElement(
    _core.Section,
    { green: true },
    _react2.default.createElement(
      _core.SectionContent,
      null,
      _react2.default.createElement(
        "h2",
        null,
        "Qualifications"
      ),
      _react2.default.createElement(
        IconRow,
        null,
        _react2.default.createElement(
          IconGroup,
          null,
          _react2.default.createElement(
            Qualification,
            null,
            _react2.default.createElement(Icon, { src: _certPurp2.default }),
            _react2.default.createElement(
              BoldHeading,
              null,
              "Spa Therapy Diploma"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Vancouver School of Bodywork & Massage"
            )
          ),
          _react2.default.createElement(
            Qualification,
            null,
            _react2.default.createElement(Icon, { src: _reiki2.default }),
            _react2.default.createElement(
              BoldHeading,
              null,
              "Reiki Certified"
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "p",
              null,
              "Level 1 Certification"
            )
          )
        ),
        _react2.default.createElement(
          IconGroup,
          null,
          _react2.default.createElement(
            Qualification,
            null,
            _react2.default.createElement(Icon, { src: _certGreen2.default }),
            _react2.default.createElement(
              BoldHeading,
              null,
              "Licensed & Insured"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Holistic Bodywork & Massage"
            )
          ),
          _react2.default.createElement(
            Qualification,
            null,
            _react2.default.createElement(Icon, { src: _firstplace2.default }),
            _react2.default.createElement(
              BoldHeading,
              null,
              "700+ Hours Experience"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Experience in Spa & Therapy"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reiki.b5982a54.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/firstplace.115f0ac9.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cert-green.a7ac5426.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cert-purp.6eb787e3.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  max-width: 1100px;\n"], ["\n  max-width: 1100px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px 0 20px 0;\n"], ["\n  padding: 20px 0 20px 0;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  background: green;\n  width: 180px;\n  height: 180px;\n  @media (max-width: 750px) {\n    display:none;\n  }\n"], ["\n  display: inline-block;\n  background: green;\n  width: 180px;\n  height: 180px;\n  @media (max-width: 750px) {\n    display:none;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  text-align: left;\n  margin-left: 20px;\n  width: calc(100% - 200px - 20px);\n  position: relative;\n  height: 180px;\n  justify-content: space-between;\n  @media (max-width: 750px) {\n    width:100%;\n    height: auto;\n    text-align: center;\n    margin-left: 0px;\n  }\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  text-align: left;\n  margin-left: 20px;\n  width: calc(100% - 200px - 20px);\n  position: relative;\n  height: 180px;\n  justify-content: space-between;\n  @media (max-width: 750px) {\n    width:100%;\n    height: auto;\n    text-align: center;\n    margin-left: 0px;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  margin: 0;\n"], ["\n  font-weight: 500;\n  margin: 0;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  margin: 5px 0 5px 0;\n"], ["\n  margin: 5px 0 5px 0;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  bottom: 0;\n"], ["\n  position: relative;\n  bottom: 0;\n"]);

exports.default = Services;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

var _swedish = __webpack_require__(19);

var _swedish2 = _interopRequireDefault(_swedish);

var _deeptissue = __webpack_require__(20);

var _deeptissue2 = _interopRequireDefault(_deeptissue);

var _shiatsu = __webpack_require__(21);

var _shiatsu2 = _interopRequireDefault(_shiatsu);

var _aromatherapy = __webpack_require__(22);

var _aromatherapy2 = _interopRequireDefault(_aromatherapy);

var _reflexology = __webpack_require__(23);

var _reflexology2 = _interopRequireDefault(_reflexology);

var _integrated = __webpack_require__(24);

var _integrated2 = _interopRequireDefault(_integrated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import core


//Import assets


var Content = (0, _reactEmotion2.default)(_core.SectionContent)(_templateObject);

var ServiceWrapper = (0, _reactEmotion2.default)("div")(_templateObject2);
var Img = (0, _reactEmotion2.default)("img")(_templateObject3);
var Service = (0, _reactEmotion2.default)("div")(_templateObject4);

var ServiceTitle = (0, _reactEmotion2.default)("h3")(_templateObject5);

var ServiceDesc = (0, _reactEmotion2.default)("p")(_templateObject6);

var BookingSection = (0, _reactEmotion2.default)("div")(_templateObject7);

function Services(props) {
  return _react2.default.createElement(
    _core.Section,
    null,
    _react2.default.createElement(
      Content,
      null,
      _react2.default.createElement(
        "h2",
        null,
        "Services Offered"
      ),
      _react2.default.createElement(
        "h5",
        null,
        "All services are offered in the comfort of your own home. We bring all the equipment, techniques and knowledge to help you relax and heal - without you even leaving your home."
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        ServiceWrapper,
        null,
        _react2.default.createElement(Img, { src: _swedish2.default }),
        _react2.default.createElement(
          Service,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              ServiceTitle,
              null,
              "Traditional Swedish Massage"
            ),
            _react2.default.createElement(
              ServiceDesc,
              null,
              "The basic tecniuqes to this are: effleurage, petrissage, friction and tapotement. These movements warm up the muscle tissue releasing and breaking up the tension. This releaves stress and improves lymph and blood circulation, promotes deeper breathing, increases and promotes joint flexibility and mental awareness."
            )
          ),
          _react2.default.createElement(
            BookingSection,
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Book Now ",
              _react2.default.createElement(
                "i",
                null,
                "(Taxes Included)"
              )
            ),
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "60 min -- $100"
            ),
            " ",
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "90 min -- $130"
            )
          )
        )
      ),
      _react2.default.createElement(
        ServiceWrapper,
        null,
        _react2.default.createElement(Img, { src: _deeptissue2.default }),
        _react2.default.createElement(
          Service,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              ServiceTitle,
              null,
              "Deep Tissue Massage"
            ),
            _react2.default.createElement(
              ServiceDesc,
              null,
              "A muscle-specific modality that involes slow strokes and direct pressure. It's highly effective for releasing chronic pain and stress in muscles that are over-used or have had past injuries."
            )
          ),
          _react2.default.createElement(
            BookingSection,
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Book Now ",
              _react2.default.createElement(
                "i",
                null,
                "(Taxes Included)"
              )
            ),
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "60 min -- $110"
            ),
            " ",
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "90 min -- $140"
            )
          )
        )
      ),
      _react2.default.createElement(
        ServiceWrapper,
        null,
        _react2.default.createElement(Img, { src: _shiatsu2.default }),
        _react2.default.createElement(
          Service,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              ServiceTitle,
              null,
              "Shiatsu Massage"
            ),
            _react2.default.createElement(
              ServiceDesc,
              null,
              "Shiatsu in Japanese means finger pressure - precise, comfortable pressure applied to all parts of the body effectively balancing body and mind triggering our own natural healing power."
            )
          ),
          _react2.default.createElement(
            BookingSection,
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Book Now ",
              _react2.default.createElement(
                "i",
                null,
                "(Taxes Included)"
              )
            ),
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "60 min -- $100"
            ),
            " ",
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "90 min -- $130"
            )
          )
        )
      ),
      _react2.default.createElement(
        ServiceWrapper,
        null,
        _react2.default.createElement(Img, { src: _aromatherapy2.default }),
        _react2.default.createElement(
          Service,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              ServiceTitle,
              null,
              "Aromatherapy"
            ),
            _react2.default.createElement(
              ServiceDesc,
              null,
              "Aromatherapy is the practice of using essential plant oils for healing body, mind and spirit."
            )
          ),
          _react2.default.createElement(
            BookingSection,
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Book Now ",
              _react2.default.createElement(
                "i",
                null,
                "(Taxes Included)"
              )
            ),
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "60 min -- $115"
            ),
            " ",
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "90 min -- $150"
            )
          )
        )
      ),
      _react2.default.createElement(
        ServiceWrapper,
        null,
        _react2.default.createElement(Img, { src: _reflexology2.default }),
        _react2.default.createElement(
          Service,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              ServiceTitle,
              null,
              "Reflexology Foot Massage"
            ),
            _react2.default.createElement(
              ServiceDesc,
              null,
              "This holistic healing therapy works on the principle that each body part is represented on the feet and hands of an individual. The foot acts as a map of the entire body - when the areas are pressed, they simulate the flow of energy and release blockages."
            )
          ),
          _react2.default.createElement(
            BookingSection,
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Book Now ",
              _react2.default.createElement(
                "i",
                null,
                "(Taxes Included)"
              )
            ),
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "60 min -- $100"
            ),
            " ",
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "90 min -- $140"
            )
          )
        )
      ),
      _react2.default.createElement(
        ServiceWrapper,
        null,
        _react2.default.createElement(Img, { src: _integrated2.default }),
        _react2.default.createElement(
          Service,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              ServiceTitle,
              null,
              "Integrated Holistic Whole Body Massage"
            ),
            _react2.default.createElement(
              ServiceDesc,
              null,
              "This treatment combines techniques from many different massage styles and traditions as appropriate to give you a truly individual treatment that meets your physical and emotional needs on the day."
            )
          ),
          _react2.default.createElement(
            BookingSection,
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Book Now ",
              _react2.default.createElement(
                "i",
                null,
                "(Taxes Included)"
              )
            ),
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "60 min -- $130"
            ),
            " ",
            _react2.default.createElement(
              _core.Button,
              { small: true, color: "grey" },
              "90 min -- $170"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/swedish.d7d5c29a.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/deeptissue.fed614f6.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/shiatsu.48c0751a.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aromatherapy.93c184fe.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reflexology.19a26573.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/integrated.285778c5.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  @media (max-width:750px){\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  @media (max-width:750px){\n    flex-direction: column;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  flex:1;\n  display: inline-block;\n  vertical-align: top;\n  min-width: 200px;\n  margin:15px;\n"], ["\n  flex:1;\n  display: inline-block;\n  vertical-align: top;\n  min-width: 200px;\n  margin:15px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  margin:0px 5px;\n  width:100%;\n"], ["\n  white-space: nowrap;\n  margin:0px 5px;\n  width:100%;\n"]);

exports.default = ContactSection;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import core


var Row = (0, _reactEmotion2.default)('div')(_templateObject);
var HorizBlock = (0, _reactEmotion2.default)('div')(_templateObject2);
var Paragraph = (0, _reactEmotion2.default)('p')(_templateObject3);
function ContactSection(props) {
  return _react2.default.createElement(
    _core.Section,
    { green: true, style: { minHeight: 'auto' } },
    _react2.default.createElement(
      _core.SectionContent,
      { style: { whiteSpace: 'normal' } },
      _react2.default.createElement(
        "h2",
        null,
        "Contact"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        Row,
        null,
        _react2.default.createElement(
          HorizBlock,
          null,
          _react2.default.createElement(
            "h3",
            null,
            "Email"
          ),
          _react2.default.createElement(
            Paragraph,
            null,
            "Raikisco@gmail.com"
          )
        ),
        _react2.default.createElement(
          HorizBlock,
          null,
          _react2.default.createElement(
            "h3",
            null,
            "Address"
          ),
          _react2.default.createElement(
            Paragraph,
            null,
            "41708 Government Road",
            _react2.default.createElement("br", null),
            " P.O. Box 3378 ",
            _react2.default.createElement("br", null),
            " Garibaldi Highlands, BC ",
            _react2.default.createElement("br", null),
            " V0N 1T0"
          )
        ),
        _react2.default.createElement(
          HorizBlock,
          null,
          _react2.default.createElement(
            "h3",
            null,
            "Telephone"
          ),
          _react2.default.createElement(
            Paragraph,
            null,
            "778 226 1184"
          )
        )
      )
    )
  );
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.3298ee04.js.map