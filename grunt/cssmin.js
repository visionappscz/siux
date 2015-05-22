'use strict';

module.exports = {

  dist: {
    options: {
      restructuring: false,
      keepSpecialComments: '1'
    },
    files: {
      '<%= paths.dist %>/css/main.min.css': '<%= paths.temp %>/main.css'
    }
  }

};
