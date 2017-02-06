var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	rubysass = require('gulp-ruby-sass'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	sourcemaps = require('gulp-sourcemaps')

module.exports = gulp;

// tasks run when gulp command is issued
// thereby anonymous functions - E.G.
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
		.pipe(connect.reload())
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
	.pipe(connect.reload())

});

gulp.task('connect', function() {
	connect.server({
		root: 'builds/development',
		livereload: true
	})
});
var htmlSources = ['builds/development/*.html']

gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});  

var jsonSources = ['builds/development/js/*.json']

gulp.task('json', function() {
	gulp.src(jsonSources)
	.pipe(connect.reload())
});  

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
 	gulp.watch('components/sass/*.scss', ['rubysass']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
});

gulp.task('default', 
	['html', 'json', 'coffee', 'js', 'rubysass', 'connect', 'watch']);
