'use strict';

var config = require('../config');
var gulp = require('gulp');
var harp = require('harp');

gulp.task('server', function () {
    return harp.server(config.harp.src, {
        port: config.port
    });
});

