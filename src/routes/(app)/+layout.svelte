<script>
	import Layout from '@components/global/layout.svelte';
	import LibraryNav from './library/library-nav.svelte';
	import { songs } from '@store';
	import Breadcrumbs from '@components/breadcrumbs/breadcrumbs.svelte';
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';

	// this actually gives us access to the songs in all child routes of this layout (all library routes)
	export let data;
	$: songs.set(data.songs);
</script>

<Layout>
	<svelte:fragment slot="nav">
		<Breadcrumbs />
		<Breadcrumb title="Library" href="/library" />
	</svelte:fragment>

	<div slot="user">
		<a href="/">Logout</a>
	</div>

	<div class="layout" slot="content">
		<div class="sidebar">
			<LibraryNav />
		</div>

		<div class="content">
			<slot />
		</div>
	</div>
</Layout>

<style lang="postcss">
	.layout {
		@apply grid min-h-full relative;

		grid-template:
			"nav main" 1fr / theme('width.72') 1fr
	}

	.sidebar {
		@apply bg-zinc-600 text-white;

		grid-area: nav;
	}

	.content {
		grid-area: main;
	}
</style>