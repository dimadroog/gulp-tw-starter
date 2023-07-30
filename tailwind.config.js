/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['app/index.html', 'app/scss/*.scss', 'app/js/*.js'],
    theme: {
        extend: {},
    },
//     purge: [
//         'app/**/*.html', 
//         'app/scss/*.scss', 
//         'app/js/*.js',
//         'dist/**/*.html', 
//         'dist/css/*.css', 
//         'dist/js/*.js'
// ],

    plugins: [],
};
