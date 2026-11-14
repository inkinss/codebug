import { SignUp } from './_components/SignUp';
import { SignUpHero } from './_components/SignUpHero';

const page = () => {
	return (
		<div className="flex mx-auto flex-col md:flex-row items-center justify-center w-full h-svh max-w-10/12">
			<SignUpHero />
			<SignUp />
		</div>
	);
};

export default page;
