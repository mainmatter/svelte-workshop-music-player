<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import SongTable from '@components/player/song-table.svelte';
	import { songs } from '@store';
</script>

<Breadcrumb title="Songs" href="/library/songs" />

<div class="page-content">
	<h1 class="page-title">Songs</h1>

	<SongTable songs={$songs} showCover={true} />
</div>
