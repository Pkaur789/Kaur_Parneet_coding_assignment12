import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { TableHeaderProps } from './TableHeader.types';
const Root = styled.thead<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  font-weight: 700;
`;

export function TableHeader({ children, text = "Component", disabled = false, backgroundColor = "#e6efde", ...rest }: TableHeaderProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children || <tr><th scope="col">{text}</th><th scope="col">Status</th></tr>}</Root>);
}
