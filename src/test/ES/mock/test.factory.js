import {Factory, Module, Inject} from './decorators';
import {test} from './test.module';

class TestModel {

	static $q;

	constructor() {
	}
}

@Module(test.name)
@Factory('TestModel')
@Inject('$q')
class TestModelFactory {
	constructor($q) {
		TestModel.$q = $q;
		return TestModel;
	}
}

export {TestModelFactory, TestModel};
