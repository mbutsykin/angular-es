import {getInjectableClass} from '../helpers';

function factory(name) {

	return target => {
		target.ngName = name;
		target.ngType = 'factory';
		target.ngArguments = [target.ngName, getInjectableClass(target)];

		return target;
	};
}

export default factory;
