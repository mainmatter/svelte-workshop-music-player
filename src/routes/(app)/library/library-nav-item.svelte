<script>
	import { page } from '$app/stores';
	export let href;
	export let title;
	export let componentClass = null;
</script>

<li>
	<a {href} class="link {componentClass}" class:active={$page.url.pathname.includes(href)}
		>{title}</a
	>
</li>

<style lang="postcss">
	.link {
		@apply m-2 px-4 py-2 text-lg block rounded-md transition-colors;
	}

	.link:hover {
		@apply bg-zinc-700 text-white;
	}

	.active,
	.active:hover {
		@apply bg-zinc-800 text-white;
	}
</style>
