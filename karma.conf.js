module.exports = function(config){
	config.set({
		basePath : '',
		
		frameworks : ['jasmine'],
		
		files: [
		'bower_components/jquery/jquery.js',
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'dist/**/*.js'
		],
		
		reporters : ['progress'],
	})
}