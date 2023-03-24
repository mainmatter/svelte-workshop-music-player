<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import ArtistsNav from './artists-nav.svelte';
</script>

<Breadcrumb title="Artists" href="/library/artists" />


<div class="layout">
	<div class="sidebar">
		<ArtistsNav />
	</div>

	<div class="content">
		<slot />
	</div>
</div>

<style lang="postcss">
	.layout {
		@apply grid min-h-full;

		grid-template:
			"nav main" 1fr / theme('width.72') 1fr
	}

	.sidebar {
		@apply bg-zinc-700 text-white;

		grid-area: nav;
	}

	.content {
		grid-area: main;
	}
</style>