export default function (str) {

	return str.replace(/-(.)/g, function (a, b) {
		return b.toUpperCase();
	});
};
