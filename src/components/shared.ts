import { css } from 'styled-components';
export const DISABLED_BACKGROUND = '#d1d5db';
export const surface = css<{ $disabled?: boolean; $backgroundColor?: string }>`
  box-sizing: border-box;
  max-width: 100%;
  background-color: ${({ $disabled, $backgroundColor }) => $disabled ? DISABLED_BACKGROUND : ($backgroundColor || '#ffffff')};
  color: ${({ $disabled }) => $disabled ? '#4b5563' : '#173c30'};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'auto'};
  overflow-wrap: anywhere;
  @media (max-width: 600px) { font-size: 0.95rem; }
`;
