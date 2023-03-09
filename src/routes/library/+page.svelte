<script>
	import { formatDuration } from '@utils/format-duration';

	export let data;
	export let { songs } = data;
</script>

<h1>Library</h1>
<div class="list-group">
	{#each songs as album}
		<div class="list-group-item">
			<div class="row">
				<div class="col">
					<h4 class="h4">
						{album.title}
					</h4>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<img
						src={album.coverUrl}
						width="100%"
						class="rounded"
						alt="Album cover of {album.title}"
					/>
				</div>
			</div>
		</div>
	{/each}
</div>
