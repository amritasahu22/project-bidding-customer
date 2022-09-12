import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-success fixed-top'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					BIDDER
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink
							className='nav-link active'
							aria-current='page'
							to='/projects'
						>
							My Projects
						</NavLink>
						<NavLink className='nav-link' to='/about'>
							About Us
						</NavLink>
						<NavLink className='nav-link' to='/profile'>
							Profile
						</NavLink>
						<NavLink className='nav-link' to='/login'>
							Login
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
