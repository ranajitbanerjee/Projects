module.exports = function(grunt) {
       'use strict';
       // Project configuration.
       grunt.initConfig({
               jasmine : {
                       src : 'src/test.js',
                       options : {
                               specs : 'src/spec/*.js'
                       }
                     },
                jshint: {
                    myFiles: ['TwitterFeed/js/visualize.js']
                }
       });
       grunt.loadNpmTasks('grunt-contrib-jasmine');
       grunt.loadNpmTasks('grunt-contrib-jshint');
       grunt.registerTask('lint',['jshint']);
};
