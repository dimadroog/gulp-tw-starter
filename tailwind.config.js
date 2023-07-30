/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'app/*.html',
        'app/js/*.js',
    ],
    plugins: [require("daisyui")],
    theme: {
        extend: {},
    },
};
