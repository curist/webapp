var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build'
  },
  resolve: {
    alias: {
      app: path.join(__dirname, '..', 'app')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'flowtype',
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime', 'transform-flow-strip-types']
        }
      }
    ]
  },
  eslint: {
    configFile: './webpack/eslintrc.js'
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEBUG': '"*"'
    }),
    new FlowtypePlugin(),
    new HtmlWebpackPlugin({
      title: 'build by webpack @ ' + new Date(),
      hash: true,
      template: 'index.ejs'
    }),
    new webpack.NoErrorsPlugin(),
  ]
};
