module.exports = function() {
  const p = global.p;
  p.gulp.task("php", function() {
    return p.gulp
      .src(p.paths.src.php)
      .pipe(p.gulp.dest(p.paths.build.php)) // Просто копируем PHP
      .pipe(p.browserSync.reload({ stream: true }));
  });
};
