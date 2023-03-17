<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	export let data;
</script>

<Breadcrumb title={data.artist.name} href="/library/artists/{data.artist.slug}" />

<div class="page-content">
	<h1 class="page-title">{data.artist.name}</h1>

	<div class="albums">
		{#each data.albums as album}
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
	.cover {
		@apply rounded block mb-2 w-80 aspect-square bg-slate-400 shadow-sm;
	}
</style>
