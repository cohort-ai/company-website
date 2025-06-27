/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#101624',
        surface: '#1A2236',
        primary: '#3B82F6',
        secondary: '#38BDF8',
        text: '#F3F4F6',
        muted: '#232B41',
        border: '#232B41',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
