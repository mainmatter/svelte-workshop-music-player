/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	return { isAuthenticated: Boolean(locals.user) };
}
