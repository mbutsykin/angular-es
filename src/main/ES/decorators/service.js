function service(name) {
	return target => {
		target.ngName = name;
		target.ngType = 'service';
		target.ngArguments = [target.ngName, target];

		return target;
	};
}

export default service;
