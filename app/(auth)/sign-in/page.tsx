import { SignIn, SignInHero } from './_components';

const page = () => {
	return (
		<div className="flex mx-auto flex-col md:flex-row items-center justify-center w-full h-svh max-w-10/12">
			<SignInHero />
			<SignIn />
		</div>
	);
};

export default page;
