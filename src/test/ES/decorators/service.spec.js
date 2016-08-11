import '../mock/test.service';

describe('@Service', () => {

	let testService;

	beforeEach(angular.mock.inject(_testService_ => {
		testService = _testService_;
	}));

	it('defines angular service', () => {
		expect(testService).toBeDefined();
		expect(testService instanceof Object).toBeTruthy();
		expect(testService.$http instanceof Object).toBeTruthy();
	});
});
