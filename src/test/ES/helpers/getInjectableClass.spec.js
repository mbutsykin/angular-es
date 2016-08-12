import {getInjectableClass} from '../../../main/ES/helpers';

describe('getInjectableClass', () => {
	class TestClass {}
	TestClass.$inject = ['$q', '$http'];

	let injectableClass;

	beforeEach(() => {
		injectableClass = getInjectableClass(TestClass);
	});

	it('Returns array', () => {
		expect(injectableClass instanceof Array).toBeTruthy();
	});

	it('Function returns instance', () => {
		expect(injectableClass.pop()() instanceof TestClass).toBeTruthy();
	});

	it('$inject is provided in the array', () => {
		injectableClass.pop();
		expect(injectableClass).toEqual(TestClass.$inject);
	})
});
