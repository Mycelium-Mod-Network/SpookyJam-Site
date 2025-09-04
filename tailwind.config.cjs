const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                gray: {
                    ...colors.neutral,
                }
            },
            animation: {
                'jumpscare': 'jumpscare 1s cubic-bezier(0, 0, 0.2, 1) forwards',
            },
            keyframes: {
                jumpscare: {
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '0'
                    }
                }
            }
        },
    },
    plugins: [],
};
