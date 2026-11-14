import LoginForm from '@/components/features/sections/loginForm/LoginForm';
import LoginHero from '@/components/features/sections/loginHero/LoginHero';

const page = () => {
	return (
		<div className="flex mx-auto flex-col md:flex-row items-center justify-center w-full h-svh max-w-10/12">
			<LoginHero />
			<LoginForm />
		</div>
	);
};

export default page;
