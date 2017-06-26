

// deal with the app folder files changes

import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('browser', (cb) => {

	if (!args.watch) return cb();

	// if original .js file changed, it will call 'scripts.js' file
	gulp.watch('app/**/*.js', ['scripts']);

	gulp.watch('app/**/*.ejs', ['pages']);

	gulp.watch('app/**/*.css', ['css']);


});



























