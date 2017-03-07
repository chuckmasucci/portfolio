const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const minimist = require('minimist');
const connect = require('gulp-connect');
const rename = require('gulp-rename');

gulp.task('copy-static-files', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));

    gulp.src('src/assets/data/**/*')
        .pipe(gulp.dest('dist/assets/data/'));

    gulp.src('src/assets/images/**/*')
        .pipe(gulp.dest('dist/assets/images/'));
});

gulp.task('sass-dev', function() {
    gulp.src('src/assets/sass/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('src/assets/styles'))
        .pipe(connect.reload());
});

gulp.task('sass-prod', function() {
    gulp.src('src/assets/sass/*.scss')
        .pipe(sass({style: 'compressed'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/assets/styles'))
});

gulp.task('webpack-dev', function() {
    return gulp.src('./src/assets/scripts/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('src/assets/scripts'))
        .pipe(connect.reload());
});

gulp.task('webpack-prod', function() {
    return gulp.src('./src/assets/scripts/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('build-dev', ['sass-dev', 'webpack-dev'], function () {
    console.log('Building for development');
});

gulp.task('build-prod', ['copy-static-files', 'sass-prod', 'webpack-prod'], function () {
    console.log('Building for production');
});

gulp.task('connect', function() {
    connect.server({
        root: 'src/',
        livereload: true
    })
});

gulp.task('watch', function() {
    gulp.watch('src/assets/sass/*.scss', ['sass-dev']);
    gulp.watch(['src/assets/scripts/**/*.js', '!src/assets/scripts/index.js'], ['webpack-dev']);
});

gulp.task('default', ['connect', 'watch']);




























