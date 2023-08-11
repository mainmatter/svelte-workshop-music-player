import '@testing-library/jest-dom';
import { expect, describe, beforeEach, it } from 'vitest';
import { act, render, screen } from '@testing-library/svelte';

import { nowPlaying } from '@store';
import NowPlaying from './now-playing.svelte';

describe('<NowPlaying>', () => {
	beforeEach(() => {
		nowPlaying.set(null);
	});

	it('renders the empty state', () => {
		render(NowPlaying);

		let iframe = screen.queryByTestId('nowplaying-iframe');
		let image = screen.queryByTestId('nowplaying-image');

		expect(iframe, 'There is no iframe to find').toBeNull();
		expect(image, 'There is no image to find').toBeNull();
	});

	it('renders the player when $nowPlaying has value', () => {
		nowPlaying.set({
			song: {
				id: '11',
				title: 'Another One Bites The Dust',
				soundcloudTrackId: 252515196,
				duration: 214000,
				artist: 'Queen',
				album: 'The Game',
				coverUrl:
					'https://i1.sndcdn.com/artworks-e40dd921-38e2-4119-99c3-ead502248fee-0-t500x500.jpg'
			},
			isPlaying: true
		});

		render(NowPlaying);

		let iframe = screen.queryByTestId('nowplaying-iframe');
		let image = screen.queryByTestId('nowplaying-image');

		expect(iframe).toBeInTheDocument();
		expect(image).toBeInTheDocument();

		expect(image).toHaveAttribute('alt', 'Queen');
	});

	it('is reactive', async () => {
		render(NowPlaying);

		let image = screen.queryByTestId('nowplaying-image');

		expect(image).toBeNull();

		await act(() => {
			nowPlaying.set({
				song: {
					title: 'Another One Bites The Dust',
					soundcloudTrackId: 252515196,
					artist: 'Queen',
					coverUrl:
						'https://i1.sndcdn.com/artworks-e40dd921-38e2-4119-99c3-ead502248fee-0-t500x500.jpg'
				},
				isPlaying: true
			});
		});

		image = screen.queryByTestId('nowplaying-image');

		expect(image).toHaveAttribute('alt', 'Queen');

		await act(() => {
			nowPlaying.set({
				song: {
					title: 'Love Me Tender',
					soundcloudTrackId: 1307613757,
					artist: 'Elvis Presley',
					coverUrl:
						'https://i1.sndcdn.com/artworks-9c0e3b24-84c1-4185-978d-b3733e09ea9d-0-t500x500.jpg'
				},
				isPlaying: true
			});
		});

		image = screen.queryByTestId('nowplaying-image');

		expect(image).toHaveAttribute('alt', 'Elvis Presley');
	});
});
