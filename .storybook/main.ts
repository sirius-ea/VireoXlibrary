import type { StorybookConfig } from "@storybook/vue3-vite";

const path = require('path');
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js'); // or your own config file
require('storybook-tailwind-foundations/initialize.js')
    .default(tailwindConfigPath);

const config: StorybookConfig = {
  stories: [
      "../src/**/*.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)",
      '../node_modules/storybook-tailwind-foundations/**/*.stories.js'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",{
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
