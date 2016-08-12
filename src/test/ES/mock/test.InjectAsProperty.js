import {test} from './test.module';
import {Module, Service, InjectAsProperty} from './decorators';

@Module(test.name)
@Service('testService')
@InjectAsProperty('$q', '$http')
class TestService {
}

export {TestService};
