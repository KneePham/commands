//TO DO 
//add source maps 
//Dev & Production

'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
 	livereload = require('gulp-livereload'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	// order = require("gulp-order"),
	uglify = require('gulp-uglify'); 	

//SASS
var cssFiles = './sass/**/*.scss',
    cssDest = 'dist/css';

gulp.task('sass', function () {
  return gulp.src(cssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError)) //:nested :compact :expanded :compressed
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
	livereload.listen();
  	gulp.watch('./sass/**/*.scss', ['sass']);
});

//JS
var jsFiles = 'js/*.js',
    jsDest = 'dist/js';

gulp.task('scripts', function() {
    return gulp.src(['!js/customizer.js',jsFiles])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest));
});
