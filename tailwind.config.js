/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./dist/js/script.js",],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "'Poppins' , sans-serif",
        'Roboto': "'Roboto' , sans-serif",
        'Josefin Sans': "'Josefin Sans' , sans-serif",
      }
    },
  },
  plugins: [],
}

