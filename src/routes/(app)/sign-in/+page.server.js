import { redirect, fail } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	if (locals.user) {
		redirect(307, '/library');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (password !== 'password') {
			return fail(401, { detail: 'incorrect password' });
		}

		cookies.set('user', username, {path: "/"});

		redirect(303, '/library');
	},
};
