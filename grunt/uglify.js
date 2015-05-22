'use strict';

module.exports = {

  options: {
    banner: '<%= banner %>'
  },
  dist: {
    files: {
      '<%= paths.dist %>/js/main.min.js': '<%= paths.temp %>/main.js'
    }
  }

};
