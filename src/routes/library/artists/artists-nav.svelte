<script>
	import { artists } from '@store';
</script>

<div>
	{#each $artists as artist}
		<h1>{artist}</h1>
	{/each}
</div>
