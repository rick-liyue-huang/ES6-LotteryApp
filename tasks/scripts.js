

// 
// import gulp firstly
import gulp from 'gulp';

// deal with the if condition
import gulpif from 'gulp-if';

// deal with file concat
import concat from 'gulp-concat';

// deal with packaging files
import webpack from 'webpack';

// combine the webpack and gulp
import gulpWebpack from 'webpack-stream';

// deal with the rename file signment
import named from 'vinyl-named';

// live update
import livereload from 'gulp-livereload';

// deal with stream
import plumber from 'gulp-plumber';

// deal with file rename
import rename from 'gulp-rename';

// min the js file
import uglify from 'gulp-uglify';

// deal with CLI args 
import {log, colors} from 'gulp-util';


// deal with the CLI self-define args
import args from './util/args';

// here is similar as gulpfile.js in my previous project

gulp.task('scripts', () => {

	return gulp.src(['app/js/index.js'])

		//  deal with the error during constructing the coding
		.pipe(plumber({
			errorHandle: function() {

			}
		}))
		// rename
		.pipe(named())

		// provide one module to deal with the .js file with babel file
		.pipe(gulpWebpack({
			module: {
				loaders: [{
					test:/\.js$/,
					loader: 'babel'
				}]
			}
		}), null, (err,status) => {
			log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
				chunks: false
			}))
		})

		// after deal with the gulp task 'scripts', store the file in new dictory.
		.pipe(gulp.dest('server/public/js'))  // ??

		// copy the upon file to min.js
		.pipe(rename({
			basename: 'cp',
			extname: '.min.js'
		}))

		// compress the .min.js
		.pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))

		.pipe(gulp.dest('server/public/js'))

		// watch the file change and reload it. if has 'watch' in CLI, it will execute reload
		.pipe(gulpif(args.watch, livereload()));

});






















