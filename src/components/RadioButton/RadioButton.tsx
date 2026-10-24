import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { RadioButtonProps } from './RadioButton.types';
const Root = styled.label<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  display: inline-flex; gap: 0.5rem; align-items: center; padding: 0.7rem; border-radius: 8px; input { accent-color: #145c46; cursor: inherit; }
`;

export function RadioButton({ disabled = false, backgroundColor, label = "Choose this option", id, ...rest }: RadioButtonProps) {
  return (<Root $disabled={disabled} $backgroundColor={backgroundColor} aria-disabled={disabled}><input {...rest} id={id} type="radio" disabled={disabled} /> <span>{label}</span></Root>);
}
