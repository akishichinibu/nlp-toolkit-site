import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

import HtmlWebPackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: "http://127.0.0.1:12345",
        changeOrigin: true,
        logLevel: "debug",
        onProxyReq: function (req, res, proxyOptions) {
          req.setHeader("X-Forwarded-Host", `http://127.0.0.1:12345`);
        }
      },
    }
  }
};

export default config;
