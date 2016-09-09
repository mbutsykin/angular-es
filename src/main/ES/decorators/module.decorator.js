import angular from 'angular';

function module(name) {
	return target => {
		const module = angular.module(name);

		module[target.ngType].apply(module, target.ngArguments);

		if (target.injectAsProperty) {
			provideInjections(module, target);
		}

		return target;
	};

	function provideInjections(module, target) {
		module
			.config(['$provide', $provide => {
				$provide
					.decorator(target.ngName, [
						'$delegate', '$injector',
						($delegate, $injector) => {
							target.injectAsProperty.forEach(dependency => {
								$delegate[dependency.key] = $injector.get(dependency.value);
							});

							return $delegate;
						}
					]);
			}])
	}
}

export default module;
