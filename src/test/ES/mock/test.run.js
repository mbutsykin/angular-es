import {test} from './test.module';
import {Run, Module} from './decorators';

@Module(test.name)
@Run
class TestRunBlock {
}

export {TestRunBlock};
