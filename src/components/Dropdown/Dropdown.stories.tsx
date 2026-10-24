import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
const meta: Meta<typeof Dropdown> = {
  title: 'UI Garden/Dropdown', component: Dropdown, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' } }
};
export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
