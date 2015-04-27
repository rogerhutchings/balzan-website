'use strict';

var concat = require('gulp-concat');
var config = require('../config.js');
var gulp = require('gulp');

gulp.task('javascript', function () {
    return gulp.src(config.js.src)
    .pipe(concat('app.js'))
    // .pipe(uglify({
    //     compress: {
    //         negate_iife: false
    //     }
    // }))
    .pipe(gulp.dest(config.js.dest));
});

console.log('watch')
