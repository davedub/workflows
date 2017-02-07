var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	rubysass = require('gulp-ruby-sass'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps')

// for environment variable
// default is development unles specified

var 	env,
	coffeeSources,
	htmlSources,
	jsonSources,
	paths,
	sassStyle,
	outputDir;

env = process.env.NODE_ENV || 'development';

if (env==='development') {
	sassStyle = 'expanded';
	outputDir = 'builds/development/'
} else {
	sassStyle = 'compressed';
	outputDir = 'builds/production/';
}

// for Chrome gulp devtools module
module.exports = gulp;

// tasks run when gulp command is issued
// thereby anonymous functions - E.G.
// gulp.task('log', function () {
// 	// use gutil variable
// 	gutil.log("Workflows are super awesome");
// });

coffeeSources = ['components/coffee/*.coffee']

jsSources = [
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
		.pipe(gulpif(env === 'production', uglify()))
		.pipe(gulp.dest(outputDir + '/js'))
		.pipe(connect.reload())
});

paths = {
	sassSrcPath: 'components/sass/style.scss',
    	sassDestPath: outputDir +'/css',
    	sassImagePath: outputDir +'/images'
};

gulp.task('rubysass', function(){
	return rubysass(paths.sassSrcPath, {
		style: sassStyle,
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
		root: outputDir,
		livereload: true
	})
});
htmlSources = [outputDir +'/*.html']

gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});  

jsonSources = [outputDir +'/js/*.json']

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
