const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Navigationmenu.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'TopNavigationmenu.js',
    library: 'ReactNavigationmenu',
    libraryTarget: 'umd', // Output module format
    umdNamedDefine: true, // Define the module's name for AMD
    globalObject: 'this', // Define the global object used,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};
