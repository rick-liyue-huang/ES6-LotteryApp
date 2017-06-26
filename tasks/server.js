

import gulp from 'gulp';
import gulpif from 'gulp-if';

// import the server start package
import liveserver from 'gulp-live-server';

import args from './util/args';

gulp.task('serve', (cb) => {

	// if not under 'watch' condition
	if (!args.watch) return cb();

	// if under 'watch' condition, we create one server.
	// it means that express start the 'www' server file

	// also means that 'www' file is the express.js created 'server' !!!
	var server = liveserver.new(['--harmony', 'server/bin/www']);

	// start the server
	server.start();

	// watch all the files in 'server' folder, and reload the front-page
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs', 'server/public/**/*.css'], function(file) {

		// if watched, will notify server the files changed
		server.notify.apply(server, [file]);
	});

	// watch if the port or route changed
	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {

		// will restart the server
		server.start.bind(server)();
	});
});




















