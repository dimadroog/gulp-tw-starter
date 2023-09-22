import browsersync from "browser-sync";
export const server = (done) => {
    browsersync.init({
        server: {
            baseDir: app.path.build.html,
        },
        notify: false,
        port: 3000,
    });
};
