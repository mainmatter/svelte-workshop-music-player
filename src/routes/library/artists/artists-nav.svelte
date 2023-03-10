<script>
	import { artists } from '@store';
</script>

<div class="artists">
	{#each $artists as name}
		<div class="artist">
			<h4 class="text-center">
				{name}
			</h4>
		</div>
	{/each}
</div>

<style lang="postcss">
	.artists {
		@apply flex flex-col divide-y;
		@apply border-t border-t-slate-400/30 border-b-slate-400/30;
	}

	.artist {
		@apply flex items-center gap-4 py-2;
	}
</style>
