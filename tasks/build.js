

// combine all the tasks .js files

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

// notice the sequence, -- 'browser' and 'server' must be after the other four, and 'clean' must be first
// in one word, 'server' must be last
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));

