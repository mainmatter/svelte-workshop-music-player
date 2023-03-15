<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import { albums } from '@store';
</script>

<Breadcrumb title="Albums" href="/library/albums" />

<div class="page-content">
	<h1 class="page-title">Albums</h1>

	<div class="albums">
		{#each $albums as album}
			<div class="album">
				<img src={album.coverUrl} class="cover" alt={album.title} />

				<h4 class="text-center">
					{album.title}
				</h4>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.albums {
		@apply grid grid-cols-4 gap-8;
	}

	.cover {
		@apply rounded block mb-2 w-full aspect-square bg-slate-400 shadow-sm;
	}
</style>
