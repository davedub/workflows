var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	rubysass = require('gulp-ruby-sass'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps');

// tasks that are run when the gulp command is issued
// thereby triggering gulp
// are anonymous functions

// gulp.task('log', function () {
// 	// use gutil variable
// 	gutil.log("Workflows are super awesome");
// });

var coffeeSources = ['components/coffee/*.coffee']

var jsSources = [
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'
];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
	.pipe(coffee({bare: true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources) // source
		.pipe(concat('script.js')) // output
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});

var paths = {
    sassSrcPath: 'components/sass/style.scss',
    sassDestPath: 'builds/development/css',
    sassImagePath: 'builds/development/images'
};

gulp.task('rubysass', function(){
	return rubysass(paths.sassSrcPath, {
		style: 'expanded',
		lineNumbers: true,
		compass: true
	})
	.on('error', gutil.log)
	// .pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.sassDestPath))
});

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
 	gulp.watch('components/sass/*.scss', ['rubysass']);

});

gulp.task('default', ['coffee', 'js', 'rubysass', 'watch']);

