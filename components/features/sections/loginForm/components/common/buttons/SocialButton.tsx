'use client';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

type SocialButtonProps = {
	provider: 'github' | 'google';
	label: string;
	icon: React.ReactNode;
};

const SocialButton = ({ provider, label, icon }: SocialButtonProps) => {
	const handleClick = async () => {
		await authClient.signIn.social({
			provider: provider,
			callbackURL: '/dashboard',
			disableRedirect: false,
		});
	};

	return (
		<Button variant="outline" onClick={handleClick}>
			<span>{icon}</span>
			<span>{label}</span>
		</Button>
	);
};

export default SocialButton;
