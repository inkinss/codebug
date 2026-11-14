import { z } from 'zod';

export const signUpSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
		.max(20, { message: 'El nombre no puede tener más de 20 caracteres' })
		.trim(),
	username: z
		.string()
		.min(3, {
			message: 'El nombre de usuario debe tener al menos 3 caracteres',
		})
		.max(20, {
			message: 'El nombre de usuario no puede tener más de 20 caracteres',
		})
		.trim(),
	email: z
		.string()
		.email({ message: 'El correo electrónico no es válido' })
		.trim(),
	password: z
		.string()
		.min(6, { message: 'La contraseña debe tener al menos 8 caracteres' })
		.max(20, { message: 'La contraseña no puede tener más de 20 caracteres' })
		.trim(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
