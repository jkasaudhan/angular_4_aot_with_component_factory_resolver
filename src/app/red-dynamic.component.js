var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var RedDynamicComponent = (function () {
    function RedDynamicComponent() {
    }
    return RedDynamicComponent;
}());
RedDynamicComponent = __decorate([
    Component({
        selector: 'dynamic-component',
        template: '<div class="img-rounded" style="background-color: lightcoral;margin: 5px"> Red Dynamic Component! </div>',
    })
], RedDynamicComponent);
export { RedDynamicComponent };
//# sourceMappingURL=red-dynamic.component.js.map