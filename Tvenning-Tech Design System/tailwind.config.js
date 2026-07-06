// tailwind.config.js
// Tvenning-Tech design tokens mapped for Tailwind CSS + HeroUI
//
// Usage:
//   import { heroui } from "@heroui/react";
//   module.exports = { ...this config }
//
// Then in your HeroUI provider:
//   <HeroUIProvider theme={tvenningTheme}>

const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Fonts ──────────────────────────────────────────────────────
      fontFamily: {
        display: ["Syne", "Arial Black", "sans-serif"],      // 800 weight only
        heading: ["Space Grotesk", "Arial", "sans-serif"],   // H1–H3
        body:    ["DM Sans", "Helvetica Neue", "sans-serif"],
        mono:    ["JetBrains Mono", "Courier New", "monospace"],
      },

      // ── Brand blue scale ───────────────────────────────────────────
      colors: {
        brand: {
          50:  "#eaf0fb",
          100: "#c7d8f5",
          200: "#99b8ed",
          300: "#6699e6",
          400: "#4480db",
          500: "#3366cc",   // ← logo blue (primary)
          600: "#2554b8",
          700: "#1a4399",
          800: "#112f77",
          900: "#0a1e4f",
        },
        neutral: {
          0:   "#ffffff",
          50:  "#f4f6fc",
          100: "#e6eaf5",
          200: "#c8cfdf",
          300: "#a4aec6",
          400: "#7a8baa",
          500: "#56688a",
          600: "#3d4f6e",
          700: "#283655",
          800: "#18243d",
          900: "#0d1526",
        },
        fjord: {
          300: "#7acad6",
          500: "#1a7a8a",
          700: "#0f4f5a",
        },
        sun: {
          300: "#f5c872",
          500: "#e8901a",
          700: "#a05f00",
        },
      },

      // ── Border radius ──────────────────────────────────────────────
      borderRadius: {
        sm:   "3px",
        md:   "6px",
        lg:   "10px",
        xl:   "16px",
        logo: "12px",
      },

      // ── Box shadows (blue-tinted) ──────────────────────────────────
      boxShadow: {
        xs:    "0 1px 2px 0 rgba(13,21,38,.06)",
        sm:    "0 2px 6px 0 rgba(13,21,38,.08)",
        md:    "0 4px 16px 0 rgba(13,21,38,.10)",
        lg:    "0 8px 32px 0 rgba(13,21,38,.12)",
        xl:    "0 16px 48px 0 rgba(13,21,38,.14)",
        brand: "0 4px 20px 0 rgba(51,102,204,.25)",
      },

      // ── Transitions ────────────────────────────────────────────────
      transitionTimingFunction: {
        "out-snap": "cubic-bezier(0.22, 1, 0.36, 1)",
        "spring":   "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },

  darkMode: "class",

  plugins: [
    heroui({
      // Override HeroUI's default theme to match Tvenning-Tech
      themes: {
        light: {
          layout: {
            radius: {
              small:  "3px",
              medium: "6px",
              large:  "10px",
            },
            borderWidth: {
              small:  "1px",
              medium: "1.5px",
              large:  "2px",
            },
          },
          colors: {
            // HeroUI semantic slots → Tvenning-Tech tokens
            background:  "#ffffff",
            foreground:  "#0d1526",
            divider:     "#e6eaf5",
            focus:       "#3366cc",

            primary: {
              50:       "#eaf0fb",
              100:      "#c7d8f5",
              200:      "#99b8ed",
              300:      "#6699e6",
              400:      "#4480db",
              500:      "#3366cc",
              600:      "#2554b8",
              700:      "#1a4399",
              800:      "#112f77",
              900:      "#0a1e4f",
              DEFAULT:  "#3366cc",
              foreground: "#ffffff",
            },

            secondary: {
              // Fjord teal as secondary
              300:      "#7acad6",
              500:      "#1a7a8a",
              700:      "#0f4f5a",
              DEFAULT:  "#1a7a8a",
              foreground: "#ffffff",
            },

            success: {
              DEFAULT:    "#2a9d5c",
              foreground: "#ffffff",
            },
            warning: {
              DEFAULT:    "#e8901a",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT:    "#cc3344",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
