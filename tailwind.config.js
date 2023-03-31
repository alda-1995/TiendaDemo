/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '3rem',
          '2xl': '6rem',
        }
      },
      fontFamily: {
        'main': ['Fira Sans', 'sans-serif'],
      },
      colors:{
        'primary': "#262A56",
        "secondary": "#B8621B",
        "tertiary": "#E3CCAE"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h1, .h1': {
          fontSize: "calc(38px + (110 - 38) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1
        },
        'h2, .h2': {
          fontSize: "calc(30px + (52 - 30) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1,
        },
        'h3, .h3': {
          fontSize: "calc(18px + (36 - 18) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2,
        },
        'h4, .h4': {
          fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1,
        },
        'h5, .h5': {
          fontSize: "calc(9px + (16 - 9) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.5
        },
        'p, .p': {
          fontSize: "calc(15px + (16 - 15) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
        '.p-small': {
          fontSize: "calc(12px + (14 - 12) * ((100vw - 300px) / (2300 - 300)))",
          lineHeight: 1.2
        },
      })
    })
  ],
}

