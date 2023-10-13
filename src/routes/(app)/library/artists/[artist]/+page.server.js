import { addComment, loadAllComments } from '$lib/server/db';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params: {} }) {}

export const actions = {
	addComment: async function ({ locals: { user } }) {
		if (!user) {
			return fail(401, { detail: 'user unauthorised' });
		}

		const artistSlug = '';
		const comment = '';

		try {
			addComment({
				artistSlug,
				comment,
				user,
			});
			return {
				success: true,
			};
		} catch (error) {
			return fail(500, {
				failure: true,
				error,
			});
		}
	},
};
