'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var harp = require('harp');

gulp.task('compile', function () {
    return harp.compile(__dirname, config.build.dest, function () {});
});
