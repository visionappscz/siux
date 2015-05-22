'use strict';

module.exports = {

  'test-js': [
    'jshint'
  ],

  'test': [
    'test-js'
  ],

  'build-css': [
    'less',
    'autoprefixer',
    'cssmin'
  ],

  'build-js': [
    'concat',
    'uglify'
  ],

  'build-images': [
    'svgmin',
    'imagemin'
  ],

  build: [
    'clean',
    'build-css',
    'build-js',
    'build-images',
    'copy:fonts'
  ],

  dev: [
    'test',
    'build',
    'browserSync',
    'watch'
  ],

  default: [
    'test',
    'build'
  ]

};
