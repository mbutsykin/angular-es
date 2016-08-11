import {Inject} from './decorators';

@Inject('$rootScope')
class BaseInjectedClass {

}

@Inject('$http')
class InjectedClass extends BaseInjectedClass {

	@Inject('$q')
	injectedMethod() {
	}

	@Inject('$q')
	static injectedMethod() {
	}
}

export {InjectedClass, BaseInjectedClass};
