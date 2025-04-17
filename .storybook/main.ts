import type { StorybookConfig } from "@storybook/vue3-vite";

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
      },
    },
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {   },
  },
  docs: {
    autodocs: "tag",
  }
};
export default config;
