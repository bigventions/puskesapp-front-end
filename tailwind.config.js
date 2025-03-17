/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E5077",
          brighter: "",
          darker: "",
        },
        secondary: {
          DEFAULT: "#79D7BE",
          brighter: "",
          darker: "",
        },
        info: {
          DEFAULT: "#00A3FF",
          brighter: "",
          darker: "",
        },
        danger: {
          DEFAULT: "#FF5652",
          brighter: "",
          darker: "",
        },
        success: {
          DEFAULT: "#17DE8B",
          brighter: "",
          darker: "",
        },
        warning: {
          DEFAULT: "#FFCB12",
          brighter: "",
          darker: "",
        },

        text: {
          DEFAULT: "var(--color-text)",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin")],
};
