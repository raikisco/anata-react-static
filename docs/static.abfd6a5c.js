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
/******/ 	__webpack_require__.p = "http://www.tobygu.com/anata-react-static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    _templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  border: 2px solid ", ";\n  background-color: rgba(0, 171, 0, 0);\n  border-radius: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  min-width: ", ";\n  @media (max-width: 750px) {\n    font-size: 1.2em;\n    min-width: 180px;\n    margin: 2px;\n  }\n  @media (max-width: 500px) {\n    font-size: 1.0em;\n    min-width: 160px;\n    margin: 2px;\n  }\n  &:hover {\n    background-color: rgba(0, 171, 0, 0.2);\n  }\n  &:active {\n    background-color: rgba(0, 171, 0, 0.4);\n  }\n  transition: all 0.3s;\n"], ["\n  cursor: pointer;\n  color: ", ";\n  border: 2px solid ", ";\n  background-color: rgba(0, 171, 0, 0);\n  border-radius: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  min-width: ", ";\n  @media (max-width: 750px) {\n    font-size: 1.2em;\n    min-width: 180px;\n    margin: 2px;\n  }\n  @media (max-width: 500px) {\n    font-size: 1.0em;\n    min-width: 160px;\n    margin: 2px;\n  }\n  &:hover {\n    background-color: rgba(0, 171, 0, 0.2);\n  }\n  &:active {\n    background-color: rgba(0, 171, 0, 0.4);\n  }\n  transition: all 0.3s;\n"]);

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
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar/lib/css/react-big-calendar.css");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(7);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactHotLoader = __webpack_require__(9);

__webpack_require__(10);

var _reactScroll = __webpack_require__(11);

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _Hero = __webpack_require__(12);

var _Hero2 = _interopRequireDefault(_Hero);

var _Profile = __webpack_require__(14);

var _Profile2 = _interopRequireDefault(_Profile);

var _Qualifications = __webpack_require__(16);

var _Qualifications2 = _interopRequireDefault(_Qualifications);

var _Services = __webpack_require__(21);

var _Services2 = _interopRequireDefault(_Services);

var _Contact = __webpack_require__(28);

var _Contact2 = _interopRequireDefault(_Contact);

var _BookingModal = __webpack_require__(29);

