import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
	test('renders Footer Component', () => {
		render(<Footer />);
		expect(screen.getByText('Back to top')).toBeInTheDocument();
		expect(
			screen.getByText('© 2022 Project Bidding Inc. All rights reserved.')
		).toBeInTheDocument();
	});
});
