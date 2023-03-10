<script>
	import { page } from '$app/stores';
	export let href;
	export let title;
</script>

<li>
	<a {href} class="link" class:active={$page.url.pathname === href}>{title}</a>
</li>

<style lang="postcss">
	.link {
		@apply px-4 py-2 text-lg block;
	}

	.active {
		@apply text-blue-500 font-semibold;
	}
</style>
