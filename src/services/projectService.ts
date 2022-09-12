import axios from 'axios';
import IProject, { INewProject } from '../types/project';
import { getCurrentUser } from './authService';

const baseUrl = process.env.REACT_APP_API_URL;

class ProjectService {
	http = axios.create({
		baseURL: baseUrl,
		headers: {
			'content-type': 'application/json',
			'x-auth-token': getCurrentUser()?.userId || '',
		},
	});

	async getProjects() {
		const response = await this.http.get<IProject[]>('/projects');
		return response.data;
	}

	async getProjectById(id: string) {
		console.log('Fecth by Project ID', id);
		const response = await this.http.get<IProject>(`/projects/${id}`);
		return response.data;
	}

	async addProject(data: INewProject) {
		const response = await this.http.post<IProject>('/projects', { data });
		console.log('Error:', response);
		return response;
	}

	// async removeProject(id: number) {
	// 	const response = await this.http.delete(`/projects/${id}`);
	// 	return response.data;
	// }
}

export default new ProjectService();
