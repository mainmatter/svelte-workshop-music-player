<script>
	import LibraryNavItem from '../library-nav-item.svelte';
	export let artists;
</script>

<nav
	class="bg-zinc-600 text-white w-64 shrink-0 rounded-lg py-0 overflow-hidden sticky top-[3.75rem]"
>
	<ul>
		{#each artists as artist}
			<LibraryNavItem href="/library/artists/{artist.slug}" title={artist.name} />
		{/each}
	</ul>
</nav>
