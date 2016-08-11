import {test} from './test.module';
import {Module, Service} from './decorators';

@Module(test.name)
@Service('testService')
class TestService {
}

export {TestService};
