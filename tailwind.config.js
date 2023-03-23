/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 3px 10px rgb(0 0 0 / 0.2)',
      }
    },
  },
  plugins: [],
}
