var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      },
      {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },

      /*
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      */
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
            use: ['css-loader', 'sass-loader']
        })
      }
  ]
  },
  plugins: [
    extractPlugin
  ]
}