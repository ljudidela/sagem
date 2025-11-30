/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-green': '#2E5E20',
        'gta-orange': '#F4A460',
        'gta-black': '#0a0a0a',
      },
      fontFamily: {
        'gta': ['"UnifrakturMaguntia"', 'cursive'],
        'sans': ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1605218427368-35b0f996d916?q=80&w=2670&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}