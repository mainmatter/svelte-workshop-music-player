import { readable } from 'svelte/store';

const pad = (value) => value.toString().padStart(2, '0');
const formatDate = (date) =>
	`${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

export const now = readable(undefined, (set) => {});
