/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          600: '#191920',
          700: '#131319',

        },
        gray: {
          100: '#C5C7CA',
          200: '#969696',
          300: '#7F8084',
          400: '#6B6C70',
          500: '#35373B',
          600: '#343434',
          800: '#27292D'
        },
        blue: {
          500: '#4A96FF',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '1.5': '1.5px',
      }
    },
  },
  plugins: [],
}

