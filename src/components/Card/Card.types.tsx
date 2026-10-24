import type React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  backgroundColor?: string;
  title?: string;
}
