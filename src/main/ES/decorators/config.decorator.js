import {getInjectableClass} from '../helpers';

function config(target) {
	if (typeof target === 'function') {
		annotate(target);

		return arguments[0];
	}

	return target => {
		annotate(target);

		return target;
	};

	function annotate(target) {
		target.ngType = 'config';
		target.ngArguments = [getInjectableClass(target)];
	}
}

export default config;
