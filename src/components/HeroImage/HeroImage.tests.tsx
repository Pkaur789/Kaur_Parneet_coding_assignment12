import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';
import { DISABLED_BACKGROUND } from '../shared';

describe('HeroImage', () => {
  test('is visible in its default state', () => {
    render(<HeroImage data-testid="subject" />);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<HeroImage data-testid="subject" backgroundColor="#ffffff" />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<HeroImage data-testid="subject" backgroundColor="#ffffff" disabled />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
