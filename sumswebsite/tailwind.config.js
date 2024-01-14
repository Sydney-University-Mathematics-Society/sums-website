/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.html',
    './static/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'penn-blue-light':'#0B2558',
        'citrine':'#F2DB00',
        'penn-blue-dark':'#000034',
        'azul':'#006FBA',
        'carolina-blue' : '#85BADE',
        'ghost-white' : '#F8FAFF',
      },
    },
  },
  purge: ['./templates/*.html', './static/**/*.js'],
  plugins: [],
}

