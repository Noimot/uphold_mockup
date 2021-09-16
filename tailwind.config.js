// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: 'layers',
     content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      width: {
        '5%': '5%',
        '30%': '30%',
        '95%': '95%'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderRadius: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
