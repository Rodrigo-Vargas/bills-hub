module.exports = {
   entry: './src/index.jsx',
   output: {
      filename: 'bundle.js',
      publicPath: '/assets',
      path: __dirname + '/public/assets'
   },
   devServer: {
      contentBase: './public',
      publicPath: '/assets'
   },
   module: {
      rules: [
         {
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         }
      ]
   },
};