/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Puedes extender la configuración aquí
      fontSize: {
        'huge': '3.5rem',
        'gigantic': '4.5rem',
      }
    },
  },
  plugins: [typography],
}