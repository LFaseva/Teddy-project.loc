/*------подключеные файлы-------*/
    var gulp = require('gulp')
    var postcss = require('gulp-postcss')
    var autoprefixer = require('autoprefixer')

/*------решаемые задачи-------*/

    gulp.task('autoprefixer', function(){
        return gulp.src('src/css/style.css')
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest('build/css'))
    })