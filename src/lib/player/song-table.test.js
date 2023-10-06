import '@testing-library/jest-dom';
import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';

import { nowPlaying } from '$store';
import { get } from 'svelte/store';

import SongTable from './song-table.svelte';

let songs = [
	{
		id: '9',
		title: 'Love Me Tender',
		soundcloudTrackId: 1307613757,
		duration: 167000,
		artist: 'Elvis Presley',
		album: 'Just Because',
		coverUrl: 'https://i1.sndcdn.com/artworks-9c0e3b24-84c1-4185-978d-b3733e09ea9d-0-t500x500.jpg',
	},
	{
		id: '10',
		title: 'Play The Game',
		soundcloudTrackId: 252514890,
		duration: 212000,
		artist: 'Queen',
		album: 'The Game',
		coverUrl: 'https://i1.sndcdn.com/artworks-e40dd921-38e2-4119-99c3-ead502248fee-0-t500x500.jpg',
	},
];

describe('<SongTable>', () => {
	it('renders an empty table', () => {
		render(SongTable, {
			songs: [],
		});

		let columns = screen.queryAllByTestId(/song-table-th-.+/);
		let rows = screen.queryAllByTestId('song-table-row');

		expect(columns, 'All 4 column headings are rendered').toHaveLength(4);
		expect(rows, 'There are no rows to render').toHaveLength(0);
	});

	it('renders a list of songs', () => {
		render(SongTable, { songs });

		let rows = screen.queryAllByTestId('song-table-row');

		expect(rows, '2 rows are rendered').toHaveLength(2);
	});

	it('each row has a play button', async () => {
		render(SongTable, { songs });

		let playButtons = screen.getAllByTestId('song-table-play-button');

		expect(playButtons).toHaveLength(2);
	});

	it('pressing the play & pause buttons update the store', async () => {
		render(SongTable, { songs });

		expect(get(nowPlaying)).toBe(null);
		expect(screen.queryAllByTestId('song-table-pause-button')).toMatchObject([]);

		let [playButton] = screen.getAllByTestId('song-table-play-button');

		await fireEvent.click(playButton);

		expect(screen.getAllByTestId('song-table-pause-button')).toHaveLength(1);
		expect(get(nowPlaying)).toMatchObject({
			isPlaying: true,
			song: {
				id: '9',
				title: 'Love Me Tender',
				soundcloudTrackId: 1307613757,
				duration: 167000,
				artist: 'Elvis Presley',
				album: 'Just Because',
				coverUrl:
					'https://i1.sndcdn.com/artworks-9c0e3b24-84c1-4185-978d-b3733e09ea9d-0-t500x500.jpg',
			},
		});

		await fireEvent.click(screen.getByTestId('song-table-pause-button'));

		expect(screen.getAllByTestId('song-table-play-button')).toHaveLength(2);
		expect(get(nowPlaying)).toMatchObject({
			isPlaying: false,
			song: {
				id: '9',
				title: 'Love Me Tender',
				soundcloudTrackId: 1307613757,
				duration: 167000,
				artist: 'Elvis Presley',
				album: 'Just Because',
				coverUrl:
					'https://i1.sndcdn.com/artworks-9c0e3b24-84c1-4185-978d-b3733e09ea9d-0-t500x500.jpg',
			},
		});
	});
});
