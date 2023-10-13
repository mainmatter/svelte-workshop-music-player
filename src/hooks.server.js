import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const user = event.cookies.get('user');

	if (user) {
		event.locals.user = user;
	}

	if (event.route.id.includes('/library') && !user) {
		throw redirect(307, '/sign-in');
	}

	const response = await resolve(event);
	return response;
}
