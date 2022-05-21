const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        vol: ["Vollkorn, serif"],
        wor: ["Work Sans, sans-serif"]
      },
    },
  },
  plugins: [],
}