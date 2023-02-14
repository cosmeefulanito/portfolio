/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        beetle:
          "url('./src/assets/img/portfolio/cocktail.png')",
        fiat:
          "url('./src/assets/img/portfolio/front-orders.png')",
        mini:
          "url('./src/assets/img/portfolio/appointment.png')",
      },
    },
  },
  plugins: [],
}
