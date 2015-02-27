module.exports = function (all) {
	return function (f) {
		return function () {
			return all(Array.prototype.slice.call(arguments)).then(function (args) {
				return f.apply(this, args);
			});
		}
	};
};

