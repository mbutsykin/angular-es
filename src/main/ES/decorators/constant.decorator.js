function constant(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'constant';
		target.ngArguments = [target.ngName, new target()];

		return target;
	};
}

export default constant;
