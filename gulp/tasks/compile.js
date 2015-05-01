'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', function (cb) {
    config.production = true;
    runSequence('clean', ['javascript', 'harp'], cb)
});
