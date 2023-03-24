import { albums as albumStore, songs } from '@store';
import { get } from 'svelte/store';
import { kebabCase } from 'lodash';

export function load({ params: { artist } }) {
	const allAlbums = get(albumStore);
	const allSongs = get(songs);
	const artistAlbums = allAlbums.filter((album) => kebabCase(album?.artist) === artist);

	artistAlbums.map((album) => {
		const songs = allSongs.filter((song) => kebabCase(song.album) === album.slug);
		album.songs = songs;
		return album;
	});

	return {
		albums: artistAlbums,
		artist: { name: artistAlbums[0]?.artist, slug: artist }
	};
}
