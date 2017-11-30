const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const gulpsass = require('gulp-sass');
const jsconcat = require('gulp-concat');

/* 
TOP LEVEL FUNCTIONS
gulp.task -define tasks
gulp.src - pont to files to use
gulp.test - point to folder to output
gulp.watch - waatch files and folders for changes
*/

//log message, event for default is, 'default'
gulp.task('message', () => {
    return console.log('gulp is running');
});

//copy all HTML files
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

//optimize image using imagemin
gulp.task('imagemin', () => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})

//minify js
gulp.task('minjs', () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//copile sass
gulp.task('minsass', () => {
    gulp.src('src/sass/*.scss')
        .pipe(gulpsass())
        .pipe(gulp.dest('dist/css'))
})

//concat js
gulp.task('cooncatjs', () => {
    gulp.src('src/js/*.js')
        .pipe(jsconcat('main.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//run all tasks at once, type gulp 
gulp.task('default', ['copyHtml', 'imagemin', 'minsass', 'cooncatjs'])

//watch any changes
gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['cooncatjs'])
    gulp.watch('src/img', ['imagemin'])
    gulp.watch('src/sass/*.scss', ['minsass'])
    gulp.watch('src/*.html', ['copyHtml'])

})