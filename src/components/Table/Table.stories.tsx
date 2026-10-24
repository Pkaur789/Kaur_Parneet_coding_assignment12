import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
const meta: Meta<typeof Table> = {
  title: 'UI Garden/Table', component: Table, tags: ['autodocs'],
  args: {"text": "Garden collection", "disabled": false, "backgroundColor": "#f0f7e9"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, text: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof Table>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
