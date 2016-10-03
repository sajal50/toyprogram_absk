var webpack = require('webpack');
module.exports = {


	entry: [
	  'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
	  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	  "./app/app.js" // Your appʼs entry point
	],

	'output' : {

		filename : "public/bundle.js",
		"publicPath": "/"
	},
	 
	devtool: 'eval',

	module : {

		loaders : [

		{

			test : /\.jsx?$/,
			exclude : /(node_modules|bower_components)/,
			loaders : ['react-hot','babel?presets[]=es2015,presets[]=react,presets[]=stage-2'],
			/*loader: 'babel',*/
			/*query : {

				presets : ['react','es2015']
			}*/
		},
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
        /*{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }*/
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }



		]

	},

	resolve: {
    extensions: ['', '.js', '.jsx']
	},

	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	]
	//plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
  //           name:      'main', // Move dependencies to our main file
  //           children:  true, // Look for common dependencies in all children,
  //           minChunks: 2, // How many times a dependency must come up before being extracted
  //       }),

  //       new webpack.optimize.UglifyJsPlugin({
  //           mangle:   true,
  //           compress: {
  //               warnings: false, // Suppress uglification warnings
  //           },
  //       })
       
	//],


}