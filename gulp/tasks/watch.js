'use strict';

var browserSync = require('browser-sync');
var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', ['browserSync', 'server'], function () {

    gulp.watch(config.stylus.src, function () {
        browserSync.reload(config.css.watch, {
            stream: true
        });
    });

});
