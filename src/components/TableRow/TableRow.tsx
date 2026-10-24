import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { TableRowProps } from './TableRow.types';
const Root = styled.tr<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  border-bottom: 1px solid #cbd5ca;
`;

export function TableRow({ children, text = "Button", disabled = false, backgroundColor, ...rest }: TableRowProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children || <td>{text}</td>}</Root>);
}
