const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|divider|tabs|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f5f5f5',
          dark: '#1a1a1a'
        }
      },
      zIndex: {
        '60': '60',
      },
      animation: {
        'ripple': 'ripple 0.6s linear forwards',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [heroui()],
}
