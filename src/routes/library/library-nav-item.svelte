<script>
	import NowPlaying from './now-playing.svelte';
	import { page } from '$app/stores';
	export let href;
	export let title;
</script>

<li>
	<a {href} class:active={$page.url.pathname === href}>{title}</a>
</li>

<style lang="postcss">
	.active {
		@apply text-blue-500;
	}
</style>
