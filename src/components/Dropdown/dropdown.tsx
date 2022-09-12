// interface DropdownProps {
// 	items: [];
// 	keyProperty: string;
// 	textProperty: string;
// 	selectedItem: string;
// 	onItemSelect: (item: string) => void;
// }
// {
// 	items,
// 	keyProperty,
// 	textProperty,
// 	selectedItem,
// 	onItemSelect,
// }: DropdownProps
const Dropdown = () => {
	return (
		<div className='btn-group'>
			<button
				type='button'
				className='btn btn-success dropdown-toggle'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				All Projects
			</button>

			<ul className='dropdown-menu'>
				<li>
					<a className='dropdown-item' href='#'>
						All
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						Active
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						Assigned
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						Cancelled
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						Completed
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
