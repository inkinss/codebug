import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

type LoginInputProps = {
	label: string;
	type: string;
	placeholder?: string;
};

const LoginInputs = ({ label, type, placeholder }: LoginInputProps) => {
	return (
		<div>
			<Field className="mb-2">{label}</Field>
			<Input
				className="bg-input text-hoverInput px-3"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default LoginInputs;
