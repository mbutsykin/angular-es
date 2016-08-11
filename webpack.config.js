module.exports = {
	entry: './src/main/ES/decorators/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/build/'
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
