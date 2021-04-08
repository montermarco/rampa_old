const path = require('path');
const HTMLwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'sgb-front.bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 7000
  },
  plugins: [
    new HTMLwebpackplugin({
      filename: 'index.html',
      template: './public/index.html'
  })
 ]
}
