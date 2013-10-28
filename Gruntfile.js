module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    jade: {
        all: {
            files: [{
                expand: true,
                src: ['**.jade'],
                ext: ['.html']
            }]
        }
    },
      
    less: {
        all: {
            files: [{
                expand: true,
                src: ['**.less'],
                ext: ['.css']
            }]
        }
    },
      
    // grunt-watch will monitor the projects files
    watch: {
      jade: {
        files: ['**.jade'],
        tasks: 'jade'
      },
      less: {
        files: ['**.less'],
        tasks: 'less'
      }
    },

  });

};
