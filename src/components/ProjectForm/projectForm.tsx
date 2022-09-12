import { useState } from 'react';
import { format, addDays } from 'date-fns';
import { INewProject } from '../../types/project';
import projectService from '../../services/projectService';
import Input from '../common/Input';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProjectForm = () => {
	const minDate = format(addDays(Date.now(), 3), 'yyyy-LL-d');
	const maxDate = format(addDays(Date.now(), 15), 'yyyy-LL-d');
	const history = useHistory();

	const [newProject, setNewProject] = useState<INewProject>({
		title: '',
		description: '',
		address: {
			postcode: '',
		},
		numberOfHours: '',
		bidDeadline: '',
	});
	//const [startDate, setStartDate] = useState(new Date());

	const { title, description, bidDeadline, address, numberOfHours } =
		newProject;

	const handleTextareaChange = ({
		currentTarget: input,
	}: React.FormEvent<HTMLTextAreaElement>) => {
		setNewProject({ ...newProject, [input.name]: input.value });
	};

	const handleAddressChange = ({
		currentTarget: input,
	}: React.FormEvent<HTMLInputElement>) => {
		let newProjectCopy = { ...newProject };
		newProjectCopy.address.postcode = input.value;
		setNewProject(newProjectCopy);
	};

	const handleChange = ({
		currentTarget: input,
	}: React.FormEvent<HTMLInputElement>) => {
		setNewProject({ ...newProject, [input.name]: input.value });
	};

	const submitForm = async (e: React.FormEvent) => {
		e.preventDefault();
		//TODO: Validation logic to be added
		await projectService.addProject(newProject);
		history.push('/projects');
		toast('Your project is posted successfully');
	};

	return (
		<div className='py-5 my-4'>
			<div className='container'>
				<div className='row justify-content-center align-items-center'>
					<div className='col-md-6 col-lg-6'>
						<h1 className='page-header mb-4'>Project Form</h1>
						<form onSubmit={submitForm}>
							<Input
								name='title'
								value={title}
								label='Project Title'
								onChange={handleChange}
								type='text'
								placeholder='Enter title'
								autofocus
							/>

							<label htmlFor='description'>Describe your project</label>
							<div className='form-floating mb-3'>
								<textarea
									className='form-control shadow-none Input'
									id='description'
									name='description'
									value={description}
									onChange={handleTextareaChange}
									style={{ height: '100px' }}
								>
									Describe your project
								</textarea>
							</div>

							<Input
								name='postcode'
								value={address.postcode}
								label='Location'
								onChange={handleAddressChange}
								type='text'
								placeholder='Enter postcode'
							/>
							<Input
								name='numberOfHours'
								value={numberOfHours}
								label='Number of hours expected'
								onChange={handleChange}
								type='text'
							/>
							{/* <Input
								name='bidDeadline'
								value={bidDeadline}
								label='Bid deadline'
								onChange={handleChange}
								type='date'
							/> */}
							<div className='form-group mb-3'>
								<label htmlFor='bidDeadline'>Bid deadline</label>
								<input
									value={bidDeadline}
									name='bidDeadline'
									id='bidDeadline'
									type='date'
									className='form-control shadow-none Input'
									onChange={handleChange}
									min={minDate}
									max={maxDate}
								/>
							</div>

							<div className='d-grid d-md-block mb-3'>
								<button
									type='submit'
									className='btn btn-success rounded'
									title='Post new project'
								>
									Post Project
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectForm;
