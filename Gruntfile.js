module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// footerConcat Task
		concat: {
			options: {
				seperator: ';'
			},
			headfoot: {
				files: {
					'js/mainfooter.js' : ['js/footer/*.js'],
					'js/mainheader.js' : ['js/header/jquery.js', 'js/header/header.js']
				}
			}
		},

		// Footer Uglify Task
		uglify: {
			footer: {
				files: {
					'js/footer.min.js' : ['js/mainfooter.js']
				}
			},
			header: {
				files: {
					'js/header.min.js' : ['js/mainheader.js']
				}
			}
		},

		// Watch Task
		watch: {
			footerScripts: {
				files: ['js/footer/*.js', 'js/header/*.js'],
				tasks: ['concat', 'uglify']
			}
		}

	});


	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Set up default task
	grunt.registerTask('default', ['watch']);
}