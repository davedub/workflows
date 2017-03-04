# Workflows course

Basic review of OS web dev tools for building a responsive SPA.

## Offered through Lynda.com

This course was a useful refresher course on Git and Sass, and also introduced Gulp and Browserify. The course instructor is [Ray Villalobos](https://github.com/planetoftheweb).

## Other branches

Refer to the "read me" files for the other branches - gulprubysass and production - to note some issues relating to the workflows developed in this course.

### Postscript: Browserify issues

The course relies on [gulp-browserify plugin](https://github.com/deepak1556/gulp-browserify) which I have since learned [from Hafiz Ismai's article](https://wehavefaces.net/gulp-browserify-the-gulp-y-way-bb359b3f9623#.nmb33b3tn) has been [blacklisted by Gulp](https://github.com/gulpjs/plugins/issues/47). The preferred approach is to use vainilla [browserify](https://github.com/substack/node-browserify) with [vinyl transform](https://www.npmjs.com/package/vinyl-transform). But even this appears to be problematic and the [better approach](https://github.com/substack/node-browserify/issues/1198) may be to use [through2](https://www.npmjs.com/package/through2).
