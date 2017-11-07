module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
        options: { sourcemap: 'none' },
				files: {
					'src/style.css' : 'src/cart.scss'
				}
			}
    },
		watch: {
			css: {
				files: 'src/*.scss',
				tasks: ['sass']
      }
		}
	});
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}