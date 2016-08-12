import {TestService} from '../mock/test.InjectAsProperty';

describe('@InjectAsProperty', () => {

	let testService,
		$q,
		$http;

	beforeEach(angular.mock.inject((_testService_, _$q_, _$http_) => {
		testService = _testService_;
		$q = _$q_;
		$http = _$http_;
	}));

	it('injects dependencies', () => {
		expect(testService.$q).toEqual($q);
		expect(testService.$http).toEqual($http);
	});
});
