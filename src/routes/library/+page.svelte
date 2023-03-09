<script>
	import { songs } from '@store';
</script>

<div class="list-group">
	{#each $songs as song}
		<div class="list-group-item">
			<div class="row">
				<div class="col">
					<h4 class="h4">
						{song.title}
					</h4>
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<img src={song.coverUrl} width="100%" class="rounded" alt="Album cover of {song.title}" />
				</div>
			</div>
		</div>
	{/each}
</div>
