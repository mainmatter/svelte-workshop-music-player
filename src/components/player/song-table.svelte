<script>
	import { nowPlaying } from '@store';
	import { formatDuration } from '@utils/format-duration';
	import play from '@lib/assets/play.svg';

	export let songs;
	export let showCover = false;
	export let columns = ['cover', 'title', 'artist', 'album', 'duration'];

	if (!showCover) {
		columns = columns.filter((column) => column !== 'cover');
	}

	const columnTitles = {
		cover: '',
		title: 'Name',
		artist: 'Artist',
		album: 'Album',
		duration: 'Duration',
	};
</script>

<table class="table">
	<thead>
		<tr>
			<th>&nbsp;</th>
			{#each columns as column}
				<th>{columnTitles[column]}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each songs as song}
			<tr>
				<td class="play">
					<button class="play-button" type="button" on:click={() => nowPlaying.set(song)}>
						<img src={play} alt="Play" width="12" height="16" />
					</button>
				</td>
				{#each columns as column}
					<td>
						{#if column === 'cover'}
							<img src={song.coverUrl} class="cover" alt="Album cover of {song.title}" />
						{:else if column === 'duration'}
							{formatDuration(song.duration)}
						{:else}
							{song[column]}
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	.cover {
		@apply rounded block w-10 aspect-square;
	}

	.table {
		@apply w-full table-auto align-middle;
	}

	.table thead th {
		@apply text-left text-xs font-bold text-zinc-400 uppercase tracking-wider;
	}

	.table th {
		@apply text-left px-3;
	}

	.table tbody td {
		@apply py-1 px-3;
	}

	.table tbody tr:nth-child(odd) {
		@apply bg-zinc-100;
	}

	.table td.play {
		@apply px-0;
	}

	.table td.play + td {
		@apply pl-0;
	}

	.table td:last-child {
		@apply pr-6;
	}

	.play-button {
		@apply mr-2 py-3 pl-6 pr-3 flex items-center justify-center h-full;
	}

	.table tr .play-button {
		@apply opacity-10;
	}

	.table tr:focus .play-button,
	.table tr:hover .play-button {
		@apply opacity-100;
	}
</style>
