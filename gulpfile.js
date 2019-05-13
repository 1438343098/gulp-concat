var gulp = require("gulp");
//css less与压缩
var less = require("gulp-less");
//js 代码检验工具
var hint = require("gulp-jshint");
// css压缩
var minify = require("gulp-minify-css");
// css 兼容
var autoprefixer = require('gulp-autoprefixer');
//js 压缩插件
var uglify = require("gulp-uglify");
// 导入合并模块
var fs = require("fs");
var replace = require("gulp-replace");
// 浏览器自动刷新
var browserSync = require("browser-sync");
var reload = browserSync.reload;

// 定义js,css,image文件路径
var paths = {
  less: 'src/less/*.less',
  js:"src/js/*.js",
  htmlHF:"src/html/",
};
// 刷新
gulp.task('browser-sync', function () {
    browserSync.init({
        files:['**'],
        server:{
            baseDir:'./dist',  // 设置服务器的根目录
            index:'lease.html' // 指定默认打开的文件
        },
        proxies: [
            {
                source: '/api',
            }
          ],
        port:8050  // 指定访问服务器的端口号
    });
});

//引入头部底部
gulp.task('include', function() {
    fs.readdir(paths.htmlHF, function(err, files) {
        if (err) {
            console.log(err,"6666");
        } else {
            files.forEach(function(f) {
                if (f !== '_header.html' && f !== '_footer.html' && f !=="_body.html") {
                    gulp.src(paths.htmlHF + f)
                        .pipe(replace(/<!--header-->[\s\S]*<!--headerend-->/, '<!--header-->\n' + fs.readFileSync(paths.htmlHF + '_header.html', 'utf-8') + '\n<!--headerend-->'))
                        .pipe(replace(/<!--bodystrat-->[\s\S]*<!--bodyend-->/, '<!--bodystrat-->\n' + fs.readFileSync(paths.htmlHF + '_body.html', 'utf-8') + '\n<!--bodyend-->'))
                        .pipe(replace(/<!--footer-->[\s\S]*<!--footerend-->/, '<!--footer-->\n' + fs.readFileSync(paths.htmlHF + '_footer.html', 'utf-8') + '\n<!--footerend-->'))
                        .pipe(gulp.dest("dist"))
                }
            });
        }
    });
});


// js处理
gulp.task("script",function(){
    gulp.src(paths.js)
        .pipe(hint())
		.pipe(uglify())	
		.pipe(gulp.dest("./dist/js"))
})


// 样式处理
gulp.task("style",function(){
    gulp.src(paths.less)
        .pipe(less())
        .pipe(minify())
        .pipe(autoprefixer())
		.pipe(gulp.dest("./dist/css"))
})


//文件改动检测
gulp.task('watch', function(){
  gulp.watch(paths.js,["script"]);
  gulp.watch(paths.less,["style"]);
  gulp.watch(['src/html/_header.html', 'src/html/_footer.html'], ['include']);
  gulp.watch('./src/html/*.html',['include']).on("change",reload);
  
});




//创建default任务
gulp.task("default",["style","script","include","watch","browser-sync"]);
