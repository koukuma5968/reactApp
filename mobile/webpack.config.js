var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "js"),
  entry: "./pages/home.js",
  mode: 'production',
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      }]
    },
    output: {
      path: "/wwwroot/document/js",
      filename: "./client.min.js"
    }
};