import { render, screen } from '@testing-library/react';
import NotFound from './notFound';

describe('NotFound', () => {
	test('renders NotFound Component', () => {
		render(<NotFound />);
		expect(screen.getByText('Page Not Found')).toBeInTheDocument();
	});
});
