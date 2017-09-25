
var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('compileSass',function(){
     gulp.src('./src/sass/index.scss')
    .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
    .pipe(gulp.dest('./src/css/'))
})

gulp.task('hear',function(){
    gulp.watch('./src/sass/index.scss',['compileSass'])
})