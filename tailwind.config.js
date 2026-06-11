/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4E342E',
        secondary: '#D7B899',
        accent: '#8D6E63',
        background: '#F5F0E6',
        'dark-text': '#2D2D2D',
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'serif'],
        body: ["'Inter'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
