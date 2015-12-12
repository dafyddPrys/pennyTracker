(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.controller('seeSpendsController', seeSpendsController);

	seeSpendsController.$inject = ['dataService'];
	function seeSpendsController(dataService) {
		var vm = this;
		
		//public variables
		vm.spends = null;
		
		
		//public functions
		
		
		activate();

		////////////////

		function activate() { 
			
			getSpends();		
			
		}
		
		
		
		
		// Private fucntions
				
		/**
		 * get spend data from the data service
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