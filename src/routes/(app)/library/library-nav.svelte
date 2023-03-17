<script>
	import NowPlaying from './now-playing.svelte';
	import LibraryNavItem from './library-nav-item.svelte';
	import { nowPlaying } from '@store';
	import { onMount } from 'svelte';
	onMount(() => {
		console.log(
			`<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403378770&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/whitneyhouston" title="WHITNEY HOUSTON" target="_blank" style="color: #cccccc; text-decoration: none;">WHITNEY HOUSTON</a> · <a href="https://soundcloud.com/whitneyhouston/whitney-houston-p2j-i-wanna" title="Whitney Houston &amp; P2J - I Wanna Dance With Somebody (Who Loves Me)" target="_blank" style="color: #cccccc; text-decoration: none;">Whitney Houston &amp; P2J - I Wanna Dance With Somebody (Who Loves Me)</a></div>`
				.split('tracks/')[1]
				.split('&')[0]
		);
	});
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
