import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { DISABLED_BACKGROUND } from '../shared';

describe('Button', () => {
  test('is visible in its default state', () => {
    render(<Button data-testid="subject" />);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<Button data-testid="subject" backgroundColor="#ffffff" />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<Button data-testid="subject" backgroundColor="#ffffff" disabled />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
