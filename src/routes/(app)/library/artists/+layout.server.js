/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	const response = await fetch('/data/artists/index.json');
	const artists = await response.json();

	return { artists };
}
