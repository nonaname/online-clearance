var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    stylus       = require('gulp-stylus'),
    rename       = require('gulp-rename'),
    minifyCSS    = require('gulp-minify-css');

var sourcePath = {
        stylus: 'views/styles/'
    },
    destPath = {
        css:   'public/css/'
    };

gulp.task('stylus', function() {
    gulp.src(sourcePath.stylus + 'main.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(destPath.css))
        .pipe(rename('main.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(destPath.css));
});

gulp.task('watch', function() {
    gulp.watch(sourcePath.stylus + '**/*.styl', ['stylus']);
});	

gulp.task('build', ['stylus']);

gulp.task('serve', ['build', 'watch']);
gulp.task('default');