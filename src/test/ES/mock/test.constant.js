import {test} from './test.module';
import {Constant, Module} from './decorators';

@Module(test.name)
@Constant('TEST_CONSTANT')
class TestConstant {
	foo = 'foo';
	bar = 'bar';
}

export {TestConstant};
