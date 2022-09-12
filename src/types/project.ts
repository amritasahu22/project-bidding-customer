import IAddress from './address';

export default interface IProject {
	_id?: string;
	title: string;
	description: string;
	postedDate: Date;
	address: IAddress;
	status: string;
	bidDeadline: Date;
	numberOfHours: number;
}

export interface INewProject {
	title: string;
	description: string;
	address: IAddress;
	numberOfHours: string;
	bidDeadline: string;
}
