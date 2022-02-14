module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBrown': '#A15F21',
        'lightOrange': '#FAF3F3',
        'brown': '#68340f',
        'picovina': '#cc881b'
      },
      fontFamily: {
        'roboto': ["Roboto"]
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    },
  },
  plugins: [],
}
