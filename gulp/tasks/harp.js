'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var harp = require('harp');

gulp.task('harp', function () {
    // As per https://github.com/sintaxi/harp/issues/391, we have to pass in an
    // empty function as a callback.
    return harp.compile(config.harp.src, config.build.dest, function () {});
});
