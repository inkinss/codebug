import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import SignInForm from '../../forms/SignInForm';
import SocialButton from './components/common/buttons/SocialButton';

const LoginForm = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full flex-1">
			<section className="flex flex-col w-2/3">
				<span className="text-span text-sm">BIENVENIDO DE NUEVO</span>
				<h1 className="font-bold text-2xl">Tu mundo Dev te espera</h1>
				<span className="text-light">
					inicia sesión y explora lo que te inspira
				</span>
			</section>
			<section className="flex flex-col w-2/3 mt-6 gap-5">
				<SocialButton
					label="continuar con GitHub"
					icon={<FaGithub />}
					provider="github"
				/>
				<SocialButton
					label="continuar con Google"
					icon={<FaGoogle />}
					provider="google"
				/>
				<div className="flex w-full items-center gap-2">
					<Separator aria-hidden="true" className="flex-1" />
					<span className="shrink-0 text-muted-foreground text-xs uppercase">
						o continua con tu correo
					</span>
					<Separator aria-hidden="true" className="flex-1" />
				</div>
			</section>
			<SignInForm />
		</div>
	);
};

export default LoginForm;
