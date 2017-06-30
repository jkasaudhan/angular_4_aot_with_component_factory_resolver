var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var GreenDynamicComponent = (function () {
    function GreenDynamicComponent() {
    }
    return GreenDynamicComponent;
}());
GreenDynamicComponent = __decorate([
    Component({
        selector: 'dynamic-component',
        template: '<div class="img-rounded" style="background-color: lightgreen;margin: 5px"> Green Dynamic Component! </div>',
    })
], GreenDynamicComponent);
export { GreenDynamicComponent };
//# sourceMappingURL=green-dynamic.component.js.map