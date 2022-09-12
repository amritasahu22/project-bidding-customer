import { useEffect, useState } from 'react';
import ProjectList from '../ProjectList';
import IProject from '../../types/project';
import projectService from '../../services/projectService';
// import SearchBox from '../SearchBox';
import Dropdown from '../Dropdown/dropdown';
import { Link } from 'react-router-dom';

function Projects() {
	const [projects, setProjects] = useState<IProject[]>([]);

	const loadProjects = async () => {
		const projects = await projectService.getProjects();
		setProjects(projects);
	};

	useEffect(() => {
		loadProjects();
	}, []);

	return (
		<>
			<main
				className='container-lg py-5 my-4'
				style={{ minHeight: '100vh', marginTop: '4rem' }}
			>
				<div className='row'>
					<div className='col'>
						<h1 className='page-header'>My Projects</h1>
						<hr />
						<Link to='/projects/new'>
							<div className='d-grid d-sm-block'>
								<button className='btn btn-success my-4 '>
									Post a Project
								</button>
							</div>
						</Link>
						<div className='fs-5 text-muted'>
							Filter: <Dropdown />
						</div>
						<p className='font-weight-normal pt-3 text-sm-center text-muted fs-5'>
							Showing {projects.length} projects
						</p>
						<ProjectList items={projects} />
					</div>
					{/* Searchbar */}
				</div>
			</main>
		</>
	);
}

export default Projects;
