const webpackConfig = require('./webpack.config');
const helper = require('./utils/helper');

module.exports = function (config) {
	config.set({
		colors: !helper.isCIBuild(),
		autoWatch: !helper.isCIBuild(),
		singleRun: helper.isCIBuild(),
		logLevel: config.LOG_ERROR,

		files: [
			require.resolve('babel-polyfill/dist/polyfill.js'),
			helper.getTestEntryPoint()
		],

		browsers: ['PhantomJS'],

		reporters: [
			'mocha',
			'coverage',
			'coveralls'
		],

		coverageReporter: {
			type: 'lcov',
			dir: helper.getCoverageDir()
		},

		preprocessors: {
			[helper.getTestEntryPoint()]: [
				'webpack',
				'sourcemap'
			]
		},

		webpack: {
			module: webpackConfig.module
		},

		webpackServer: {
			noInfo: true
		},

		frameworks: [
			'jasmine',
			'phantomjs-shim'
		],
		plugins: [
			'karma-chrome-launcher',
			'karma-phantomjs-shim',
			'karma-phantomjs-launcher',
			'karma-mocha-reporter',
			'karma-jasmine',
			'karma-sourcemap-loader',
			'karma-webpack',
			helper.isCIBuild() && 'karma-coverage',
			helper.isCIBuild() && 'karma-coveralls'
		]
	});
};
