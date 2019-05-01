const gulp=require('gulp');
const gulpSass=require('gulp-sass');
const browserSync=require('browser-sync').create();

function sass()
{
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','./src/scss/*.scss'])
  .pipe(gulpSass({
      outputStyle: 'expanded'
  }))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
}
function js(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
}
function watch()
{
  browserSync.init({
    server: {
        baseDir: "./"
    }
});
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'], sass);
  gulp.watch('*.html').on('change',browserSync.reload);
}

exports.sass = sass;
exports.watch = watch;
exports.js=js;