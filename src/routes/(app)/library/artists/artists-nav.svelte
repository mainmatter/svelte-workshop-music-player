<script>
	import { artists } from '@store';
	import LibraryNavItem from '../library-nav-item.svelte';
</script>

<ul class="sticky top-14">
	{#each $artists as artist}
		<LibraryNavItem href="/library/artists/{artist.slug}" title={artist.name} />
	{/each}
</ul>
