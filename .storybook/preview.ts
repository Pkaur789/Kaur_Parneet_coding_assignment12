import type { Preview } from '@storybook/react';
const preview: Preview = { parameters: {
  controls: { expanded: true }, layout: 'padded',
  backgrounds: { default: 'Paper', values: [{ name: 'Paper', value: '#f7f8f2' }, { name: 'Dark', value: '#173c30' }] },
  viewport: { defaultViewport: 'responsive' }
} };
export default preview;
