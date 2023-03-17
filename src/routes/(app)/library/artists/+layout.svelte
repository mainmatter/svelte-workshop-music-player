<script>
	import Breadcrumb from '@components/breadcrumbs/breadcrumb.svelte';
	import ArtistsNav from './artists-nav.svelte';
</script>

<Breadcrumb title="Artists" href="/library/artists" />

<div class="grid">
	<div class="w-56 fixed bg-slate-200 bottom-0">
		<ArtistsNav />
	</div>

	<main class="pl-56 h-full">
		<slot />
	</main>
</div>
