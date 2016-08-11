import {TestService} from '../mock/test.service';

describe('@Inject', () => {
	it('decorates class', () => {
		expect(TestService.$inject).toEqual(['$http']);
	});
	it('decorates class`s static method', () => {
		expect(TestService.testMethod.$inject).toEqual(['$rootScope']);
	});

	it('decorates instance`s method', () => {
		var testService = new TestService();

		expect(testService.testMethod.$inject).toEqual(['$q']);
	});
});
