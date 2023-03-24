<script>
	import { albums } from '@store';
	import Artwork from '@components/library/artwork.svelte';
</script>

<div class="page-content">
	<h1 class="page-title">Albums</h1>

	<div class="albums">
		{#each $albums as album}
			<a href="/library/albums/{album.slug}" class="album">
				<Artwork src={album.coverUrl} alt={album.title} />

				<h4 class="text-center">
					{album.title}
				</h4>
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	.albums {
		@apply grid grid-cols-4 gap-8;
	}
</style>
