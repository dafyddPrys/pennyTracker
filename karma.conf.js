module.exports = function(config){
	config.set({
		basePath : '',
		
		frameworks : ['jasmine'],
		
		reporters : ['progress'],
		
		port : 9876,
		
		colours : true,
		
		autoWatch : false,
		
		browsers : ['PhantomJS'],
		
		singleRun : true
	})
}