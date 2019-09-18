define("94e1e5b9-6404-4c7c-8dff-b6471890cb24_0.0.1", ["@microsoft/decorators","@microsoft/sp-application-base","@microsoft/sp-core-library","BindingDemoApplicationCustomizerStrings","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_decorators__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_application_base__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE_BindingDemoApplicationCustomizerStrings__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/extensions/bindingDemo/BindingDemoApplicationCustomizer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/extensions/bindingDemo/BindingDemoApplicationCustomizer.js":
/*!************************************************************************!*\
  !*** ./lib/extensions/bindingDemo/BindingDemoApplicationCustomizer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/decorators */ "@microsoft/decorators");
/* harmony import */ var _microsoft_decorators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_decorators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-application-base */ "@microsoft/sp-application-base");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var BindingDemoApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! BindingDemoApplicationCustomizerStrings */ "BindingDemoApplicationCustomizerStrings");
/* harmony import */ var BindingDemoApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(BindingDemoApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_MyComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/MyComponent */ "./lib/extensions/component/MyComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/** A Custom Action which can be run during execution of a Client Side Application */
var BindingDemoApplicationCustomizer = /** @class */ (function (_super) {
    __extends(BindingDemoApplicationCustomizer, _super);
    function BindingDemoApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LOG_SOURCE = "BindingDemoApplicationCustomizer.ts";
        return _this;
    }
    BindingDemoApplicationCustomizer.prototype.onInit = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_3__["Log"].info(this.LOG_SOURCE, "Initialized " + BindingDemoApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_5__["Title"]);
        window.init = window.instance || 0;
        window.init++;
        console.log("Init call: " + window.init);
        window.render = 1;
        // navigatedEvent captures page transition
        this.context.application.navigatedEvent.add(this, this.render);
        // changedEvent doesn't handle page transitions ergo the context not correct so this cannot be used.
        //this.context.placeholderProvider.changedEvent.add(this, this.render);
        return Promise.resolve();
    };
    BindingDemoApplicationCustomizer.prototype.onDispose = function () {
        // dispose navigated event
        this.context.application.navigatedEvent.remove(this, this.render);
        // changedEvent doesn't handle page transitions ergo the context not correct so this cannot be used.
        //this.context.placeholderProvider.changedEvent.remove(this, this.render);
        return Promise.resolve();
    };
    BindingDemoApplicationCustomizer.prototype.render = function () {
        window.render++;
        console.log("Render call: " + window.render);
        var elementId = "AppCustomDemoContainer";
        if (this.context != undefined) {
            var placeholder = this.context.placeholderProvider.tryCreateContent(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["PlaceholderName"].Top, { onDispose: this.onDispose });
            //let placeholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this.onDispose });
            if (placeholder != undefined) {
                //Because the placeholder isn't cleaned out we need to validate that we're not going to render more than 1x.
                var container = document.getElementById(elementId);
                if (container == undefined) {
                    container = document.createElement("DIV");
                    container.setAttribute("id", elementId);
                    placeholder.domElement.appendChild(container);
                    //should we re-render??
                }
                var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_component_MyComponent__WEBPACK_IMPORTED_MODULE_6__["default"], { context: this.context, init: window.init, render: window.render });
                var elements = [];
                elements.push(element);
                react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](elements, container);
            }
            else {
                console.error("Bottom Placeholder not available! [" + BindingDemoApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_5__["Title"] + " - " + this.LOG_SOURCE + "]");
            }
        }
        else {
            console.error("Context is undefined in render! [" + BindingDemoApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_5__["Title"] + " - " + this.LOG_SOURCE + "]");
        }
    };
    __decorate([
        _microsoft_decorators__WEBPACK_IMPORTED_MODULE_2__["override"]
    ], BindingDemoApplicationCustomizer.prototype, "onInit", null);
    __decorate([
        _microsoft_decorators__WEBPACK_IMPORTED_MODULE_2__["override"]
    ], BindingDemoApplicationCustomizer.prototype, "onDispose", null);
    return BindingDemoApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_4__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (BindingDemoApplicationCustomizer);


/***/ }),

/***/ "./lib/extensions/component/MyComponent.js":
/*!*************************************************!*\
  !*** ./lib/extensions/component/MyComponent.js ***!
  \*************************************************/
