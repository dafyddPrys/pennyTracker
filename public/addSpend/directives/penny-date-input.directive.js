(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennyDateInput', pennyDateInput);

	function pennyDateInput() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			restrict: 'E',
			templateUrl: './addSpend/directives/penny-date-input.html'
		};
		return directive;

	}

})();