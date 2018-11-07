var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.join(__dirname, "src");

var config = {
  entry: path.join(APP_DIR + "/index.jsx"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
              cacheDirectory: ".cache"
            }
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        loader:
          "style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
      },
      {
        include: /node_modules/,
        test: /\.css$/,
        loader: "style-loader!css-loader?importLoaders=1"
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      },
      // "file" loader makes sure assets end up in the `build` folder.
      // When you `import` an asset, you get its filename.
      {
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]"
        }
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
