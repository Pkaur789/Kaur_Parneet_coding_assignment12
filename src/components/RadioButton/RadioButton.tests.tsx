import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';
import { DISABLED_BACKGROUND } from '../shared';

describe('RadioButton', () => {
  test('is visible in its default state', () => {
    render(<RadioButton data-testid="subject" />);
    expect(screen.getByRole('radio').closest('label')!).toBeVisible();
  });
  test('changes its background and cursor when disabled', () => {
    const { rerender } = render(<RadioButton data-testid="subject" backgroundColor="#ffffff" />);
    expect(screen.getByRole('radio').closest('label')!).toHaveStyleRule('background-color', '#ffffff');
    rerender(<RadioButton data-testid="subject" backgroundColor="#ffffff" disabled />);
    expect(screen.getByRole('radio').closest('label')!).toHaveStyleRule('background-color', DISABLED_BACKGROUND);
    expect(screen.getByRole('radio').closest('label')!).toHaveStyleRule('cursor', 'not-allowed');
  });
});
