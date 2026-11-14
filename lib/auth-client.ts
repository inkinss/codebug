import { createAuthClient } from 'better-auth/client';

export const authClient = createAuthClient();
type Provider = 'github' | 'google';

export const signIn = async (provider: Provider) => {
	const data = await authClient.signIn.social({
		provider: provider,
	});
	return data;
};
