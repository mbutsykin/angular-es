function value(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'value';
		target.ngArguments = [target.ngName, new target()];

		return target;
	};
}

export default value;
