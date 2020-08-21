const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
   },
   devServer: {
      historyApiFallback: true,
      contentBase: false,
      useLocalIp: true,
      port: 3000,
      compress: true,
      open: true,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
			exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
			exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|jpg|svg|gif)?$/,
			exclude: /node_modules/,
            use: 'file-loader'
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve(__dirname, 'src/assets/html/index.html'),
         filename: 'index.html'
      })
   ]
};