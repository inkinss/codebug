import type { ComponentProps } from 'react';
import { Input } from '@/components/ui/input';

type AuthInputProps = ComponentProps<typeof Input> & {
	label: string;
	error?: string;
};

const AuthInput = ({ label, id, error, ...props }: AuthInputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id}>{label}</label>
			<Input
				id={id}
				className="bg-input text-hoverInput px-3"
				aria-invalid={!!error}
				{...props}
			/>
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default AuthInput;
