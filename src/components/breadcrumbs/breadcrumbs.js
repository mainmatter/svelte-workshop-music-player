import { derived, writable } from 'svelte/store';

export const pages = writable([]);
export const currentTitle = derived(pages, ($pages) => $pages?.at(-1)?.title || '');

export function pushPage({ title, href }) {
	pages.update(($pages) => {
		let pageExists = $pages?.some((page) => page.href === href);
		if (!pageExists) {
			return [
				...$pages,
				{
					title,
					href
				}
			];
		}
	});
}

export function removePage(href) {
	pages.update((arr) => arr.filter((item) => item.href !== href));
}
