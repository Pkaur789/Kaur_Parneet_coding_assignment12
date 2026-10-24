import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
const meta: Meta<typeof Label> = {
  title: 'UI Garden/Label', component: Label, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "children": "Garden component"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, children: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof Label>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
