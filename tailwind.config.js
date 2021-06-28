module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00D3FF',
        },
        navy: {
          DEFAULT: '#0a192f'
        }
      }
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last']
    },
  },
  corePlugins: {
    preflight: true,
   }
}
