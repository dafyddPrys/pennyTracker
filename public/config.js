(function(){
	'use strict';
	
	angular
		.module('pennyTracker.core')
		.config( configureRoutes );
	
		function configureRoutes($routeProvider, $locationProvider){
			
			$routeProvider
				.when('/',{
					templateUrl : 'addSpend/addSpend.html',
					controller : 'addSpendController',
					controllerAs : 'vm' 
				})
				.when('/spends',{
					templateUrl : 'seeSpends/seeSpends.html',
					controller : 'seeSpendsController',
					controllerAs : 'vm' 
				})
				.otherwise({
					redirectTo : '/'
				});
			
			
			
		}
})();