import {test} from './test.module';
import {Module, Controller} from './decorators';

@Module(test.name)
@Controller('TestController')
class TestController {
}

export {TestController};
