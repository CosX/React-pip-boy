
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.jsx'),
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js' },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'jsx', 'babel'], 
        exclude: /node_modules/, 
        presets:['react']
      },
      { 
        test: /\.less$/, 
        loaders: ['style!css!less'] 
      }
    ]
  },
};