'use strict';

var browserSync = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');

gulp.task('browserSync', function () {
    return browserSync({
        proxy: 'localhost:' + config.port,
        open: false,
        ghostMode: {
            clicks: true,
            forms: false,
            scroll: true
        },
        logLevel: 'info',
        notify: false
    });
});

