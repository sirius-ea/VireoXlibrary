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
        'text-lightMode': colors.slate['950'],
        'text-darkMode': colors.slate['50'],
        'bg-lightMode': colors.gray['100'],
        'bg-darkMode': colors.gray['700'],
        'icon': colors.gray['400'],
        'icon-disabled': colors.gray['300'],
        'icon-invalid': colors.red['600'],
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