/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js", "./pages/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        'azul_catolica': '#1B5CFF',
        'amarillo_catolica': '#F4DA40',
        'verde_catolica': '#36A2BC',
        'hover_verde_catolica': '#4bb8d3',
        'fondo_modal': 'rgba(0, 0, 0, 0.8);',
      },
      colors: {
        'azul_catolica': '#1B5CFF',
        'amarillo_catolica': '#F4DA40',
        'verde_catolica': '#36A2BC',
        'gris_catolica_letra': '#8b8b8b',
        'hover_verde_catolica': '#4bb8d3',
        'gradient_verde_catolica': '#3ea6c6'
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
        '816px': '816px',
        '820px': '820px',
        '440px': '440px',
        '700': '700px',
        '1400px': '1400px',
        '1500px': '1500px',
        '1600px': '1600px',
        '1000px': '1000px',
        '640px': '640px',
        '1800': '1800px'
      },
      padding: {
        '5%': '8%',
        '25%': '30%'
      },
      height: {
        '550px': '550px',
        '450px': '450px',
        '823px': '823px',
        '723px': '723px'
      },
      width: {
        '600px': '600px',
        '500px': '500px',
        '400px': '400px',
        '420px': '420px',
        '310px': '310px',
        '850px': '850px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1400px': '1400px',
        '1300px': '1300px',
        '1550px': '1550px',
        '900px': '900px',
        '940px': '940px',
        '120px': '120px'
      },
      fontSize: {
        '15px': '15px',
        '36px': '36px',
        '28px': '28px',
      },
      maxWidth: {
        '430px': '430px'
      },
      lineHeight: {
        '8px': '8px',
      },
      flexBasis: {
        '400px': '400px'
      },
      borderRadius: {
        '40px': '40px'
      },
      gridTemplateRows: {
        'custom': 'auto 10px auto auto',
      },
    },
  },
  plugins: [],
}