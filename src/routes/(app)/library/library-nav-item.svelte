<script>
	import { page } from '$app/stores';
	export let href;
	export let title;

	let className;
	export { className as class };
</script>

<li>
	<a {href} class="link {className}" class:active={$page.url.pathname.includes(href)}>{title}</a>
</li>

<style lang="postcss">
	.link {
		@apply m-2 px-4 py-2 text-lg block rounded-md transition-colors;
	}

	.link:hover {
		@apply bg-zinc-700;
	}

	.active, .active:hover	{
		@apply bg-zinc-800;
	}
</style>
