const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  colors:{
    blueberry: '#FF5C5C',
  },
  theme: {
    extend: {
      
      colors: {
        primary: {
          50:'#E6E5FF',
          500:'#8785FF',
          600:'#625EFF',
          700:'#4A47FF'},
        accent: '#FF5C5C',
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


