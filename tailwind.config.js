/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],

      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue': "#458BBA",
        'white': '#fbfdfa'
      },
    },
  },
  plugins: [],
}
