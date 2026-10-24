import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';
const meta: Meta<typeof TableHeader> = {
  title: 'UI Garden/TableHeader', component: TableHeader, tags: ['autodocs'],
  decorators: [(Story) => (<table><Story /></table>)],
  args: {"text": "Component", "disabled": false, "backgroundColor": "#f0f7e9"},
  argTypes: { backgroundColor: { control: 'color' }, disabled: { control: 'boolean' }, text: { control: 'text' } }
};
export default meta;
type Story = StoryObj<typeof TableHeader>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
