# angular_4_aot_with_component_factory_resolver
This is a project to test Ahead Of Time (AOT) compilation with angular's ComponentFactoryResolver

## How to run this project with AOT enbaled?
- npm run build:aot
- npm run serve

I have followed following articles to understand, create and build this project.


[Understanding AOT and Dynamic Components in Angular 2](https://www.ag-grid.com/ag-grid-angular-aot-dynamic-components/)

[Ahead Of Time Compilation: Angular's Doc](https://angular.io/guide/aot-compiler)

## Important points to remember
- You will run the ngc compiler provided in the @angular/compiler-cli npm package instead of the TypeScript compiler (tsc).
 ngc is a drop-in replacement for tsc and is configured much the same way.ngc requires its own tsconfig.json with AOT-oriented settings.
 - Make sure in package.json we have "@angular/compiler-cli": "~4.0.0" and "@angular/platform-server": "~4.0.0" 

Below is the final output of this project
![(AOT) compilation with angular's ComponentFactoryResolver](final_output/angular_4_aot_with_component_factory_resolver.png)