/*! exports provided: MyComponentState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentState", function() { return MyComponentState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MyComponentState = /** @class */ (function () {
    function MyComponentState(url, editMode, rootFolder) {
        if (url === void 0) { url = null; }
        if (editMode === void 0) { editMode = document.location.href.indexOf("Mode=Edit") !== -1; }
        if (rootFolder === void 0) { rootFolder = false; }
        this.url = url;
        this.editMode = editMode;
        this.rootFolder = rootFolder;
    }
    return MyComponentState;
}());

var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.LOG_SOURCE = "MyComponent";
        var h = (history.state) ? history.state["url"] : "null";
        _this.state = new MyComponentState(h, document.location.href.indexOf("Mode=Edit") !== -1);
        if (document.location.pathname.indexOf(_this.props.context.pageContext.site.serverRelativeUrl + "/") < 0) {
            console.warn("Page context location != document location: (" + _this.props.context.pageContext.site.serverRelativeUrl + ") - (" + document.location.pathname + ")");
        }
        return _this;
    }
    MyComponent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var h, _pushState;
            var _this = this;
            return __generator(this, function (_a) {
                h = (history.state) ? history.state["url"] : "null";
                this.setState({ url: h });
                _pushState = function () {
                    var _defaultPushState = history.pushState;
                    // We need the current this context to update the component its state
                    var _self = _this;
                    return function (data, title, url) {
                        try {
                            if (_self.props.context.isDisposed) {
                                console.error("Disposed context during page transition - " + _self.LOG_SOURCE + " (componentDidMount-pushState)");
                                return _defaultPushState.apply(this, [data, title, url]);
                            }
                            var rootFolder = false;
                            var workingUrl = url.toLowerCase();
                            if (workingUrl.indexOf('.aspx') == -1) {
                                //Assume home page and get full url
                                workingUrl = ("" + document.location.origin + _self.props.context.pageContext.site.serverRequestPath).toLowerCase();
                            }
                            var pageUrl = workingUrl.split("?")[0];
                            var spIdx = pageUrl.toLowerCase().indexOf('sitepages');
                            if (spIdx < 0) {
                                //If not in sites pages folder -- disable multilingual
                                console.warn("User is not in site pages library - " + _self.LOG_SOURCE + " (componentDidMount-pushState)");
                            }
                            else {
                                rootFolder = ((pageUrl.substr(spIdx).split("/").length - 1) == 1);
                                var homePage = (url.indexOf('.aspx') < 0);
                                //Check if state needs to be updated
                                var editMode = url.indexOf('Mode=Edit') !== -1;
                                if (editMode !== _self.state.editMode ||
                                    pageUrl !== _self.state.url ||
                                    rootFolder !== _self.state.rootFolder) {
                                    _self.setState({
                                        url: pageUrl,
                                        editMode: editMode,
                                        rootFolder: rootFolder
                                    });
                                }
                            }
                        }
                        catch (err) {
                            console.error(err + " - " + _self.LOG_SOURCE + " (componentDidMount-pushState)");
                        }
                        // Call the original function with the provided arguments
                        // This context is necessary for the context of the history change
                        return _defaultPushState.apply(this, [data, title, url]);
                    };
                };
                history.pushState = _pushState();
                return [2 /*return*/];
            });
        });
    };
    MyComponent.prototype.render = function () {
        try {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "data-component": this.LOG_SOURCE, style: { backgroundColor: 'yellow', padding: '10px' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    "Render Count: ",
                    this.props.render),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    "Page Edit Mode: ",
                    this.state.editMode.toString()),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    "Context Path from Site: ",
                    this.props.context.pageContext.site.serverRequestPath),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    "Document.Location.HREF: ",
                    document.location.href),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    "State Url from History: ",
                    this.state.url)));
        }
        catch (err) {
            console.log(err + " - " + this.LOG_SOURCE + " (render)");
            return null;
        }
    };
    return MyComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MyComponent);


/***/ }),

/***/ "@microsoft/decorators":
/*!****************************************!*\
  !*** external "@microsoft/decorators" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_decorators__;

/***/ }),

/***/ "@microsoft/sp-application-base":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_application_base__;

/***/ }),

/***/ "@microsoft/sp-core-library":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__;

/***/ }),

/***/ "BindingDemoApplicationCustomizerStrings":
/*!**********************************************************!*\
  !*** external "BindingDemoApplicationCustomizerStrings" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_BindingDemoApplicationCustomizerStrings__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })});;
//# sourceMappingURL=binding-demo-application-customizer.js.map