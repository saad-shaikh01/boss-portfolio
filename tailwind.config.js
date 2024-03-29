/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          // primary: '#f8f9fa', 
          // primary: '#f0e8ab',
          // primary: '#d1ee2d',
           primary: '#ffe58a',
    
          
          
          secondary: '#2d3748', 
          regular: '#ffff',
          // black: '#000000'
          // primary2: '#000000'
        },
        light: {
          primary: '#ffffff',
          secondary: '#f7fafc', 
        },
      
      },
    },
  },
  plugins: [],
}


//  /** @type {import('tailwindcss').Config} */
//  module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'space-grotesk': ['Space Grotesk', 'sans-serif'],
//         // You can add other font families here as well
//       },
      
//     },
//   },
//   plugins: [],
// }