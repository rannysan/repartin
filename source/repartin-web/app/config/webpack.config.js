const path              = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {
  context: path.resolve( "app" ),
  resolve: {
    extensions: [ ".jsx", ".js" ]
  },
  entry: "./src/index.jsx",
  output: {
    path: path.resolve( "dist" ),
    filename: "[name].js"
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.woff2?$/,
      use: [ {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      } ]
    }, {
      test: /\.(png|jpe?g|svg|webp)$/,
      use: [ {
        loader: "file-loader",
        options: "images/[name].[ext]"
      } ]
    } ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: "./index.html",
      filename: "./index.html"
    } )
  ]
}