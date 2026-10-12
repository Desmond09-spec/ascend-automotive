/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#0a0a0b',
          900: '#111113',
          850: '#161619',
          800: '#1c1c20',
          700: '#28282e',
          600: '#38383f',
          500: '#4a4a52',
        },
        chrome: {
          100: '#f2f2f0',
          200: '#d8d8d6',
          300: '#b8b8b6',
          400: '#98989a',
          500: '#78787a',
          600: '#5a5a5c',
        },
        signal: {
          700: '#a01818',
          600: '#c81e1e',
          500: '#e02828',
          400: '#f03838',
        },
        amber: {
          500: '#d4a017',
          400: '#e4b538',
        },
        danger: {
          500: '#e02828',
          400: '#f03838',
        },
        ok: {
          500: '#2d8a4e',
          400: '#3da65f',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
