
// this file defines the CLI, such as 'gulp -production'

import yargs from 'yargs';

// differentiate the development environment and production environment

const args = yargs
	
	// when in production environment, default is false "development environment".
	.option('production', {
		boolean: true,
		default: false,
		describe: 'min all scripts' // uglify the .js files
	})

	// watch all the files changes
	.option('watch', {
		boolean: true,
		default: false,
		describe: 'watch all files'
	})

	// whether output the cli history log
	.option('verbose', {
		boolean: true,
		default: false,
		describe: 'log'
	})

	// deal with the source mapping files
	.option('sourcemaps', {
		describe: 'force the creation of sourcemaps'
	})

	// deal with the port number
	.option('port', {
		string: true,
		default: 3000,
		describe: 'server port'
	})

	// means to solve the CLI in string type
	// 输入的命令行是以字符串解析
	.argv;

	export default args;





























