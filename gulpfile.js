var gulp = require( 'gulp' ),
		sass = require( 'gulp-ruby-sass' ),
		rename = require('gulp-rename'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		gutil = require('gulp-util');

var build_folder = '_template';
var onError = function (err) {
  gutil.beep();
  console.log(err);
};

gulp.task( 'process-styles' , function() {
	return gulp.src( '_dev/scss/*.scss' )
		.pipe(plumber(onError))
		.pipe( sass({ style: 'expanded'}) )
		.pipe( gulp.dest( 'css/' ) )
		.pipe( rename({suffix: '.min'} ) )
		.pipe( gulp.dest( 'css/' ) )
		.pipe( notify({message: 'CSS OK'}))
});

gulp.task('copy', function(){
	gulp.src(['dest/styles/*.css'])
		.pipe( gulp.dest( build_folder + '/css/') );
})

gulp.task('process-scripts', function(){
	return gulp.src('_dev/js/plugins/*.js')
		.pipe( concat('plugins.js') )
		.pipe( gulp.dest('js/') )
		.pipe( rename({suffix: '.min'} ) )
		.pipe( uglify() )
		.pipe( gulp.dest('js/') )
		.pipe( notify({message: 'JS OK'}));
});

gulp.task('watch', function(){
	gulp.watch('_dev/js/plugins/*.js', ['process-scripts']);
	gulp.watch('_dev/scss/*.scss', ['process-styles']);
})

gulp.task( 'default' , function () {
	   gulp.run('watch');
});