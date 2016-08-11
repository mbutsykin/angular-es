const webpackConfig = require('./webpack.config');
const testEntryPoint = '../src/test/ES/index.js';

module.exports = function (config) {
	config.set({
		colors: process.env.NODE_ENV !== 'ci',
		autoWatch: process.env.NODE_ENV !== 'ci',
		singleRun: process.env.NODE_ENV === 'ci',
		logLevel: config.LOG_ERROR,

		files: [
			require.resolve('babel-polyfill/dist/polyfill.js'),
			testEntryPoint
		],

		browsers: ['PhantomJS'],

		reporters: [
			'mocha',
			'coverage',
			'coveralls'
		],

		coverageReporter: {
			type: 'lcov',
			dir: '../build/coverage/'
		},

		preprocessors: {
			[testEntryPoint]: [
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

		frameworks: ['jasmine', 'phantomjs-shim'],
		plugins: [
			'karma-chrome-launcher',
			'karma-phantomjs-shim',
			'karma-phantomjs-launcher',
			'karma-mocha-reporter',
			'karma-jasmine',
			'karma-sourcemap-loader',
			'karma-webpack',
			process.env.NODE_ENV === 'ci' && 'karma-coverage',
			process.env.NODE_ENV === 'ci' && 'karma-coveralls'
		]
	});
};
