/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                white: '#ffffff',
                black: '#212529',
                gray: '#888eb0',
                violet: '#7c5dfa',
                green: '#33d69f',
                orange: '#ff8f00',
                red: '#ec5757',
                navbar: '#373b53',
                'light-gray': '#f2f2f2',
                'light-bg': '#f9fafe',
                'light-green': 'rgba(51,214,159,.06)',
                'light-orange': 'rgba(255,143,0,.06)',
                'light-black': 'rgba(55, 59, 83, 0.06)',
            },
            backgroundImage: {
                check: 'url("/src/assets/icon-check.svg")',
            },
            spacing: {
                navbar: '5.813rem',
            },
            maxWidth: {
                container: '45.625rem',
            },
            boxShadow: {
                item: '0 .5rem 1rem #00000005',
            },
        },
    },
    plugins: [],
};
