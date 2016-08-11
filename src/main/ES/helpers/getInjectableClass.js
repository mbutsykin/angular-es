export default function (target) {
	proxy.toString = function () {
		return target.toString();
	};

	return (target.$inject || []).concat([proxy]);

	function proxy() {
		let deps = Array.prototype.slice.call(arguments);

		deps.unshift(null);

		return new (target.bind.apply(target, deps));
	}
}
