var 	gulp = require('gulp'),
	gutil = require('gulp-util');

// tasks that are run when the gulp command is issued
// thereby triggering gulp
// are anonymous functions

gulp.task('log', function () {
	// use gutil variable
	gutil.log("Workflows are awesome");
});