var helper = {

	isCIBuild: function () {
		return process.env.NODE_ENV === 'ci';
	},

	getProjectDir: function () {
		return process.cwd();
	},

	getBabelLoaderQuery: function (isTestSources) {
		return {
			presets: [
				'es2015',
				'stage-0'
			],
			plugins: [
				'transform-class-properties',
				'transform-decorators-legacy',
				(this.isCIBuild() && !isTestSources) && 'istanbul'
			].filter(Boolean)
		};
	},

	getBuildDir: function () {
		return `${this.getProjectDir()}/build`;
	},

	getCoverageDir: function () {
		return `${this.getBuildDir()}/coverage`;
	},

	getSourcesDir: function () {
		return `${this.getProjectDir()}/src/main/ES`;
	},

	getTestSourcesDir: function () {
		return `${this.getProjectDir()}/src/test/ES`;
	},

	getEntryPoint: function () {
		return `${this.getSourcesDir()}/index.js`;
	},

	getTestEntryPoint: function () {
		return `${this.getTestSourcesDir()}/index.js`;
	},

	getSourcesPattern: function () {
		return /\/src\/main\/.+\.js$/;
	},

	getTestSourcesPattern: function () {
		return /\/src\/test\/.+\.js$/;
	}
};

module.exports = helper;
