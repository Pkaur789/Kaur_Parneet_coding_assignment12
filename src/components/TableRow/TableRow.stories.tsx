import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';
const meta: Meta<typeof TableRow> = {
  title: 'UI Garden/TableRow', component: TableRow, tags: ['autodocs'],
  decorators: [(Story) => (<table><tbody><Story /></tbody></table>)],
  args: {"text": "Button", "disabled": false, "backgroundColor": "#f0f7e9"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, text: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof TableRow>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
