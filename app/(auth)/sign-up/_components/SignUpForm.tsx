'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import AuthInput from '../../_components/AuthInput';
import { signUpSchema } from '../../schema';

type FormValue = {
	email: string;
	password: string;
	username: string;
};

export const SignUpForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValue>({
		defaultValues: { email: '', username: '', password: '' },
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit: SubmitHandler<FormValue> = async (values) => {
		const { data } = await authClient.signUp.email({
			username: values.username,
			name: values.username,
			email: values.email,
			password: values.password,
			callbackURL: '/dashboard',
		});
		console.log(data);
		router.push('/dashboard');
	};

	return (
		<form
			className="flex flex-col gap-4 w-full md:w-2/3 mt-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<AuthInput
				id="username"
				label="nombre de usuario"
				type="text"
				placeholder="usuario"
				error={errors.username?.message}
				{...register('username')}
			/>
			<AuthInput
				id="email"
				label="correo electrónico"
				type="email"
				placeholder="tu@correo.com"
				error={errors.email?.message}
				{...register('email')}
			/>
			<AuthInput
				id="password"
				label="contraseña"
				type="password"
				placeholder="establece una contraseña"
				error={errors.password?.message}
				{...register('password')}
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
