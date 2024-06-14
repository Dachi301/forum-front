/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'default': '2px 1px 5px 0 rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [],
}
