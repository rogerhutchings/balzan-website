'use strict';

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var harp = require('harp');

// Now follows the layout at https://gist.github.com/geelen/a5fcb013de67f680cb8d,
// and seems to work just fine :)
gulp.task('server', ['javascript'], function () {
    return harp.server(config.harp.src, {
        port: config.port
    }, function () {
        browserSync({
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
});
