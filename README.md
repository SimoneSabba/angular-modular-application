# Angular modular application

This is an example of a simple SPA developed using AngularJS. The app consume a JSON API and display simple data.

### Prerequisites
In order to build and run the application, you need to have installed
1) node and npm (https://nodejs.org/en/)
2) Gulp ```npm install -g gulp```
3) Bower ```npm bower -g gulp```

### Setup instruction
1) Install node modules and bower components ```npm install```
2) In case bower components have not been installed, run ```bower install```
3) Once everything has been installed succesfully, build the application running ```gulp build```. A local server will be running on port 5000
4) Open your favourite browser and go to http://localhost:5000 to display the demo.

### Dev mode
If you want to run the application in dev mode, run ```gulp```. In dev mode the  ```dist ``` folder won't be rebuilded.

### Run test
To run unit test, run ```gulp test```

### References
To any kind of references about the folder structure, file organization, ecc.
see https://github.com/SimoneSabba/angular-gulp-browserify-starter