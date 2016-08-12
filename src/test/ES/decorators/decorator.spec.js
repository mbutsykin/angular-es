import'../mock/test.decorator';

describe('@Decorator', () => {

	let $http;

	beforeEach(angular.mock.inject(_$http_ => {
		$http = _$http_;
	}));

	it('decorates service', () => {
		expect($http.decorated).toBeTruthy();
	});
});
