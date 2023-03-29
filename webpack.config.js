const crypto = require('crypto');

/**
 * md4 algorithm is not available anymore in NodeJS 17+ (because of lib SSL 3).
 * In that case, silently replace md4 by md5 algorithm.
 */
try {
  crypto.createHash('md4');
} catch (e) {
  console.warn('Crypto "md4" is not supported anymore by this Node version');
  const origCreateHash = crypto.createHash;
  crypto.createHash = (alg, opts) => {
    return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
  };
}





require("dotenv").config();
const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    port: parseInt(process.env.CLIENT_PORT, 10),
    open: process.env.OPEN_BROWSER === "true" ? true : false,
    proxy: {
      "/api": `http://localhost:${process.env.API_PORT}`,
    },
  },
  node: {
    net: "empty",
    tls: "empty",
    dns: "empty",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./src/client/assets/images/faviconAB.png",
    }),
    new CaseSensitivePathsPlugin(),
    new Dotenv({
      safe: false,
    }),
  ],
};
