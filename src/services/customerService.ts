import axios from 'axios';
import ICustomer from '../types/customer';
import { getCurrentUser } from './authService';

const baseUrl = process.env.REACT_APP_API_URL;

class CustomerService {
	http = axios.create({
		baseURL: baseUrl,
		headers: {
			'content-type': 'application/json',
		},
	});

	async getCustomerDetails() {
		const id = getCurrentUser()?.userId;
		const response = await this.http.get<ICustomer>(`/customers/${id}`);
		return response.data;
	}
}

export default new CustomerService();
