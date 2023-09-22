/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch('/data/albums/index.json');
	const albums = await response.json();
	return { albums };
}
