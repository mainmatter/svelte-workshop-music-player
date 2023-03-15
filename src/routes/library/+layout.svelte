<script>
	import LibraryNav from './library-nav.svelte';
	import { songs } from '@store';
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';

	export let data;
	$: songs.set(data.songs);
</script>

<Breadcrumb title="Library" href="/library" />

<div class="grid">
	<div class="w-56 fixed bg-slate-300 top-24 bottom-0">
		<LibraryNav />
	</div>

	<main class="pl-56 h-full">
		<slot />
	</main>
</div>
