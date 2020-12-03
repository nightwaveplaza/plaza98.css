const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [{
      test:/\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              minimize: false,
              outputStyle: 'expanded'
            }
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
        },
      ],
    }]
  },
  plugins: [
    new miniCss({
      filename: 'plaza98.css',
    }),
    new RemovePlugin({
      after: {
        root: './dist',
        include: [
            'bundle.js'
        ]
      }
    }),
  ]
};
