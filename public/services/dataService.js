(function() {
'use strict';

	angular
		.module('pennyTracker.core')
		.factory('dataService', DataService);

	DataService.$inject = ['$q','$http'];
	function DataService($q, $http) {
		var service = {
			getSpends : getSpends,
			putSpend : putSpend
		};
		
		return service;

		////////////////
		
		function getSpends() {
			var deferred = $q.defer();
			
			$http({
				method: 'GET',
				url: '/api/spends'
			}).then(
				function(data){
					deferred.resolve(data);
				},
				function(error){
					deferred.reject(error);
				}
			);
			
			return deferred.promise;
		 }
		
		function putSpend(spend) {
			var deferred = $q.defer();
			
			$http({
				method : 'POST',
				url : 'api/spends',
				data : spend
			}).then(
				function(data){
					deferred.resolve(data);
				},
				function(error){
					deferred.reject(error);
				}
			)
			
			return deferred.promise;
		}
	}
})();