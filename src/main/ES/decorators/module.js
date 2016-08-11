import angular from 'angular';

function module(name) {
	return target => {
		// versions compatibility
		target.ng_name = target.ngName;

		angular.module(name)
			[target.ngType].apply(angular.module(name), target.ngArguments);

		return target;
	};
}

export default module;
