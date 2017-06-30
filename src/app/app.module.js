var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from "./library/grid.module";
import { AppComponent } from './app.component';
import { BlueDynamicComponent } from "./blue-dynamic.component";
import { GreenDynamicComponent } from "./green-dynamic.component";
import { RedDynamicComponent } from "./red-dynamic.component";
import { FormsModule } from "@angular/forms";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule,
            FormsModule,
            GridModule.withComponents([
                BlueDynamicComponent,
                GreenDynamicComponent,
                RedDynamicComponent
            ])],
        declarations: [AppComponent,
            BlueDynamicComponent,
            GreenDynamicComponent,
            RedDynamicComponent
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map