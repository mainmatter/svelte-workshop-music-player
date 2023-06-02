<script>
	import SongTable from '$lib/player/song-table.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="page-content">
	<SongTable songs={data.songs} showCover={true} />
</div>
