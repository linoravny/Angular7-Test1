# Angular
# First installation
Globally intalation
* node js (getting npm) - https://nodejs.org/en/ - download LTS
* $npm install -g @angular/cli@latest
* $npm install -g npm-install-peers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.
------------------------------------------------------
Package                      Version
********                    *********
@angular-devkit/architect    0.900.3
@angular-devkit/core         9.0.3
@angular-devkit/schematics   9.0.3
@schematics/angular          9.0.3
@schematics/update           0.900.3
rxjs                         6.5.3
------------------------------------------------------

for adding more package: 
npm i [package_name] --save-dev ( is used to save the package for development purpose )
npm i [package_name] --save ( is used to save the package required for the application to run )

## Development server
Run `npm install` for install node_modules by package.json
Run `ng serve` / `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng build --prod --base-href /ServerFolderName/` to build the project for production
Run `ng build --base-href /ServerFolderName/` to build the project for QA/Test/Pilot env
Run to check build for production - `ng build --aot`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
