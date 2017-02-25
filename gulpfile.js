const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const minimist = require('minimist');

var config = {
    production: !!gutil.env.env
};

console.log('Building production - ' + config.production);

gulp.task('move_index', function () {
    if(config.production) {
        gulp.src('src/index.html')
            .pipe(gulp.dest('dist/'));
    }
});

gulp.task('sass', function() {
    gulp.src('src/assets/sass/main.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(config.production ? gulp.dest('dist/assets/styles') : gulp.dest('src/assets/styles'))
});

gulp.task('webpack', function() {
    return gulp.src('./src/assets/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(config.production ? gulp.dest('dist/assets/scripts') : gulp.dest('src/assets/scripts'))
});

// gulp.task('watch', function() {
//     gulp.watch('src/assets/sass/*.scss', ['sass']);
//     // gulp.watch('src/assets/index.js', ['webpack']);
//     // gulp.watch('src/assets/sctips/*.js', ['webpack']);
// });

gulp.task('build', ['move_index', 'sass', 'webpack'], function () {

});
