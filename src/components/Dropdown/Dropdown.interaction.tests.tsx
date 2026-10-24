import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
test('reports a selection and supports native disabled state', () => {
 const onChange = jest.fn();
 const { rerender } = render(<Dropdown onChange={onChange} options={['A', 'B']} />);
 fireEvent.change(screen.getByRole('combobox'), { target: { value: 'B' } });
 expect(onChange).toHaveBeenCalledTimes(1);
 expect(screen.getByRole('combobox')).toHaveValue('B');
 rerender(<Dropdown disabled options={['A', 'B']} />);
 expect(screen.getByRole('combobox')).toBeDisabled();
});
