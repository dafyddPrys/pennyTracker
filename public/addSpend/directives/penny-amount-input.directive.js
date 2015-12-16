(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennyAmountInput', pennyAmountInput);

	function pennyAmountInput() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			templateUrl:'./addSpend/directives/penny-amount-input.html',
			restrict: 'E',
		};
		return directive;
		
	}
})();