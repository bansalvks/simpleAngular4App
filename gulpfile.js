var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');

var conn = ftp.create({
    host: '132.148.88.11',
    user: 'eduisap',
    password: 'kAyx30#5',
    parallel: 10,
    log: gutil.log
});


gulp.task('cleanRemote', function () {
    return conn.rmdir('/httpdocs', function (result) {
        console.log(result)
    });
})

gulp.task('upload', function () {

    var dist = __dirname + "/../backend/public/*";
    console.log(dist)
    var remotePath = "/httpdocs";
    var globs = [
        dist
    ];

    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 

    return gulp.src(globs, { cwd: dist, buffer: false })
        .pipe(conn.newer(remotePath))
        .pipe(conn.dest(remotePath));
});

gulp.task('deploy', ['cleanRemote', 'upload']);