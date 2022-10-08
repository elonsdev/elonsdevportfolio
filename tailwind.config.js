/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PressStart2P:'PressStart2P',
      },
      backgroundImage: {
        'space': "url('../public/sun_moon.png')",
      }
    },
  },
  plugins: [],
}