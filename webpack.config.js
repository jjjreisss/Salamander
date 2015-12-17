var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/salamander.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  }
};
