import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      darkMode: true,
      colors: {
        primary: {
          ...colors.gray
        },
        secondary: {
          ...colors.blue
        },
        neutral: {
            '0': colors.white,
            ...colors.gray,
            '1000': colors.black,
        },
        error: {
          ...colors.red
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
  content: [
    "./src/**/*.{js,jsx,vue,ts,tsx}",
    "./src/components/**/*.{js,jsx,vue,ts,tsx}",
    "./src/**/*.stories.{js,ts}",
    "./index.html"
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
}

