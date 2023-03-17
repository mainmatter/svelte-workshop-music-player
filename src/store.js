import { kebabCase } from 'lodash';
import { writable, derived } from 'svelte/store';

export const nowPlaying = writable(null);
export const songs = writable(null);

export const artists = derived(songs, ($songs) => {
	return (
		$songs?.reduce((list, { artist }) => {
			const slug = kebabCase(artist);
			if (!list.find((existing) => existing.slug === slug)) {
				list.push({ name: artist, slug });
			}
			return list;
		}, []) ?? []
	);
});

export const albums = derived(songs, ($songs) => {
	return (
		$songs?.reduce((list, song) => {
			const slug = kebabCase(song.album);
			if (!list.find((existing) => existing.slug === slug)) {
				list.push({ ...song, slug });
			}
			return list;
		}, []) ?? []
	);
});
