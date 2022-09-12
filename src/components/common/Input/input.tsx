import './Input.css';

interface InputProps {
	name: string;
	label: string;
	value: string;
	placeholder?: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	type: string;
	autofocus?: boolean;
}
const Input = ({
	name,
	label,
	value,
	type,
	placeholder,
	onChange,
	autofocus,
}: InputProps) => {
	return (
		<div className='form-group mb-3'>
			<label htmlFor={name}>{label}</label>
			<input
				value={value}
				name={name}
				id={name}
				type={type}
				className='form-control shadow-none Input'
				onChange={onChange}
				placeholder={placeholder}
				autoFocus={autofocus}
			/>
		</div>
	);
};

export default Input;
