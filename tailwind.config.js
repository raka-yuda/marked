const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['"Mulish"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.border-spacing-0': {
          [`border-spacing`]: '0',
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ]
}