var _BookingModal2 = _interopRequireDefault(_BookingModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Import Components


var scroll = _reactScroll2.default.animateScroll;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    // this.handleToggleModal = this.handleToggleModal.bind(this);
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.handleScrollToServices = _this.handleScrollToServices.bind(_this);
    _this.state = {
      modalOpen: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        client: true
      });
    }
  }, {
    key: "handleScrollToServices",
    value: function handleScrollToServices() {
      if (this.state.client) {
        var scrollTop = parseInt(document.getElementById("services").getBoundingClientRect().top,
        // ReactDOM.findDOMNode(this.services).getBoundingClientRect().top,
        10);
        scroll.scrollTo(scrollTop);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { onScroll: this.handleOnScroll },
        _react2.default.createElement(_Hero2.default, { onScrollToServices: this.handleScrollToServices }),
        _react2.default.createElement(_Profile2.default, null),
        _react2.default.createElement(_Qualifications2.default, null),
        _react2.default.createElement(_Services2.default, {
          id: "services",
          onToggleModal: this.handleToggleModal,
          ref: function ref(c) {
            return _this2.services = c;
          }
        }),
        _react2.default.createElement(_Contact2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 12 */
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

var _leaves = __webpack_require__(13);

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
          "a",
          { href: "https://calendly.com/anatamassage" },
          _react2.default.createElement(
            _core.Button,
            null,
            " Book Now "
          ),
          " "
        ),
        _react2.default.createElement(
          _core.Button,
          { onClick: props.onScrollToServices },
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/leaves.6beffe8c.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  top: 0%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  background: url(", ");\n  background-size: cover;\n  width: 200px;\n  padding-bottom: 200px;\n  @media (max-width: 500px) {\n    width: 35%;\n    padding-bottom: 35%;\n  }\n"], ["\n  position: relative;\n  top: 0%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  background: url(", ");\n  background-size: cover;\n  width: 200px;\n  padding-bottom: 200px;\n  @media (max-width: 500px) {\n    width: 35%;\n    padding-bottom: 35%;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  margin-top: -100px;\n  @media (max-width: 500px) {\n    margin-top: -80px;\n  }\n"], ["\n  margin-top: -100px;\n  @media (max-width: 500px) {\n    margin-top: -80px;\n  }\n"]);

exports.default = ProfileSection;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

var _raikoFace = __webpack_require__(15);

var _raikoFace2 = _interopRequireDefault(_raikoFace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Import core


//Import assets
// import profile from "assets/raiko-profile.jpg";


var ProfilePic = (0, _reactEmotion2.default)("img")(_templateObject, _raikoFace2.default);

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
        "Hi, I'm Raiko."
      ),
      _react2.default.createElement(
        "h5",
        null,
        "I am from Estonia."
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
        "I enjoy connecting with people and helping them feel their best. Massages are like brain hugs - we all need one from time to time. I would love to be part of your wellness and self-care."
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/raiko-face.f3a1b735.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  @media(max-width: 950px){\n    flex-direction: column;\n  }\n"], ["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  @media(max-width: 950px){\n    flex-direction: column;\n  }\n"]),
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

var _reiki = __webpack_require__(17);

var _reiki2 = _interopRequireDefault(_reiki);

var _firstplace = __webpack_require__(18);

var _firstplace2 = _interopRequireDefault(_firstplace);

var _certGreen = __webpack_require__(19);

var _certGreen2 = _interopRequireDefault(_certGreen);

var _certPurp = __webpack_require__(20);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reiki.b5982a54.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/firstplace.115f0ac9.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cert-green.a7ac5426.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cert-purp.6eb787e3.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  max-width: 1100px;\n"], ["\n  max-width: 1100px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px 0 20px 0;\n"], ["\n  padding: 20px 0 20px 0;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  background: green;\n  width: 180px;\n  height: 180px;\n  @media (max-width: 750px) {\n    display: none;\n  }\n"], ["\n  display: inline-block;\n  background: green;\n  width: 180px;\n  height: 180px;\n  @media (max-width: 750px) {\n    display: none;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  text-align: left;\n  margin-left: 20px;\n  width: calc(100% - 200px - 20px);\n  position: relative;\n  height: 180px;\n  justify-content: space-between;\n  @media (max-width: 750px) {\n    width: 100%;\n    height: auto;\n    text-align: center;\n    margin-left: 0px;\n  }\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: top;\n  text-align: left;\n  margin-left: 20px;\n  width: calc(100% - 200px - 20px);\n  position: relative;\n  height: 180px;\n  justify-content: space-between;\n  @media (max-width: 750px) {\n    width: 100%;\n    height: auto;\n    text-align: center;\n    margin-left: 0px;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  margin: 0;\n"], ["\n  font-weight: 500;\n  margin: 0;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  margin: 5px 0 5px 0;\n"], ["\n  margin: 5px 0 5px 0;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  bottom: 0;\n"], ["\n  position: relative;\n  bottom: 0;\n"]);

exports.default = Services;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _core = __webpack_require__(2);

var _swedish = __webpack_require__(22);

var _swedish2 = _interopRequireDefault(_swedish);

var _deeptissue = __webpack_require__(23);

var _deeptissue2 = _interopRequireDefault(_deeptissue);

var _shiatsu = __webpack_require__(24);

var _shiatsu2 = _interopRequireDefault(_shiatsu);

var _aromatherapy = __webpack_require__(25);

var _aromatherapy2 = _interopRequireDefault(_aromatherapy);

var _reflexology = __webpack_require__(26);

var _reflexology2 = _interopRequireDefault(_reflexology);

var _integrated = __webpack_require__(27);

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
    { id: "services" },
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
              "The basic techniques to this are: effleurage, petrissage, friction and tapotement. These movements warm up the muscle tissue releasing and breaking up the tension. This releaves stress and improves lymph and blood circulation, promotes deeper breathing, increases and promotes joint flexibility and mental awareness."
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
              "a",
              {
                href: "https://calendly.com/anatamassage/swedish-massage-60-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "60 min -- $100"
              )
            ),
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://calendly.com/anatamassage/swedish-massage-90-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "90 min -- $130"
              )
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
              "a",
              {
                href: "https://calendly.com/anatamassage/deep-tissue-massage-60-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "60 min -- $110"
              )
            ),
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://calendly.com/anatamassage/deep-tissue-massage-90-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "90 min -- $140"
              )
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
              "a",
              {
                href: "https://calendly.com/anatamassage/shiatsu-massage-60-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "60 min -- $100"
              )
            ),
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://calendly.com/anatamassage/shiatsu-massage-90-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "90 min -- $130"
              )
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
              "a",
              {
                href: "https://calendly.com/anatamassage/aromatherapy-60-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "60 min -- $115"
              )
            ),
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://calendly.com/anatamassage/aromatherapy-90-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "90 min -- $150"
              )
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
              "a",
              {
                href: "https://calendly.com/anatamassage/reflexology-foot-massage-60-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "60 min -- $100"
              )
            ),
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://calendly.com/anatamassage/reflexology-foot-massage-90-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "90 min -- $140"
              )
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
              "a",
              {
                href: "https://calendly.com/anatamassage/integrated-whole-body-massage-60-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "60 min -- $130"
              )
            ),
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://calendly.com/anatamassage/integrated-whole-body-massage-90-min"
              },
              _react2.default.createElement(
                _core.Button,
                { small: true, color: "grey" },
                "90 min -- $170"
              )
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/swedish.d7d5c29a.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/deeptissue.fed614f6.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/shiatsu.48c0751a.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aromatherapy.93c184fe.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/reflexology.19a26573.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/integrated.285778c5.jpg";

