'use strict';

var path = require('path');

var root = path.normalize(__dirname + '/..');

module.exports = {

    production: process.env.NODE_ENV === 'production',

    port: process.env.PORT || 9000,

    harp: {
        src: root
    },

    stylus: {
        src: root + '/public/_stylus/**/*.styl'
    },

    css: {
        watch: root + '/public/style.css'
    },

    build: {
        dest: root + '/build'
    },

    js: {
        src: [root + '/public/_js/jquery.js', root + '/public/_js/*.js'],
        dest: root + '/public',
        compiled: root + '/public/app.js'
    },

    remote: {
        server: 'balzan.new.ox.ac.uk',
        path: '/srv/www/htdocs',
        username: 'ddarg'
    },

    templates: {
        watch: root + '/public/**/*.ejs'
    }

};
