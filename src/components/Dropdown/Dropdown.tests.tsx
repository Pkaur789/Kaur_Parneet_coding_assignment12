import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { DISABLED_BACKGROUND } from '../shared';

describe('Dropdown', () => {
  test('is visible in its default state', () => {
    render(<Dropdown data-testid="subject" />);
    expect(screen.getByTestId('subject')).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<Dropdown data-testid="subject" backgroundColor="#ffffff" />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', '#ffffff');
    rerender(<Dropdown data-testid="subject" backgroundColor="#ffffff" disabled />);
    expect(screen.getByTestId('subject')).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByTestId('subject')).toHaveStyleRule('cursor', 'not-allowed');
  });
});
