import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';
const meta: Meta<typeof HeroImage> = {
  title: 'UI Garden/HeroImage', component: HeroImage, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "title": "A little space to grow."},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, title: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof HeroImage>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
