import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
const meta: Meta<typeof Text> = {
  title: 'UI Garden/Text', component: Text, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "children": "Garden component"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, children: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof Text>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
