var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
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
    path: path.join(__dirname, './dist'),
    filename: "./client.min.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/task/',
      serveIndex: true,
    },
    historyApiFallback: {
      index: '/task/'
    }
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};