# Webpack #

## Build Steps ##
1. minify all the js files
2. uglify all the js files
3. bundle the js files
4. version the bundled js file
5. update the generated bundled js file reference in the index.html
6. minify the css files
7. bundle the css files
8. version the bundled css file
9. update the generated bundled css file reference in the index.html

## Setup ##
- Create a folder for the application (bug-tracker)
- >cd into the folder
- >npm init -y
- >npm install webpack webpack-cli --save-dev
- modify the package.json file to add the following the "scripts"
```
"build" : "webpack"
```
- create the webpack.config.js file