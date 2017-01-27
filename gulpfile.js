"use strict";
const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const merge = require('merge-stream');

const watchify = require('watchify');
const babelify = require('babelify');
const persistify = require('persistify');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const yargs = require('yargs');
const argv = yargs.argv;

const SRC = './src';
const DIST = './build';

function swallowError (error) {
	console.log(error.toString());
	this.emit('end');
}

function buildJs() {
	let bopts = {
		debug: true
	};
	let opts = Object.assign({}, watchify.args, bopts);
	let b = watchify(persistify(opts));

	b.add(`${SRC}/index.js`)
	.on('update', bundle)
	.on('log', gutil.log)
	.transform(babelify, { 
		presets: ["es2015", "react"],
		plugins: [
			"transform-class-properties"
		]
	});
	
	function bundle() {
		let stream = b.bundle()
		.on('error', swallowError)
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(rename('bundle.js'));

		return stream.pipe(gulp.dest(`${DIST}`));
	}

	return bundle();
}

gulp.task('default', () => {
	return buildJs();
});