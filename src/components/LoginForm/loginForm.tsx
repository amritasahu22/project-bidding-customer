import React, { useState } from 'react';
import Input from '../common/Input';

interface Account {
	username: string;
	password: string;
}

function LoginForm() {
	const [account, setAccount] = useState<Account>({
		username: '',
		password: '',
	});

	const handleChange = ({
		currentTarget: input,
	}: React.FormEvent<HTMLInputElement>) => {
		setAccount({ ...account, [input.name]: input.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//TODO: Validation logic to be added
		console.log('Sumbitted');
	};

	return (
		<div className='row justify-content-center align-items-center'>
			<div className='col-md-6 col-lg-4'>
				<h1 className='page-header mb-4'>Login Form</h1>
				<form onSubmit={handleSubmit}>
					<Input
						name='username'
						value={account.username}
						label='Username'
						onChange={handleChange}
						type='text'
						placeholder='Please enter username'
					/>
					<Input
						name='password'
						value={account.password}
						label='Password'
						onChange={handleChange}
						type='password'
						placeholder='Please enter password'
					/>

					<div className='d-grid d-sm-block mb-3'>
						<button className='btn btn-success btn-lg rounded mb-3'>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
