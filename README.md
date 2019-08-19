# Typescripts Types Test
using requestIdleCallback in typescript requires using [@types/requestidlecallback](https://www.npmjs.com/package/@types/requestidlecallback)

# Example
```ts
import {requestIdleCallback} from "requestidlecallback";

export async function Test() : Promise<void> {
	return new Promise((yup) => {
		requestIdleCallback(() => {
			alert('done');

			yup();
		});
	});
}
```

## npm run build
```js
import { requestIdleCallback } from "requestidlecallback";
export async function Test() {
    return new Promise((yup) => {
        requestIdleCallback(() => {
            alert('done');
            yup();
        });
    });
}
```

## gulp
```js
export async function Test() {
	return new Promise((yup) => {
		requestIdleCallback(() => {
			alert('done');
			yup();
		});
	});
}

//# sourceMappingURL=test.module.js.map
```

### gulpfile.js

[gulp-replace](https://www.npmjs.com/package/gulp-replace) is used mostly to
 strip out the import statement, but also to force typescript to behave and
 use tabs instead of spaces (input tabs, you output spaces for some reason), as
 per discussion on [twitter](https://mobile.twitter.com/sarah_federman/status/1146544481556033537) &
 [reddit](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/) regarding the accessibility
 impact of tabs & spaces.

```js
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
```
