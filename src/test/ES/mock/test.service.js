import {test} from './test.module';
import {Inject, Module, Service} from './decorators';

@Module(test.name)
@Service('testService')
@Inject('$http')
class TestService {

	$http;

	constructor($http) {
		this.$http = $http;
	}

	@Inject('$q')
	testMethod() {
	}

	@Inject('$rootScope')
	static testMethod() {
	}
}

export {TestService};
