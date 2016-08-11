import {BaseInjectedClass, InjectedClass} from '../mock/inject';

describe('@Inject', () => {
	it('decorates class', () => {
		expect(BaseInjectedClass.$inject).toEqual(['$rootScope']);
	});

	it('decorates class & inherits $inject', () => {
		expect(InjectedClass.$inject).toEqual(['$rootScope', '$http']);
	});

	it('decorates class`s static method', () => {
		expect(InjectedClass.injectedMethod.$inject).toEqual(['$q']);
	});

	it('decorates instance`s method', () => {
		var injectedClass = new InjectedClass();

		expect(injectedClass.injectedMethod.$inject).toEqual(['$q']);
	});
});
