/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./index.html", // Scan HTML file for classes
  ],
  theme: {
    extend: {
      colors: {
        // Extracted from the design: A rich, warm orange
        primary: {
          light: "#FB923C", // orange-500
          DEFAULT: "#F97316", // orange-600
          dark: "#EA580C", // orange-700
        },
        // The dark, moody blue/indigo background from the design
        "dark-bg": "#1E3A8A", // A dark blue, let's refine to match design
        // A better match for the dark sections:
        "brand-dark": {
          light: "#1e293b", // slate-800
          DEFAULT: "#0f172a", // slate-900
          dark: "#020617", // slate-950
        },
      },
      fontFamily: {
        // Set Inter as the default sans-serif font
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        // Adding common border-radius from the design
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
      },
      // Adding a container preset for consistent centering
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
