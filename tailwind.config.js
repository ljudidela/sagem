/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sa-green': '#6ab04c',
        'sa-dark': '#1e272e',
        'sa-orange': '#f0932b',
        'sa-hud': '#b2bec3'
      },
      fontFamily: {
        'gothic': ['"UnifrakturMaguntia"', 'cursive'],
        'bank': ['"Bowlby One SC"', 'sans-serif'],
      },
      backgroundImage: {
        'spray': "radial-gradient(circle, rgba(106,176,76,0.2) 0%, rgba(0,0,0,1) 70%)"
      }
    },
  },
  plugins: [],
}