/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBeige: '#A69F95',
        myGray:  '#7A7A7A',
        myBlue: '#606B73'
      }
    },
    
  },
  plugins: [],
}

// #000000
// #A69F95
// #7A7A7A
// #FFFFFF
// #606B73