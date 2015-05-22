'use strict';

module.exports = {

  dist: {
    options: {
      paths: 'bower_components',
      banner: '<%= banner %>'
    },
    files: {
      '<%= paths.temp %>/main.css': '<%= paths.src %>/less/main.less'
    }
  }

};
