import type React from 'react';
export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  backgroundColor?: string;
  label?: string;
}
