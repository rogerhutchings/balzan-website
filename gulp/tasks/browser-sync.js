'use strict';

var browserSync = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');

gulp.task('browserSync', function () {
    return browserSync({
        ghostMode: {
            clicks: true,
            forms: false,
            scroll: true
        },
        logLevel: 'info',
        notify: false,
        open: false,
        proxy: 'localhost:' + config.port
    });
});

