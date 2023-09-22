export async function authenticateAs(context, username = 'john') {
	await context.addCookies([
		{
			name: 'user',
			value: username,
			path: '/',
			domain: 'localhost',
			httpOnly: true,
		},
	]);
}
