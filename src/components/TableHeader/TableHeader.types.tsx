import type React from 'react';
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  text?: string;
  disabled?: boolean;
  backgroundColor?: string;
  
}
