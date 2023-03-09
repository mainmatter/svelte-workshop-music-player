<script>
	import { albums } from '@store';
</script>

<h1>Albums</h1>

<div>
	{#each $albums as album}
		<h1>{album.album}</h1>
		<img src={album.coverUrl} alt={album.album} />
	{/each}
</div>
