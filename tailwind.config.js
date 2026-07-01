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
        display: ["Ubuntu", "Arial", "sans-serif"],
        heading: ["Space Grotesk", "Arial", "sans-serif"],
        body:    ["DM Sans", "Helvetica Neue", "sans-serif"],
        mono:    ["JetBrains Mono", "Courier New", "monospace"],
      },
      borderRadius: {
        sm:   "3px",
        md:   "6px",
        lg:   "10px",
        xl:   "16px",
        logo: "12px",
      },
      boxShadow: {
        xs:    "0 1px 2px 0 rgba(13,21,38,.06)",
        sm:    "0 2px 6px 0 rgba(13,21,38,.08)",
        md:    "0 4px 16px 0 rgba(13,21,38,.10)",
        lg:    "0 8px 32px 0 rgba(13,21,38,.12)",
        xl:    "0 16px 48px 0 rgba(13,21,38,.14)",
        brand: "0 4px 20px 0 rgba(0,111,238,.25)",
      },
      transitionTimingFunction: {
        "out-snap": "cubic-bezier(0.22, 1, 0.36, 1)",
        "spring":   "cubic-bezier(0.34, 1.56, 0.64, 1)",
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
