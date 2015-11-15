(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.factory('dataService', DataService);

	DataService.$inject = ['$q'];
	function DataService($q) {
		var service = {
			getSpends : getSpends,
			putSpends : putSpends
		};
		
		return service;

		////////////////
		
		function getSpends() {
			var deferred = $q.defer();
			
			
			return deferred.promise;
		 }
		
		function putSpends() {
			var deferred = $q.defer();
			
			return deferred.promise;
		}
	}
})();