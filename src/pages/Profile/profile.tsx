import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customerService from '../../services/customerService';
import ICustomer from '../../types/customer';

function Profile() {
	const [customer, setCustomer] = useState<ICustomer>({
		name: '',
		email: '',
		phone: '',
		address: {
			postcode: '',
		},
	});

	const loadCustomer = async () => {
		const customer = await customerService.getCustomerDetails();
		setCustomer(customer);
	};

	useEffect(() => {
		loadCustomer();
	}, []);

	return (
		<div className='py-4 my-4'>
			<div className='container'>
				<div className='row'>
					<Link to={'/projects'}>
						<i
							className='fa fa-long-arrow-left fa-2x text-success me-3'
							aria-hidden='true'
						/>
					</Link>
					<h1 className='page-header my-2'>Profile</h1>
					<hr />
					<section className='card my-3'>
						<div className='row g-0'>
							<div
								className='col-md-4 text-md-center mt-4'
								style={{ maxWidth: '540px' }}
							>
								<i
									className='fa fa-camera fa-5x text-success m-3'
									aria-hidden='true'
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-body fs-5'>
									<h2 className='card-title display-6'>{customer.name}</h2>
									<p className='card-text'>{customer.email}</p>
									<p className='card-text'>{customer.phone}</p>
								</div>
							</div>
						</div>
					</section>

					<section className='col-md mt-4'>
						<h2 className='page-subheader mb-2'>Contact Information</h2>
						<p>Email: {customer.email}</p>
						<p>Phone: {customer.phone}</p>
					</section>

					<section className='col-md mt-4'>
						<h2 className='page-subheader page-header'>Address</h2>
						<p>
							Default Billing Address:{' '}
							<span className='px-2'>{customer.address.postcode}</span>
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Profile;
