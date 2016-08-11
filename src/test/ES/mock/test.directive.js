import {test} from './test.module';
import {Module, Directive, Inject} from './decorators';

test.value('testTagValue', 'foo.bar.baz');

@Module(test.name)
@Directive('test-tag')
@Inject('testTagValue')
class TestDirective {

	testTagValue;

	constructor(testTagValue) {
		this.testTagValue = testTagValue;
	}

	link(scope) {
		scope.testTagValue = this.testTagValue;
	}

	restrict = 'E';

	@Inject('$scope')
	controller ($scope) {
		this.test = $scope.test;
	};

	scope = {
		test: '@'
	};

	controllerAs = '$ctrl';

	template = `
		<p>{{ $ctrl.test }}</p>
		<p>{{ testTagValue }}</p>
	`.trim()
}

export {TestDirective};
