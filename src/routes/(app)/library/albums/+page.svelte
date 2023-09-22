<script>
	import Artwork from '$lib/library/artwork.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="page-content">
	<div class="albums" data-testid="albums">
		{#each data.albums as album}
			<div role="listitem">
				<a href="/library/albums/{album.slug}" class="album">
					<Artwork src={album.coverUrl} alt={album.name} />

					<h4 class="text-center">
						{album.name}
					</h4>
				</a>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.albums {
		@apply grid grid-cols-4 gap-8;
	}
</style>
