import {Module, Filter, Inject} from './decorators';
import {test} from './test.module';

@Module(test.name)
@Filter('test')
@Inject('$q')
class TestFilter {

	$q;

	constructor($q) {
		this.$q = $q;
		return ::this.filter;
	}

	filter(input) {
		const $q = this.$q;
		return input.toUpperCase();
	}
}

export {TestFilter};
