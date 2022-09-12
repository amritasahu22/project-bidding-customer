import { render, screen } from '@testing-library/react';
import NavBar from './navbar';
describe('NavBar', () => {
	test('renders NavBar Component', () => {
		render(<NavBar />);
		// expect(screen.getByText('Back to top')).toBeInTheDocument();
		// expect(
		// 	screen.getByText('© 2022 Project Bidding Inc. All rights reserved.')
		// ).toBeInTheDocument();
	});
});
