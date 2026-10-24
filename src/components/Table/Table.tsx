import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { TableProps } from './Table.types';
const Root = styled.table<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  width: 100%; border-collapse: collapse; text-align: left; td, th { padding: 0.8rem; border-bottom: 1px solid #cbd5ca; }
`;
const Scroll = styled.div`width: 100%; max-width: 100%; overflow-x: auto;`;
export function Table({ children, text = "Garden collection", disabled = false, backgroundColor, ...rest }: TableProps) {
  return (<Scroll><Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children || <tbody><tr><td>{text}</td></tr></tbody>}</Root></Scroll>);
}
