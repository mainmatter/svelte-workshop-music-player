<script>
	import ArtistsNav from './artists-nav.svelte';
	export let data;
</script>

<div class="flex gap-3">
	<div>
		<ArtistsNav artists={data.artists} />
	</div>

	<div class="w-full">
		<slot />
	</div>
</div>
