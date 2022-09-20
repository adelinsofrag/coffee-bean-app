module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cbprimary: {
          50: "#9989dd",
          100: "#8f7fd3",
          200: "#8575c9",
          300: "#7b6bbf",
          400: "#7161b5",
          500: "#6757ab",
          600: "#5d4da1",
          700: "#534397",
          800: "#49398d",
          900: "#3f2f83",
        },
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
