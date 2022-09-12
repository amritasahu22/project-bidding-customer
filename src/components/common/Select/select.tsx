interface Options {
	id: string;
	name: string;
}
interface SelectProps {
	name: string;
	label: string;
	options: Options[];
	onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
	error?: string;
}

const Select = ({ name, label, options, onChange, error }: SelectProps) => {
	return (
		<div className='form-group'>
			{/* <label htmlFor={name}>{label}</label> */}
			<select name={name} id={name} onChange={onChange} className='form-select'>
				<option value=''>Choose Bid Type</option>
				{options.map(option => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Select;
