import { render, screen } from '@testing-library/react';
import About from './about';

describe('NotFound', () => {
	test('renders NotFound Component', () => {
		render(<About />);
		expect(screen.getByText('About Us')).toBeInTheDocument();
	});
});
