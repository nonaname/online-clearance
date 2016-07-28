module.exports = {
	concat: function() {
		var merged = {};
		for (var i = 0; i < arguments.length; i++) {
			for (obj in arguments[i]) {
				if (arguments[i].hasOwnProperty(obj)) {
					merged[obj] = arguments[i][obj];
				}
			}
		}
		return merged;
	},
	remove: function(obj) {
		for (var i = 1; i < arguments.length; i++)
			delete obj[arguments[i]];
		return obj;
	},
	filter: function(obj) {
		var filtered = {};
		for (var i = 1; i < arguments.length; i++) {
			if (obj.hasOwnProperty(arguments[i])) {
				filtered[arguments[i]] = obj[arguments[i]]
			}
		}
		return filtered;
	},
	getDataValues: function(obj) {
		var data = [];
		obj.forEach(function(val, index) {
			data.push(val.dataValues);
		})
		return data;
	}
}