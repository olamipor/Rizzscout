module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./public/**/*.{html,svg}"] ,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rizz: {
          50: '#f3fbf5',
          100: '#e8f8ea',
          200: '#c9f0cb',
          500: '#22C55E',
          600: '#16A34A'
        },
        darkbg: '#090B0A',
        darkbg2: '#0F1311',
        darkcard: '#121713',
        darkborder: '#202720',
        lightbg: '#F7F9F7',
        lightcard: '#FFFFFF',
        lightborder: '#E5EAE5'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        lg: '12px'
      }
    }
  },
  plugins: []
}
