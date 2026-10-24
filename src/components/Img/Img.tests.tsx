import React from 'react';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';
import { DISABLED_BACKGROUND } from '../shared';

describe('Img', () => {
  test('is visible in its default state', () => {
    render(<Img data-testid="subject" />);
    expect(screen.getByRole('img').parentElement!).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<Img data-testid="subject" backgroundColor="#ffffff" />);
    expect(screen.getByRole('img').parentElement!).toHaveStyleRule('background-color', '#ffffff');
    rerender(<Img data-testid="subject" backgroundColor="#ffffff" disabled />);
    expect(screen.getByRole('img').parentElement!).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByRole('img').parentElement!).toHaveStyleRule('cursor', 'not-allowed');
  });
});
