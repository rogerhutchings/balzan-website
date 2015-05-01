'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var harp = require('harp');

gulp.task('harp', function () {
    return harp.compile(config.harp.src, config.build.dest, function () {});
});