/***/ }),
/* 28 */
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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: ", ";\n  width: 100vw;\n  height: 100vh;\n  z-index: ", ";\n  transition: all 0.9s;\n"], ["\n  position: fixed;\n  background-color: ", ";\n  width: 100vw;\n  height: 100vh;\n  z-index: ", ";\n  transition: all 0.9s;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 20px;\n  max-width: 700px;\n  max-height: 80%;\n  height: ", ";\n  opacity: ", ";\n  @media (max-width: 750px) {\n    padding: 20px 30px;\n    width: calc(100% - 65px);\n  }\n  padding: 30px 50px;\n  width: calc(100% - 120px);\n  transition: all 0.9s;\n  text-align: center;\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 20px;\n  max-width: 700px;\n  max-height: 80%;\n  height: ", ";\n  opacity: ", ";\n  @media (max-width: 750px) {\n    padding: 20px 30px;\n    width: calc(100% - 65px);\n  }\n  padding: 30px 50px;\n  width: calc(100% - 120px);\n  transition: all 0.9s;\n  text-align: center;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  height: calc(100% - 50px);\n  overflow: scroll;\n"], ["\n  position: relative;\n  height: calc(100% - 50px);\n  overflow: scroll;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  height: 40px;\n  position: relative;\n"], ["\n  height: 40px;\n  position: relative;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  transform: translateX(-120%);\n"], ["\n  cursor: pointer;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  transform: translateX(-120%);\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n"], ["\n  font-weight: 600;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  ", ";\n  margin-bottom: 10px;\n"], ["\n  ", ";\n  margin-bottom: 10px;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactBigCalendar = __webpack_require__(4);

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

__webpack_require__(5);

var _reactSelectPlus = __webpack_require__(30);

var _reactSelectPlus2 = _interopRequireDefault(_reactSelectPlus);

__webpack_require__(31);

var _core = __webpack_require__(2);

var _Calendar = __webpack_require__(32);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _ContactInfoForm = __webpack_require__(35);

var _ContactInfoForm2 = _interopRequireDefault(_ContactInfoForm);

var _PayPalButton = __webpack_require__(36);

var _PayPalButton2 = _interopRequireDefault(_PayPalButton);

var _utils = __webpack_require__(37);

var _services = __webpack_require__(38);

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import google from 'googleapis';

//Import core


//Import components


//Import privateKey for anatamassagecalendar
var privatekey = __webpack_require__(39);

var Overlay = (0, _reactEmotion2.default)("div")(_templateObject, function (props) {
  return props.visible ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)";
}, function (props) {
  return props.visible ? 10 : 0;
});

var ModalBg = (0, _reactEmotion2.default)("div")(_templateObject2, function (props) {
  return props.visible ? "80%" : "0%";
}, function (props) {
  return props.visible ? 1 : 0;
});

var ModalContent = (0, _reactEmotion2.default)("div")(_templateObject3);
var ModalHeader = (0, _reactEmotion2.default)("div")(_templateObject4);

var CloseBtn = (0, _reactEmotion2.default)("div")(_templateObject5);

var BoldTitle = (0, _reactEmotion2.default)("h4")(_templateObject6);

var BookButton = (0, _reactEmotion2.default)(_core.Button)(_templateObject7);

var InputLabels = (0, _reactEmotion2.default)("div")(_templateObject8, function (props) {
  return props.disabled && "opacity:0.2";
});

var InputTitle = function InputTitle(p) {
  return _react2.default.createElement(
    InputLabels,
    null,
    _react2.default.createElement(
      BoldTitle,
      null,
      p.title
    ),
    p.subTitle
  );
};

