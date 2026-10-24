import React from 'react';
import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';
import { DISABLED_BACKGROUND } from '../shared';

describe('TableCell', () => {
  test('is visible in its default state', () => {
    render(<table><tbody><tr><TableCell data-testid="subject" /></tr></tbody></table>);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<table><tbody><tr><TableCell data-testid="subject" backgroundColor="#ffffff" /></tr></tbody></table>);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<table><tbody><tr><TableCell data-testid="subject" backgroundColor="#ffffff" disabled /></tr></tbody></table>);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
