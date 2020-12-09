const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {

  entry: './src/server/index.js',

  target: 'node',
  devtool: 'sourcemap',
  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }      
    ]
  },

};