const gulp=require("gulp");
const browserSync=require("browser-sync").create();

//删除dist目录下的文件
const del=require("del");
gulp.task("clean",function (cb) {
    return del(["dist/*"],cb);
});
//操作js文件
const uglify=require("gulp-uglify");
gulp.task("scripts",function () {
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});
//操作css文件
const cssnano=require("gulp-cssnano");
const minifycss=require("gulp-minify-css");
gulp.task("style",function () {
    gulp.src("style/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("dist/style"))
        .pipe(browserSync.stream());
});
//操作图片
const imagemin=require("gulp-imagemin");
gulp.task("image",function () {
    gulp.src("images/**/*.{png,jpg,jpeg,gif,ico}")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"))
        .pipe(browserSync.stream());
});
//操作html文件
const htmlmin=require("gulp-htmlmin");
gulp.task("html",function () {
    gulp.src("*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS:true,
            minifyCSS:true
        }))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});
//监控文件
gulp.task("serve",["clean"],function () {
    gulp.start("scripts","style","image","html");
    browserSync.init({
        port:2017,
        server:{
            baseDir:["."]
        }
    });
    gulp.watch("js/*.js",["scripts"]);
    gulp.watch("style/*.css",["style"]);
    gulp.watch("images/**/*.{png,jpg,jpeg,gif}",["image"]);
    gulp.watch("*.html",["html"]);
});
gulp.task("default",["serve"]);