var BookingModal = function (_React$Component) {
  _inherits(BookingModal, _React$Component);

  function BookingModal(props) {
    _classCallCheck(this, BookingModal);

    var _this = _possibleConstructorReturn(this, (BookingModal.__proto__ || Object.getPrototypeOf(BookingModal)).call(this, props));

    _this.handleCalendarError = _this.handleCalendarError.bind(_this);
    _this.handleBookingValue = _this.handleBookingValue.bind(_this);
    _this.handleChangeEvents = _this.handleChangeEvents.bind(_this);
    _this.handlePaymentComplete = _this.handlePaymentComplete.bind(_this);
    _this.state = {
      bookingValues: {},
      events: []
    };
    return _this;
  }

  _createClass(BookingModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //connect to google calendar
      // let jwtClient = new google.auth.JWT(
      //   privatekey.client_email,
      //   null,
      //   privatekey.private_key,
      //   [
      //     "https://www.googleapis.com/auth/spreadsheets",
      //     "https://www.googleapis.com/auth/drive",
      //     "https://www.googleapis.com/auth/calendar"
      //   ]
      // );
      // //authenticate request
      // jwtClient.authorize(function(err, tokens) {
      //   if (err) {
      //     console.log(err);
      //     return;
      //   } else {
      //     console.log("Successfully connected!");
      //   }
      // });
      //
      // let calendar = google.calendar('v3');
      //
      // var resource = {
      //   summary: "Appointment",
      //   location: "Somewhere",
      //   start: {
      //     dateTime: "2018-03-16T10:00:00.000-07:00"
      //   },
      //   end: {
      //     dateTime: "2018-03-16T10:25:00.000-07:00"
      //   }
      // };
      //
      // var request = calendar.events.insert({
      //   calendarId: 'anatamassage@gmail.com',
      //   resource: resource
      // },(err,resp)=>{
      //   if (err) {
      //     console.log("error", err);
      //   } else {
      //     console.log("resp, resp", resp);
      //   }
      // });


      // calendar.events.list({
      //    auth: jwtClient,
      //    calendarId: 'anatamassage@gmail.com'
      // }, function (err, response) {
      //    if (err) {
      //        console.log('The API returned an error: ' + err);
      //        return;
      //    }
      //    var events = response.items;
      //    if (events.length == 0) {
      //        console.log('No events found.');
      //    } else {
      //        console.log('Event from Google Calendar:');
      //        for (let event of response.items) {
      //            console.log('Event name: %s, Creator name: %s, Create date: %s', event.summary, event.creator.displayName, event.start.date);
      //        }
      //    }
      // });

      //fetch events
      (0, _utils.doFetch)().then(function (res) {
        if (res.items) {
          var modifiedItems = [];
          var unavailableDates = [];
          res.items.forEach(function (item) {
            if (item.start.dateTime) {
              //deal with start
              var sdP = item.start.dateTime.split(/-|T|:/);
              console.log("startDateParams", sdP);
              var startDate = new Date(sdP[0], sdP[1] - 1, sdP[2], sdP[3], sdP[4], sdP[5]);
              var edP = item.end.dateTime.split(/-|T|:/);
              var endDate = new Date(edP[0], edP[1] - 1, edP[2], edP[3], edP[4], edP[5]);
              modifiedItems.push(_extends({}, item, {
                start: startDate,
                end: endDate,
                title: item.summary
              }));
            } else {
              var _sdP = item.start.date.split(/-|T|:/);
              var _edP = item.end.date.split(/-|T|:/);
              unavailableDates.push(new Date(_sdP[0], _sdP[1], _sdP[2]));
              // modifiedItems.push({
              //   start: new Date(sdP[0], sdP[1] - 1, sdP[2], 1),
              //   end: new Date(edP[0], edP[1] - 1, sdP[2], 23),
              //   title: item.summary,
              //   allDay: true
              // });
            }
          });
          _this2.setState({ events: modifiedItems, unavailableDates: unavailableDates });
        }
      });
    }
  }, {
    key: "handleCalendarError",
    value: function handleCalendarError(error) {
      this.setState({
        calendarError: error
      });
    }
  }, {
    key: "handleBookingValue",
    value: function handleBookingValue(id, value) {
      var newBookingVal = _extends({}, this.state.bookingValues, _defineProperty({}, id, value));
      this.setState({ bookingValues: newBookingVal });
    }
  }, {
    key: "handleChangeEvents",
    value: function handleChangeEvents(newEvent) {
      this.setState({
        newEvent: newEvent,
        calendarError: null
      });
    }
  }, {
    key: "handlePaymentComplete",
    value: function handlePaymentComplete() {
      (0, _utils.doPush)(this.state.newEvent, this.state.bookingValues);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var bookValues = this.state.bookingValues;
      return _react2.default.createElement(
        Overlay,
        { visible: props.modalOpen },
        _react2.default.createElement(
          ModalBg,
          { visible: props.modalOpen },
          _react2.default.createElement(
            ModalHeader,
            null,
            _react2.default.createElement(
              "h3",
              { style: { display: "inline", fontWeight: 600 } },
              "Book Now"
            ),
            _react2.default.createElement(
              CloseBtn,
              { onClick: this.handlePaymentComplete },
              _react2.default.createElement(
                "u",
                null,
                "Close"
              )
            )
          ),
          _react2.default.createElement(
            ModalContent,
            null,
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "div",
              { style: { textAlign: "center" } },
              _react2.default.createElement(InputTitle, { title: "Step 1.", subTitle: "How do we contact you?" }),
              _react2.default.createElement(_ContactInfoForm2.default, {
                values: this.state.bookingValues,
                onChange: this.handleBookingValue
              })
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "div",
              { style: { display: "flex" } },
              _react2.default.createElement(
                "div",
                { style: { flex: 3, zIndex: 6 } },
                _react2.default.createElement(InputTitle, { title: "Step 2.", subTitle: "Select your service" }),
                _react2.default.createElement(_reactSelectPlus2.default, {
                  value: this.state.bookingValues.service,
                  onChange: this.handleBookingValue.bind(null, "service"),
                  clearable: false,
                  searchable: false,
                  disabled: !this.state.bookingValues.phone,
                  options: [{ value: "swedish", label: "Swedish Massage" }, { value: "deepTissue", label: "Deep Tissue Massage" }, { value: "shiatsu", label: "Shiatsu Massage" }, { value: "aromatherapy", label: "Aromatherapy Massage" }, { value: "reflexology", label: "Reflexology Foot Massage" }, {
                    value: "integrated",
                    label: "Integrated Whole Body Massage"
                  }]
                })
              ),
              _react2.default.createElement("div", { style: { flex: 1 } }),
              _react2.default.createElement(
                "div",
                { style: { flex: 3 } },
                _react2.default.createElement(InputTitle, { title: "Step 3.", subTitle: "Select the duration" }),
                _react2.default.createElement(_reactSelectPlus2.default, {
                  value: this.state.bookingValues.duration,
                  onChange: this.handleBookingValue.bind(null, "duration"),
                  clearable: false,
                  searchable: false,
                  disabled: !this.state.bookingValues.service,
                  options: [{ value: "60", label: "60 Min" }, { value: "90", label: "90 Min" }]
                })
              )
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "div",
              { style: { textAlign: "center" } },
              _react2.default.createElement(InputTitle, { title: "Step 4.", subTitle: "Select your date & time." })
            ),
            _react2.default.createElement(_Calendar2.default, {
              bookingValues: this.state.bookingValues,
              events: this.state.events || [],
              newEvent: this.state.newEvent,
              onChangeEvents: this.handleChangeEvents,
              onError: this.handleCalendarError,
              error: this.state.calendarError,
              unavailableDates: this.state.unavailableDates
            }),
            _react2.default.createElement(
              "div",
              { style: { opacity: this.state.newEvent ? 1 : 0.3 } },
              _react2.default.createElement("br", null),
              bookValues.duration && bookValues.service && _react2.default.createElement(
                "b",
                null,
                "Total:",
                " $",
                _services2.default[bookValues.service.value][bookValues.duration.value]
              ),
              _react2.default.createElement("br", null),
              "To Reserve your spot, click the paypal button.",
              _react2.default.createElement("br", null),
              "Visa & Mastercard both are accepted!",
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              _react2.default.createElement(_PayPalButton2.default, {
                onPaymentComplete: this.handlePaymentComplete,
                price: bookValues.duration && bookValues.service ? _services2.default[bookValues.service.value][bookValues.duration.value] : undefined,
                desc: bookValues.duration && bookValues.service ? bookValues.service.label + " - " + bookValues.duration.label : undefined
              })
            )
          )
        )
      );
    }
  }]);

  return BookingModal;
}(_react2.default.Component);

