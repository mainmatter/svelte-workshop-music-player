/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	let response = await fetch('/data/songs/index.json');
	let songs = await response.json();
	return { songs };
}
