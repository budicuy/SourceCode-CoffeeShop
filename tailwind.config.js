module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily:{
      'Courgette': ['Courgette', 'cursive'],
      'Mochy': ['Mochiy Pop One', 'sans-serif'],
      'Itim': ['Itim', 'cursive']
  },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        p: "#475569",
        pnk: "#ad1f87",
        semitranparant: "#26201892",
        tranparant80: "#000000a4"
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
