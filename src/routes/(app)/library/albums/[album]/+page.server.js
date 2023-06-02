/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
	const albumSlug = params.album;

	const response = await fetch(`/data/albums/${albumSlug}/index.json`);
	const albumData = await response.json();

	return { album: albumData };
}
