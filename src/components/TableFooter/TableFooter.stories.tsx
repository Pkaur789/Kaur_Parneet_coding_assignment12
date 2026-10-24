import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './TableFooter';
const meta: Meta<typeof TableFooter> = {
  title: 'UI Garden/TableFooter', component: TableFooter, tags: ['autodocs'],
  decorators: [(Story) => (<table><Story /></table>)],
  args: {"text": "13 reusable components", "disabled": false, "backgroundColor": "#f0f7e9"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, text: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof TableFooter>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
