'use strict';

module.exports = {

  dist: {
    options: {
      paths: '<%= paths.bower %>',
      banner: '<%= banner %>'
    },
    files: {
      '<%= paths.temp %>/main.css': '<%= paths.src %>/less/main.less'
    }
  }

};
