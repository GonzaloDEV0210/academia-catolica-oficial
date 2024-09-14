/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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
        'celular': '320px',
        'eg': '1600px',
      },
      padding: {
        '5%': '8%'
      },
    },
  },
  plugins: [],
}

