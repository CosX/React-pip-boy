
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js' },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['react-hot', 'babel'],
      },
      {
          test: /\.less$/,
          loader: 'style!css!less'
      },
      {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
          loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  devServer: {
        contentBase: "./build",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
