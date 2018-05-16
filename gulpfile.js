var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    crass        = require('gulp-crass'),
    rename       = require('gulp-rename'),
    nib          = require('nib'),
    autoprefixer = require('autoprefixer-stylus');

gulp.task('default', function(){
    return gulp.src('src/index.styl')
        .pipe(stylus({
            paths: [__dirname + '/src'],
            use: [
                nib(),
                autoprefixer()
            ]
        }))

        // dist
        .pipe(rename('plaza98.css'))
        .pipe(gulp.dest('dist'))

        // dist minified
        .pipe(rename('plaza98.min.css'))
        .pipe(crass({ pretty: false }))
        .pipe(gulp.dest('dist'));
});