var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
    ]
  },
  plugins: [new HtmlWebpackPlugin ({
    minify: {
      collapseWhitespace: true
    },
    template: 'src/index.html'
  })]
}
