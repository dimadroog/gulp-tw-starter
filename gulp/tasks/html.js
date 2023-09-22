import browsersync from "browser-sync";
import fileinclude from 'gulp-file-include';
import webpHtml from 'gulp-webp-html-nosvg';
import gulpIf from "gulp-if";
import { scss } from './scss.js';


export const html = () => {
    return app.gulp
        .src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(
            gulpIf(
                app.modeWebp,
                webpHtml()
            )
        )
        .pipe(scss())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(browsersync.stream());
};
