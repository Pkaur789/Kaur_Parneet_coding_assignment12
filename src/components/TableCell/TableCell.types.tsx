import type React from 'react';
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  disabled?: boolean;
  backgroundColor?: string;
  
}
