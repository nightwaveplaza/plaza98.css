var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    crass        = require('gulp-crass'),
    base64       = require('gulp-base64'),
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

        .pipe(base64({
            extensions: ['png'],
            debug: false
        }))

        // dist
        .pipe(rename('plaza98.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('demo'))
        //.pipe(gulp.dest('D:\\Projects\\Dev\\Android\\NightwavePlaza\\view\\dist\\css'))

        // dist minified
        .pipe(rename('plaza98.min.css'))
        .pipe(crass({ pretty: false }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.styl', ['default']);
});