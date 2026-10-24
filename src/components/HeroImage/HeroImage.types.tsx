import type React from 'react';
export interface HeroImageProps extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  backgroundColor?: string;
  title?: string; description?: string; src?: string; alt?: string;
}
