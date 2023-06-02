<script>
	import { nowPlaying } from '@store';
	import { formatDuration } from '@utils/format-duration';
	import { kebabCase } from 'lodash-es';
	import play from '$lib/assets/play.svg';
	import pause from '$lib/assets/pause.svg';

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
		duration: 'Duration'
	};

	const pauseSong = () =>
		nowPlaying.update((nowPlaying) => {
			return { ...nowPlaying, isPlaying: false };
		});
</script>

<table class="table">
	<thead>
		<tr>
			<th>&nbsp;</th>
			{#each columns as column}
				<th data-testid="song-table-th-{column}">{columnTitles[column]}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each songs as song}
			<tr data-testid="song-table-row">
				<td class="play" data-testid="song-table-cell-controls">
					{#if $nowPlaying?.song?.title === song.title && $nowPlaying.isPlaying}
						<button
							class="pause-button"
							type="button"
							on:click={pauseSong}
							alt="Pause {song.title} by {song.artist}"
							data-testid="song-table-pause-button"
						>
							<img src={pause} alt="Pause" width="12" height="16" />
						</button>
					{:else}
						<button
							class="play-button"
							data-current={$nowPlaying?.song?.title === song.title}
							type="button"
							on:click={() => ($nowPlaying = { song, isPlaying: true })}
							alt="Play {song.title} by {song.artist}"
							data-testid="song-table-play-button"
						>
							<img src={play} alt="Play" width="12" height="16" />
						</button>
					{/if}
				</td>
				{#each columns as column}
					<td data-testid="song-table-cell-{column}">
						{#if column === 'cover'}
							<img src={song.coverUrl} class="cover" alt="Album cover of {song.title}" />
						{:else if column === 'duration'}
							{formatDuration(song.duration)}
						{:else if column === 'album'}
							<a href="/library/albums/{kebabCase(song.album)}">{song.album}</a>
						{:else if column === 'artist'}
							<a href="/library/artists/{kebabCase(song.artist)}">{song.artist}</a>
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

	.pause-button,
	.play-button {
		@apply mr-2 py-3 pl-6 pr-3 flex items-center justify-center h-[1.25rem];
	}

	.table tr .play-button:not([data-current='true']) {
		@apply opacity-10;
	}

	.table tr:focus .play-button,
	.table tr:hover .play-button {
		@apply opacity-100;
	}

	.table a {
		text-decoration: underline;
	}
</style>
