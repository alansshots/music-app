/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 5s ease-in-out',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.white') },
        },
      }),

    },
  },
  plugins: [],
}
