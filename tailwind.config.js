/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      // "sans": ["Montserrat", "sans"],
      "serif": ["Playfair Display", "serif"],
      "sans": ["Karla", "sans-serif"]
    },
    extend: {
      fontSize: {
        'h1': '70px',
        'h2': '43px',
        'h3': '30px',
        'h4': '21px',
        'h5': '17px',
        'h6': '16px'
      },
      backgroundColor:{
        'black-1': 'var(--black)'
      },
      backgroundImage: {
        'first-section': "linear-gradient(var(--sec-bg-gd), var(--sec-bg-gd)), var(--first-sec-bg-img)",
        'fourth-section': "linear-gradient(var(--sec-bg-gd), var(--sec-bg-gd)), var(--fourth-sec-bg-img)",
        'fifth-section': "linear-gradient(var(--sec-bg-gd), var(--sec-bg-gd)), var(--fifth-sec-bg-img)",
        'tenth-section': "linear-gradient(var(--sec-bg-gd), var(--sec-bg-gd)), var(--tenth-sec-bg-img)"
      }
    },
  },
  plugins: [],
}

