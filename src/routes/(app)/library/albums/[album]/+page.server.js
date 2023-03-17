import { get } from 'svelte/store';
import { songs as songStore } from '@store';
import { kebabCase } from 'lodash';

export function load({ params }) {
	const albumSlug = params.album;
	const songs = get(songStore).filter((song) => kebabCase(song.album) === albumSlug);
	const album = {
		songs,
		artist: songs[0].artist,
		title: songs[0].album,
		coverUrl: songs[0].coverUrl,
		slug: albumSlug
	};
	return { album };
}
