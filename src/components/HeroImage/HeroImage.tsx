import React from 'react';
import styled from 'styled-components';
import { surface } from '../shared';
import type { HeroImageProps } from './HeroImage.types';
const Root = styled.section<{ $disabled?: boolean; $backgroundColor?: string }>`
  ${surface}
  position: relative; overflow: hidden; border-radius: 20px; padding: 0.7rem; img { width: 100%; height: clamp(180px, 30vw, 320px); object-fit: cover; border-radius: 14px; filter: ${({ $disabled }) => $disabled ? "grayscale(1)" : "none"}; } div { padding: 1rem; } h2 { font-size: clamp(1.6rem, 4vw, 2.7rem); margin: 0 0 0.5rem; } p { line-height: 1.6; margin: 0; }
`;

export function HeroImage({ disabled = false, backgroundColor, title = "A little space to grow.", description = "A thoughtful React toolkit, one component at a time.", src = "/garden.svg", alt = "Green hills with a sunlit garden path", ...rest }: HeroImageProps) {
  return (<Root {...rest} aria-disabled={disabled} $disabled={disabled} $backgroundColor={backgroundColor}><img src={src} alt={alt} /><div><h2>{title}</h2><p>{description}</p></div></Root>);
}
