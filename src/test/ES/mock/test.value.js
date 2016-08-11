import {test} from './test.module';
import {Value, Module} from './decorators';

@Module(test.name)
@Value('testValue')
class TestValue {
	foo = 'foo';
	bar = 'bar';
}

export {TestValue};
