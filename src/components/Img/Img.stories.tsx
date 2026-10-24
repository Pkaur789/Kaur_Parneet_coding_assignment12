import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';
const meta: Meta<typeof Img> = {
  title: 'UI Garden/Img', component: Img, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "alt": "Illustrated garden hills"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, alt: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof Img>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
