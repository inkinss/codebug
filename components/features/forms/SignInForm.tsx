'use client';
import { Button } from '@/components/ui/button';
import LoginInputs from '../sections/loginForm/components/common/inputs/LoginInputs';

const SignInForm = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('formulario enviado');
	};

	return (
		<form
			className="flex flex-col gap-4 w-full md:w-2/3 mt-4"
			onSubmit={handleSubmit}
		>
			<LoginInputs
				label="correo electrónico"
				type="email"
				placeholder="tu@correo.com"
			/>
			<LoginInputs
				label="contraseña"
				type="password"
				placeholder="introduce tu contraseña"
			/>
			<Button type="submit" className="bg-span text-background mt-3">
				iniciar sesión
			</Button>
			<a
				href="/forgot-password"
				className="text-sm text-span text-center hover:underline"
			>
				¿olvidaste tu contraseña?
			</a>
		</form>
	);
};

export default SignInForm;
