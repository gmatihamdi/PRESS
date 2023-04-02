const gulp = require("gulp")
const gulpsass=require('gulp-sass')
const sass=gulpsass(require('sass'))

//gulp.task('sass',async function(){
 //   gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
//})

gulp.task('watch',async function(){
    gulp.watch('src/components/**/*.scss',async function(){
    //gulp.watch(["src/components/**/*.scss','src/pages/*.scss"],async function(){

      //  gulp.src(["src/components/**/*.scss','src/pages/*.scss"]).pipe(sass()).pipe(gulp.dest('src/css'))
        gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
  
    })
})
