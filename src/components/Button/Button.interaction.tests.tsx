import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
test('calls onClick only while enabled', () => {
 const onClick = jest.fn();
 const { rerender } = render(<Button onClick={onClick}>Save</Button>);
 fireEvent.click(screen.getByRole('button', { name: 'Save' }));
 expect(onClick).toHaveBeenCalledTimes(1);
 rerender(<Button disabled onClick={onClick}>Save</Button>);
 fireEvent.click(screen.getByRole('button', { name: 'Save' }));
 expect(onClick).toHaveBeenCalledTimes(1);
 expect(screen.getByRole('button')).toBeDisabled();
});
