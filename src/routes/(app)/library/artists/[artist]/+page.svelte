<script>
	import SongTable from '$lib/player/song-table.svelte';
	export let data;
</script>

<div class="page-content">
	<div class="albums space-y-12">
		{#each data.artist.albums as album}
			<article>
				<div class="flex gap-8">
					<img src={album.coverUrl} class="cover rounded-lg overflow-hidden" alt={album.name} />
					<div>
						<h5 class="page-title">
							{album.name}
						</h5>
					</div>
				</div>

				<SongTable songs={album.songs} columns={['title', 'album', 'duration']} />
			</article>
		{/each}
	</div>
</div>

<style lang="postcss">
	.cover {
		@apply rounded block mb-2 w-80 aspect-square bg-slate-400 shadow-sm;
	}
</style>
