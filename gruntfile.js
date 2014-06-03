module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.initConfig({
		clean: {
			assets: ["_build/_dev"],
			node: ["_build/node_modules","_build/gruntfile.js","_build/package.json"],
			codekit: ["_build/codekit-config.json"],
			todo: ["_build/checklist.todo"],
		},
		copy: {
			main: {
				src: '**',
				dest: '_build/',
			},
		},
		concat: {
			options: {
				separator: ';',
			}, // options
			dist: {
				src: ['_dev/js/plugins.js', '_dev/js/plugins/*.js'],
				dest: 'js/plugins.min.js',
			} // dist

		}, // Concat

		uglify: {
			options: {
				beautify: true,
				compress: false,
				mangle: false,
				preserveComments: 'all'
			}, // Options
			main_script: {
				files: {
					'js/main.min.js' : ['_dev/js/main.js']
				} // files
			} // main_script
		}, // uglify

		sass:{
			dist: {
				options: {
					style: 'compressed'
				}, //options
				files:{
					'css/main.css' : '_dev/scss/main.scss',
				} // files
			} //dist
		}, //sass
		watch: {
			options: { livereload: true},
			plugins: {
				files: ['_dev/js/plugins.js','_dev/js/plugins/*.js'],
				tasks: ['concat']
			}, // Plugins
			scripts: {
				files: ['_dev/js/main.js'],
				tasks: ['uglify']
			}, // Scripts
			scss: {
				files: ['_dev/scss/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: false
				},
			},
			pages: {
				files: ['*.html', '*.php', 'incl/*.inc'],
			}, // Pages
			images: {
				files: ['*.gif', '*.jpg', '*.png', '*.svg'],
			}, // images
			css: {
				files: ['css/*.css'],
			} // css

		} // watch
	}) // initConfig
	grunt.registerTask('default', 'watch');
	grunt.registerTask(
  'build',
  'Compiles all of the assets and copies the files to the build directory.',
  [ 'copy', 'clean' ]);
} // exports