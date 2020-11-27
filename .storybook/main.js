
module.exports = {
  stories: ['../**/stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  // presets: [path.resolve(__dirname, "./next-preset.js")],
};
