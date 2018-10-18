var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.join(__dirname, "src");

var config = {
  entry: path.join(APP_DIR + "/index.jsx"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader:
          "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/dist",
    filename: "bundleMain.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};

module.exports = config;
