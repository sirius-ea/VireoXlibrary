import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      darkMode: true,
      colors: {
        primary: {
            ...colors.green
        },
        secondary: {
          ...colors.red
        },
        neutral: {
            '0': colors.white,
            ...colors.gray,
            '1000': colors.black,
        },
        error: {
          ...colors.red
        },
        'text-lightMode': colors.slate['950'],
        'text-darkMode': colors.slate['50'],
        'background-lightMode': colors.gray['100'],
        'background-darkMode': colors.gray['700'],
        /*select: {
          text: this.primary['100'],
          bg: 'red',
          disabled: 'grey'
        }*/
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

//colors = { ...colors, select: { ...colors.select, bg: 'green' } }

