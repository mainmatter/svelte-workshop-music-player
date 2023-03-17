<script>
	import { nowPlaying } from '@store';
	import { formatDuration } from '@utils/format-duration';

	export let songs;
	export let showCover = false;
</script>

<table>
	<thead>
		<tr>
			{#if showCover}
				<td />
			{/if}
			<td />
			<td>Name</td>
			<td>Artist</td>
			<td>Album</td>
			<td>Duration</td>
		</tr>
	</thead>
	<tbody>
		{#each songs as song}
			<tr>
				<td><button on:click={() => nowPlaying.set(song)}>Play</button></td>
				{#if showCover}
					<td><img src={song.coverUrl} class="cover" alt="Album cover of {song.title}" /></td>
				{/if}
				<td>{song.title}</td>
				<td>{song.artist}</td>
				<td>{song.album}</td>
				<td>{formatDuration(song.duration)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	.cover {
		@apply rounded block w-10 aspect-square;
	}
</style>
