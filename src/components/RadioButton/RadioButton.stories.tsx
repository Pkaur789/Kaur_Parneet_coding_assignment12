import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';
const meta: Meta<typeof RadioButton> = {
  title: 'UI Garden/RadioButton', component: RadioButton, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "label": "Choose this option"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, label: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof RadioButton>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