exports.default = BookingModal;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-select-plus");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-select-plus/dist/react-select-plus.css");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  height: 70%;\n  margin-top: 10px;\n  z-index: 0;\n  position: relative;\n"], ["\n  height: 70%;\n  margin-top: 10px;\n  z-index: 0;\n  position: relative;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  background-color: white;\n  opacity: 0.6;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 5;\n  cursor: not-allowed;\n"], ["\n  background-color: white;\n  opacity: 0.6;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 5;\n  cursor: not-allowed;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactBigCalendar = __webpack_require__(4);

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

__webpack_require__(5);

var _moment = __webpack_require__(33);

var _moment2 = _interopRequireDefault(_moment);

var _clone = __webpack_require__(34);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
_reactBigCalendar2.default.momentLocalizer(_moment2.default); // or globalizeLocalizer

var CalendarWrapper = (0, _reactEmotion2.default)("div")(_templateObject);
var CalendarOverlay = (0, _reactEmotion2.default)("div")(_templateObject2);

//TODO:
// on successful payment, push new event to google calendar, redirect to success page
function isDateAvail(date, unavailableDates) {
  var currentDate = new Date();
  var dateFormatted = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (unavailableDates) {
    if (unavailableDates.find(function (unavailDay) {
      if (date.getFullYear() == unavailDay.getFullYear() && date.getMonth() + 1 == unavailDay.getMonth() && date.getDate() == unavailDay.getDate()) {
        return true;
      }
      return false;
    })) {
      //date is unavailable
      return false;
    }
  }

  var tomorrow = currentDate.setDate(currentDate.getDate());
  if (date < tomorrow) {
    //date is in the past
    return false;
  }
  return true;
}

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    _classCallCheck(this, Calendar);

    return _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).apply(this, arguments));
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var totalEvents = props.events || [];
      if (props.newEvent) {
        totalEvents = totalEvents.slice(0);
        totalEvents.push(props.newEvent);
      }
      return _react2.default.createElement(
        CalendarWrapper,
        null,
        (!props.bookingValues.service || !props.bookingValues.duration) && _react2.default.createElement(CalendarOverlay, null),
        _react2.default.createElement(
          "div",
          { style: { color: "red", paddingBottom: 10 } },
          props.error || " "
        ),
        _react2.default.createElement(_reactBigCalendar2.default, {
          events: totalEvents,
          defaultDate: new Date(),
          views: ["month", "week", "day"],
          selectable: true,
          getDrilldownView: function getDrilldownView(targetDate, currentViewName, configuredViewNames) {
            return isDateAvail(targetDate, _this2.props.unavailableDates) ? "day" : null;
          },
          min: new Date(2017, 10, 0, 10, 0, 0),
          max: new Date(2017, 10, 0, 22, 0, 0),
          dayPropGetter: function dayPropGetter(date) {
            if (!isDateAvail(date, _this2.props.unavailableDates)) {
              return {
                className: null,
                style: { backgroundColor: "red", opacity: 0.4 }
              };
            }
          },
          onSelectSlot: function onSelectSlot(slotInfo) {
            if (Math.floor((slotInfo.end - slotInfo.start) / 1000 / 60) !== parseInt(props.bookingValues.duration.value)) {
              //if all day event or length is wrong!
              return;
            }
            var events = props.events || [];
            //loop through all events and see if there's confclit!
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var event = _step.value;

                //see if slotinfo end is between the start and end of an event
                if (slotInfo.end >= event.start && slotInfo.end <= event.end || slotInfo.start >= event.start && slotInfo.start <= event.end) {
                  props.onError("Uhoh! The selected time is too close to another booking. Please try a different time.");
                  return;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            props.onChangeEvents({
              start: slotInfo.start,
              end: slotInfo.end,
              title: props.bookingValues.service.label
            });
          },
          step: props.bookingValues.duration && parseInt(props.bookingValues.duration.value) || 0
        })
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

exports.default = Calendar;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("clone");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  line-height: 34px;\n  padding: 0px 10px;\n  width: calc(100% - 22px);\n  border-radius: 4px;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border: 1px solid #ccc;\n  color: #333;\n  outline: none;\n  font-size: 16px;\n  font-weight: 300;\n"], ["\n  line-height: 34px;\n  padding: 0px 10px;\n  width: calc(100% - 22px);\n  border-radius: 4px;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border: 1px solid #ccc;\n  color: #333;\n  outline: none;\n  font-size: 16px;\n  font-weight: 300;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  @media (max-width: 750px) {\n    display: block;\n  }\n"], ["\n  display: flex;\n  @media (max-width: 750px) {\n    display: block;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  flex: 3;\n  text-align: left;\n"], ["\n  flex: 3;\n  text-align: left;\n"]);

exports.default = ContactInfoForm;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(1);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = (0, _reactEmotion2.default)("input")(_templateObject);
var FlexCont = (0, _reactEmotion2.default)("div")(_templateObject2);

var FlexBlock = (0, _reactEmotion2.default)("div")(_templateObject3);

function ContactInfoForm(props) {
  return _react2.default.createElement(
    FlexCont,
    null,
    _react2.default.createElement(
      "div",
      { style: { flex: 3, textAlign: "left" } },
      "Name",
      _react2.default.createElement("br", null),
      _react2.default.createElement(Input, {
        value: props.values.name || "",
        onChange: function onChange(e) {
          return props.onChange("name", e.target.value);
        }
      }),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      "Address",
      _react2.default.createElement("br", null),
      _react2.default.createElement(Input, {
        value: props.values.address || "",
        onChange: function onChange(e) {
          return props.onChange("address", e.target.value);
        }
      })
    ),
    _react2.default.createElement(
      "div",
      { style: { flex: 1 } },
      _react2.default.createElement("br", null)
    ),
    _react2.default.createElement(
      "div",
      { style: { flex: 3, textAlign: "left" } },
      "Email",
      _react2.default.createElement("br", null),
      _react2.default.createElement(Input, {
        value: props.values.email || "",
        onChange: function onChange(e) {
          return props.onChange("email", e.target.value);
        }
      }),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      "Phone Number",
      _react2.default.createElement("br", null),
      _react2.default.createElement(Input, {
        value: props.values.phone || "",
        onChange: function onChange(e) {
          return props.onChange("phone", e.target.value);
        }
      })
    )
  );
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PayPalButton = function (_React$Component) {
  _inherits(PayPalButton, _React$Component);

  function PayPalButton(props) {
    _classCallCheck(this, PayPalButton);

    var _this = _possibleConstructorReturn(this, (PayPalButton.__proto__ || Object.getPrototypeOf(PayPalButton)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(PayPalButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ clientSide: true });
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var price = props.price,
          desc = props.desc;

      var client = {
        sandbox: "AcvFd-dhb4tHQ8wNAhpWMa7vynAbgkiFqyxlsNwNzi3bb8EWvHI8XZSO7srZRtPl5ewFHlVHkhGUniIZ",
        production: "AZN4VoCjvnf6XGMcK-kZ1g3byOD7Gg5eErOCwSxD_7t_lu3giMTS_F99_GUbWya-boOv05INyKqCXWH_"
      };
      var payment = function payment(data, actions) {
        // Make a call to the REST api to create the payment
        return actions.payment.create({
          payment: {
            transactions: [{
              amount: { total: price, currency: "CAD" }
            }]
          }
        });
      };

      var onAuthorize = function onAuthorize(data, actions) {
        return actions.payment.execute().then(function () {
          props.onPaymentComplete();
          window.alert("Payment Complete - We've reserved your spot!");
        });
      };
      if (this.state.clientSide) {
        var _PayPalButton = paypal.Button.driver("react", { React: _react2.default, ReactDOM: _reactDom2.default });
        return _react2.default.createElement(
          "div",
          { className: "shoppingCart" },
          _react2.default.createElement(_PayPalButton, {
            env: "sandbox" //sandbox || production
            , client: client,
            payment: payment,
            commit: true,
            onAuthorize: onAuthorize
          })
        );
      }
      return null;
    }
  }]);

  return PayPalButton;
}(_react2.default.Component);

exports.default = PayPalButton;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doFetch = doFetch;
exports.doPush = doPush;
var CALENDAR_ID = "anatamassage@gmail.com";
var API_KEY = "AIzaSyBuCUPmq1l61dCyKJgBhmzCst9jniio3AM";
var SCOPE = "https://www.googleapis.com/auth/calendar";
var CLIENT_ID = "623431044936-3q8ha0451mvoo87hpvha2kkvegrq0pcn.apps.googleusercontent.com";

function doFetch() {
  var url = "https://www.googleapis.com/calendar/v3/calendars/" + CALENDAR_ID + "/events?key=" + API_KEY;
  var options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      dataType: "json"
    }
  };
  return fetch(url, options).then(function (respo) {
    if (respo.statusText !== "No Content") {
      var json = respo.json();
      return json;
    }
    return respo;
  }).catch(function (error) {
    console.log("error", error);
    return { errors: ["A problem has occured with our server"] };
  });
}

