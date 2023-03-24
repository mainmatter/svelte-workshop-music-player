<script>
	import { nowPlaying } from '@store';
	import { onMount } from 'svelte';

	let widget;
	let isPaused = false;

	$: trackId = $nowPlaying?.soundcloudTrackId;
	$: src = `https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F${trackId}&show_artwork=false`;

	onMount(() => {
		var widgetIframe = document.getElementById('sc-widget');
		widget = SC.Widget(widgetIframe);

		// in case we decide to implement a queue
		// widget.bind(SC.Widget.Events.READY, function () {
		// 	widget.bind(SC.Widget.Events.FINISH, playNext);
		// });
	});

	const play = () => {
		isPaused = false;
		widget.play();
	};

	const pause = () => {
		isPaused = true;
		widget.pause();
	};
</script>

<div class="fixed bottom-0 w-72">
	<img src={$nowPlaying.coverUrl} alt={$nowPlaying.artist} />
	<iframe
		title="now-playing {$nowPlaying.artist} - {$nowPlaying.title} "
		id="sc-widget"
		width="100%"
		height="100"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		{src}
	/>
	{#if isPaused}
		<button on:click={play}>Play</button>
	{:else}
		<button on:click={pause}>Pause</button>
	{/if}
</div>
