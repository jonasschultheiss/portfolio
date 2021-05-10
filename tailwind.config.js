const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './utils/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        brand: {
          50: '#fff4f0',
          100: '#ffeae0',
          200: '#ffdbcc',
          300: '#ffb899',
          400: '#ff8d5c',
          500: '#ff4d00',
          600: '#cc3d00',
          700: '#9e2f00',
          800: '#802600',
          900: '#7a2500'
        }
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};
