

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css', () => {

	return gulp.src('app/css/*.css')

		.pipe(gulp.dest('server/public/css'))
		.pipe(gulpif(args.watch, livereload()));

});