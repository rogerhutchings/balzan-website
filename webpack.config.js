const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const devMode = process.env.ELEVENTY_ENV !== 'production'

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: devMode ? '[name].js' : '[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' :'[name].[contenthash].css',
    }),
    new WebpackManifestPlugin({
      fileName: path.resolve(__dirname, 'src/_data/manifest.json'),
      publicPath: '/assets/'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
}
