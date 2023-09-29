/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '5px',
        lg: '30px',
        xl: '50px',
        '2xl': '100px',
      },
    },
  },
  plugins: [],
}

