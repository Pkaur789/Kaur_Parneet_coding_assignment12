import type React from 'react';
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  text?: string;
  disabled?: boolean;
  backgroundColor?: string;
  
}
