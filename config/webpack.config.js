module.exports = {
	entry: __dirname + '/../src/main/ES/index.js',
	output: {
		path: __dirname + '/../build',
		filename: 'angular-es.js',
		libraryTarget: 'commonjs'
	},
	externals: {
		angular: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: [
						'es2015',
						'stage-0'
					],
					plugins: [
						'transform-class-properties',
						'transform-decorators-legacy'
					]
				}
			},
			{
				test: /\.html$/,
				loader: 'html'
			}
		]
	}
};
