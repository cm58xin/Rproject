
var gulp=require('gulp');
var sass=require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('compileSass',function(){
     gulp.src(['./src/sass/index.scss','./src/sass/common.scss','./src/sass/listpage.scss','./src/sass/detailpage.scss'])
    .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
    .pipe(gulp.dest('./src/css/'))
});

// 监听sass的修改
gulp.task('hear',function(){
    gulp.watch('./src/sass/index.scss',['compileSass'])
});



var browserSync = require('browser-sync').create();
// 静态服务器
// gulp.task('server', function() {
//     browserSync.init({
//         server:  "./src",
//         files:['./src/**/*.html','./src/css/*.css','./src/api/*.php','./src/js/*.js'],
//     });
//    // 监听sass的修改
//       gulp.watch('./src/sass/*.scss',['compileSass']);
//       gulp.watch('./src/**/*.html').on('change', browserSync.reload);
// });
// gulp.task('default', ['server']);


// 代理(二选一)
gulp.task('server', function() {
    browserSync.init({
        port:666,
        proxy: "http://localhost/test",
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php','./src/js/*.js'],
    });
    // 监听sass的修改
      gulp.watch('./src/sass/*.scss',['compileSass']);
      gulp.watch('./src/**/*.html').on('change', browserSync.reload);
});
gulp.task('default', ['server']);

