import browsersync from "browser-sync";
import newer from "gulp-newer";
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import gulpIf from "gulp-if";

export const img = () => {
    return app.gulp
        .src(app.path.src.img)

        .pipe(newer(app.path.build.img))
        .pipe(
            gulpIf(
                app.modeWebp,
                webp()
            )
        )
        .pipe(app.gulp.dest(app.path.build.img))


        .pipe(app.gulp.src(app.path.src.img))
        .pipe(newer(app.path.build.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3, //0 to 7
            })
        )
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(browsersync.stream());
};
