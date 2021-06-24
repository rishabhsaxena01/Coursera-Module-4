(function(window) {
	var hello = function (name) {
		console.log("Hello " + name);
	}

	window.hello = hello;

})(window);