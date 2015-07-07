var gulp = require('gulp');
var karma = require('karma').server;
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')


gulp.task('minify', function() {
  return gulp.src('fit-util.js')
    .pipe(uglify())
    .pipe(rename('fit-util.min.js'))
    .pipe(gulp.dest('dist'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
})

gulp.task('default', ['test', 'minify']);
gulp.task('build', ['default']);