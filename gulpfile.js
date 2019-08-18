const { src, dest , series, watch} = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();



/*---------Compile sass--------------------------*/

function compileSass(){
    return src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}


/*---------------Copy html files------------------*/

function copyHtml() {
  return  src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())   
}


/*--------------Optimize Img------------------*/

function minImg() {
    return  src('src/img/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true, optimizationLevel: 5}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
      .pipe(dest('dist/img'))
      .pipe(browserSync.stream());  
}


/*-----------------------Minify js-------------------------

function minify(){
    return src('src/js/*')
    .pipe(uglify())
    .pipe(dest('dist/js'))
}

*/


/*-------------------Minify JS (uglify) and Concat------------*/

function scripts(){
    return src('src/js/*')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}


/*------------------WATCH AND RELOAD--------------*/

exports.default = function(){
    browserSync.init({
        server: './dist/'
    });
    watch('src/img/*', minImg);
    watch('src/js/*.js', scripts);
    watch('src/sass/*.scss', compileSass);
    watch('src/*.html' , copyHtml).on('change', browserSync.reload);
}


/*------------BUILD----------------*/

exports.build = series(copyHtml, minImg,scripts, compileSass);

/*
exports.sass = compileSass;
exports.minify = minify;
exports.minImg = minImg;
exports.copyHtml = copyHtml;*/






  