var path = require('path');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Change to your "entry-point".
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  // development server configuration
  devServer: {

    // must be `true` for SPAs
    historyApiFallback: true,

    // open browser on server start
    open: true
  },
  module: {
    rules: [{
      // Include ts, tsx, and js files.
      test: /\.(tsx?)|(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new AsyncChunkNames(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
  ]
};