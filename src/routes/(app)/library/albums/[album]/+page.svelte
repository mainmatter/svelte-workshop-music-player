<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import SongTable from '@components/player/song-table.svelte';
	export let data;
	let { album } = data;
</script>

<Breadcrumb title={album.title} href="/library/albums/{album.slug}" />

<img src={album.coverUrl} class="cover" alt={album.title} />

<h4 class="text-center">{album.artist}</h4>
<h4 class="text-center">
	{album.title}
</h4>

<SongTable songs={album.songs} />
