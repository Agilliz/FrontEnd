/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agilzorange': '#DE6600',
        'agilzblue': '#2C2D5B'
      }
    },
  },
  plugins: [],
}