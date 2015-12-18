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
			date : new Date(),
			comments: null,
		};
		
		vm.spends;
		
		//public functions
		vm.getSpends = getSpends;
		
		
		activate();

		////////////////

		function activate() { 
			
			getSpends();
			console.log('add spend controller loaded');

		}
		
		
		/**
		 * Get all spends from the data service
		 */
		function getSpends(){
			console.log("getting spends");
			dataService.getSpends().then(
				function(data){
					vm.spends = data.data;
				},
				function(error){
					console.error(error.status + error.statusMessage);
				}
			);
		}
	
		function clearSpend(){
			vm.spend = {
				amount : null,
				category : null,
				date : new Date(),
				comments: null,
			};
		}
	}
})();