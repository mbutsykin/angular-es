import {TestConstant} from '../mock/test.constant';

describe('@Constant', () => {

	let TEST_CONSTANT;

	beforeEach(angular.mock.inject(_TEST_CONSTANT_ => {
		TEST_CONSTANT = _TEST_CONSTANT_;
	}));

	it('defines angular constant', () => {
		expect(TEST_CONSTANT).toBeDefined();
		expect(TEST_CONSTANT instanceof TestConstant).toBeTruthy();
		expect(TEST_CONSTANT).toEqual(new TestConstant());
	});
});
