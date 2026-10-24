import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
const meta: Meta<typeof Card> = {
  title: 'UI Garden/Card', component: Card, tags: ['autodocs'],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "title": "Made to be reused"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, title: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
