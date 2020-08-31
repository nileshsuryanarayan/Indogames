var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');

gulp.task("build", function() {
  return gulp
    .src("*/*.scss")
    .pipe(sass({ bundleExec: true }).on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./dist/IndogamesWeb/"));
});


