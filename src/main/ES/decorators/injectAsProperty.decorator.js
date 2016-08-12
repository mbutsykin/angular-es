function injectAsProperty(...dependencies) {
	return target => {
		target.injectAsProperty = target.injectAsProperty || [];

		dependencies.forEach(dependency => {
			target.injectAsProperty.push({
				key: dependency,
				value: dependency
			});
		});

		return target;
	}
}

export default injectAsProperty;
