# Webpack 2 Devkit

COMMANDS:  

Install:
$ npm init
$ npm i -D webpack
$ npm i html-webpack-plugin --save-dev
$ npm i style-loader --save-dev
$ npm i css-loader --save-dev
$ npm i sass-loader node-sass --save-dev
$ npm i webpack-dev-server --save-dev


Run:
$ webpack ./src/app.js ./dist/app.bundle.js
$ webpack ./src/app.js ./dist/app.bundle.js -p (minified)
$ webpack ./src/app.js ./dist/app.bundle.js --watch (watch mode)

webpack config file
- inside package.json

	"scripts": {
 	 "dev": "webpack-dev-server --open”,
	 "build": "webpack -p"
	},

$ npm run dev
$ npm run build





FOLDER STRUCTURE:

|
|_/dist/
|   |_app.bundle.js
|   |_index.html
|
|_/src/
|   |_app.js
|   |_app.scss
|   |_index.html (template)
|
|
|_package.json
|_webpack.config.js
