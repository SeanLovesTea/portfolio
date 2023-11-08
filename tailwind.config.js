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
        myBlue: '#606B73',
        myWhite: '#d9d9d9'
      }
    },
  },
  safelist: [
    'bg-myBeige','border-myBeige', 'text-myBeige',
    'bg-myBlue', 'border-myBlue', 'text-myBlue',
    'bg-myGray', 'border-myGray', 'text-myGray',
    'bg-myWhite','border-myWhite', 'text-myWhite',
    'border-black'
  ],
  plugins: [],
}
    {/* <div className='bg-myBeige border-myBeige text-myBeige'></div>
    <div className='bg-myBlue border-myBlue text-myBlue'></div>
    <div className='bg-myGray border-myGray text-myGray'></div>
    <div className='bg-myWhite border-myWhite text-myWhite'></div> */}
// #000000
// #A69F95
// #7A7A7A
// #FFFFFF
// #606B73