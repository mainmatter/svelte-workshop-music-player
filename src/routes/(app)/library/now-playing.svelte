<script>
	import { nowPlaying } from '@store';
	import { onMount } from 'svelte';

	onMount(() => {
		// const audioContext = new AudioContext($nowPlaying.)
	});
</script>

<div>
	{#if $nowPlaying}
		<img src={$nowPlaying.coverUrl} alt={$nowPlaying.artist} />
	{/if}
</div>
