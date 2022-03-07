const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        indigo: colors.indigo,
        green: colors.green,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}


