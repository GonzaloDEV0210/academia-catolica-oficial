/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "/js/*.ja"],
  theme: {
    extend: {
      backgroundColor: {
        'azul_catolica': '#1B5CFF',
        'amarillo_catolica': '#F4DA40',
        'verde_catolica': '#36A2BC',
      },
      colors: {
        'azul_catolica': '#1B5CFF',
        'amarillo_catolica': '#F4DA40',
        'verde_catolica': '#36A2BC',
      },
      borderColor: {
        'azul_catolica': '#1B5CFF',
        'amarillo_catolica': '#F4DA40',
        'verde_catolica': '#36A2BC',
      },
      fontFamily: {
        'bree_bold': ['Bree_bold', 'arial'],
        'bree_regular': ['Bree_regular', 'arial'],
        'clanpro_news': ['clanpro_news', 'arial'],
        'helvetic': ['helvetic', 'arial'],
      },
      screens: {
        '1260px': '1260px',
        '1360px': '1360px',
        '940px': '940px',
        '540px': '540px',
        '320px': '320px',
      },
      padding: {
        '5%': '8%',
        '25%': '30%'
      },
      height: {
        '650px': '550px',
        '823px': '823px'
      }
    },
  },
  plugins: [],
}

