import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: { name: '@storybook/react-webpack5', options: {} },
  staticDirs: ['../public'],
  docs: { autodocs: 'tag' },
  webpackFinal: async config => {
    config.module?.rules?.push({ test: /\.tsx?$/, exclude: /node_modules/, use: [{ loader: require.resolve('babel-loader'), options: { presets: [require.resolve('babel-preset-react-app')] } }] });
    return config;
  }
};
export default config;
