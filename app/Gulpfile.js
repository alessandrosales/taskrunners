var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('html', function(){

    return gulp.src('./src/pug/*.pug')
                .pipe(pug())
                .pipe(gulp.dest('./www-gulp/'));

});

gulp.task('css', function(){

    return gulp.src('./src/sass/style.sass')
                .pipe(sass())
                .pipe(concat('style.min.css'))
                .pipe(gulp.dest('./www-gulp/css/'));

});

gulp.task('js', function(){

    return gulp.src(['./src/js/util.js', './src/js/principal.js'])
                .pipe(uglify({mangle: false}))
                .pipe(concat('geral.min.js'))
                .pipe(gulp.dest('./www-gulp/js/'));

});

gulp.task('watch', function(){

    gulp.watch(['./src/pug/*'], ['html']);
    gulp.watch(['./src/sass/*'], ['css']);
    gulp.watch(['./src/js/*'], ['js']);

});

gulp.task('default', ['html', 'css', 'js', 'watch']);