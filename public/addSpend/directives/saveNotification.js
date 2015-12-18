(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennySaveNotification', pennySaveNotification);

	
	function pennySaveNotification() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			templateUrl : "./addSpend/directives/saveNotification.html",
			bindToController: true,
			controller: pennySaveNotificationController,
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				state: "="
			},
		};
		return directive;
		
	}
	/* @ngInject */
	pennySaveNotificationController.$inject = ['$scope'];
	function pennySaveNotificationController ($scope) {
		var vm = this;
		vm.message = "";
		vm.class = "";
		
		$scope.$watch('vm.state',function(){

			if(vm.state === "error" || vm.state === "invalid"){
				vm.class="error-notification";
				vm.message = "Fix the errors above before saving."
			} else if(vm.state === "success") {
				vm.message = "Spend saved successfully!";
				vm.class="success-notification";
			} else {
				//Something else
			}
		});
		
		
	}
})();
