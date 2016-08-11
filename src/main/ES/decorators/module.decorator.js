import angular from 'angular';

function module(name) {
	return target => {
		const module = angular.module(name);

		module
			[target.ngType].apply(module, target.ngArguments);

		return target;
	};
}

export default module;