function doPush(event, details) {
  handleAuthClick();
}

function handleClientLoad() {
  gapi.client.setApiKey(API_KEY);
  window.setTimeout(checkAuth, 1);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({ client_id: CLIENT_ID, scope: SCOPE, immediate: true }, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById("authorize-button");
  if (authResult) {
    authorizeButton.style.visibility = "hidden";
    makeApiCall();
  } else {
    authorizeButton.style.visibility = "";
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize({ client_id: CLIENT_ID, scope: SCOPE, immediate: false }, handleAuthResult);
  return false;
}

function makeApiCall() {
  var resource = {
    summary: "Appointment",
    location: "Somewhere",
    start: {
      dateTime: "2018-03-16T10:00:00.000-07:00"
    },
    end: {
      dateTime: "2018-03-16T10:25:00.000-07:00"
    }
  };

  var request = gapi.client.calendar.events.insert({
    calendarId: CALENDAR_ID,
    resource: resource
  });
  request.execute(function (resp) {
    console.log(resp);
  });
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {"swedish":{"60":"100","90":"130"},"deepTissue":{"60":"110","90":"140"},"shiatsu":{"60":"100","90":"130"},"aromatherapy":{"60":"115","90":"150"},"reflexology":{"60":"100","90":"140"},"integrated":{"60":"130","90":"170"}}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {"type":"service_account","project_id":"anatamassagecalendar","private_key_id":"2145c6c54bd1cb56c5095624940b05971d779783","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfxM++a9aD9s/f\nFlBBkxw1b2JXtF0ciF+31fIrHH8+v/8ilcbnBcNysD0Y4MqR35BwuMNICu5rMD3Y\nSAjWcFYvLeNvEedKhlEGS79/4HKIgYCzrQZU8AguSGcxTeYiXcBV7xCwFNy/eq7W\n0/KsG4+O+R/ZeIWi3we9iM19JRbKd36mk2EI/5XS1nITgtxH29u3ap88tA5gr9mM\nTpROw6LKv8HWbSHDFz/eKfrCiB27aZ8ZYEvplulVPW8XB4kEEAIyGaWHnJ23v90X\n+N79hCZmpaZtFr1FUJFStseerE0soUO7T/2XzN9ivUdNo1qxH0FrPmsJLvL63QgE\nW0IdvUB/AgMBAAECggEAQhB0ZMWbrPK0bwd/hTYK/o+Bx0lmDSPZDJ/TpP8CINTs\nb4Ume6X29SgqA20EZoBe7jWATnxyrPEESbgzq1RFVvnvJyDslnTm8ScGVx7czVRb\nfzCHQz0D7Pt0bD9Nb517qC0UJfNiem0E+gEnQgKdgJ3EDT1YaQo3XajBa8OX4n0R\npjQaXLhcmCXIi9DlCGwyZzsFVsGXt/TbfNdE00AcDvBsKQukQPZua/+lweIPM1nB\nv7o5szNrcDtTcf5I+W/mew04BEWIiU3kUlLehpmVqKnEf1K8yF8MB8EgTXhF26tU\nHS0C+YzI6bBtYRFz0bdCYlc1eFzZCFbGK+1n3VlERQKBgQDhvixuo1bo0jJsmJgj\nRFhk2foo6x18y8q1hH/7Mj7pcBa4cySE6Ulaidx3omG0ZDYBse7OEXBXf2mF85vU\n2TGKgHobuxQ0lTHqWg3U7ptXN/uaKzTEp9aP+YdNy0d3ep846fhiREs5RdDhQW4t\ntI3qNMf6oUTJqie72MgeC+mCOwKBgQC1LuVAv9u4/YA3ecd0etit/Kuzmyec8gxH\nYMhj2wobq32ruXLWI55pyVPUYX1aZZgR3hMoZ5Z20jKgRLo9LNST4hZi3CD7Haqg\niiYJACEJxKeIlr1qkIbc9PuwTvqt71MVIiqugwVOtTqWis3aliCX/z75ia3GSLkN\ncA2NhAMyjQKBgDfs0T0noiRTzsIwm6BBElUJ23u/o7KDGlkV1k75B7T1W+ueOvHi\niZWwibnptKLoIKkS18Kdd2N14UKaM4TrueZCJf4wvrS4MYGJhdu2sS1OZTqwcYY2\nvmU0wFx5e98Rtdh3vl055hjuPu1PNGiGTpIzOUfSJCSBzw4uioVHFjZ5AoGAFUgm\n4Y4nrvkH4HxLc2Eipn0xZe1pn8PGsXOq1h/adhmUr2EfHgwdBWwCjsXMxZt9W0vs\nkChqwhY6oByyi5ECf0RlQMN+lECN1EGl6hS7zLvuudqK8UN8s+OK1NDSHTApYCgd\nP1ZgfzhGY3x2ZaCQv4nZydHkOZA9PFjXHrJM9dkCgYEAsrxz57Qm64jdp8paqqcB\n5Bx5yu9sB+gJymB3RdO0cX/RSr5pbR3TlkRnXeljG8h0DJYsy9oDr6fEm3NAtiLc\nIQoQo5Mh7JsMcahpWSHYOB/YGU9KuyzJJav7VTU09KIIeIm78tDtGgnp/WLEdNsk\nybulTGV876yRjRfp7T9DWN4=\n-----END PRIVATE KEY-----\n","client_email":"githubhost@anatamassagecalendar.iam.gserviceaccount.com","client_id":"115608027106076174360","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/githubhost%40anatamassagecalendar.iam.gserviceaccount.com"}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.abfd6a5c.js.map