<<<<<<< HEAD
# GameShopNew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

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
=======
# AngularGameShop
>>>>>>> 060937fbf8295fdf1544f99c6351e2fc848256e1


## GitHub Live pages
# step 1: Add packages for github pages
    ng add angular-cli-ghpages
# step 2: Push code to repo
    push code to git hub
# step 3: Select the repo directory from where the build need to read
    Setting -> Pages -> branch(main) -> save
# step 4: build application using following cmd
    ng build --base-href "https://<profile-name>.github.io/<reponame>"
# step 5: use below command to host application to github page
    npx angular-cli-ghpages --dir=dist/<reponame>
# step 6: set deierctory to gh-pages 
    Setting -> Pages -> branch(gh-page) -> save
# step 7: 
    enter url in brwoser:https://<profile-name>.github.io/<reponame>;
