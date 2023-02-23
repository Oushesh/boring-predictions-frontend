/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber
    }
  },
  plugins: [require('flowbite/plugin')],
  variants: {
    extend: {
      padding: ['hover','group-hover'],
    }
  }
};
