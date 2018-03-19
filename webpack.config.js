var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './render.js',
  output: {
    path: path.resolve(__dirname, 'render'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["react"],
          plugins: ["transform-class-properties"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-spinner-material'
    })
  ]
}
