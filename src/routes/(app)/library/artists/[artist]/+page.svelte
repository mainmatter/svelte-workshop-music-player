<script>
	import SongTable from '$lib/player/song-table.svelte';
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	const formatTime = (timeStamp) => {
		let time = new Date(timeStamp);
		const day = time.getDate(),
			month = time.getMonth(),
			year = time.getFullYear(),
			hours = time.getHours(),
			minutes = time.getMinutes();
		return `${hours}:${minutes} on ${day}/${month}/${year}`;
	};
</script>

<div class="page-content">
	<div class="albums space-y-12">
		{#each data.artist.albums as album}
			<article>
				<div class="flex gap-8">
					<img src={album.coverUrl} class="cover rounded-lg overflow-hidden" alt={album.name} />
					<div>
						<h5 class="page-title">
							{album.name}
						</h5>
					</div>
				</div>

				<SongTable songs={album.songs} columns={['title', 'album', 'duration']} />
			</article>
		{/each}
	</div>
</div>

<section class="flex flex-col gap-3 mt-12">
	{#each data.comments ?? [] as comment}
		<div class="px-8 py-3 rounded-lg bg-white">
			<div class="flex text-zinc-500 mb-3 text-sm">
				<h3>{comment.user} said</h3>
				<p class="ml-auto text-right">{formatTime(comment.timeStamp)}</p>
			</div>
			<p>
				{comment.comment}
			</p>
		</div>
	{/each}

	{#if form?.success}
		<div
			class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 rounded-lg"
			role="alert"
		>
			<p>Comment successfully added.</p>
		</div>
	{:else if form?.failure}
		<p>{form.error.message}</p>
	{/if}

	<form class="px-8 py-5 rounded-lg bg-zinc-100" action="?/addComment" method="POST" use:enhance>
		<input type="hidden" name="artistSlug" value={data.artist.slug} />
		<p>
			<label class="block" for="comment">Comment</label>
			<textarea
				name="comment"
				id="comment"
				cols="30"
				rows="3"
				class="p-2 border-2 border-zinc-300 rounded-md w-full min-h-[5rem]"
			/>
		</p>
		<p>
			<button type="submit" class="p-2 px-4 bg-white rounded-lg shadow">Post comment</button>
		</p>
	</form>
</section>

<style lang="postcss">
	.cover {
		@apply rounded block mb-2 w-80 aspect-square bg-slate-400 shadow-sm;
	}
</style>
