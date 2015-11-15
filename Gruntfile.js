module.exports = function(grunt){
	
	grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

	
	grunt.initConfig({
    'meta': {
      'jsFilesForTesting': [
        'bower_components/jquery/dist/jquery.js',
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'bower_components/angular-mocks/angular-mocks.js',
		'dist/**/*.js',
      ]
    },
	'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'source/**/*.js'
          ],
        }
      }
	},
    
    'jshint': {
      'beforeconcat': ['dist/**/*.js'],
    }
	
	});
    
    grunt.registerTask( 'test', ['karma:development']);
}