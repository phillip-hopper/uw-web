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
 * The Mocha reporter using node-notify
 *
 * @type {Object}
 */
var notifierReporter = require('mocha-notifier-reporter');
/**
 * The plumber for allowing errors to pass through
 *
 * @type {Object}
 */
var plumber = require('gulp-plumber');
/**
 * Notify the user
 *
 * @type {Object}
 */
var notify = require('gulp-notify');
/**
 * An array of files to watch and run lint on
 *
 * @type {Array}
 */
var sources = ['./gulpfile.js', './uw-grab-bibles.js', './node_modules/unfolding-word/**/*.js', './tests/**/*.js'];
/**
 * An array of file locations for the test files to be run
 *
 * @type {Array}
 */
var testSources = ['./tests/**/*.js'];

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
/**
 * Add a linting task
 *
 * @author Johnathan Pulos <johnathan@missionaldigerati.org>
 */
gulp.task('lint', function() {
  return gulp
    .src(sources)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError({message: 'Linting Failed!'}));
});
/**
 * Add a task for running the tests
 * 
 * @author Johnathan Pulos <johnathan@missionaldigerati.org>
 */
gulp.task('test', function() {
  return gulp
    .src(testSources)
    .pipe(mocha({reporter: notifierReporter.decorate('spec')}))
    .on('error', handleError);
});
/**
 * Setup the watch task
 */
gulp.task('watch', ['lint', 'test'], function() {
  gulp.watch(sources, function() {
    gulp.run('lint', 'test');
  });
});