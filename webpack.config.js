const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const validate = require('webpack-validator');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  release: path.join(__dirname, 'build', 'release')
};

var PUBLIC_PATH;
switch(process.env.npm_lifecycle_event) {
  //** PRODUCTION ** //
  case 'build':
    PUBLIC_PATH = 'http://ec2-54-206-69-241.ap-southeast-2.compute.amazonaws.com:3300/static/'
    break;
  // ** DEV ** //
  case 'start':
    PUBLIC_PATH = 'http://localhost:8080/static/'
    break;
}

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.release,
    filename: 'bundle.js',
    publicPath: PUBLIC_PATH
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        // Parse only app files! Without this it will go through entire project.
        // In addition to being slow, that will most likely result in an error.
        include: PATHS.app
      },
      {
        test: /\.sass$/,
        loaders: [
          'style',
          'css?sourceMap',
          'sass?indentedSyntax=true?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        ],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
        include: PATHS.app
      },
      { test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1024&name=/images/[name].[ext]',
        include: PATHS.app
      },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]', include: PATHS.app },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]', include: PATHS.app },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]', include: PATHS.app },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]', include: PATHS.app },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]', include: PATHS.app }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
  ]
};

var config;
switch(process.env.npm_lifecycle_event) {
  //** PRODUCTION ** //
  case 'build':
    config = merge(common, {
      devtool: 'cheap-module-source-map',
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {warnings: false}
        }),
        // use prod node environment
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ]
    });
    break;
  // ** DEV ** //
  case 'start':
    config = merge(common, {
      devtool: 'eval-source-map',

      //more resource intensive but use it if watching stops working
      watchOptions: {
        poll: true
      },

      devServer: {
        contentBase: PATHS.release,

        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,


        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin({
          save: true
        })
      ]
    });
    break;
  default:
    config = merge(common, {});
}

module.exports = validate(config);
