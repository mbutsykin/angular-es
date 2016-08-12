function provider(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'provider';
		target.ngArguments = [target.ngName, target];

		return target;
	};
}

export default provider;
