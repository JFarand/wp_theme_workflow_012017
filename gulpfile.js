//GulpFile

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('minify_css_and_copy', function(){

  var d = new Date();
  var timestamp = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  console.log('Minifying CSS ' + timestamp);

  return gulp.src('dev/*.css')
     .pipe(cleancss())
     .pipe(concat('main.css'))
     .pipe(gulp.dest('wp-content/themes/twentyfifteen/css'));
});

gulp.task('php', function(){
  console.log('You have changed a Wordpress PHP file.');
});

gulp.task('watch', function(){
  gulp.watch('dev/*.css', ['minify_css_and_copy']);
  gulp.watch('wp-content/**/**/*.php', ['php']);
  console.log('You have changed a new file.');
});

gulp.task('default', ['watch'] );
