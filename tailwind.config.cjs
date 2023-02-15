/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/img/Meteor.svg')",
        summary: "url('/src/assets/img/wavey-fingerprint.svg')",
        cocktail: "url('/src/assets/img/portfolio/cocktail.PNG')",
        orders:   "url('/src/assets/img/portfolio/front-orders.PNG')",
        appointment:  "url('/src/assets/img/portfolio/appointment.PNG')",
      },
    },
  },
  plugins: [],
}
