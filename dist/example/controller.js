(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.controller('exampleController', ExampleController);


	function ExampleController() {
		var vm = this;
		vm.test = "hi";

		activate();

		////////////////

		function activate() { 
			vm.test = "hi";
		}
	}
})();