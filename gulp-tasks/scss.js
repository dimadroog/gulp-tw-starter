import browsersync from "browser-sync";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import tailwindCss from 'tailwindcss';
import postCss from 'gulp-postcss';

import webpcss from 'gulp-webpcss';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import gulpIf from "gulp-if";
// import gulpGgroupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    const postCssPlugins = [
        autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: true,
            grid: true
        }),
        tailwindCss(),
    ];
    return app.gulp
        .src(app.path.src.scss, {
            sourcemaps: false,
        })
        .pipe(
            sass({
                outputStyle: 'expanded',
            })
        )
        // .pipe(gulpGgroupCssMediaQueries())
        .pipe(
            gulpIf(
                app.modeWebp,
                webpcss({
                    webpClass: '.webp',
                    noWebpClass: '.no-webp',
                })
            )
        )
        .pipe(postCss(postCssPlugins))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(browsersync.stream());
};
