var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Grid } from "./grid.component";
import { Cell } from "./cell.component";
var GridModule = GridModule_1 = (function () {
    function GridModule() {
    }
    GridModule.withComponents = function (components) {
        return {
            ngModule: GridModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    return GridModule;
}());
GridModule = GridModule_1 = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule
        ],
        declarations: [
            Grid,
            Cell
        ],
        exports: [
            Grid
        ]
    })
], GridModule);
export { GridModule };
var GridModule_1;
//# sourceMappingURL=grid.module.js.map