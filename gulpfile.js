const gulp = require('gulp');
const typescript = require('gulp-typescript');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', () => {
	return gulp.src(
		'./ts/**/*.module.ts'
	).pipe(
		sourcemaps.init()
	).pipe(
		typescript.createProject('./tsconfig.json')()
	).pipe(
		replace(
			'import { requestIdleCallback } from "requestidlecallback";\n',
			''
		)
	).pipe(
		replace(
			/ {4}/g,
			'\t'
		)
	).pipe(
		sourcemaps.write('./', {
			includeContent: false,
		})
	).pipe(
		gulp.dest('./js/')
	);
});
