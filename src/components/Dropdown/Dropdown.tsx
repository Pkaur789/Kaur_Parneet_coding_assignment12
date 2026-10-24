import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { DropdownProps } from './Dropdown.types';
const Root = styled.select<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  width: 100%; padding: 0.8rem; border: 1px solid #87a18a; border-radius: 8px; font: inherit;
`;

export function Dropdown({ disabled = false, backgroundColor, options = ["Components", "Patterns", "Documentation"], ...rest }: DropdownProps) {
  return (<Root {...rest} aria-label={rest["aria-label"] || "Choose a collection"} disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{options.map(option => <option key={option} value={option}>{option}</option>)}</Root>);
}
