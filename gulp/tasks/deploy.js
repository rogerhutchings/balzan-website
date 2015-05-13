'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('deploy', ['compile'], function () {
    return gulp.src(config.build.dest)
        .pipe(rsync({
            destination: config.remote.path,
            hostname: config.remote.server,
            progress: true,
            recursive: true,
            root: 'build',
            username: config.remote.username
        }));
});
