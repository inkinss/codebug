import { Button } from '@/components/ui/button';
import AuthInput from '../../_components/AuthInput';

export const SignUpForm = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('formulario enviado');
	};

	return (
		<form
			className="flex flex-col gap-4 w-full md:w-2/3 mt-4"
			onSubmit={handleSubmit}
		>
			<AuthInput label="nombre de usuario" type="text" placeholder="usuario" />
			<AuthInput
				label="correo electrónico"
				type="email"
				placeholder="tu@correo.com"
			/>
			<AuthInput
				label="contraseña"
				type="password"
				placeholder="establece una contraseña"
			/>
			<Button
				type="submit"
				className="bg-span text-background mt-3 hover:bg-white"
			>
				crear cuenta
			</Button>
			<a
				href="/sign-in"
				className="text-sm text-span text-center hover:underline"
			>
				¿ya tienes una cuenta?
			</a>
		</form>
	);
};
