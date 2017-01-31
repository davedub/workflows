var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

// tasks that are run when the gulp command is issued
// thereby triggering gulp
// are anonymous functions

// gulp.task('log', function () {
// 	// use gutil variable
// 	gutil.log("Workflows are super awesome");
// });

var coffeeSources = ['components/coffee/*.coffee']

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
	.pipe(coffee({bare: true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});