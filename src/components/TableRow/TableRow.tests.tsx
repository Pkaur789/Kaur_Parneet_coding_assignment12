import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';
import { DISABLED_BACKGROUND } from '../shared';

describe('TableRow', () => {
  test('is visible in its default state', () => {
    render(<table><tbody><TableRow data-testid="subject" /></tbody></table>);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<table><tbody><TableRow data-testid="subject" backgroundColor="#ffffff" /></tbody></table>);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<table><tbody><TableRow data-testid="subject" backgroundColor="#ffffff" disabled /></tbody></table>);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
