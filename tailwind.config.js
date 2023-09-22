/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'app/*.html', 
        'app/js/**/*.js',
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    // plugins: [require('daisyui')],
    theme: {
        extend: {},
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class"
};
