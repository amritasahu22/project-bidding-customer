interface SearchBoxProps {
	value: string;
	onChange: (result: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
	return (
		<input
			type='text'
			name='query'
			className='form-control mx-3'
			placeholder='Search...'
			value={value}
			onChange={e => onChange(e.currentTarget.value)}
		/>
	);
};

export default SearchBox;
