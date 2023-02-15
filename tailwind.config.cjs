/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        summary: "url('/src/assets/img/scattered-forcefields.svg')",
        cocktail: "url('/src/assets/img/portfolio/cocktail.png')",
        orders:   "url('/src/assets/img/portfolio/front-orders.png')",
        appointment:  "url('/src/assets/img/portfolio/appointment.png')",
      },
    },
  },
  plugins: [],
}
