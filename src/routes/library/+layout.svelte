<script>
	import LibraryNav from './library-nav.svelte';
	import { songs } from '@store';

	export let data;
	$: songs.set(data.songs);
</script>

<div class="relative">
	<div class="fixed w-1/4 overflow-auto">
		<LibraryNav />
	</div>
	<main class="pl-[25%]">
		<slot />
	</main>
</div>
