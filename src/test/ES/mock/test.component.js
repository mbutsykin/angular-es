import {test} from './test.module';
import {Component, Module} from './decorators';

@Module(test.name)
@Component({
	selector: 'hero-detail',
	bindings: {
		hero: '='
	},
	template: `
		<p>{{ $ctrl.hero.name }}</p>
	`.trim()
})
class TestComponentController {
}

export {TestComponentController};
