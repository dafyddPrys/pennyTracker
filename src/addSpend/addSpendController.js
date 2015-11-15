(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.controller('addSpendController', addSpendController);

	addSpendController.$inject = ['dataService'];
	function addSpendController(dataService) {
		var vm = this;
		
		
		//public functions
		vm.saveSpend = saveSpend;
		

		activate();

		////////////////

		function activate() { 
			
			console.log('add spend controller loaded');
		}
		
		/**
		 * Save a spend to the database. Show status/
		 * @param {form} the spend form to be sent
		 */
		function saveSpend(form){
			dataService.putSpend(form).then(
				function(data){
					
				},
				function(error){
					
				}
			);	
		}
		
	}
})();