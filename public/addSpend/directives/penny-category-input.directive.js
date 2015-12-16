(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennyCategoryInput', pennyCategoryInput);

	
	function pennyCategoryInput() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			templateUrl: './addSpend/directives/penny-category-input.html',
			restrict: 'E',
		};
		return directive;
	}
	
})();