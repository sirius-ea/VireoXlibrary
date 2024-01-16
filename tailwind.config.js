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
            ...colors.gray,
        },
        error: {
          ...colors.red
        },
        'text-light': colors.slate['950'],
        'text-dark': colors.slate['50'],
        'bg-light': colors.gray['100'],
        'bg-dark': colors.gray['700'],
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