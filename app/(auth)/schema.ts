import { z } from 'zod';

export const signUpSchema = z.object({
	username: z
		.string()
		.min(3, {
			message: 'El nombre de usuario debe tener al menos 3 caracteres',
		})
		.max(20, {
			message: 'El nombre de usuario no puede tener más de 20 caracteres',
		}),
	email: z.email({ message: 'El correo electrónico no es válido' }),
	password: z
		.string()
		.min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
		.max(20, { message: 'La contraseña no puede tener más de 20 caracteres' }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
