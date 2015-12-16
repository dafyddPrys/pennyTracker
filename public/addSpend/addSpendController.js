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
			category : null,
			date : null,
			comments: null,
		};
		
		vm.spends;
		
		//public functions
		vm.saveSpend = saveSpend;
		
		
		activate();

		////////////////

		function activate() { 
			
			getSpends();
			console.log('add spend controller loaded');
			vm.spend.date = new Date();
			 
		}
		
		/**
		 * Save a spend to the database. Show status/
		 * @param {form} the spend form to be sent
		 */
		function saveSpend( spend ){
			if(!spend.amount){
				//TODO add invalid state here
				return;
			}
			if(!spend.date){
				
				spend.date = new Date();
				
			} else {
				
				//make the date into a consistent format probably a date object?)
			}
			
			dataService.putSpend( spend  ).then(
				
				function(data){
					console.log("[spendController]: spend saved");
					getSpends();
				},
				
				function(error){
					console.error("[spendController]: spend could not be saved");
				}
				
			);	
		}
		
		
		/**
		 * Get all spends from the data service
		 */
		function getSpends(){
			
			dataService.getSpends().then(
				function(data){
					vm.spends = data.data;
				},
				function(error){
					console.error(error.status + error.statusMessage);
				}
			);
		}
	
		
	}
})();