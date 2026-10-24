import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
const meta: Meta<typeof Button> = {
  title: 'UI Garden/Button', component: Button, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "children": "Garden component"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, children: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
