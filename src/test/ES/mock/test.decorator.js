import {Decorator, Module, Inject} from './decorators';
import {test} from './test.module';

@Module(test.name)
@Decorator('$http')
@Inject('$delegate')
class HttpDecorator {
	constructor($delegate) {

		$delegate.decorated = true;

		return $delegate;
	}
}

export {HttpDecorator};
