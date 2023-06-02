import { addComment, loadAllComments } from '$lib/server/db';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params: { artist } }) {
	const comments = loadAllComments({ artistSlug: artist });
	return {
		comments
	};
}

export const actions = {
	addComment: async function ({ locals, request }) {
		if (!locals.user) {
			return fail(401, { detail: 'user unauthorised' });
		}

		const data = await request.formData();
		const artistSlug = data.get('artistSlug');
		const comment = data.get('comment');

		try {
			addComment({
				artistSlug,
				comment,
				user: locals.user
			});
			return { success: true };
		} catch (error) {
			return fail(500, { failure: true, error });
		}
	}
};
