const gulp=require('gulp');
const gulpSass=require('gulp-sass');
const gulpBrowserSync=require('browser-sync').create();

function sass()
{
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/style.scss'])
  .pipe(gulpSass({
      outputStyle: 'expanded'
  }))
  .pipe(gulp.dest('src/css'))
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