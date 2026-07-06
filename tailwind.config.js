const { heroui } = require('@heroui/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Material Design 3: Roboto everywhere. The role-named families are
        // kept as aliases so existing font-display/heading/body classes
        // resolve to the same face without touching every page.
        sans:    ["Roboto", "system-ui", "sans-serif"],
        display: ["Roboto", "system-ui", "sans-serif"],
        heading: ["Roboto", "system-ui", "sans-serif"],
        body:    ["Roboto", "system-ui", "sans-serif"],
        mono:    ["Roboto Mono", "Courier New", "monospace"],
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
  plugins: [heroui({
    themes: {
      // MD3 paper: white cards need a dim ground in light mode;
      // dark mode uses the classic Material #121212 / #1E1E1E pair.
      light: {
        colors: {
          background: "#F6F7F9",
          content1: "#FFFFFF",
        },
      },
      dark: {
        colors: {
          background: "#121212",
          content1: "#1E1E1E",
        },
      },
    },
  })],
}
