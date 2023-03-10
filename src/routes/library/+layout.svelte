<script>
	import LibraryNav from './library-nav.svelte';
	import { songs } from '@store';

	export let data;
	$: songs.set(data.songs);
</script>

<div class="grid">
	<div class="w-56 fixed bg-slate-300 top-14 bottom-0">
		<LibraryNav />
	</div>

	<main class="pl-56 h-full">
		<slot />
	</main>
</div>
