import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { ImgProps } from './Img.types';
const Root = styled.figure<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  margin: 0; padding: 0.5rem; border-radius: 16px; img { display: block; width: 100%; height: auto; border-radius: 10px; filter: ${({ $disabled }) => $disabled ? "grayscale(1)" : "none"}; }
`;

export function Img({ disabled = false, backgroundColor, src = "/garden.svg", alt = "Illustrated green hills and a winding garden path", ...rest }: ImgProps) {
  return (<Root aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}><img {...rest} src={src} alt={alt} /></Root>);
}
