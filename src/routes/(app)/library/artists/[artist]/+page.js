export async function load({ params: { artist }, fetch }) {
	const response = await fetch(`/data/artists/${artist}/index.json`);
	const artistData = await response.json();

	return {
		artist: artistData,
	};
}
