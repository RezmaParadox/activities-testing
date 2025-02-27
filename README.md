**DESCRIPCION DEL PROYECTO**
Proyecto en Angular de una Banca Web, que permite gestionar sus cuentas y realizar operaciones bancarias. Tambien se puede realizar inversiones e intercambios de divisas.

Se implementaron pruebas unitarias y e2e para probar el correcto funcionamiento de la aplicacion.
Se utilizaron tecnologias como Angular, Typescript, HTML, CSS y SASS. 
Para las pruebas, Selenium y Cucumber.
Para la creacion del contenedor se utilizo Docker y Bash para ejecutar los scripts. 

**SCRIPTS Y MENUS DE EJECUCIÓN**
  En la carpeta scripts se encuentran los scripts y menus de ejecucion: 
  - menu.sh se encarga de ejecutar el menu principal para ejecutar el proyecto angular y el menu de pruebas, solo es cuestion de ejecutarlo.
  - menu-docker.sh se encarga de ejecutar el menu principal para ejecutar el proyecto angular y el menu de pruebas dentro de un contenedor de docker. La creacion del contenedor tarda unos minutos. Directamente se ejecuta el menu.sh dentro del contenedor. **Importante:** Debe estar instalado docker y Wsl o en su defecto GitBash.

**EJECUCIÓN DEL DEL PROYECTO**

# Banca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
