/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      darkMode: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,vue,ts,tsx}",
    "./src/components/**/*.{js,jsx,vue,ts,tsx}",
    "./src/**/*.stories.{js,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
}

