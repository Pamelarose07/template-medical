/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
       'prims': '#c3ac73',
       'peach1': '#e4c987',
       'peach2': '#705442',
      },
      fontFamily: {
        'pangram': ['Pangram']      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
