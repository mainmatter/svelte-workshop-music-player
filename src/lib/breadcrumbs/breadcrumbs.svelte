<script>
	import Chevron from './chevron.svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { capitalize } from 'lodash-es';

	let pages = derived(page, ($page) => {
		let base = '/';
		return $page.url.pathname
			.split('/')
			.filter(Boolean)
			.map((path) => {
				const pathName = base + path;
				base = pathName + '/';
				return {
					title: path
						.split('-')
						.map((word) => capitalize(word))
						.join(' '),
					href: pathName
				};
			});
	});

	$: currentTitle = $pages?.at(-1)?.title || '';
</script>

<svelte:head>
	<title>{currentTitle}</title>
</svelte:head>

<nav class="flex" aria-label="Breadcrumbs">
	<ol class="list">
		{#if $pages}
			{#each $pages as { title, href }, index}
				<li class="list-item">
					{#if index > 0}
						<Chevron componentClass="w-6 h-6 text-gray-400" />
					{/if}

					{#if $page.url.pathname === href}
						<span class="current">{title}</span>
					{:else}
						<a {href} class="link">{title}</a>
					{/if}
				</li>
			{/each}
		{/if}
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
