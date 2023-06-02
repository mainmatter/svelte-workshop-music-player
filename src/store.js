import { writable, readable } from 'svelte/store';

export const nowPlaying = writable(null);
export const songs = writable([]);

const formatDate = (date) =>
	`${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

const pad = (date) => date.toString().padStart(2, '0');

export const time = readable(null, (set) => {
	set(formatDate(new Date()));

	const interval = setInterval(() => {
		set(formatDate(new Date()));
	}, 1000);

	return () => clearInterval(interval);
});
