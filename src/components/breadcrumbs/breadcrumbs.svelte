<script>
	import { pages, currentTitle } from './breadcrumbs';
	import Chevron from './chevron.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$currentTitle}</title>
</svelte:head>

<nav class="flex" aria-label="Breadcrumb">
	<ol class="list">
		{#each $pages as { title, href }, index}
			<li class="list-item">
				{#if index > 0}
					<Chevron class="w-6 h-6 text-gray-400" />
				{/if}

				{#if $page.url.pathname === href}
					<span class="current">{title}</span>
				{:else}
					<a {href} class="link">{title}</a>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style lang="postcss">
	.list {
		@apply inline-flex items-center space-x-3;
	}

	.list-item {
		@apply inline-flex items-center gap-2;
	}

	.link {
		@apply inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-600;
	}

	.current {
		@apply text-base font-medium text-gray-500;
	}
</style>
