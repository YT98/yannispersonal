// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./client/index.html"),
    filename: "./index.html"
});

module.exports = {
  entry: path.resolve(__dirname, "./client/index.js"),
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "client.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
      extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 5000
  },
  mode: 'development'
};