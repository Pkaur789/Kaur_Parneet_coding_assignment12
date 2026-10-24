import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { CardProps } from './Card.types';
const Root = styled.article<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  padding: clamp(1rem, 3vw, 1.7rem); border: 1px solid #cfdbc9; border-radius: 16px; box-shadow: 0 8px 24px #173c3009; h3 { margin: 0 0 0.8rem; } div { line-height: 1.6; }
`;

export function Card({ disabled = false, backgroundColor, title = "Made to be reused", children = "Build consistent pages with simple, flexible components.", ...rest }: CardProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}><h3>{title}</h3><div>{children}</div></Root>);
}
