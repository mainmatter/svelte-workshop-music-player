/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	const response = await fetch('/data/songs/index.json');
	const songs = await response.json();

	return { songs };
}
