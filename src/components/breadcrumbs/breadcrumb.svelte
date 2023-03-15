<script>
	import { onDestroy } from 'svelte';
	import { pushPage, removePage } from './breadcrumbs';

	export let title;
	export let href;

	pushPage({
		title,
		href
	});

	onDestroy(() => {
		removePage(href);
	});
</script>
