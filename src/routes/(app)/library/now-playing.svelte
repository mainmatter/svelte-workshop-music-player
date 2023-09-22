<script>
	import { nowPlaying } from '$store';
	import { Widget } from './now-playing';

	$: soundcloudTrackId = $nowPlaying?.song?.soundcloudTrackId;

	function soundcloud(node, [trackId]) {
		const widget = new Widget(node);

		widget.load(trackId, {
			auto_play: true,
		});

		widget.addEventListener('playStateChange', ({ target: { isPlaying } }) => {
			if ($nowPlaying.isPlaying !== isPlaying) {
				$nowPlaying.isPlaying = isPlaying;
			}
		});

		return {
			update([newId, isPlaying]) {
				if (newId !== trackId) {
					widget.load(newId, {
						auto_play: true,
					});
					trackId = newId;
					return;
				}
				if (isPlaying !== widget.isPlaying) {
					widget[widget.isPlaying ? 'pause' : 'play']();
					return;
				}
			},

			destroy() {
				nowPlaying.set(null);
			},
		};
	}
</script>

<div class="fixed bottom-0 w-64">
	{#if $nowPlaying}
		<img
			src={$nowPlaying.song?.coverUrl}
			alt={$nowPlaying.song?.artist}
			data-testid="nowplaying-image"
		/>
		<div use:soundcloud={[soundcloudTrackId, $nowPlaying.isPlaying]} />
	{/if}
</div>
