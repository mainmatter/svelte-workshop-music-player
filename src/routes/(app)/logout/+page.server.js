import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: ({ cookies }) => {
		cookies.delete('user', {path: "/"});
		redirect(303, '/');
	},
};
