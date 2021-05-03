module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
         'primary': "#373737",
         'secondary': "#c0b283",
         'bg_1': "#f4f4f4",
         'bg_2': "#dcd0c0"
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
