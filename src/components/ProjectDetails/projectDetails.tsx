import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import projectService from '../../services/projectService';
import Project from '../../types/project';
import { dateFormatter } from '../../util/dateFormat';

interface ProjectParams {
	id: string;
}

function ProjectDetails() {
	const { id } = useParams<ProjectParams>();
	console.log(id);

	const [projectItem, setProjectItem] = useState<Project>({
		title: '',
		description: '',
		postedDate: new Date(),
		address: {
			postcode: '',
		},
		status: '',
		bidDeadline: new Date(),
		numberOfHours: 0,
	});

	const loadProject = async () => {
		const project = await projectService.getProjectById(id);
		setProjectItem(project);
	};

	useEffect(() => {
		loadProject();
	}, []);

	return (
		<div className='py-2 my-4'>
			<div className='container'>
				<div className='row'>
					<Link to={'/projects'}>
						<i
							className='fa fa-long-arrow-left fa-2x text-success me-3'
							aria-hidden='true'
						/>
					</Link>
					<h1 className='page-header mt-2'>{projectItem.title}</h1>
					<hr />
					<p className='text-success'>{projectItem.status.toUpperCase()}</p>

					<div className='col-md-4'>
						<div className='d-flex flex-row'>
							<i
								className='fa fa-map-marker fa-2x fa-light m-2'
								aria-hidden='true'
							/>
							<div className='ms-2'>
								<p className='mb-1'>Location</p>
								<p>{projectItem.address.postcode}</p>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='d-flex flex-row'>
							<i className='fa fa-calendar-o fa-2x m-2' aria-hidden='true' />
							<div className='ms-2'>
								<p className='mb-1'>Bid Deadline</p>
								<p>{dateFormatter(projectItem.bidDeadline)}</p>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='d-flex flex-row'>
							<i className='fa fa-hourglass-o fa-2x m-2' aria-hidden='true' />
							<div className='ms-2'>
								<p className='mb-1'>Number of hours</p>
								<p>{projectItem.numberOfHours}</p>
							</div>
						</div>
					</div>
					<div className='my-2'>
						<h2>Details</h2>
						<p>{projectItem.description}</p>
						<div className='mb-4'>
							<img
								src='/images/paint-my-room.jpg'
								className='rounded m-2'
								width={200}
								height={200}
								alt='project attachment 1'
							/>
							<img
								src='/images/paint-my-room.jpg'
								className='rounded m-2'
								width={200}
								height={200}
								alt='project attachment 2'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
