# Workflows course

Basic review of OS web dev tools for building a responsive SPA.

## Offered through Lynda.com

Accessed through my public library's subscription. This is a refresher  course on Git and Sass, but also introduces me to Gulp and Browserify, which I have not used before. 

I am adding this single sentence paragraph to the readme file solely to check whether, by adding a global user.email config to git, it will identify a push to the repository by my profile rather than my user name. 

### Taught by Ray Villalobos

Ray is a good instructor. See his [Github page](https://github.com/planetoftheweb) for more information.

### Note on the "gulprubysass" branch

I used the gulp-compass plugin the first time around but ran into a problem in that it was not outputting line comments as to source in the site.css file.  I then found a [comment on stackoverflow.com](http://stackoverflow.com/a/30274386/1194055) which noted:

>Be careful with gulp-compass, it is not a gulp plugin (albeit named so) and has been blacklisted by the Gulp community for quite a while. It does not [do] what Gulp plugins are supposed to do (e.g. it's possible to run them without gulp.src and gulp.dest), and other plugins are already doing its work perfectly fine. One of those plugins is gulp-ruby-sass. 

So I switched to [gulp-ruby-sass](https://www.npmjs.com/package/gulp-ruby-sass) on this branch and got it to work correctly in terms of adding line comments to the outputted site.css file from the source .scss files.

### Note on the "production" branch

After adding a local environment variable to the gulpfile.js file, and an if-else conditional depending on whether gulp task specifies production as the non-default environment (development remaining the default), I created a new local branch called 'production' and then pushed it into a new remote branch. 

In the ordinary case, this may not be a good idea because having multiple branches to maintain can be a problem for a team in terms of updating and synchronizing changes. In this case, it was done just to practice git skills (a little) and show the progress of work done in the course and is now the furthest along version of the repo.