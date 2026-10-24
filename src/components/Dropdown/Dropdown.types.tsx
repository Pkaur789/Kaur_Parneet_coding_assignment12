import type React from 'react';
export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  disabled?: boolean;
  backgroundColor?: string;
  options?: string[];
}
