import {TestFilter} from '../mock/test.filter';

describe('@Filter', () => {

	let test;

	beforeEach(angular.mock.inject(_$filter_ => {
		test = _$filter_(TestFilter.ngName);
	}));

	it('defines angular filter', () => {
		expect(test).toBeDefined();
	});

	it('filter works properly', () => {
		const testString = 'foo';

		expect(test(testString)).toEqual(testString.toUpperCase());
	});
});

