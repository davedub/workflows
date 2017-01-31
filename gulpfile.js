var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');

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
		.pipe(gulp.dest('builds/development/js'))
});


