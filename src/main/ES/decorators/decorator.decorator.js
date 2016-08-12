import {getInjectableClass} from '../helpers';

function decorator(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'decorator';
		target.ngArguments = [target.ngName, getInjectableClass(target)];
		return target;
	}
}

export default decorator;
