/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.html',
    './static/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'sums-navy':'#0B2558',
        'sums-yellow':'#F2DB00',
        'sums-dark-navy':'#000034',
        'sums-blue':'#006FBA',
        'sums-light-blue' : '#85BADE',
        'sums-white' : '#F8FAFF',
      },
    },
  },
  purge: ['./templates/*.html', './static/**/*.js'],
  plugins: [],
}

