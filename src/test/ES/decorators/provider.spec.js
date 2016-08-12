import '../mock/test.provider';

describe('@Provider', () => {
	const config = {
		foo: 'bar'
	};

	let testProvider,
		test;

	beforeEach(angular.mock.module('test', _testProvider_ => {
		testProvider = _testProvider_;
	}));

	beforeEach(angular.mock.inject(_test_ => {
		test = _test_;
	}));

	it('defines angular provider', () => {
		expect(testProvider).toBeDefined();
	});

	it('configures provider', () => {
		testProvider.testMethod(config);

		expect(test.getConfig()).toBe(config);
	});
});
