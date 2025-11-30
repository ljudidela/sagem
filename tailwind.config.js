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
        'gta-black': '#0a0a0a',
        'gta-gray': '#1a1a1a',
      },
      fontFamily: {
        'gta': ['"Diplomata"', 'cursive'],
        'marker': ['"Permanent Marker"', 'cursive'],
        'sans': ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'scanlines': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
      }
    },
  },
  plugins: [],
}