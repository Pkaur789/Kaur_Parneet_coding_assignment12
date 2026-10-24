import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { LabelProps } from './Label.types';
const Root = styled.label<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  display: inline-block; padding: 0.4rem 0.6rem; border-radius: 6px; font-weight: 600;
`;

export function Label({ children = "Your name", disabled = false, backgroundColor, ...rest }: LabelProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}>{children}</Root>);
}
