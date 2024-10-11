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
        'gris_catolica_letra': '#8b8b8b'
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
        '1100px': '1100px',
        '940px': '940px',
        '900px': '900px',
        '540px': '540px',
        '320px': '320px',
        '820px': '820px',
        '440px': '440px',
        '700px': '700px',
        '1400px': '1400px',
        '1500px': '1500px',
        '1600px': '1600px',
        '1000px': '1000px',
      },
      padding: {
        '5%': '8%',
        '25%': '30%'
      },
      height: {
        '550px': '550px',
        '823px': '823px',
        '723px': '723px'
      },
      width: {
        '600px': '600px',
        '500px': '500px',
        '400px': '400px',
        '850px': '850px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1400px': '1400px',
        '1300px': '1300px',
        '1550px': '1550px',
        '900px': '900px',
        '940px': '940px'
      },
      fontSize: {
        '15px': '15px',
        '36px': '36px',
        '28px': '28px',
      }
    },
  },
  plugins: [],
}