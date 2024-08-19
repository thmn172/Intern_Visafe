/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red':'#e8121b'
      },
      zIndex: {
        '1000': '1000',
      }
    },
  },
  plugins: [],
}

