module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: {
          500: "#f43334",
          600: "#d42223",
          400: "#f65657",
        },
        gray: {
          900: "#191919",
          800: "#202020",
          700: "#333333",
          600: "#444444",
          500: "#666666",
          400: "#777777",
          300: "#999999",
          200: "#BBBBBB",
          100: "#DDDDDD",
        },
        yellow: {
          500: "#eb9500",
        },
        gradient: {
          start: "#4a2424",
          end: "#202020",
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(93deg, #4a2424 0%, #202020 100%)',
        'gradient-overlay': 'linear-gradient(158deg, #2e1c1c 0%, #191919 100%)',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};