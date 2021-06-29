module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    nightwind: {
      colors: {
        white: '#0a192f'
      },
      typography: true,
    },
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00D3FF',
        },
        navy: {
          DEFAULT: '#0a192f'
        }
      },
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last']
    },
  },
  plugins: [require("nightwind"), require('@tailwindcss/typography')],
  corePlugins: {
    preflight: true,
  }
}
