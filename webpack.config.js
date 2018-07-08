const path = require('path');
// const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOR_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOR_PATH, 'app');
const BUILD_PATH = path.resolve(ROOR_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001',
      },
    },
  },
  module: {
    // preLoaders: [{
    //     test: /\.jsx?$/,
    //     loaders: ['eslint'],
    //     include: APP_PATH
    // }],

    // loaders: [{
    //     test: /\.jsx?$/,
    //     loaders: ['babel'],
    //     include: APP_PATH
    // }]

    rules: [{
      test: /\.jsx?$/,
      include: APP_PATH,
      use: ['babel-loader'],
    },
    {
      test: /\.jsx?$/,
      include: APP_PATH,
      use: ['eslint-loader'],
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React-App',
    }),
  ],

  resolve: {

    extensions: ['.js', '.jsx'],
  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

};
