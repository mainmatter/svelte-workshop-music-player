import { describe, afterEach, expect, it, vi, beforeEach } from 'vitest';
import { time } from './store';

describe('store', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date(2000, 1, 1, 0, 0, 0));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('updates when the clock ticks', () => {
		const values = [];

		time.subscribe((value) => {
			values.push(value);
		});

		expect(values, 'initial state').toMatchObject(['']);

		vi.advanceTimersByTime(2000);

		expect(values, 'state after 2 seconds').toMatchObject(['', '00:00:01', '00:00:02']);
	});
});
