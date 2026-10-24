import type React from 'react';
export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  text?: string;
  disabled?: boolean;
  backgroundColor?: string;
  
}
