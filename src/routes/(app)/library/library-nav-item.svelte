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
		@apply px-4 py-2 text-lg block;
	}

	.active {
		@apply text-blue-500 font-semibold;
	}
</style>
