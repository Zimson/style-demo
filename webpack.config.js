const webpack = require('webpack');
const path = require('path');
const isDevelopment = !process.env.NODE_ENV || (process.env.NODE_ENV !== 'production');


module.exports = {
  context: __dirname + '/src/js',
  entry: {
    app: ['./Widget.jsx']
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  watch: isDevelopment,

  devtool: isDevelopment ? 'cheap-module-inline-source-map' : 'false',

  output: {
    path: path.join(__dirname, "dist/assets/js/"),
    filename: 'script.js',
    publicPath: '/assets/js/'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader"
      },
      {
        test: /Icons\/\*\*\/\*.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader'
      }
    ]
  }
};


if (!isDevelopment) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
