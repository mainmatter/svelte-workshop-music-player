export function formatDuration(duration) {
	let durationInSeconds = Math.round(duration / 1000);
	let minutes = Math.floor(durationInSeconds / 60);
	let seconds = durationInSeconds % 60;

	return `${String(minutes).padStart(2, '0')}:${String(seconds).padEnd(2, '0')}`;
}
