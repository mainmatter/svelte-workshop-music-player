import { describe, expect, it } from "vitest";
import { formatDuration } from "./format-duration";

describe('formatDuration', () => {
  it('it formats a duration in milliseconds', () => {
    expect(formatDuration(3000)).toBe('00:30');
  });
})