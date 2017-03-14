import gulp from 'gulp'
import gutil from 'gulp-util'
import sass from 'gulp-sass'
import webpack from 'webpack-stream'
import connect from 'gulp-connect'
import webpackConfig from './webpack.config'

// Source directories
const stylesDir = './src/assets/styles'
const scriptsDir = './src/assets/scripts'
const mainJS = './src/scripts/main.js'

// Production directories
const distDir = 'dist'
const distDataDir = 'dist/assets/data/'
const distImagesDir = 'dist/assets/images/'

// Asset sources
const assetsSources = 'src/assets/**/*'
const cssSources = 'src/assets/styles/*.css'
const jsAssetSources = 'src/assets/scripts/index.js'
const dataSources = 'src/assets/data/**/*'
const imageSources = 'src/assets/images/**/*'

// Core sources
const indexSource = 'src/index.html'
const jsSources = 'src/scripts/**/*.js'
const sassSources = 'src/sass/*.scss'

gulp.task('connect', () => {
    connect.server({
        root: 'src/',
        livereload: true,
    })
})

gulp.task('watch', () => {
    gulp.watch([sassSources], ['sass-dev'])
    gulp.watch([jsSources], ['webpack-dev'])
});

gulp.task('default', ['connect', 'watch']);

// Development tasks
gulp.task('sass-dev', () => {
    return gulp.src(sassSources)
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest(stylesDir))
        .pipe(connect.reload())
});

gulp.task('webpack-dev', () => {
    return gulp.src(mainJS)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(scriptsDir))
        .pipe(connect.reload())
});

gulp.task('build-dev', ['sass-dev', 'webpack-dev'], function() {

});

// Production tasks
gulp.task('copy-static-files', () => {
    gulp.src(indexSource)
        .pipe(gulp.dest(distDir))

    gulp.src(dataSources)
        .pipe(gulp.dest(distDataDir))

    gulp.src(imageSources)
        .pipe(gulp.dest(distImagesDir))
});

gulp.task('sass-prod', () => {
    gulp.src(sassSources)
        .pipe(sass({
            style: 'compressed'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(stylesDir))
});

gulp.task('webpack-prod', () => {
    return gulp.src(mainJS)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(scriptsDir))
});

gulp.task('build-prod', ['copy-static-files', 'sass-prod', 'webpack-prod'], () => {

});
