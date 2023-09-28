import gulp from 'gulp';

//get root folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'; //or rootFolder
const srcFolder = './app';

const path = {
    build: {
        js: buildFolder + '/js/',
        img: buildFolder + '/img/',
        css: buildFolder + '/css/',
        html: buildFolder + '/',
        fonts: buildFolder + '/fonts/',
        lib: buildFolder + '/lib/',
    },
    src: {
        js: [srcFolder + '/js/*.js', !srcFolder + '/js/_*.js'],
        img: srcFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp,mp4,webm,webmanifest}',
        scss: [srcFolder + '/scss/*.scss', !srcFolder + '/scss/_*.scss'],
        html: [srcFolder + '/*.html', !srcFolder + '/_*.html'],
        fonts: srcFolder + '/fonts/**/*.*',
        lib: [srcFolder + '/lib/**', !srcFolder + '/lib/{_*,_*/**}'],
    },
    watch: {
        js: srcFolder+ '/**/*.js',
        img: srcFolder+ '/img/**/*.{jpg,png,svg,gif,ico,webp,mp4,webm,webmanifest}',
        scss: srcFolder+ '/**/*.scss',
        html: srcFolder+ '/**/*.html',
        files: srcFolder+ '/files/**/*.*',
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
};


const modeWebp = true;

global.app = {
    gulp: gulp,
    path: path,
    modeWebp: modeWebp,
};


import { fonts } from './gulp-tasks/fonts.js';
import { lib } from './gulp-tasks/lib.js';
import { reset } from './gulp-tasks/reset.js';
import { html } from './gulp-tasks/html.js';
import { scss } from './gulp-tasks/scss.js';
import { js } from './gulp-tasks/js.js';
import { img } from './gulp-tasks/img.js';
import { server } from './gulp-tasks/server.js';

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);
}

const mainTasks = gulp.parallel(html, scss, js, img);

gulp.task(
    'default',
    gulp.series(reset, fonts, lib, mainTasks, gulp.parallel(watcher, server))
);
