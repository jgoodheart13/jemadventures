// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all of your template files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // Optional: Adds the prose class for better typography
  ],
}
