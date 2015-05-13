'use strict';

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['browserSync', 'server'], function () {

    gulp.watch(config.js.src, ['javascript']);

    gulp.watch(config.stylus.src, function () {
        browserSync.reload(config.css.watch, {
            stream: true
        });
    });

    gulp.watch(config.js.compiled, function () {
        browserSync.reload(config.js.compiled, {
            stream: true
        });
    });

    gulp.watch(config.templates.watch, function () {
        browserSync.reload();
    });

});
