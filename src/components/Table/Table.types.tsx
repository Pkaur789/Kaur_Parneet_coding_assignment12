import type React from 'react';
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  text?: string;
  disabled?: boolean;
  backgroundColor?: string;
  
}
