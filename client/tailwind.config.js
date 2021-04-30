module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
         'void': "#0e0B16",
         'fuschia': "#a239ca",
         'jewel': "#4717f6",
         'stark': "#e7dfdd"
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
