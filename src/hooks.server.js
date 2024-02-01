import { redirect } from '@sveltejs/kit';
import { server } from './mocks/node';
import { PUBLIC_MOCKING } from '$env/static/public';

if (PUBLIC_MOCKING) {
	server.listen();
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const user = event.cookies.get('user');

	if (user) {
		event.locals.user = user;
	}

	if (event.route.id?.includes('/library') && !user) {
		redirect(307, '/sign-in');
	}

	const response = await resolve(event);
	return response;
}
