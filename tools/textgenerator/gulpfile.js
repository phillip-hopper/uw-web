/**
 * Include Gulp
 *
 * @type {Object}
 */
var gulp = require('gulp');
/**
 * Include Gulp JSHint
 *
 * @type {Object}
 */
var jshint = require('gulp-jshint');
/**
 * Include Gulp mocha
 *
 * @type {Object}
 */
var mocha  = require('gulp-mocha');
/**
 * Add a linting task
 *
 * @author Johnathan Pulos <johnathan@missionaldigerati.org>
 */
gulp.task('lint', function() {
  return gulp
    .src(['./gulpfile.js', './uw-grab-bibles.js', './node_modules/unfolding-word/**/*.js', './tests/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
/**
 * Add a task for running the tests
 * 
 * @author Johnathan Pulos <johnathan@missionaldigerati.org>
 */
gulp.task('test', function() {
  return gulp
    .src('./tests/**/*.js')
    .pipe(mocha());
});
/**
 * Setup the watch task
 */
gulp.task('watch', ['lint', 'test'], function() {
  gulp.watch(['./gulpfile.js', './uw-grab-bibles.js', './node_modules/unfolding-word/**/*.js', './tests/**/*.js'], function() {
    gulp.run('lint', 'test');
  });
});