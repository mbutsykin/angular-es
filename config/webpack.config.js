const webpack = require('webpack');
const helper = require('./utils/helper');

module.exports = {
	entry: helper.getEntryPoint(),
	output: {
		path: helper.getBuildDir(),
		filename: 'angular-es.min.js',
		libraryTarget: 'commonjs'
	},
	externals: {
		angular: true
	},
	module: {
		loaders: [
			{
				test: helper.getSourcesPattern(),
				exclude: /(node_modules)/,
				loader: 'babel',
				query: helper.getBabelLoaderQuery()
			},
			{
				test: helper.getTestSourcesPattern(),
				exclude: /(node_modules)/,
				loader: 'babel',
				query: helper.getBabelLoaderQuery(true)
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};
