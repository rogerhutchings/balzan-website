'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', ['clean'], function (cb) {
    config.production = true;
    runSequence(['javascript', 'harp'], cb)
});
