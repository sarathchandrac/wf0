var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ],
    rules: [
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
  ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/style.css',
      allChunks: true,
    }),
  ],
}