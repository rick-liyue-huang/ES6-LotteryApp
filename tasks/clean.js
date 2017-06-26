

// in order to avoid error, we need to clean the old files before copy the files to 'dest' folder.

import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean', () => {

	// clean the files
	return del(['server/public', 'server/views']);
});