<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import { songs } from '@store';
</script>

<Breadcrumb title="About" href="/about" />

<div class="page-content">
	<h1 class="page-title">Songs</h1>

	<div class="songs">
		{#each $songs as song}
			<div class="song">
				<img src={song.coverUrl} class="cover" alt="Album cover of {song.title}" />

				<h4 class="text-center">
					{song.title}
				</h4>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.songs {
		@apply flex flex-col divide-y;
	}

	.song {
		@apply flex items-center gap-4 py-2;
	}

	.cover {
		@apply rounded block w-10 aspect-square;
	}
</style>
