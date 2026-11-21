import { createAuthClient } from 'better-auth/client';
import { usernameClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
	plugins: [usernameClient()],
});
type Provider = 'github' | 'google';

export const signIn = async (provider: Provider) => {
	const data = await authClient.signIn.social({
		provider: provider,
	});

	return data;
};
