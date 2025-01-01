/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust the paths to match your project structure
    './src/screens/templates/**/*.html', // Path to HTML templates inside the screens/templates folder
  ],
  // Extend the default theme
  theme: {
    extend: {
      // Add custom colors
      colors: {
        customGreen: '#00A550',
        lightGreen: '#DFFFD6',
        pastelYellow: '#FFFACD',
      },
      // Add custom fonts
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  // Add any plugins you want to use
  plugins: [],
};