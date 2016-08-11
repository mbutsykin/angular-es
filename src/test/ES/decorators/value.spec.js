import {TestValue} from '../mock/test.value';

describe('@Value', () => {

	let testValue;

	beforeEach(angular.mock.inject(_testValue_ => {
		testValue = _testValue_;
	}));

	it('defines angular value', () => {
		expect(testValue).toBeDefined();
		expect(testValue instanceof TestValue).toBeTruthy();
		expect(testValue).toEqual(new TestValue());
	});
});
