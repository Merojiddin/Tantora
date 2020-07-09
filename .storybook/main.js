const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx|js|jsx)', '../src/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [{
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
    },
  }, '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    config.resolve.modules = [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../stories"),
      "node_modules",
    ]

    return config;
  },
};
