'use strict';

module.exports = {

  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/moment/moment.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/fancybox/source/jquery.fancybox.js',
      'bower_components/select2/select2.js',
      'bower_components/select2/select2_locale_cs.js',
      'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      'bower_components/synergic-ui/dist/js/synergic-ui.js',
      'bower_components/picturefill/dist/picturefill.js',
      '<%= paths.src %>/js/main.js'
    ],
    dest: '<%= paths.temp %>/main.js'
  }

};
