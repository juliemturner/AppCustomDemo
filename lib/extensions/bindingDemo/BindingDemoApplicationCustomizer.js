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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'BindingDemoApplicationCustomizerStrings';
import MyComponent from '../component/MyComponent';
/** A Custom Action which can be run during execution of a Client Side Application */
var BindingDemoApplicationCustomizer = /** @class */ (function (_super) {
    __extends(BindingDemoApplicationCustomizer, _super);
    function BindingDemoApplicationCustomizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LOG_SOURCE = "BindingDemoApplicationCustomizer.ts";
        return _this;
    }
    BindingDemoApplicationCustomizer.prototype.onInit = function () {
        Log.info(this.LOG_SOURCE, "Initialized " + strings.Title);
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
            var placeholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this.onDispose });
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
                var element = React.createElement(MyComponent, { context: this.context, init: window.init, render: window.render });
                var elements = [];
                elements.push(element);
                ReactDOM.render(elements, container);
            }
            else {
                console.error("Bottom Placeholder not available! [" + strings.Title + " - " + this.LOG_SOURCE + "]");
            }
        }
        else {
            console.error("Context is undefined in render! [" + strings.Title + " - " + this.LOG_SOURCE + "]");
        }
    };
    __decorate([
        override
    ], BindingDemoApplicationCustomizer.prototype, "onInit", null);
    __decorate([
        override
    ], BindingDemoApplicationCustomizer.prototype, "onDispose", null);
    return BindingDemoApplicationCustomizer;
}(BaseApplicationCustomizer));
export default BindingDemoApplicationCustomizer;
//# sourceMappingURL=BindingDemoApplicationCustomizer.js.map