/**
 * Created by kostiantyn.bogapov on 12/14/2015.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');


gulp.task('webserver', function() {
    return gulp.src('dist')
        .pipe(webserver({
            host: '0.0.0.0',
            port: '8080',
            livereload: true,
        }));
});


 /*gulp.task('js', function() {
    gulp.src('src/js/*.js')
       .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist'))
});*/

gulp.task('html', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))
})

gulp.task('css', function() {
	gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css' /*'node_modules/blueimp-gallery/css/blueimp-gallery.css'*/])
        .pipe(concat('bootstrap.css'))
		.pipe(gulp.dest('dist/css/bootstrap/'))
})

gulp.task('sass', function () {
  gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
	gulp.src('src/css/img/**/*')
		.pipe(gulp.dest('dist/css/img/'))
})

gulp.task('fonts', function() {
    gulp.src('node_modules/bootstrap/fonts/*')
        .pipe(gulp.dest('dist/css/fonts/'))
})


gulp.task('watch', function() {
    gulp.watch(['src/js/*.js', 'src/*.html', 'src/css/*.css'], ['html','css','browserify'])
});

gulp.task('sass:watch', function () {
  gulp.watch('src/css/*.scss', ['sass']);
});

gulp.task('browserify', function() {
    return browserify(['src/js/main.js']) 
			   .bundle()
			   .pipe(source('main.js'))
			   .pipe(gulp.dest('./dist/js'))
        });


gulp.task('default', ['sass', 'sass:watch', 'watch', 'browserify', 'html', 'css', 'img', 'fonts', 'webserver']);