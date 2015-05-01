'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', ['compile'], function () {
    return gulp.src(config.build.dest + '/')
        .pipe(rsync({
            hostname: config.remote.server,
            destination: config.remote.path,
            username: config.remote.username,
            progress: true
        }));
});
