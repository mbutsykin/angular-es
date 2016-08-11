function controller(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'controller';
		target.ngArguments = [target.ngName, target];

		return target;
	};
}

export default controller;
