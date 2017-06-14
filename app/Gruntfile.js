module.exports = function(grunt){

    grunt.initConfig({
        pug: {
            compile: {
                files: [{
                    cwd: './src/pug',
                    src: '*.pug',
                    dest: 'www-grunt',
                    expand: true,
                    ext: '.html'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    './www-grunt/css/style.min.css': './src/sass/style.sass'
                }
            }
        },
        uglify: {
            js: {
                files: {
                    './www-grunt/js/geral.min.js': ['./src/js/util.js', './src/js/principal.js']
                }
            }
        },
        watch: {
            pug: {
                files: './src/pug/*',
                tasks: ['pug']
            },
            js: {
                files: './src/js/*',
                tasks: ['js']
            },
            css: {
                files: './src/sass/*',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['pug', 'sass', 'uglify', 'uglify', 'watch']);

}