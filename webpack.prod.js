const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
module.exports = merge(common, {
  mode: 'production',
  entry: ['./src/client/app.js'],
  output: {
    chunkFilename: 'chunks/[id].[hash].js',
    filename: 'app.[hash].js',
    publicPath: '/dist/',
    crossOriginLoading: "anonymous",
    path: path.resolve(__dirname, 'dist/')
  },
  plugins: [new HtmlWebpackPlugin({
    cache: true,
    hash: true,
    title: "Sync Reader",
    filename: 'index.html',
    templateContent: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>
      <div id="app"></div>
    </body>
    </html>
    `,
    meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
    output: path.resolve(__dirname, 'dist'),
    xhtml: true,
  })],
  module: {
    rules: [
      {
        test: /\.m?js/i,
        use: [
          { loader: 'babel-loader', options: { compact: true }}
        ],
      }
    ]
  }
})