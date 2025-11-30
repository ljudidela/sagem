/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-green': '#2E8B57',
        'gta-orange': '#FFA500',
      },
      fontFamily: {
        'gta': ['"Diplomata SC"', 'serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}