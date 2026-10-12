/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fbf9f5',
          100: '#f4f0e8',
          200: '#e8e1d2',
          300: '#d4c9b3',
        },
        ink: {
          950: '#0d0d0d',
          900: '#161614',
          800: '#222220',
          700: '#33332f',
          600: '#4a4a45',
          500: '#6b6b64',
          400: '#8e8e85',
        },
        ember: {
          700: '#a84a1a',
          600: '#c75c24',
          500: '#e0702e',
          400: '#ed8a48',
        },
        slate2: {
          500: '#5c6b73',
          400: '#7a8a92',
          300: '#a5b2b8',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
