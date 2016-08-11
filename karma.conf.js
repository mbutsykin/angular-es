const _ = require('lodash');

const webpackConfig = require('./webpack.config');
const testEntryPointTpl = './src/test/ES/index.js';

module.exports = function (config) {
	config.set({
		colors: process.env.NODE_ENV !== 'ci',
		autoWatch: process.env.NODE_ENV !== 'ci',
		singleRun: process.env.NODE_ENV === 'ci',
		logLevel: config.LOG_ERROR,

		files: [
			require.resolve('babel-polyfill/dist/polyfill.js'),
			testEntryPointTpl
		],

		browsers: ['PhantomJS'],

		reporters: [
			'mocha'
		],

		preprocessors: {
			[testEntryPointTpl]: [
				'webpack',
				'sourcemap'
			].filter(Boolean)
		},

		webpack: _.extend({}, webpackConfig, {
			entry: null
		}),

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
			'karma-webpack'
		]
	});
};
