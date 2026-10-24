import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { ButtonProps } from './Button.types';
const Root = styled.button<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  padding: 0.8rem 1.3rem; border: 1px solid #50745e; border-radius: 999px; font: inherit; cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"}; &:focus-visible { outline: 3px solid #bd7c29; outline-offset: 3px; }
`;

export function Button({ children = "Explore garden", disabled = false, backgroundColor = "#d8edc8", onClick, ...rest }: ButtonProps) {
  return (<Root {...rest} type={rest.type || "button"} disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor} onClick={disabled ? undefined : onClick}>{children}</Root>);
}
