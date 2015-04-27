'use strict';

var path = require('path');

var root = path.normalize(__dirname + '/..');

module.exports = {

    port: 9000,

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
        dest: root + '/www'
    }

};
