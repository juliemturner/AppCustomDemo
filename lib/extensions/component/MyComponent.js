var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import * as React from "react";
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
export { MyComponentState };
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
            return (React.createElement("div", { "data-component": this.LOG_SOURCE, style: { backgroundColor: 'yellow', padding: '10px' } },
                React.createElement("div", null,
                    "Render Count: ",
                    this.props.render),
                React.createElement("div", null,
                    "Page Edit Mode: ",
                    this.state.editMode.toString()),
                React.createElement("div", null,
                    "Context Path from Site: ",
                    this.props.context.pageContext.site.serverRequestPath),
                React.createElement("div", null,
                    "Document.Location.HREF: ",
                    document.location.href),
                React.createElement("div", null,
                    "State Url from History: ",
                    this.state.url)));
        }
        catch (err) {
            console.log(err + " - " + this.LOG_SOURCE + " (render)");
            return null;
        }
    };
    return MyComponent;
}(React.Component));
export default MyComponent;
//# sourceMappingURL=MyComponent.js.map