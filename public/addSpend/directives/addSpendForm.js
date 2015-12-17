(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennyAddSpendForm', pennyAddSpendForm);

	function pennyAddSpendForm() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			templateUrl: './addSpend/directives/addSpendForm.html',
			replace: true,
			bindToController: true,
			controller: saveSpendController,
			controllerAs: 'vm',
			link: link,
			restrict: 'E',
			scope: {
				saveSpend: '&'
			}
		};
		return directive;
		
		function link(scope, element, attrs) {
		}
	}
	/* @ngInject */

	saveSpendController.$inject=[ 'dataService','$scope'];
	function saveSpendController (dataService, $scope) {
		var vm = this;
		vm.spend = {
			date : new Date()
		};
		
		//wrapped in this function so we can set a break on it.
		vm.save = function(spend){
			console.log(spend.amount);
			
			//call the function () to get to the actual function 
			//and then call it with the arguments we want.
			vm.saveSpend()(spend);
		}
				
	}
})();
