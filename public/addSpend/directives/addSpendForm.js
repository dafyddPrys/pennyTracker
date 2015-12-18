(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennyAddSpendForm', pennyAddSpendForm);

	function pennyAddSpendForm() {
		// Usage:
		// Element only. Pass in function to call after save successful
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
				refresh: '&',
			}
		};
		return directive;
		
		function link(scope, element, attrs) {
		}
	}
	/* @ngInject */

	saveSpendController.$inject=[ 'dataService'];
	function saveSpendController (dataService) {
		var vm = this;
		vm.saveState = "";		
		// public variables
		vm.formValid = false;
		vm.spend = {
			date : new Date()
		};
		
		
		// public functions
		vm.save = save;

		///////////////////////
		
		//wrapped in this function so we can set a break on it.
		
		function save(spend){
						
			var valid = isSpendValid(spend);
			if(!valid){
				vm.showNotification = true;
				vm.saveState = "invalid";
			} else {
				//call the function () to get to the actual function 
				//and then call it with the arguments we want.
				dataService.putSpend(spend).then(
					function(data){
						vm.showNotification = true;
						vm.saveState = "success";
						vm.refresh();
						clearSpend(spend);
					
					}, function(error){
						vm.showNotification = true;
						vm.saveState = "error";
				});
			}
		}
		
		
		///////////////////////
		// Private functions
		
		/**
		 * Checks if a spend has an amount and a valid date (
		 * not in the future)
		 * @params spend the spend object
		 * @returns {boolean} whether the spend is valid
		 */
		function isSpendValid(spend){
			var now = new Date();
			
			if(!spend.amount || !spend.date){
				return false;
			} else if( spend.date >= now){
				return false;				
			} 
			
			return true;
		}
		
		/**
		 * Reset all properties of the spend back to initial state;
		 */
		function clearSpend(spend){
			spend.amount = null;
			spend.date = new Date();
			spend.catefory = null;
			spend.comments = null;
		}
				
	}
})();
