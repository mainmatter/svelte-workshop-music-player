import { describe, expect, it } from 'vitest';
import { formatDuration } from './format-duration';

describe('formatDuration', () => {
	it('it formats a duration in milliseconds', () => {
		expect(formatDuration(3000)).toEqual('00:30');
		expect(formatDuration(13300)).toEqual('00:13');
		expect(formatDuration(73300)).toEqual('01:13');
	});
});
