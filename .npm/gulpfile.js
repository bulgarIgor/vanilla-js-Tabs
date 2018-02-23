var gulp = require('gulp'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  twig = require('gulp-twig'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  rename = require('gulp-rename'),
  cache = require('gulp-cache'),
  jshint = require('gulp-jshint');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "../"
    }
  });
});

gulp.task('jshint', function() {
  return gulp.src('../_src_js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('main-script', function() {
  return gulp.src('../_src_js/*.js')
    .pipe(maps.init())
    .pipe(concat('script.js'))
    .pipe(maps.write('../'))
    .pipe(gulp.dest('../js'));
});

gulp.task('minify-script', ['main-script'], function() {
  return gulp.src('../_src_js/*.js')
    .pipe(maps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(maps.write('../'))
    .pipe(cache.clear())
    .pipe(gulp.dest('../js'));
});

gulp.task('sass', function() {
  return gulp.src('../_components/**/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write())
    .pipe(gulp.dest('../css'))
    .pipe(reload({stream: true}));
});

gulp.task('html', function(){
  gulp.src(['../twig/*.twig'])
    .pipe(twig({
      getIncludeId: function(filePath) {
        return path.relative('../twig', filePath);
      }
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('../'));
});

gulp.task('watch', [ 'browser-sync', 'minify-script', 'main-script', 'html'] , function() {
  gulp.watch(['../twig/*.twig', '../twig/**/*.twig'], ['html']);
  gulp.watch('../_src_js/*.js', ['jshint']).on('change', browserSync.reload);
  gulp.watch('../_components/**/*.scss', ['sass']);
  gulp.watch("../*.html").on('change', browserSync.reload);
});

gulp.task('default', ['html', 'watch']);
