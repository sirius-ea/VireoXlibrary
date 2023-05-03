/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  content: [
    "./node_modules/flowbite/**/*.js"
  ]
}

