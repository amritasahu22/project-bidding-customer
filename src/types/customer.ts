import IAddress from './address';

export default interface ICustomer {
	name: string;
	email: string;
	phone: string;
	address: IAddress;
}
