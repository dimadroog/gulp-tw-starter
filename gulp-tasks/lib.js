export const lib = () => {
    return app.gulp.src(app.path.src.lib)
    .pipe(app.gulp.dest(app.path.build.lib))
}