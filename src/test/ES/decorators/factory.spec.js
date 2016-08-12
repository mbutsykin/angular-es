import {TestModelFactory, TestModel as TestModelGeneric} from '../mock/test.factory';

describe('@Factory', () => {

	let TestModel;

	beforeEach(angular.mock.inject(_TestModel_ => {
		TestModel = _TestModel_;
	}));

	it('defines angular factory', () => {
		expect(TestModel).toBeDefined();
		expect(new TestModel() instanceof TestModelGeneric).toBeTruthy();
	});
});

