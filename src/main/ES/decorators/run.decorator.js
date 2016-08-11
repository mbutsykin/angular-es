import {getInjectableClass} from '../helpers';

function run(target) {
	if (typeof target === 'function') {
		annotate(target);

		return arguments[0];
	}

	return target => {
		annotate(target);

		return target;
	};

	function annotate(target) {
		target.ngType = 'run';
		target.ngArguments = [getInjectableClass(target)];
	}
}

export default run;
