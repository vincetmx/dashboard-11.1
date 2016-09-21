var gulp = require('gulp');
// require other packages
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// styles task
gulp.task('sass', function() {
  return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'));
});