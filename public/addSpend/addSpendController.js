(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.controller('addSpendController', addSpendController);

	addSpendController.$inject = ['dataService'];
	function addSpendController(dataService) {
		var vm = this;
		
		vm.spend = {
			amount : null,
			category : null
		};
		
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
		function saveSpend( spend ){
			dataService.putSpend( spend  ).then(
				function(data){
					console.log("[spendController]: spend saved");
				},
				function(error){
					console.error("[spendController]: spend could not be saved");
				}
			);	
		}
		
	}
})();