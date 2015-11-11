(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.controller('ExampleController', ExampleController);


	function ExampleController() {
		var vm = this;
		

		activate();

		////////////////

		function activate() { 
			vm.test = "hi";
		}
	}
})();