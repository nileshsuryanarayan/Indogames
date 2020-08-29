var gulp = require("gulp");
var scss = require("gulp-scss");

gulp.task("scss", function() {
  return gulp
    .src("*/*.scss")
    .pipe(scss({ bundleExec: true }))
    .pipe(gulp.dest("dist/css"));
});
