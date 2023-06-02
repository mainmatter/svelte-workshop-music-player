<script>
	import LibraryNavItem from './library-nav-item.svelte';
</script>

<nav
	class="bg-zinc-600 text-white w-64 shrink-0 rounded-lg flex flex-col justify-between sticky top-[3.75rem]"
>
	<ul>
		<LibraryNavItem href="/library/songs" title="Songs" />
		<LibraryNavItem href="/library/albums" title="Albums" />
		<LibraryNavItem href="/library/artists" title="Artists" />
	</ul>
</nav>
