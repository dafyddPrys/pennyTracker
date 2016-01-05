(function() {
	'use strict';

	angular
		.module('pennyTracker.core')
		.directive('pennyDatePicker', pennyDatePicker );

	function pennyDatePicker() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			// require the ngModel and optional parent form - come as elements of the ctrls array.
			// this is easier than defining them in the scope.
			require: ['ngModel','^?form'],
			link: link,
			restrict: 'E',
			scope: {
			}, 
			template:'<input class="u-full-width" name="date" ng-model="date" type="date">',
		};
		return directive;
		
		function link(scope, element, attrs, ctrls) {
			var ngModel = ctrls[0];
			var form = ctrls[1];
			
			//initialise the date.
			scope.date = new Date();
			
			//Set the date current object in the form to the ngModel object.
			if (form && attrs.name){
				form[attrs.name] = ngModel;
			}
			
			//Add a validator to make sure the date isn't in the future.
			ngModel.$validators.futureDate = function(val){
				var date = new Date();
				return val <= date;
			}
			
			scope.$watch('date',function(date,oldDate){
				//set the date on the model whenever the input changes
				if(date){
					ngModel.$setViewValue(date);
				}
				//set the input as touched if it is changed manually
				if(date !== oldDate){
					ngModel.$setTouched(true);
				}
			})
		}
	}
})();