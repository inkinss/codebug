import { SignUpForm } from './SignUpForm';

export const SignUp = () => {
	return (
		<div className="flex flex-col items-start md:items-center justify-center w-full flex-1">
			<section className="flex flex-col w-2/3">
				<span className="text-span text-sm">BIENVENIDO</span>
				<h1 className="font-bold text-2xl">Crea una cuenta facilmente</h1>
				<span className="text-light">crea tu cuenta y empieza</span>
			</section>
			<SignUpForm />
		</div>
	);
};
