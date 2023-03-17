<script>
	import LibraryNav from './library/library-nav.svelte';
	import { songs } from '@store';
	import Breadcrumbs from '@components/breadcrumbs/breadcrumbs.svelte';
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';

	// this actually gives us access to the songs in all child routes of this layout (all library routes)
	export let data;
	$: songs.set(data.songs);
</script>

<div class="h-10 px-4 flex items-center bg-white/90 backdrop-blur">
	<Breadcrumbs />
	<Breadcrumb title="Library" href="/library" />
</div>

<div class="grid">
	<div class="w-56 fixed bg-slate-300 top-24 bottom-0">
		<LibraryNav />
	</div>

	<main class="pl-56 h-full">
		<slot />
	</main>
</div>
