// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rcTeal: '#00A8B5',      // Logo ki greenish-teal/cyan shading
        rcNavy: '#0A2540',      // Logo ka deep navy blue
        rcDark: '#07111E',      // Rich dark background tone
      },
    },
  },
  plugins: [],
};