import {TestService} from '../mock/test.service';

describe('@Service', () => {

	let testService;

	beforeEach(angular.mock.inject(_testService_ => {
		testService = _testService_;
	}));

	it('defines angular service', () => {
		expect(testService).toBeDefined();
		expect(testService instanceof TestService).toBeTruthy();
	});
});
