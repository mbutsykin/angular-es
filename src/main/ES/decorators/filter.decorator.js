import {getInjectableClass} from '../helpers';

function filter(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'filter';
		target.ngArguments = [target.ngName, getInjectableClass(target)];

		return target;
	}
}

export default filter;
