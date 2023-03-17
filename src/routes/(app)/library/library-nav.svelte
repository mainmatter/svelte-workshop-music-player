<script>
	import NowPlaying from './now-playing.svelte';
	import LibraryNavItem from './library-nav-item.svelte';
	import { nowPlaying } from '@store';
</script>

<div class="flex flex-col justify-between h-full">
	<nav>
		<ul class="nav divide-y divide-slate-400/30">
			<LibraryNavItem href="/library/albums" title="Albums" />
			<LibraryNavItem href="/library/artists" title="Artists" />
			<LibraryNavItem href="/library/songs" title="Songs" />
		</ul>
	</nav>

	{#if $nowPlaying}
		<NowPlaying />
	{/if}
</div>
