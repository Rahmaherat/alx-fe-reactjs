module.exports = {
  content: [variants
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false, // Optional, can be 'media' or 'class' for dark mode support
  theme: {
    extend: {},
  },
  plugins: [purge],
}


