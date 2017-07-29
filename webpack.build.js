var path = require('path');;

module.exports = {
  entry: {
    src: ['./src']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
