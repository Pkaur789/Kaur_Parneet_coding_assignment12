import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import { DISABLED_BACKGROUND } from '../shared';

describe('Label', () => {
  test('is visible in its default state', () => {
    render(<Label data-testid="subject" />);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<Label data-testid="subject" backgroundColor="#ffffff" />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<Label data-testid="subject" backgroundColor="#ffffff" disabled />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
