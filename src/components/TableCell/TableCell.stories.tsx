import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';
const meta: Meta<typeof TableCell> = {
  title: 'UI Garden/TableCell', component: TableCell, tags: ['autodocs'],
  decorators: [(Story) => (<table><tbody><tr><Story /></tr></tbody></table>)],
  args: {"disabled": false, "backgroundColor": "#f0f7e9", "children": "Garden component"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, children: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof TableCell>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
