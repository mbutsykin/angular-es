import {Provider, Module, Inject} from './decorators';
import {test} from './test.module';

@Module(test.name)
@Provider('test')
class TestProvider {

	static testConfig;

	testMethod(config) {
		TestProvider.testConfig = config;
	}

	@Inject('$q')
	$get($q) {
		return {
			getConfig: getConfig
		};

		function getConfig() {
			return TestProvider.testConfig;
		}
	}
}

export {TestProvider};
