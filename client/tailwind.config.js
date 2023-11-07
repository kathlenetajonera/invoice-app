/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                '2xl': { max: '1535px' },
                // => @media (max-width: 1535px) { ... }

                xl: { max: '1279px' },
                // => @media (max-width: 1279px) { ... }

                lg: { max: '1023px' },
                // => @media (max-width: 1023px) { ... }

                md: { max: '767px' },
                // => @media (max-width: 767px) { ... }

                sm: { max: '639px' },
                // => @media (max-width: 639px) { ... }
            },
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                15: '0.938rem',
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
                input: '#ced4da',
                'light-gray': '#f2f2f2',
                'light-bg': '#f9fafe',
                'light-green': 'rgba(51,214,159,.06)',
                'light-orange': 'rgba(255,143,0,.06)',
                'light-black': 'rgba(55, 59, 83, 0.06)',
                dark: '#141625',
                'dark-card': '#1e2139',
                'dark-lighter': '#252945',
            },
            backgroundImage: {
                check: 'url("/src/assets/icon-check.svg")',
                'arrow-down': 'url("/src/assets/icon-arrow-down.svg")',
            },
            spacing: {
                navbar: '5.813rem',
                'form-container': '38.75rem',
            },
            maxWidth: {
                container: '45.625rem',
            },
            boxShadow: {
                item: '0 .5rem 1rem #00000005',
                dropdown: '0 .5rem 1rem #0000001a',
            },
            borderRadius: {
                navbar: '1.25rem',
            },
        },
    },
    plugins: [],
};
