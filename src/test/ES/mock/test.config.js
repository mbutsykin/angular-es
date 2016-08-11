import {test} from './test.module';
import {Config, Module} from './decorators';

@Module(test.name)
@Config
class TestConfigBlock {
}

export {TestConfigBlock};
