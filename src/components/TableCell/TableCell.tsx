import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { TableCellProps } from './TableCell.types';
const Root = styled.td<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  padding: 0.8rem; border-bottom: 1px solid #cbd5ca;
`;

export function TableCell({ children = "Ready to use", disabled = false, backgroundColor, ...rest }: TableCellProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children}</Root>);
}
