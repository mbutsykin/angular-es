function inject(...dependencies) {
	return (target, name, descriptor) => {
		let injectable = descriptor ? descriptor.value : target;

		injectable.$inject = (injectable.$inject) ? injectable.$inject.concat(dependencies) : dependencies;

		return descriptor || target;
	};
}

export default inject;
