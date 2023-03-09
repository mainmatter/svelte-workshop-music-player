<script>
	import NowPlaying from './now-playing.svelte';
	import LibraryNavItem from './library-nav-item.svelte';
</script>

<nav>
	<ul class="nav">
		<LibraryNavItem href="/library/albums" title="Albums" />
		<LibraryNavItem href="/library/artists" title="Artists" />
		<LibraryNavItem href="/library/songs" title="Songs" />
	</ul>
</nav>

<NowPlaying />

<style lang="postcss">
	/* .nav a {
		@apply text-gray-500 hover:text-gray-900;
	} */
</style>
