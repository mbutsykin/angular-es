import {TestController} from '../mock/test.controller';

describe('@Controller', () => {

	let testController;

	beforeEach(angular.mock.inject((_$controller_, _$rootScope_) => {
		testController = _$controller_('TestController', {
			$scope: _$rootScope_.$new()
		});
	}));

	it('defines angular controller', () => {
		expect(testController).toBeDefined();
		expect(testController instanceof TestController).toBeTruthy();
	});
});
