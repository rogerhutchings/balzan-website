'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
    return del(config.build.dest);
});
