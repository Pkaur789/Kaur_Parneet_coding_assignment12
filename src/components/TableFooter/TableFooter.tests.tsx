import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';
import { DISABLED_BACKGROUND } from '../shared';

describe('TableFooter', () => {
  test('is visible in its default state', () => {
    render(<table><TableFooter data-testid="subject" /></table>);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<table><TableFooter data-testid="subject" backgroundColor="#ffffff" /></table>);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<table><TableFooter data-testid="subject" backgroundColor="#ffffff" disabled /></table>);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
