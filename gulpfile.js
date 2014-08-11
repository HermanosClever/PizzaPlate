var gulp = require( 'gulp' ),
		sass = require( 'gulp-ruby-sass' ),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		gutil = require('gulp-util'),
		livereload = require('gulp-livereload');

var build_folder = '_build';
var onError = function (err) {
  gutil.beep();
  console.log(err);
};

gulp.task( 'scss_styles' , function(cb) {
	return gulp.src( '_dev/scss/*.scss' )
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( sass({ style: 'expanded'}) )
		.pipe( gulp.dest( 'css/' ) )
		.pipe( rename({suffix: '.min'} ) )
		.pipe( gulp.dest( 'css/' ) );
		//.pipe( notify({message: 'CSS OK'}));
});

gulp.task('js_plugins', function(){
	return gulp.src(['_dev/js/plugins.js','_dev/js/plugins/*.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( concat('plugins.js') )
		.pipe( gulp.dest('js/') )
		.pipe( notify({message: 'PLUGINS OK'}));
});

gulp.task('js_scripts', function(){
	return gulp.src(['_dev/js/*.js','!_dev/js/plugins.js'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe( gulp.dest('js/') )
		.pipe( rename({suffix: '.min'} ) )
		.pipe( uglify() )
		.pipe( gulp.dest('js/') )
		.pipe( notify({message: 'JS OK'}));
});

gulp.task('deploy', function(){
	gulp.src([
		'*.*',
		'*/**',
		'!_dev/**',
		'!_dev',
		'!node_modules/**',
		'!node_modules',
		'!checklist.todo',
		'!gulpfile.js',
		'!package.json'
		])
		.pipe( gulp.dest( build_folder + '/') );
})


gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('_dev/js/plugins/*.js', ['js_plugins']).on('change', livereload.changed);
	gulp.watch('_dev/js/*.js', ['js_scripts']).on('change', livereload.changed);
	gulp.watch('_dev/scss/*.scss', ['scss_styles']);
	gulp.watch('css/*.css').on('change', livereload.changed);
	gulp.watch(['*.php','*.html','incl/*.inc']).on('change', livereload.changed);
})

gulp.task('default', ['watch']);