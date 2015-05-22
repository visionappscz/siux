'use strict';

module.exports = {

  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.bower %>/synergic-ui/src',
      src: ['images/*.svg'],
      dest: '<%= paths.dist %>/'
    },
    {
      expand: true,
      cwd: '<%= paths.src %>/images',
      src: ['**/*.svg'],
      dest: '<%= paths.dist %>/images/'
    }]
  }

};
