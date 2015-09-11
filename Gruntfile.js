'use strict';

module.exports = function(grunt) {

  var options = {

    // Banner for CSS and JS
    banner: '/*!\n' +
    ' * SIUX Prototype\n' +
    ' *\n' +
    ' * Created with Synergic UI.\n' +
    ' * Copyright 2015 Adam Kudrna (www.synergic.cz).\n' +
    ' */\n',

    // External configs
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    paths: {
      src: 'assets',
      dist: 'web',
      bower: 'bower_components',
      templates: 'views',
      temp: '.tmp'
    },

    // Development
    devUrl: 'localhost/siux/web/',
    devBrowser: 'google chrome'

  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { config: options });

  // See the `grunt/` directory for individual task configurations.
};
