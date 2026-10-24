import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { TextProps } from './Text.types';
const Root = styled.p<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  padding: 0.7rem; margin: 0; line-height: 1.7;
`;

export function Text({ children = "Small components. Room to grow.", disabled = false, backgroundColor, ...rest }: TextProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children}</Root>);
}
