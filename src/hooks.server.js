import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const user = event.cookies.get('user');

	const response = await resolve(event);
	return response;
}
