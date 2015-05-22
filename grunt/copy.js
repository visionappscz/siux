'use strict';

module.exports = {

  fonts: {
    files: [{
      expand: true,
      cwd: '<%= paths.bower %>/bootstrap/dist/',
      src: ['fonts/*'],
      dest: '<%= paths.dist %>/'
    }]
  }

};
