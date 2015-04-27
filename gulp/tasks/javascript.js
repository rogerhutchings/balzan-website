'use strict';

var concat = require('gulp-concat');
var config = require('../config.js');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

var uglifyArgs = {
    compress: {
        negate_iife: false
    }
};

gulp.task('javascript', function () {
    return gulp.src(config.js.src)
    .pipe(concat('app.js'))
    .pipe(gulpif(config.production, uglify(uglifyArgs)))
    .pipe(gulp.dest(config.js.dest));
});
