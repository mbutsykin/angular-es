import {hyphen2camel, getInjectableClass} from '../helpers';

function directive(name) {
	return target => {
		target.ngName = hyphen2camel(name);
		target.ngType = 'directive';
		target.ngArguments = [target.ngName, getInjectableClass(target)];

		return target;
	};
}

export default directive;
