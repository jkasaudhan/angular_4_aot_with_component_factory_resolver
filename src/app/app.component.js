var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { BlueDynamicComponent } from "./blue-dynamic.component";
import { GreenDynamicComponent } from "./green-dynamic.component";
import { RedDynamicComponent } from "./red-dynamic.component";
var AppComponent = (function () {
    function AppComponent() {
        this.showHeading = true;
        this.heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
        this.componentTypes = [BlueDynamicComponent, GreenDynamicComponent, RedDynamicComponent];
    }
    AppComponent.prototype.toggleHeading = function () {
        this.showHeading = !this.showHeading;
    };
    AppComponent.prototype.ngOnInit = function () {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
    };
    return AppComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], AppComponent.prototype, "componentTypes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppComponent.prototype, "selectedComponentType", void 0);
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map