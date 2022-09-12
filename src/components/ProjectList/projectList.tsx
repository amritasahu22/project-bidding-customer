import IProject from '../../types/project';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../../util/dateFormat';

interface ProjectListProps {
	items: IProject[];
}

function ProjectList({ items }: ProjectListProps) {
	console.log('Items::', items);

	//{format(new Date(), 'EEEE, LLL d')}
	return (
		<div className='list-group'>
			{items.map(item => (
				<Link
					to={`/projects/${item._id}`}
					className='list-group-item list-group-item-action py-3'
					aria-current='true'
					key={item._id}
				>
					<div className='d-flex w-100 justify-content-between'>
						<h2 className='mb-2 fs-4'>
							{_.truncate(item.title, { length: 50 })}
						</h2>
						<small className='text-success ps-4 fs-6'>
							{item.status.toUpperCase()}
						</small>
					</div>
					<p className='mb-1'>
						<i className='fa fa-calendar-o me-2' aria-hidden='true' />
						<small className='text-muted fs-6'>Posted On:</small>{' '}
						{dateFormatter(item.postedDate)}
					</p>

					<p className='mb-1'>
						<i className='fa fa-map-marker fa-light me-2' aria-hidden='true' />
						<small className='text-muted fs-6'> Location:</small>{' '}
						{item.address.postcode}
					</p>

					<p className='my-1 '>
						<i className='fa fa-info me-2' aria-hidden='true' />
						<small className='text-muted fs-6'> Bid Deadline:</small>{' '}
						{dateFormatter(item.bidDeadline)}
					</p>

					<span className='badge badge-lg text-bg-success'>10 bids</span>
				</Link>
			))}
		</div>
	);
}

export default ProjectList;
