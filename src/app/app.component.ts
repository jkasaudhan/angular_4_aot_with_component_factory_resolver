import {Component, Input, OnInit} from '@angular/core';
import {BlueDynamicComponent} from "./blue-dynamic.component";
import {GreenDynamicComponent} from "./green-dynamic.component";
import {RedDynamicComponent} from "./red-dynamic.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
  @Input() componentTypes: any[] = [BlueDynamicComponent, GreenDynamicComponent, RedDynamicComponent];
  @Input() selectedComponentType: any;

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }

  ngOnInit(): void {
    // default to the first available option
    this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
  }
}
