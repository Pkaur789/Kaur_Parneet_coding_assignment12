import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { TableFooterProps } from './TableFooter.types';
const Root = styled.tfoot<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  font-weight: 600;
`;

export function TableFooter({ children, text = "13 reusable components", disabled = false, backgroundColor = "#e6efde", ...rest }: TableFooterProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children || <tr><td colSpan={2}>{text}</td></tr>}</Root>);
}
