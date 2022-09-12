import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './searchBox';

const onChange = jest.fn();

describe('SearchBox', () => {
	test('renders SearchBox Component', () => {
		const value = 'EBF28E';
		render(<SearchBox value={value} onChange={onChange} />);

		expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByDisplayValue('EBF28E')).toBeInTheDocument();
	});

	test('calls the onChange callback handler', () => {
		render(<SearchBox value='' onChange={onChange} />);

		fireEvent.change(screen.getByRole('textbox'), {
			target: { value: 'CXD82F' },
		});

		expect(onChange).toHaveBeenCalledTimes(1);
	});
});
